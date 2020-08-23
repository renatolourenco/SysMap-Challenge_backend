const gitApi = require('../connection/api_connection')

module.exports = (app) => {
    app.get('/repo/:user', (req, res, next) => {

        if (req.params.user) {

            gitApi.connection('get', `${req.params.user}/repos`).then(resp => {

                res.json(resp);

            }).catch(err => {
                res.status(err['err_code']);
                res.json(err);
            });

        } else {
            res.status(400);
            res.json({
                success: false,
                error: 'Bad Request'
            });
        }

    });
}
