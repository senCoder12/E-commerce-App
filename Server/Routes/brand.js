import express from "express";
import { createBrand, deleteBrand, getAllBrand, getBrand, updateBrand } from "../Controllers/brandController.js";
import { authMiddleware, isAdmin } from "../Middleware/authMiddleware.js";


const brandRouter = express.Router();

brandRouter.post('/create', authMiddleware, isAdmin, createBrand);
brandRouter.put('/:id', authMiddleware, isAdmin, updateBrand);
brandRouter.delete('/:id', authMiddleware, isAdmin, deleteBrand);
brandRouter.get('/:id', authMiddleware, isAdmin, getBrand);
brandRouter.get('/', authMiddleware, getAllBrand);


export default brandRouter;