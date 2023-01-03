export default function initErrorHandling(app) {
    app.all('*', (req, res) => {
        res.status(404)
            .json({
                status: 'fail',
                message: `Can't find ${req.url} on this server`,
            });
    });

    app.use((err, req, res, next) => {
        console.log('err', err);
        const errorData = {
            status: 'error',
            messages: err?.messages || [],
            fields: err?.errors || {},
        };
        res.status(err.statusCode || 401).json(errorData);
    });
}
