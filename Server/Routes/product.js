import { createManyProduct, createProduct, deleteProduct, getAllProduct, getProduct, updateProduct } from "../Controllers/productController.js";
import express from "express";
import { authMiddleware, isAdmin } from "../Middleware/authMiddleware.js";

const productRouter = express.Router();
productRouter.post("/create", authMiddleware, isAdmin, createProduct);
productRouter.post("/create-many", authMiddleware, isAdmin, createManyProduct);
productRouter.get("/get-single/:id", getProduct);
productRouter.put("/update/:id",  authMiddleware, isAdmin, updateProduct);
productRouter.delete("/delete/:id",  authMiddleware, isAdmin, deleteProduct);
productRouter.get("/get-all", getAllProduct);

export default productRouter;

