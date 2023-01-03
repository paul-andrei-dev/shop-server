import express from 'express';
import {login} from "../authorization/authorizationController";

const router = express.Router();

router.post('/login',
    login)

module.exports = router;
