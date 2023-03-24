import express from "express";
import { createCategory, deleteCategory, getAllCategory, getCategory, updateCategory } from "../Controllers/categoryController.js";
import { authMiddleware, isAdmin } from "../Middleware/authMiddleware.js";


const categoryRouter = express.Router();

categoryRouter.post('/create', authMiddleware, isAdmin, createCategory);
categoryRouter.put('/:id', authMiddleware, isAdmin, updateCategory);
categoryRouter.delete('/:id', authMiddleware, isAdmin, deleteCategory);
categoryRouter.get('/:id', authMiddleware, isAdmin, getCategory);
categoryRouter.get('/', authMiddleware, getAllCategory);


export default categoryRouter;