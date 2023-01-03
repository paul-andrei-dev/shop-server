import dotenv from 'dotenv';

dotenv.config();

export const {
    PORT,
    MONGO_URL,
    TOKEN_SECRET,
    TOKEN_DURATION,
} = process.env;
