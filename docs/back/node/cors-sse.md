# Cors 跨域
>跨域资源共享（Cross-Origin Resource Sharing，CORS）是一种机制，用于在浏览器中实现跨域请求访问资源的权限控制。当一个网页通过 XMLHttpRequest 或 Fetch API 发起跨域请求时，浏览器会根据同源策略（Same-Origin Policy）进行限制。同源策略要求请求的源（协议、域名和端口）必须与资源的源相同，否则请求会被浏览器拒绝

##  如何发生跨域
``` js
//前端
fetch('http://localhost:3000/info').then(res=>{
    return res.json()
}).then(res=>{
    console.log(res)
})


//后端
import express from 'express'
const app = express()
app.get('/info', (req, res) => {
    res.json({
        code: 200
    })
})
app.listen(3000, () => {
    console.log('http://localhost:3000')
})
```
## 处理方法
``` js
Access-Control-Allow-Origin: * | Origin
// express 中 use中间件
app.use('*',(req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:5500') //允许localhost 5500 访问
    next()
})

```
## 特殊注意
因为 `application/json`  不属于cors 范畴需要手动支持
```js

'Access-Control-Allow-Headers','Content-Type'

```



# SSE技术 

>Server-Sent Events（SSE）是一种在客户端和服务器之间实现单向事件流的机制，允许服务器主动向客户端发送事件数据。在 SSE 中，可以使用自定义事件（Custom Events）来发送具有特定类型的事件数据。

 

webSocket属于全双工通讯，也就是前端可以给后端实时发送，后端也可以给前端实时发送，SSE属于单工通讯，后端可以给前端实时发送

## 创建一个SSE通讯

express 增加该响应头text/event-stream就变成了sse event 事件名称 data 发送的数据

``` js
app.get('/sse',(req,res)=>{
    res.setHeader('Content-Type', 'text/event-stream')
    res.status(200)
    setInterval(() => {
        res.write('event: test\n')
        res.write('data: ' + new Date().getTime() + '\n\n')
    }, 1000)
})
```

## 前端接收
``` js
const sse = new EventSource('http://localhost:3000/sse')
sse.addEventListener('test', (event) => {
    console.log(event.data)
})

```

默认是`message `  只要按照格式进行SSE格式进行书写即可改名

## 查看结果

通过F12 开发者通过看控制台的方式去处理