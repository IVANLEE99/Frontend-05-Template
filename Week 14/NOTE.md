## 学习笔记

### 组件的基本知识 | 为组件添加JSX语法

    1、npm install --save-dev webpack babel-loader //按照webpack
    2、npm install --save-dev @babel/core @babel/preset-env //按照babel
    3、npm install --save-dev @babel/plugin-transform-react-jsx  //按照j
    4、配置webpack
    5、npm install --save-dev webpack-dev-server //自动监听文件变化自动打包

### 编程技巧
    1、获取一个固定在0-n中间的数，用取余方法
    let n = 10;
    let currentIndex = 0;
    ++currentIndex;
    let nextIndex = currentIndex % n;
    2、浏览器渲染的时间是16毫秒/帧,1000/60hz=16.666666666,一般屏幕的刷新频率是60hz每秒
    3、requestAnimationFrame和setTimeout详解及对比
    想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用window.requestAnimationFrame()
    window.cancelAnimationFrame()
    4、拖动事件监听三部曲
        this.root.addEventListener("mousedown", event => {
        let move = (e) => {
            console.log('mousemove');
        }

        let up = (e) => {
            console.log('mouseup');
            document.removeEventListener('mousemove', move);
            document.removeEventListener('mouseup', up);
        }
        console.log('down');
        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', up);
    })

### 
