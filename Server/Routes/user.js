import express from "express";
import { blockUser, deleteUser, getAllUser, getUser, handleRefreshToken, logout, signin, signup, unblockUser, updateUser, } from "../Controllers/userController.js";
import { authMiddleware, isAdmin } from "../Middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.post('/refresh', handleRefreshToken);
userRouter.post('/logout', logout);
userRouter.get('/all-users',authMiddleware, isAdmin, getAllUser);
userRouter.get('/:id', getUser);
userRouter.delete('/delete-user',authMiddleware, deleteUser);
userRouter.put('/update-user',authMiddleware, updateUser);
userRouter.put('/block-user/:id',authMiddleware, isAdmin, blockUser);
userRouter.put('/unblock-user/:id',authMiddleware, isAdmin, unblockUser);



export default userRouter;