#学习笔记

http://expressjs.com/en/starter/generator.html

service ssh start

## scp 命令
    1、从本地复制到远程
    命令格式：

    scp local_file remote_username@remote_ip:remote_folder 
    或者 
    scp local_file remote_username@remote_ip:remote_file 
    或者 
    scp local_file remote_ip:remote_folder 
    或者 
    scp local_file remote_ip:remote_file 
    第1,2个指定了用户名，命令执行后需要再输入密码，第1个仅指定了远程的目录，文件名字不变，第2个指定了文件名；
    第3,4个没有指定用户名，命令执行后需要输入用户名和密码，第3个仅指定了远程的目录，文件名字不变，第4个指定了文件名；
    应用实例：

    scp /home/space/music/1.mp3 root@www.runoob.com:/home/root/others/music 
    scp /home/space/music/1.mp3 root@www.runoob.com:/home/root/others/music/001.mp3 
    scp /home/space/music/1.mp3 www.runoob.com:/home/root/others/music 
    scp /home/space/music/1.mp3 www.runoob.com:/home/root/others/music/001.mp3 
    复制目录命令格式：

    scp -r local_folder remote_username@remote_ip:remote_folder 
    或者 
    scp -r local_folder remote_ip:remote_folder 
    第1个指定了用户名，命令执行后需要再输入密码；
    第2个没有指定用户名，命令执行后需要输入用户名和密码；
    应用实例：

    scp -r /home/space/music/ root@www.runoob.com:/home/root/others/ 
    scp -r /home/space/music/ www.runoob.com:/home/root/others/ 
    上面命令将本地 music 目录复制到远程 others 目录下。

    2、从远程复制到本地
    从远程复制到本地，只要将从本地复制到远程的命令的后2个参数调换顺序即可，如下实例

    应用实例：

    scp root@www.runoob.com:/home/root/others/music /home/space/music/1.mp3 
    scp -r www.runoob.com:/home/root/others/ /home/space/music/
    说明
    1.如果远程服务器防火墙有为scp命令设置了指定的端口，我们需要使用 -P 参数来设置命令的端口号，命令格式如下：

    #scp 命令使用端口号 4588
    scp -P 4588 remote@www.runoob.com:/usr/local/sin.sh /home/administrator

## node 压缩和解压

https://www.npmjs.com/package/archiver

https://www.npmjs.com/package/unzipper


通过nodejs的child_process识别环境, 用不同的CLI打开默认浏览器:

    var child_process = require("child_process");

    var url = "http://127.0.0.1",
        port=8080,
        cmd = '';

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

        child_process.exec(cmd + ' ' + url + ':' + port);

# github 开发文档 github 鉴权流程

    https://docs.github.com/en/developers/apps/identifying-and-authorizing-users-for-github-apps

    1、跳转到授权页,得到授权码 code
    2、code + client_id + client_secret 获取 access_token,
    3、用accent_token 获取用户信息
    4、根据用户 信息鉴权
