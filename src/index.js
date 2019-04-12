import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import config from './conf';
import http from 'http';
import cors from 'cors';
import mongoose from 'mongoose';
import Api from './api';
import { log } from './middlewares/index';
import { DefaultController } from './controllers/defaultcontroller';


mongoose.connect(config.database['path'], { useNewUrlParser: true });

let port = config.app['port'];
let app = express();
let whitelist = Object.keys(config.whitelist).map(k => config.whitelist[k]);


app.set("port", port);
app.use(bodyParser.json({ limit: config.app['bodyLimit'] }));

app.use(cookieParser(config.app['cookie_secret']));


app.use(cors({
    origin: (origin, callback) => {
        console.log(origin);
        let originIsWhitelisted = whitelist.indexOf(origin) !== -1 || typeof origin === "undefined";
        console.log('Is IP allowed: ' + originIsWhitelisted);
        let failureResp = 'You are not authorized to perform this action';
        callback(originIsWhitelisted ? null : failureResp, originIsWhitelisted);
    }
}));

new Api(app).registerGroup();
app.use(express.static(config.app['file_directory']))
app.use('/', log, DefaultController);

http.createServer(app).on('error', function () {
    console.log('Can\'t connect to server.');
})
.listen(port, () => console.log(`Server Started :: ${port}`));
