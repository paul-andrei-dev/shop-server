import bodyParser from 'body-parser';
import helmet from 'helmet';

export default function initExpress(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use((req, res, next) => {
        req.resources = req.resources || {};
        next();
    });

    app.use(helmet());
}
