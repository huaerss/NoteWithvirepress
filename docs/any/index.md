---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './data'
import { ref } from 'vue'
const data = ref([
  {
    title: '数据加载中..请等待3S左右',
  },
])
fetch("https://htmlpng-mmo-yxvdsihnpa.cn-shenzhen.fcapp.run",{
  method: "POST",
  body: JSON.stringify({
     type:'开发工具'
  })

})
.then(res => res.json())
.then(juejinList => {  
  data.value = juejinList
})
.catch(err => {
data.value = [
  {
    title: '暂停服务',
  }
]
})
</script>
<style src="./index.scss"></style>

# 工具 以及 技巧

`爬虫`

<template v-if="data.length" style='color:red'>
  <ul>
    <li v-for="(item,index) in data" :key="item.src" style=''>
      <a :href="item.src" target="_blank">{{ item.title }}</a>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    list-style: decimal;
    padding: 0;
  }
  li {

    margin: 10px 0;
  }
  a {
    color: #058F9C;
    /* text-decoration: none; */
  }
  a:hover {
    color: #f00;
  }

</style>
