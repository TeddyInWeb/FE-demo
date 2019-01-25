
/**
 *  请求处理器模块
 */

const mime = require('mime')
const fileStream = require('../lib/fileStream.js')
const fileUpload = require('../controller/fileUpload.js')
const demoApi = require('../controller/demoApi.js')

module.exports = {

    fileRequestHandler : (request, response) => { // 文件
        let urlParts = request.url.split('.')
        let suffix = urlParts[urlParts.length - 1]
        let type = mime.getType(suffix) || undefined
        let basePath = './public'

        fileStream.FileToClient(response, `${basePath}${request.url}`, type)
    },

    noHandler : (request, response) => {
        fileStream.FileToClient(response, './public/others/404.html')
    },

    index : (request, response) => {
        fileStream.FileToClient(response, './public/index.html')
    },

    demo : (request, response) => {
        fileStream.FileToClient(response, './public/demo/index.html')
    },

    upload : (request, response) => {
        fileUpload.upload(request, response)
    },

    apiDemo : (request, response) => {
        demoApi.entry(request, response)
    },

}