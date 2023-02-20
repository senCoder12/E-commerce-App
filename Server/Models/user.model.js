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
}
},
{
versionKey: false,
timestamps: true,
}
);

userSchema.pre("save",async function(next){
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password,salt);
})

const userModel = mongoose.model("User", userSchema);

export default userModel;
