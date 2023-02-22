import express from "express";
import { deleteUser, getAllUser, getUser, signin, signup, updateUser, } from "../Controllers/userController.js";
import { authMiddleware, isAdmin } from "../Middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.get('/all-users',authMiddleware,isAdmin, getAllUser);
userRouter.get('/:id', getUser);
userRouter.delete('/delete-user',authMiddleware, deleteUser);
userRouter.put('/update-user',authMiddleware, updateUser);


export default userRouter;