import express from "express";
import { blockUser, deleteUser, forgetPasswordToken, getAllUser, getUser, handleRefreshToken, logout, resetPassword, signin, signup, unblockUser, updatePassword, updateUser, } from "../Controllers/userController.js";
import { authMiddleware, isAdmin } from "../Middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.put('/password', authMiddleware, updatePassword);
userRouter.post('/forget-password-token',forgetPasswordToken);
userRouter.put('/reset-password/:token',resetPassword);
userRouter.post('/refresh', handleRefreshToken);
userRouter.post('/logout', logout);
userRouter.get('/all-users',authMiddleware, isAdmin, getAllUser);
userRouter.get('/:id', getUser);
userRouter.delete('/delete-user',authMiddleware, deleteUser);
userRouter.put('/update-user',authMiddleware, updateUser);
userRouter.put('/block-user/:id',authMiddleware, isAdmin, blockUser);
userRouter.put('/unblock-user/:id',authMiddleware, isAdmin, unblockUser);



export default userRouter;