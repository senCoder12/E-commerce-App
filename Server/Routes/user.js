import express from "express";
import { blockUser, deleteUser, emptyCart, forgetPasswordToken, getAllUser, getUser, getUserCart, getWishList, handleRefreshToken, loginAsAdmin, logout, resetPassword, saveAddress, signin, signup, unblockUser, updatePassword, updateUser, userCart, } from "../Controllers/userController.js";
import { authMiddleware, isAdmin } from "../Middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.post('/login-admin', loginAsAdmin);
userRouter.put('/password', authMiddleware, updatePassword);
userRouter.post('/forget-password-token',forgetPasswordToken);
userRouter.put('/reset-password/:token',resetPassword);
userRouter.post('/refresh', handleRefreshToken);
userRouter.post('/logout', logout);
userRouter.post('/cart', authMiddleware, userCart);
userRouter.get('/cart', authMiddleware, getUserCart);
userRouter.delete('/cart', authMiddleware, emptyCart);
userRouter.get('/all-users',authMiddleware, isAdmin, getAllUser);
userRouter.get('/:id', getUser);
userRouter.get('/get-wishList',authMiddleware, getWishList);
userRouter.delete('/delete-user',authMiddleware, deleteUser);
userRouter.put('/update-user',authMiddleware, updateUser);
userRouter.put('/save-address',authMiddleware, saveAddress);
userRouter.put('/block-user/:id',authMiddleware, isAdmin, blockUser);
userRouter.put('/unblock-user/:id',authMiddleware, isAdmin, unblockUser);



export default userRouter;