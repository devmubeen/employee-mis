/**
 * Created by Mubeen on 12/7/16.
 */
'use strict';

import {Request, Response} from 'express';
import {parseBody, generateResponse} from '../utilites';
import {hash, genSalt, compare} from "bcrypt";
/* import {UserModel, UserRoleModel, CityModel, CountryModel} from '..//models'; */
import {sign, verify} from "jsonwebtoken";
import config from "../conf";

export function login(req, res) {
    let body = parseBody(req);
    /* console.log(body); */

    /* Employee.getSpecificEmployee({'employment_details.employee_number': body.employee_number}, (err, employee) => {
        if (employee.length > 0) {
            let user = employee[0];

           
            compare(body.password, user.employment_details.password).then(valid => {
                if(valid){
                    let payload = {
                        firstname : user.basic_details.firstname,
                        lastname : user.basic_details.lastname,
                        employee_number : user.employment_details.employee_number 
                    };

                    console.log(payload);

                    let token = sign({payload}, `${config.app['jwtsecret']}`, {expiresIn: "1y"});
                    console.log(token);
                 
                    let userData = {
                        user : user,
                        token : token
                    };

                   
                    generateResponse(true, 'Successfully Loggedin', userData, res);
                }
                else{
                    generateResponse(false, "Passwords not match", null, res);
                }
            });
            
        }
        else{
            generateResponse(false, "Employee Number Not found", null, res);
        }



    }); */

    /* UserModel.findOne({ where: {username: body.username} }).then(user => {
        compare(body.password, user.password).then(valid => {
            if (valid) {
                UserRoleModel.findOne({ where: {userid: user.id} }).then(userRole => {
                    if(userRole){
                        CityModel.find({where: {id: user.cityid}}).then(city => {
                            CountryModel.find({where: {id: user.countryid}}).then(country => {
                                let token = sign({user, role_id: userRole.roleid}, `${config.app['jwtsecret']}`, {expiresIn: "1y"});
                                user.token = token;
                                let ua = [user];
                                ua = ua.map(item => {
                                    item.dataValues.city = city?city.name:'';
                                    item.dataValues.country = country?country.name:'';
                                    return item;
                                });
                                // console.log(ua);
                                generateResponse(true, 'Successfully Loggedin', {user: ua[0], role_id: userRole.roleid}, res);
                            });
                        });
                    }
                });
            } else {
                generateResponse(false, 'Invalid Credentials', null, res);
            }
        }).catch(ex => {
            console.log(ex);
            generateResponse(false, 'Invalid Credentials', null, res);
        });
    }).catch(ex => {
        console.log(ex);
        generateResponse(false, 'User not found', null, res);
    }); */
}

/* export function login(req, res) {
    let body = parseBody(req);
    UserModel.findOne({ where: {username: body.username} }).then(user => {
        compare(body.password, user.password).then(valid => {
            if (valid) {
                UserRoleModel.findOne({ where: {userid: user.id} }).then(userRole => {
                    if(userRole){
                        CityModel.find({where: {id: user.cityid}}).then(city => {
                            CountryModel.find({where: {id: user.countryid}}).then(country => {
                                let token = sign({user, role_id: userRole.roleid}, `${config.app['jwtsecret']}`, {expiresIn: "1y"});
                                user.token = token;
                                let ua = [user];
                                ua = ua.map(item => {
                                    item.dataValues.city = city?city.name:'';
                                    item.dataValues.country = country?country.name:'';
                                    return item;
                                });
                                // console.log(ua);
                                generateResponse(true, 'Successfully Loggedin', {user: ua[0], role_id: userRole.roleid}, res);
                            });
                        });
                    }
                });
            } else {
                generateResponse(false, 'Invalid Credentials', null, res);
            }
        }).catch(ex => {
            console.log(ex);
            generateResponse(false, 'Invalid Credentials', null, res);
        });
    }).catch(ex => {
        console.log(ex);
        generateResponse(false, 'User not found', null, res);
    });
}
export function register(req, res){
    let userObject = parseBody(req);
    if(userObject){
        genSalt(parseInt(config.app['password_saltRounds'], 10)).then(salt => {
            hash(userObject.password, salt).then((hash) => {
                userObject.password = hash;
                UserModel.create(userObject).then(user => {
                    if(user){
                        UserRoleModel.create({userid: user.id, roleid: userObject.roleid}).then(ur => {
                            if(ur){
                                generateResponse(true, 'Successfully Registered', user, res);
                            }
                        });
                    } else {
                        generateResponse(false, 'Unable to create User', null, res);
                    }
                }).catch(ex => {
                    console.log(ex);
                    generateResponse(false, 'Unable to create User', null, res);
                });
            })
        })
    }
} */