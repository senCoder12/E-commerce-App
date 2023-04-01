import mongoose from "mongoose";
import crypto from "crypto";

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
        default: false,
        },
        refreshToken: {
        type: String,
        },
        address: {
            type: String
        },
        wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Wishlist" }],
        passwordChangedAt: Date,
        passwordResetToken: String,
        passwordResetExpires: Date,
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

userSchema.methods.createPasswordResetToken = async function () {
    const resetToken = crypto.randomBytes(32).toString("hex");
    this.passwordResetToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
    this.passwordResetExpires = Date.now() + 30 * 60 * 1000; // 10 minutes
    return resetToken;
};

const User = mongoose.model("User", userSchema);

export default User;
