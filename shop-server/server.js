import connectToDb from "./config/mongoose";
import initExpress from "./config/express";
import initRoutes from "./config/routes";
import initErrorHandling from "./config/errorHandling";
import {PORT} from "./config";

const express = require('express')
const app = express()

initExpress(app);
initRoutes(app);
initErrorHandling(app);

connectToDb()
    .then(() => {
        console.log('connected to Mongo')

        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
    })
    .catch(mongoErr => console.log('error when connecting to database:', mongoErr));
