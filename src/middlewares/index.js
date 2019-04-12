'use strict';
import mkdirp from 'mkdirp';
import { verify } from "jsonwebtoken";
import config from "../conf";
import multer from 'multer';
/* import Log from '../models/log'; */

export function log(req, res, next) {

    console.log(req.originalUrl);
   
    next();
   
}
export function multerMiddleware(req, res, next) {
    const file_path = config.app['file_path'];
    let storage = multer.diskStorage({
        destination: (request, file, cb) => {
            
            let emp_number = request.body['employee_number'];

            console.log(emp_number);
            mkdirp(file_path +'users/'+ emp_number, function (err) {
                cb(null, file_path+'users/'+emp_number);
            });
        },
        filename: (request, file, cb) => {
            
            let file_extension = file.originalname.split('.')[file.originalname.split('.').length -1];
            let file_name = `${request.body['employee_number']}${Date.now()}.${file_extension}`;
            cb(null, file_name);
        }
    });
   let upload =  multer({ storage: storage }).single('file_attachment');
    upload(req, res , (err) => {
        if(err){
            console.log(err);
            res.status(400).json({success: false, error: ["File Cannot be Uploaded"] });
        }
        next();
    });
}
export function loggedIn(req, res, next) {
   
    decodeToken(req).then(data => {
       /*  console.log(data); */
        req.user = data.user;
        next();
    }).catch(ex => {
        // let error = {type: ERROR_TYPE.FORCE_UPDATE, message: 'Update your application.'};
        // let error = {type: ERROR_TYPE.DEACTIVATE_USER, message: 'User is deactivated.'};
        // let error = {type: ERROR_TYPE.CUSTOM, message: 'Oops something went wrong..'};
        res.status(400).json({ success: false, error: ["Unauthenticated request"] });
        /* console.error(ex); */
    });
}
export function decodeToken(req) {
    return new Promise((resolve, reject) => {
        
        let { token } = req.headers;
        verify(token, `${config.app['jwtsecret']}`, (err, decoded) => {
            if (err === null) {
                resolve(decoded);
            } else {
                reject(err);
            }
        });
    });
}