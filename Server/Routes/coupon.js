import express from "express";
import { createCoupon, deleteCoupon, getAllCoupon, updateCoupon } from "../Controllers/couponControllers.js";
import { authMiddleware, isAdmin } from "../Middleware/authMiddleware.js";


const couponRouter = express.Router();

couponRouter.post('/create', authMiddleware, isAdmin, createCoupon);
brandRouter.put('/:id', authMiddleware, isAdmin, updateCoupon);
brandRouter.delete('/:id', authMiddleware, isAdmin, deleteCoupon);
brandRouter.get('/', authMiddleware, getAllCoupon);


export default couponRouter;