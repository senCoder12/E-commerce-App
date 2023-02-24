import { createProduct, deleteProduct, getAllProduct, getProduct, updateProduct } from "../Controllers/productController";
import express from "express";
import { authMiddleware, isAdmin } from "../Middleware/authMiddleware";

export const productRouter = express.Router();
productRouter.post("/create", authMiddleware, isAdmin, createProduct);
productRouter.get("/get-single/:id", getProduct);
productRouter.get("/update/:id",  authMiddleware, isAdmin, updateProduct);
productRouter.get("/delete/:id",  authMiddleware, isAdmin, deleteProduct);
productRouter.get("/get-all", getAllProduct);



