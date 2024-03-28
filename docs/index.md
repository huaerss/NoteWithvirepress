---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: All of them.
  text: 什么都沾点
  tagline: 基于 VitePress 的导航页面模板
  image:
    src: /logo.png
    alt: everything
  actions:
    - text: 开始学习
      link: '#'

    - text: 测试页
      link: /test
      theme: alt
features:
  - icon: 📖
    title: 前端
    details: 整理前端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: https://notes.fe-mm.com/fe/javascript/types
    linkText: 前端常用知识
  - icon: 📘
    title: 后端
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: https://notes.fe-mm.com/analysis/utils/only-allow
    linkText: 源码阅读
  - icon: 💡
    title: 杂食 / 工具 
    details: 在各种地方中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />
    link: /
    linkText: everything

---

<style>
/*爱的魔力转圈圈*/
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
