import bcrypt from "bcrypt";
import uniqid from 'uniqid';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import PasswordValidator from "password-validator";
import generator from "generate-password";
import User from "../Models/user.model.js";
import {
  generateToken,
  isValidMongodbId,
  hasSpecialChar,
} from "../Utils/helper.js";
import { sendEmail } from "./emailContriller.js";
import Cart from "../Models/cart.model.js";
import Product from "../Models/product.model.js";
import Coupon from "../Models/coupon.model.js";

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
      role,
    });
    res.status(201).json({
      message: "Account successfully created",
      data: newUser,
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
    const { isBlocked } = user;
    if (isBlocked) {
      return res
        .status(200)
        .send({
          message:
            "You are blocked by the administrator! Please contact the administrator.",
        });
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
        const updateUser = await User.findByIdAndUpdate(
          user[0]._id,
          {
            refreshToken,
          },
          {
            new: true,
          }
        );
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 10 * 60 * 60 * 24 * 1000,
        });
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
    res.status(500).send({
      message: "Something went wrong",
    });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find().select([
      "-password",
      "-createdAt",
      "-updatedAt",
    ]);
    res.status(200).send(users);
  } catch (error) {
    res.status(401).send({
      message: "Something went wrong",
    });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).select([
      "-password",
      "-createdAt",
      "-updatedAt",
    ]);
    res.status(200).send(user);
  } catch (error) {
    res.status(401).send({
      message: "Something went wrong",
    });
  }
};

export const deleteUser = async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findByIdAndDelete(_id).select([
      "-password",
      "-createdAt",
      "-updatedAt",
    ]);
    res.status(200).send({ user, message: "successfully deleted" });
  } catch (error) {
    res.status(401).send({
      message: "Something went wrong",
    });
  }
};

export const updateUser = async (req, res) => {
  const { _id } = req.user;
  try {
    if (req.body && req.body.password) {
      req.body.password = await bcrypt.hash(req.body?.password, 10);
    }
    const user = await User.findByIdAndUpdate(
      _id,
      {
        first_name: req.body?.first_name,
        last_name: req.body?.last_name,
        email: req.body?.email,
        password: req.body?.password,
        mobile: req.body?.mobile,
      },
      { new: true }
    ).select(["-password", "-createdAt", "-updatedAt"]);
    return res.status(200).send({ user, message: "successfully Updated" });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "Something went wrong",
    });
  }
};

export const updatePassword = async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  if (isValidMongodbId(_id)) {
    const user = await User.findById(_id);
    if (password) {
      user.password = await bcrypt.hash(password, 10);
      const updatedPassword = await User.save();
      res.json(updatedPassword);
    } else {
      res.json(user);
    }
  }
};

export const blockUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (isValidMongodbId(id)) {
      const updateBlockUserInfo = await User.findByIdAndUpdate(
        id,
        {
          isBlocked: true,
        },
        {
          new: true,
        }
      );
      return res.json({
        data: updateBlockUserInfo,
        message: "User blocked successfully!",
      });
    } else {
      return res.status(404).send({ message: "Invalid user" });
    }
  } catch (error) {
    return res.status(500).send({ message: error?.message });
  }
};

export const unblockUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (isValidMongodbId(id)) {
      const updateBlockUserInfo = await User.findByIdAndUpdate(
        id,
        {
          isBlocked: false,
        },
        {
          new: true,
        }
      );
      return res.json({
        data: updateBlockUserInfo,
        message: "User unblocked successfully!",
      });
    } else {
      return res.status(404).send({ message: "Invalid user" });
    }
  } catch (error) {
    res.status(500).send({ message: error?.message });
  }
};

export const handleRefreshToken = async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) {
    return res.status(403).send({ message: "No Refresh token available!" });
  }
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user)
    return res
      .status(403)
      .send({ message: "No Refresh token available in db or not matched!" });
  jwt.verify(refreshToken, process.env.JWT_SECRET_KEY, async (err, decoded) => {
    if (err || user.uid !== decoded.uid)
      return res
        .status(403)
        .send({ message: "There is something wrong with refresh token!" });
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
    res.cookie("refreshToken", accessToken, {
      httpOnly: true,
      maxAge: 10 * 60 * 60 * 24 * 1000,
    });
    await User.findOneAndUpdate(
      { uid: decoded.uid },
      {
        refreshToken: accessToken,
      }
    );
    res.json({ accessToken, message: "Token refreshed successfully!" });
  });
};

export const logout = async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) {
    return res.status(403).send({ message: "No Refresh token available!" });
  }
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204);
  }
  let decodeData;
  jwt.verify(refreshToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
    decodeData = decoded;
  });
  await User.findOneAndUpdate(
    { uid: decodeData.uid },
    {
      refreshToken: "",
    }
  );
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  return res.status(204).send({ message: "Logout successfully!" });
};

export const forgetPasswordToken = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).send({ message: "User not found with email" });
  }
  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetUrl = `Hi, Please follow this link to reset your password. Thus link is valid till 10 minutes from now. <a href='http://localhost:8080/auth/reset-password/${token}'>Click Here</a>`;
    const data = {
      to: email,
      text: "Hey User",
      subject: "Forgot Password Link",
      htm: resetUrl,
    };
    sendEmail(data);
    res.json({ token: token });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;

  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user)
    return res.status(403).send({ message: "Token expired, Please try again" });
  user.password = password;
  user.passwordResetExpires = undefined;
  user.passwordResetExpires = undefined;
  res.status(200).send({ message: "Password reset successfully", data: user });
};

