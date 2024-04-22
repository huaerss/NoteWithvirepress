---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: All of them.
  text: 什么都沾点
  tagline: 个人积累以及学习笔记
  image:
    src: /logo.png
    link: '/'
    alt: everything
  actions:
    - text: 开始学习
      link: '/front/'

features:
  - icon: 📖
    title: 前端
    details: 整理前端常用知识点
    link: '/front/'
    linkText: 前端常用知识
  - icon: 📘
    title: 后端
    details: 个人后端学习笔记
    link: /back/
    linkText: 源码阅读
  - icon: 💡
    title: 杂食 / 工具 
    details: 在各种地方中学到的一切<small>（常用库/工具/技巧等）</small><br />
    link: /any/
    linkText: everything
  - icon: 📚
    title: NestJS
    details: <small>NestJS 是一个渐进式的企业级 Node.js 和 TypeScript 框架，它融合了 Angular 的结构和 Express 的简洁性。</small> 
    link: /back/node-frame/Nest创建
    linkText: NestJs
  - icon: 🎯
    title: 操场
    details: 代码在线运行服务, 可以执行进行代码片段测试
    link: /playground/
    linkText: text
  - icon: 😭
    title: 
    details:
    link: /back/node-frame/Nest创建
    linkText: 


---

<style>
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
