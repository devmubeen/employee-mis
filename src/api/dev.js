'use strict';
import { Router } from "express";
import { log, loggedIn } from "../middlewares";
import DevController from '../controllers/devcontroller';


export default class DEVAPI {


    /* DevController devcontroller = new DevController(); */

    constructor() {
        this.router = Router();
        this.registerRoutes();
    }

    registerRoutes() {
        let router = this.router;
        let devcontroller = new DevController();
        router.get('/test', log, devcontroller.testAPIs);
    }

    getRouter() {
        return this.router;
    }

    getRouteGroup() {
        return '/dev';
    }
}