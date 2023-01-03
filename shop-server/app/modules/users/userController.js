import jwt from "jsonwebtoken";
import * as userService from './userService'
import {TOKEN_SECRET} from "../../../config";

export async function getLoggedUser(req, res, next) {
    try {
        const jwtString = req.headers.authorization.split(' ')?.[1]
        const userId = jwt.verify(jwtString, TOKEN_SECRET)?.userId

        req.resources.loggedUser = await userService.findUserById({userId});
        return next()
    }
    catch (err) {
        return next(err)
    }
}
