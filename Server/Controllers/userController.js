import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import PasswordValidator from "password-validator";
import generator from "generate-password";
import User from "../Models/user.model.js";
import { generateToken, isValidMongodbId, hasSpecialChar } from "../Utils/helper.js";

var schema = new PasswordValidator();
schema.is().min(8).has().uppercase().has().lowercase().has().digits(1);
dotenv.config();



export const signup = async (req, res) => {
  const { email, password, first_name, last_name, mobile, role } = req.body;
  try {
    let oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    oldUser = await User.findOne({ mobile });
    if (oldUser) {
      return res.status(400).json({ message: "Mobile number already exists" });
    }

    if (!schema.validate(password) || !hasSpecialChar(password)) {
      return res.status(400).json({
        message:
          "password should contain 8 characters, min one special character, one upper case character, one lower case character and one number",
      });
    }
    if (mobile.length == 10) {
      return res
        .status(400)
        .json({ message: "Mobile number should be 10 number" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      uid: generator.generate({
        length: 13,
        numbers: true,
      }),
      first_name,
      last_name,
      email,
      mobile,
      password: hashedPassword,
      role
    });
    res.status(201).json({
      message: "Account successfully created",
      data: newUser
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "signup failed",
    });
  }
};

export const signin = async (req, res) => {
    try {
    const { email, password } = req.body;
    const user = await User.find({ email });
    const {isBlocked} = user;
    if(isBlocked) {
      res.status(200).send({message:"You are blocked by the administrator! Please contact the administrator."});
    }
    if (user && user.length == 1) {
        const isValidPassword = await bcrypt.compare(password, user[0].password);
        if (isValidPassword) {
        const token = generateToken(
            {
            uid: user[0].uid,
            email,
            },
            process.env.JWT_SECRET_KEY,
            {
            expiresIn: "30d",
            }
        );
        const refreshToken = generateToken(
          {
          uid: user[0].uid,
          email,
          },
          process.env.JWT_SECRET_KEY,
          {
          expiresIn: "10d",
          }
        );
        const updateUser = await User.findByIdAndUpdate(user[0]._id,{
          refreshToken
        },{
          new: true
        })
        res.cookie("refreshToken", refreshToken,{
          httpOnly: true,
          maxAge: 10 * 60 * 60 * 24 * 1000
        })
        res.status(200).send({
            token,
            data: updateUser,
            message: "Login successful",
        });
        } else {
          res.status(501).send({
              message: "Password is not valid",
          });
        }
    } else {
        res.status(501).send({
        message: "Wrong credential",
        });
    }
    } catch (err) {
    console.log(err);
    res.status(500).send({
        message: "Something went wrong",
    });
    }
};

export const getAllUser = async (req, res) => {
    try {
    const users = await User
        .find()
        .select(["-password", "-createdAt", "-updatedAt"]);
    res.status(200).send(users);
    } catch (error) {
    res.status(401).send({
        message: "Something went wrong",
    });
    }
};

export const getUser = async(req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findById(id).select(["-password", "-createdAt", "-updatedAt"]);
        res.status(200).send(user);
    } catch (error) {
        res.status(401).send({
            message: "Something went wrong",
        });
        }
}

export const deleteUser = async(req, res) => {
    const {_id} = req.user;
    try {
        const user = await User.findByIdAndDelete(_id).select(["-password", "-createdAt", "-updatedAt"]);
        res.status(200).send({user,"message":"successfully deleted"});
    } catch (error) {
        res.status(401).send({
            message: "Something went wrong",
        });
        }
}

export const updateUser = async(req, res) => {
    const {_id} = req.user;
    try {
      if(req.body && req.body.password) {
        req.body.password = await bcrypt.hash(req.body?.password, 10)
      }
        const user = await User.findByIdAndUpdate(_id,{
            first_name: req.body?.first_name,
            last_name: req.body?.last_name,
            email: req.body?.email,
            password: req.body?.password,
            mobile: req.body?.mobile
        },{new: true}).select(["-password", "-createdAt", "-updatedAt"]);
        return res.status(200).send({user,"message":"successfully Updated"});
    } catch (error) {
        console.log(error);
        res.status(401).send({
            message: "Something went wrong",
        });
        }
}

export const blockUser = async(req, res) => {
  const {id} = req.params;
  try {
    if(isValidMongodbId(id)) {
      const updateBlockUserInfo = await User.findByIdAndUpdate(id,{
        isBlocked: true
      },{
        new: true
      });
      return res.json({data: updateBlockUserInfo,message:"User blocked successfully!"});
    } else {
      return res.status(404).send({message: 'Invalid user'});
    }
  } catch (error) {
    return res.status(500).send({message: error?.message});
  }
}

export const unblockUser = async(req, res) => {
  const {id} = req.params;
  try {
    if(isValidMongodbId(id)) {
      const updateBlockUserInfo = await User.findByIdAndUpdate(id,{
        isBlocked: false
      },{
        new: true
      });
      return res.json({data: updateBlockUserInfo,message:"User unblocked successfully!"});
    } else {
      return res.status(404).send({message: 'Invalid user'});
    }
  } catch (error) {
    res.status(500).send({message: error?.message});
  }
}

export const handleRefreshToken = async (req, res) => {
  const cookie = req.cookies;
  if(!cookie?.refreshToken) {
    return res.status(403).send({ message:"No Refresh token available!"});
  }
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({refreshToken});
  if(!user) return res.status(403).send({ message:"No Refresh token available in db or not matched!"});
  jwt.verify(refreshToken, process.env.JWT_SECRET_KEY, async (err, decoded)=> {
    if(err || user.uid !== decoded.uid) return res.status(403).send({ message:"There is something wrong with refresh token!"});
    const accessToken = generateToken(
      {
      uid: user.uid,
      email: user.email,
      },
      process.env.JWT_SECRET_KEY,
      {
      expiresIn: "10d",
      }
    );
    res.cookie("refreshToken", accessToken,{
      httpOnly: true,
      maxAge: 10 * 60 * 60 * 24 * 1000
    })
    await User.findOneAndUpdate({uid: decoded.uid}, {
      refreshToken: accessToken
    })
    res.json({accessToken, message: "Token refreshed successfully!"})
  })
}

export const logout = async(req, res) => {
  const cookie = req.cookies;
  if(!cookie?.refreshToken) {
    return res.status(403).send({ message:"No Refresh token available!"});
  }
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({refreshToken});
  if(!user) {
    res.clearCookie("refreshToken",{
      httpOnly: true,
      secure: true
    });
    return res.sendStatus(204);
  }
  let decodeData;
  jwt.verify(refreshToken, process.env.JWT_SECRET_KEY,(err, decoded)=>{
    decodeData = decoded;
  })
  await User.findOneAndUpdate({uid: decodeData.uid}, {
    refreshToken: ""
  })
  res.clearCookie("refreshToken",{
    httpOnly: true,
    secure: true
  });
  return res.status(204).send({message: "Logout successfully!"});
}