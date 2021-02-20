//放在本地
// 读取本地文件
//向服务器发送数据
let http = require("http");

let fs = require("fs");

let archiver = require('archiver');
const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});
archive.directory("./sample/", false);
archive.finalize();
// archive.pipe(fs.createWriteStream("tmp.zip"))
let request = http.request({
    // hostname: '47.115.74.206',
    hostname: '127.0.0.1',
    port: 3001,
    method: "POST",
    headers: {
        "Content-Type": "application/octet-stream",
        // "Content-Length": stats.size
    }
}, response => {
    console.log(response);
});

archive.pipe(request);

// let file = fs.createReadStream("./sample.html");
// file.pipe(request);
// file.on("data", chunk => {
//     console.log(chunk.toString());
//     request.write(chunk);
// })

// file.on('end', chunk => {
//     request.end(chunk);
// })
//获取文件大小

// fs.stat("./sample.html", (err, stats) => {

// })
