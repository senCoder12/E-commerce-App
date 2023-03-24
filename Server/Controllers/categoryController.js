import Category from "../Models/category.model.js";
import { isValidMongodbId } from "../Utils/helper.js";


export const createCategory = async(req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.send({data: newCategory,message: "Category added successfully!"});
    } catch (error) {
        return res.status(404).send({error: error.message})
    }
}

export const updateCategory = async(req, res) => {
    const {id} = req.params;
    try {
        const updateCategory = await Category.findByIdAndUpdate(id, req.body,{
            new: true
        });
        res.send({data: updateCategory,message: "Category updated successfully!"});
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}

export const deleteCategory = async(req, res) => {
    const {id} = req.params;
    if(isValidMongodbId(id)) {
        try {
            const deleteCategory = await Category.findByIdAndDelete(id);
            res.send({data: deleteCategory,message: "Category deleted successfully!"});
        } catch (error) {
            return res.status(404).send({error: error.message})
        }
    } else {
        return res.status(500).send({error: error.message})
    }
}

export const getCategory = async(req, res) => {
    const {id} = req.params;
    if(isValidMongodbId(id)) {
        try {
            const singleCategory = await Category.findById(id);
            res.send({data: singleCategory});
        } catch (error) {
            res.status(404).send({error: error.message})
        }
    } else {
        return res.status(500).send({error: error.message})
    }
}

export const getAllCategory = async(req, res) => {
    try {
        const getAllCategory = await Category.find();
        res.send({data: getAllCategory});
    } catch (error) {
        return res.status(404).send({error: error.message})
    }
}