import {MONGO_URL} from "./index";
import mongoose from 'mongoose';

export default async function connectToDb() {
    await mongoose.connect(MONGO_URL,{
        autoIndex: true,
    });
}

export function closeDBConnection() {
    return mongoose.connection.close();
}
