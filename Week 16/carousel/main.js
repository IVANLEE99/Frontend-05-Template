import { Carousel } from './Carousel.js'
import { Button } from './Button.js'
import { List } from './List.js'
import { Component, createElement } from './framework.js'
import { Timeline, Animation } from './animation.js'
let d = [
    {
        img: "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
        title: "cat1",
        url: "http://47.115.74.206:9080/"
    },
    {
        img: "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
        title: "cat2",
        url: "http://47.115.74.206:9080/"
    },
    {
        img: "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
        title: "cat3",
        url: "http://47.115.74.206:9080/"
    },
    {
        img: "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
        title: "cat4",
        url: "http://47.115.74.206:9080/"
    },
]

//轮播图
let a = <Carousel src={d}
    onChange={event => console.log(event.detail.position)}
    onClick={event => window.location.href = event.detail.data.url} />

//按钮组件
// let a = <Button>contents</Button>

//children模板
// let a = <List data={d}>{(record) => <div><img src={record.img} /><a href={record.url}>{record.title}</a></div>}</List>
a.mountTo(document.body);
