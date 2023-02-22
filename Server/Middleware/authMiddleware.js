import jwt from "jsonwebtoken";
import userModel from "../Models/user.model.js";
export const authMiddleware = async (req, res, next) => {
    let token;
    if(req?.headers?.authorization?.startsWith('Bearer')) {
        token = req.headers.authorization?.split(' ')[1];
        try {
            if(token) {
                const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
                const user = await userModel.findOne({uid: decoded?.uid});
                req.user = user;
                next();
            }
        } catch (error) {
            res.status(404).send({message: "Not Authorized, Token expired. Login again",stack: error?.stack});
        }
    } else {
        throw new Error("There is no token available in header");
        res.status(404).send({message: "There is no token available in header",stack: error?.stack});
    }
}

export const isAdmin = async(req, res, next) => {
    const {role} = req.user;
    if(role !== "admin") {
        res.status(404).send({message: "You are not an administrator",stack: error?.stack});
    } else {
        next();
    }
}