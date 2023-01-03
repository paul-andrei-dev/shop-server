import jwt from 'jsonwebtoken';
import {TOKEN_DURATION, TOKEN_SECRET} from "../config";

function generateAccessToken(userId) {
    return jwt.sign({userId}, TOKEN_SECRET, {expiresIn: TOKEN_DURATION});
}

console.log(generateAccessToken('123'));
