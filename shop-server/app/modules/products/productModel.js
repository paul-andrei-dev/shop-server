import mongoose from 'mongoose';
import {Product} from "../../shared/constants/modelsNames";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
}, {timestamps: true, strict: false})

module.exports = mongoose.model(Product, productSchema);
