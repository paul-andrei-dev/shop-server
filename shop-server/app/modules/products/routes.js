import express from 'express';
import {createProduct, getProductsOverview} from "./productController";
import {getLoggedUser} from "../users/userController";
import {checkJwt} from "../authorization/authorizationController";

const router = express.Router();

router.post('/products',
    checkJwt,
    createProduct)

router.get('/products/overview',
    checkJwt,
    getLoggedUser,
    getProductsOverview)

module.exports = router;
