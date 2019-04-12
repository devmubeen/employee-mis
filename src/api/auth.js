'use strict';

import {Router} from "express";
import {log, loggedIn} from "../middlewares/index";
import {login} from '../controllers/authcontroller';


export default class AuthAPI {
    constructor() {
        this.router = Router();
        this.registerRoutes();
    }

    registerRoutes() {
        let router = this.router;
        router.post('/login', log, login);
    }

    getRouter() {
        return this.router;
    }

    getRouteGroup() {
        return '/auth';
    }
}