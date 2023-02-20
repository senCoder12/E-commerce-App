import express from "express";
import { deleteUser, getAllUser, getUser, signin, signup, updateUser, } from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
// userRouter.get('/getUserByJwt', getUserByJWT);
userRouter.get('/all-users', getAllUser);
userRouter.get('/:id', getUser);
userRouter.delete('/:id', deleteUser);
userRouter.put('/:id', updateUser);


export default userRouter;