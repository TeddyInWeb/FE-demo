
/**
 * 修改hosts模块
 */

const Fs = require('fs');
const Util = require('../util.js');
const filePath = 'C:/Windows/System32/drivers/etc/hosts';

function readHosts(){
    Fs.readFile(filePath, (err, data) => {
        if(err){
            return void alert('出错啦! 请重试~');
        }else{
            let dataStr = data.toString('utf-8');
            document.getElementById('hosts-edit-screen').value = dataStr;
            Util.openPop('tool-hosts-pop');
        }
    })
}

function saveFile(){
    let dataStr = document.getElementById('hosts-edit-screen').value;
    Fs.writeFile(filePath, dataStr, (err) => {
        if(err){
            alert('保存失败!');
        }else{
            alert('保存成功!');
        }
    });
}

function isHostExist(dataStr, host31Ip, host31Name){
    let matcher = new RegExp('\\#*' + host31Ip + '\\s+' + host31Name, 'g');
    return dataStr.match(matcher);
}

module.exports = {
    readHosts: readHosts,
    saveFile: saveFile
}