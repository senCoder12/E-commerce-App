import mongoose from "mongoose";

var cartSchema = new mongoose.Schema(
    {
        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product'
                },
                count: Number,
                color: String,
                price: Number
            }
        ],
        cartTotal: Number,
        totalAfterDiscount: Number,
        orderStatus: {
            type: String,
            default: "Not Processed",
            enum: [
                "Not Processed",
                "Cash on Delivery",
                "Processing",
                "Dispatched",
                "Cancelled",
                "Delivered"
            ]
        },
        orderBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
)


const Cart = mongoose.model("Cart", cartSchema);

export default Cart;