import Brand from "../Models/brand.model.js";
import { isValidMongodbId } from "../Utils/helper.js";


export const createBrand = async(req, res) => {
    try {
        const newBrand = await Brand.create(req.body);
        res.send({data: newBrand,message: "Brand added successfully!"});
    } catch (error) {
        return res.status(404).send({error: error.message})
    }
}

export const updateBrand = async(req, res) => {
    const {id} = req.params;
    try {
        const updateBrand = await Brand.findByIdAndUpdate(id, req.body,{
            new: true
        });
        res.send({data: updateBrand,message: "Brand updated successfully!"});
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}

export const deleteBrand = async(req, res) => {
    const {id} = req.params;
    if(isValidMongodbId(id)) {
        try {
            const deleteBrand = await Brand.findByIdAndDelete(id);
            res.send({data: deleteBrand,message: "Brand deleted successfully!"});
        } catch (error) {
            return res.status(404).send({error: error.message})
        }
    } else {
        return res.status(500).send({error: error.message})
    }
}

export const getBrand = async(req, res) => {
    const {id} = req.params;
    if(isValidMongodbId(id)) {
        try {
            const singleBrand = await Brand.findById(id);
            res.send({data: singleBrand});
        } catch (error) {
            res.status(404).send({error: error.message})
        }
    } else {
        return res.status(500).send({error: error.message})
    }
}

export const getAllBrand = async(req, res) => {
    try {
        const getAllBrand = await Brand.find();
        res.send({data: getAllBrand});
    } catch (error) {
        return res.status(404).send({error: error.message})
    }
}