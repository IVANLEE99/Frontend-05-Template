//放在本地
// 读取本地文件
//向服务器发送数据
let http = require("http");

let fs = require("fs");

let archiver = require('archiver');
const querystring = require('querystring');

//1、打开 GET https://github.com/login/oauth/authorize
//3、接收 创建server 接收token 点击发布

let child_process = require('child_process');
var url = "https://github.com/login/oauth/authorize?client_id=Iv1.817015200f22d35b",
    cmd = '';
console.log(process.platform);
const path = require('path');
switch (process.platform) {
    case 'win32':
        cmd = 'start';
        break;

    case 'linux':
        cmd = 'xdg-open';
        break;

    case 'darwin':
        cmd = 'open';
        break;
}
console.log(cmd + ' ' + url);
child_process.exec(cmd + ' ' + url);

http.createServer(function (request, respone) {
    let query = querystring.parse(request.url.match(/^\/\?([\s\S]+)$/)[1])
    console.log(query);
    publish(query.token);
}).listen(3002);
function __publish(token) {
    // archive.pipe(fs.createWriteStream("tmp.zip"))
    let request = http.request({
        // hostname: '47.115.74.206',
        hostname: '127.0.0.1',
        port: 3001,
        method: "POST",
        path: "/publish?token=" + token,
        headers: {
            "Content-Type": "application/octet-stream",
            // "Content-Length": stats.size
        }
    }, response => {
        console.log(response);
    });
    const archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });
    archive.directory("./sample/", false);
    archive.finalize();
    archive.pipe(request);
    request.end();
}

const publish = (token) => {
    const request = http.request(
      {
        hostname: '127.0.0.1',
        port: 3001,
        method: 'POST',
        path: `/publish?token=${token}`,
        headers: {
          'Content-Type': 'application/octet-stream',
        },
      },
      (response) => {
        console.log(response);
      }
    );
  
    const archive = archiver('zip', {
      zlib: { level: 9 },
    });
    // 压缩发送到远程服务器
    archive.directory(path.resolve(__dirname + '/sample'), false);
    archive.finalize();
    archive.pipe(request);
  };