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
            throw new Error("Not Authorized, Token expired. Login again");
        }
    } else {
        throw new Error("There is no token available in header");
    }
}

export const isAdmin = async(req, res, next) => {
    const {role} = req.user;
    if(role !== "admin") {
        throw new Error("You are not an administrator")
    } else {
        next();
    }
}