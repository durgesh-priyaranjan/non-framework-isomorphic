import Express from 'express';
import http from 'http';
import Director from 'director';
const app = Express();


// Webpack Requirements
import webpack from 'webpack';
import config from './../webpack.config.dev.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';


if (process.env.NODE_ENV !== 'production') {
    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, { noInfo: false, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
}

// Routes Middleware
import Routes from "./../routes";
var router = new Director.http.Router(Routes.server).configure({
    recurse: "forward"
});
var director = (req, res, next) => {
    router.dispatch(req, res, function (err) {
        if (err == undefined || err) next();
    });
};
app.use(director);


app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), () => {
    console.log("Express server listening on port " + app.get('port'));
});