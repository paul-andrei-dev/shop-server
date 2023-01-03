import mongoose from 'mongoose';
import {User} from "../../shared/constants/modelsNames";
import {ALL_USER_STATUSES, USER_STATUS_REGULAR} from "./constants";

const userSchema = new mongoose.Schema({
    name: String,
    userType: {
        type: String,
        enum: ALL_USER_STATUSES,
        // default: USER_STATUS_REGULAR,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model(User, userSchema);
