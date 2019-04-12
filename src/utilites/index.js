import config from "../conf/";
export function generateResponse(success, message, data, res){
    res.json({success, message, data});
}
export function parseBody(req) {
    let obj;
    if (typeof req.body === 'object') {
        obj = req.body;
    } else {
        obj = JSON.parse(req.body);
    }

    return obj;
}
export function getCurrentTimestamp(){
    let date = new Date();
    return date.getTime();
}

/* export function getPublicEmployeeAssetsFilePath(employee_number, filename){
    return `${config.app['public_file_path']}users/${employee_number}/${filename}`;

} */

