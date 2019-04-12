/* import {generateResponse} from '../utilites';
import { decryptValue } from '../utilites/encryption-module';
import config from "../conf/";


export function testAPIs(req, res){

    generateResponse(true, 'All APIs are ok', null, res);
} */


import {generateResponse} from '../utilites';



export default class DevController{

    testAPIs(req, res){

        generateResponse(true, 'All APIs are ok', null, res);        

    }
}