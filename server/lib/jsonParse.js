/**
 *  json响应处理
 */

const util = require('util');
const document = require('../config/document.js');

const getResultJsonStr = (code = -1, data = '') => {      
    return {
        code: code, 
        msg: document.list[code] || document.list[-1],
        data: data,
    };
}

const sendJson = (response, json) => {
    response.writeHead(200, {
        'Content-Type':'application/json',
        'charset':'utf-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'
    });
    response.end(JSON.stringify(json));
}

const sendResult = (response, code = -1, data = '') => {
    sendJson(response, getResultJsonStr(code, data));
}

module.exports = {
    getResultJsonStr : getResultJsonStr,
    sendJson : sendJson,
    sendResult : sendResult
}