// Admin login
export const loginAsAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.find({ email });
    const { isBlocked } = user;
    if (isBlocked) {
      return res
        .status(200)
        .send({
          message:
            "You are blocked by the administrator! Please contact the administrator.",
        });
    }
    if(user.role !== 'admin') {
      return res
        .status(404)
        .send({
          message:
            "Not authorized!",
        });
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
        const updateUser = await User.findByIdAndUpdate(
          user[0]._id,
          {
            refreshToken,
          },
          {
            new: true,
          }
        );
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 10 * 60 * 60 * 24 * 1000,
        });
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
    res.status(500).send({
      message: "Something went wrong",
    });
  }
};

// Get wish list
export const getWishList = async(req, res) => {
  const {_id} = req.user;
  try {
    const user = await User.findOne(_id).populate("wishlist");
    return res.json(user);
  } catch (error) {
    return res.status(403).send({ message: error.message });
  }
}

// Save address
export const saveAddress = async (req, res) => {
  const { _id } = req.user;
  try {
  if(isValidMongodbId(_id)) {
    const updateUser = await User.findByIdAndUpdate(_id, {
      address: req?.body?.address
    },{
      new: true
    })
    return res.status(200).send({ message: "Thanks for updating your address.", data: updateUser });
  } 
  return res.status(403).send({ message: "Mongodb id not found." });
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }  
};

// Update cart
export const userCart = async(req, res) => {
  const {_id} = req.user;
  const {cart} = req.body;
  try {
    if(isValidMongodbId(_id)) {
      let products = [];
      const user = await User.findById(_id);
      const alreadyExistCart = await Cart.findOne({orderBy: user._id});
      if(alreadyExistCart) {
        alreadyExistCart.remove();
      }
      for(let i = 0; i < cart.length; i++) {
        let object = {};
        object.product = cart[i]._id;
        object.count = cart[i].count;
        object.color = cart[i].color;
        let getPrice = await Product.findById(cart[i]._id).select("price").exec();
        object.price = getPrice.price;
        products.push(object);
      }
      let cartTotal = 0;
      for(let product of products) {
        cartTotal += product.count;
      }
      let newCart = await new Cart({
        products,
        cartTotal,
        orderBy: user._id
      })
      return res.send({data:newCart,message:"Cart item added successfully!"});
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

// Get a cart
export const getUserCart = async(req, res) => {
  const {_id} = req.user;
  try {
    if(isValidMongodbId(_id)) {
      const cart = await Cart.findOne({orderBy: _id}).populate("products.product");
      return res.send(cart);
    }
  } catch (error) { 
    return res.status(500).send({ message: error.message });
  }
}

export const emptyCart = async(req, res) => {
  const {_id} = req.user;
  try {
    if(isValidMongodbId(_id)) {
      const user = await User.findOne({_id});
      const cart = await Cart.findOneAndRemove({orderBy: user._id});
      res.json(cart);
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

// Apply coupon
export const applyCoupon = async (req, res) => {
  const {coupon} = req.body;
  const { _id } = req.user;
  const validCoupon = await Coupon.findOne({ name: coupon });
  if(validCoupon == null) {
    return res.status(200).send({message: 'Invalid coupon code'});
  }
  if(!isValidMongodbId(_id)) {
    return res.status(500).send({message: 'MongoDB ID is invalid!'});
  }
  const user = req.user;
  try {
    let {cartTotal} = await Cart.findOne({
      orderBy: user._id
    }).populate("products.product");
    let totalAfterDiscount = (cartTotal - (cartTotal * validCoupon.discount) / 100).toFixed(2);
    await Cart.findByIdAndUpdate(
      {orderBy: user._id},
      {totalAfterDiscount: totalAfterDiscount},
      {new: true}
    )
    res.send(totalAfterDiscount);
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}

// Create order
export const createOrder = async(req,res) => {
  const {COD, couponApplied} = req.body;
  const { _id } = req.user;
  if(!isValidMongodbId(_id)) {
    return res.status(500).send({message: 'MongoDB ID is invalid!'});
  }
  if(!COD) return res.send(404).send({message: "Create cash order failed."});
  try {
    let userCart = await Cart.findOne({orderBy: _id});
    let finalAmount = 0;
    if(couponApplied && userCart.totalAfterDiscount) {
      finalAmount = userCart.totalAfterDiscount;
    } else {
      finalAmount = userCart.cartTotal;
    }
    let newOrder = await new Order({
      products: userCart.products,
      paymentIntent: {
        id: uniqid(),
        method: COD,
        amount: finalAmount,
        status: 'Cash on Delivery',
        createdAt: Date.now(),
        currency: "usd"
      },
      orderBy: _id,
      orderStatus: "Cash on Delivery"
    }).save();
    let update = userCart.products.map((item)=> {
      return {
        updateOne: {
          filter: { _id: item.product._id},
          update: { $inc: {quantity: -item.count, sold: +item.count}}
        }
      }
    })
    const updated = await Product.bulkWrite(update, {});
    return response.status(200).send({message: "Thank you for your order!"})
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}

export const getOrder = async (req, res) => {
  const {_id} = req.user;
  try {
    if(isValidMongodbId(_id)) {
      const userOrders = await Order.findOne({orderBy: _id}).populate("products.product").exec();
      return res.status(200).send(userOrders);
    } else {
      return res.status(500).send({message: 'MongoDB ID is invalid!'});
    }
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}

export const updateOrderStatus = async (req, res) => {
  const {id} = req.params;
  const {status} = req.body;
  try {
    const updateOrder = await Order.findByIdAndUpdate(id, {
      orderStatus: status,
      paymentIntent: {
        status: status
      }
    },{new : true});
    res.status(200).send({updateOrder,message: "Order status updated successfully."});
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}