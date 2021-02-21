// 运行在服务端
// 接收文件数据
// 写入服务器得文件数据

let http = require("http");
let fs = require("fs");
const path = require('path');
let unzipper = require('unzipper');
const querystring = require('querystring');
const https = require('https');


//2、auth路由：接收code，用code+client_id+client_secret换token
function auth(request, respone) {
    let query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1]);
    getToken(query.code, function (info) {
        console.log(info);
        respone.write(`<a href='http://localhost:3002/?token=${info.access_token}'>publish</a>`);
        respone.end();
    })
}
// Iv1.817015200f22d35b
// b61fe29a2159d99895f3d9e28e44f97571e79071
// POST https://github.com/login/oauth/access_token
function getToken(code, callback) {
    let request = https.request({
        hostname: "github.com",
        path: `/login/oauth/access_token?code=${code}&client_id=Iv1.817015200f22d35b&client_secret=b61fe29a2159d99895f3d9e28e44f97571e79071`,
        port: 443,
        method: "POST"
    }, function (response) {
        let body = '';
        response.on('data', chunk => {
            body += (chunk.toString());
        })
        response.on("end", chunk => {
            callback(querystring.parse(body));
        })
        response.on("error", error => {
            console.log(error);
        })
    });
    request.end();
}
function getUser(token, callback) {
    // Authorization: token OAUTH-TOKEN
    // GET https://api.github.com/user
    let request = https.request({
        hostname: "api.github.com",
        path: `/user`,
        port: 443,
        method: "GET",
        headers: {
            "Authorization": `token ${token}`,
            "User-Agent": `toy-publish`
        }
    }, function (response) {
        let body = '';
        response.on('data', chunk => {
            body += (chunk.toString());
        })
        response.on("end", chunk => {
            console.log(body);
            callback(JSON.parse(body));
        })
        response.on("error", error => {
            console.log(error);
        })
    });
    request.end();
}
//4、publish路由 ： 用token获取用户信息，检查权限，接受发布
function publish(request, response) {
    let query = querystring.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1])
    if (query.token) {
        getUser(query.token, info => {
            if (info.login === 'IVANLEE99') {
                request.pipe(unzipper.Extract({ path: path.resolve(__dirname, '../server_20210220/public/sample/') }));
                request.on("end", chunk => {
                    response.end("success")
                })
            }
        })
    }

    // request.pipe(outFile);
}
http.createServer(function (request, respone) {
    if (request.url.match(/^\/auth\?/)) {
        return auth(request, respone);
    }

    if (request.url.match(/^\/publish\?/)) {
        return publish(request, respone)
    }
    // console.log(request.headers);
    // let outFile = fs.createWriteStream("../server_20210220/public/tmp.zip")
    // request.pipe(outFile);
    // request.pipe(unzipper.Extract({ path: '../server_20210220/public/' }));
    // request.on("data", chunk => {
    //     outFile.write(chunk);
    // })
    // request.on("end", chunk => {
    //     // outFile.write(chunk);
    //     outFile.end();
    //     respone.end("Success");
    // })
}).listen(3001);