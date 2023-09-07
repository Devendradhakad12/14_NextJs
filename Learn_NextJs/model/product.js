import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String
})
mongoose.models = {}

export const Product = mongoose.model("Product",productSchema)

