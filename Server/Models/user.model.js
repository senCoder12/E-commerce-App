import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema(
{
uid: {
    type: String,
    required: true,
},
first_name: {
    type: String,
    required: true,
},
last_name: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
},
mobile: {
    type: Number,
    required: true,
},
password: {
    type: String,
    required: true,
},
role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
    required: false,
},
cart: {
    type: Array,
    default: [],
},
isBlocked: {
    type: Boolean,
    default: false
},
refreshToken: {
    type: String,
},
address: [{type: mongoose.Schema.Types.ObjectId, ref: "Address"}],
wishlist: [{type: mongoose.Schema.Types.ObjectId, ref: "Wishlist"}]
},
{
versionKey: false,
timestamps: true,
}
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
