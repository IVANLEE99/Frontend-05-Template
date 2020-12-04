# 学习笔记

## 有限状态机

    1、trap 
    function end(){
        return end;
    }


    2、recomsume
    function FoundA(C){
        if(c=='b') {return FoundB;}
        else{
            return start(c);
        }
        
    }

    3、当前状态不可行，则根据状态值跳转到上一次状态

## 请求体格式

    POST / HTTP/1.1
    X-Foo2: customed
    Content-Type: application/x-www-form-urlencoded
    Content-Length: 11

    name=youngs


## 响应体


    HTTP/1.1 200 OK
    Content-Type: text/html
    Date: Thu, 03 Dec 2020 16:35:37 GMT
    Connection: keep-alive
    Transfer-Encoding: chunked

    c
    hello world

    0

## [http详解](https://www.cnblogs.com/an-wen/p/11180076.html)

