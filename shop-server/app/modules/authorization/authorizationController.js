import jwt from 'jsonwebtoken';
import {TOKEN_DURATION, TOKEN_SECRET} from '../../../config';
import {unauthorizedError} from "../../shared/constants/errorCodes";

export function checkJwt(req, res, next) {
    try{
        const jwtString = req.headers.authorization.split(' ')?.[1]

        jwt.verify(jwtString, TOKEN_SECRET)
        return next()
    }
    catch (err) {
        return next(unauthorizedError)
    }
}

export function login(req, res, next) {
    try {
        const {userId} = req.body

        const authToken = jwt.sign({userId}, TOKEN_SECRET, {expiresIn: TOKEN_DURATION});
        return res.send(authToken)
    } catch (err) {
        return next(err)
    }
}
