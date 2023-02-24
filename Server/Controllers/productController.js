import Product from "../Models/product.model"
import slugify from "slugify";


export const createProduct = async(req, res) => {
    try {
        if(req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.send({data: newProduct,message: "Product created successfully!"});
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}

export const updateProduct = async(req, res) => {
    const {id} = req.params;
    try {
        if(req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const updateProduct = await Product.findOneAndUpdate(id, req.body,{new:true});
        res.send({data: updateProduct,message: "Product updated successfully!"});
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}

export const deleteProduct = async(req, res) => {
    const {id} = req.params;
    try {
        const deleteProduct = await Product.findOneAndDelete(id);
        res.send({data: deleteProduct,message: "Product deleted successfully!"});
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}

export const getProduct = async(req, res) => {
    const {id} = req.params;
    try {
        const findProduct = await Product.findById(id);
        res.json({data: findProduct});
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}

export const getAllProduct = async(req, res) => {
    try {
        //Filtering
        const queryObj = {...req.query};
        const excludeFields = ["page","sort","limit","fields"];
        excludeFields.forEach(el=> delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        let query = Product.find(JSON.parse(queryStr));

        // Sorting
        if(req.query.sort) {
            const sortBy = req.query.sort.split(',').join(" ");
            query = query.sort(sortBy);
        } else {
            query = query.sort("-createdAt");
        }

        // Limiting the fields
        if(req.query.fields) {
            const fields = req.query.fields.split(',').join(" ");
            query = query.select(fields);
        }

        // Pagination
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const skip = req.query.skip || 0;
        query = query.skip(skip).limit(limit);
        if(req.query.page) {
            const productCount = await Product.countDocuments();
            if(skip>=productCount) {
                res.status(404).send({error: error.message, message: "This page is not available."})
            }
        }

        const product = await query;
        res.json({data: product});
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}