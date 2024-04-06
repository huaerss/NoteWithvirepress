# Node 爬虫 +python

## API讲解

pupperteer 所有API 都是promise对象 所以需要用await 或者.then()来获取数据

type: 选择器 一般用于输入框

```js
type('selector','内容') //选择器
```

pages.$(selector)运用

``` js
`$` == document.querySelector
`$$` == document.querySelectorAll

```

## 安装node 爬虫库

``` js
pnpm install puppeteer #爬虫 | 自动化UI测试
```

> Puppeteer是一个由Google开发和维护的Node.js库，它提供了一个高级的API，用于通过Headless Chrome或Chromium控制和自动化网页操作。它可以模拟用户在浏览器中的交互行为，例如点击、填写表单、截屏、生成PDF等，同时还能够获取网页的内容和执行JavaScript代码。

## 初始化puppeteer

``` js  
import puppteer from 'puppeteer';
const brower = await puppteer.launch({
    headless: false //设置无头模式
})
const page = await brower.newPage();
page.setViewport({ width: 1920, height: 1080 }); //设置页面宽高

```

## 开始获取数据

``` js
const navlist = await page.$$('.side-navigator-wrap .nav-item-wrap span')

for (let el of navlist) {
    const data = await el.getProperty('innerText')
    const value = await data.jsonValue()
    if (value.trim() == '前端') {
        await el.click()
    }
}
```
