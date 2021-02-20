// 运行在服务端
// 接收文件数据
// 写入服务器得文件数据

let http = require("http");
// let fs = require("fs");
let unzipper = require('unzipper');


http.createServer(function (request, respone) {
    console.log(request.headers);
    // let outFile = fs.createWriteStream("../server_20210220/public/tmp.zip")
    // request.pipe(outFile);
    request.pipe(unzipper.Extract({ path: '../server_20210220/public/' }));
    // request.on("data", chunk => {
    //     outFile.write(chunk);
    // })
    // request.on("end", chunk => {
    //     // outFile.write(chunk);
    //     outFile.end();
    //     respone.end("Success");
    // })
}).listen(3001);