import path from "path";

export default function initRoutes(app) {
    const routesPath = path.join(__dirname, '../app/modules');
    const routes = ['products', 'users'];

    routes.forEach((route) => {
        const finalPath = `${routesPath}/${route}/routes`;
        app.use(require(finalPath));
    });
}
