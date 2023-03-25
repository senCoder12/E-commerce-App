import Coupon from "../Models/coupon.model.js";
import { isValidMongodbId } from "../Utils/helper.js";


export const createCoupon = async (req, res) => {
    try {
        const newCoupon = await Coupon.create(req.body);
        res.send({ data: newCoupon, message: "Coupon created successfully!" });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

export const getAllCoupon = async(req, res) => {
    try {
        const getAllCoupons = await Coupon.find();
        res.send({data: getAllCoupons});
    } catch (error) {
        return res.status(404).send({error: error.message})
    }
}

export const updateCoupon = async(req, res) => {
    const {id} = req.params;
    try {
        const coupon = await Coupon.findByIdAndUpdate(id, req.body,{
            new: true
        });
        res.send({data: coupon,message: "Coupon updated successfully!"});
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}

export const deleteCoupon = async(req, res) => {
    const {id} = req.params;
    if(isValidMongodbId(id)) {
        try {
            const coupon = await Coupon.findByIdAndDelete(id);
            res.send({data: coupon,message: "Coupon deleted successfully!"});
        } catch (error) {
            return res.status(404).send({error: error.message})
        }
    } else {
        return res.status(500).send({error: error.message})
    }
}
