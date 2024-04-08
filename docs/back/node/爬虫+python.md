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

## Node中调用python

使用child_process库

``` js
import { spawn } from 'child_process'
const python = spawn('python3', ['captcha_ocr.py']);
python.stdout.on('data', (data) => {  // 获取python输出 

    result = data.toString();
});

python.stderr.on('data', (data) => { // 获取python错误输出
    console.error(`stderr: ${data}`);
});

python.on('close', (code) => {  // 获取python退出码
    if (code !== 0) {  // 退出码不为0
        reject(new Error(`Python script exited with code ${code}`)); // 抛出错误
    }
    resolve(result.trim());
});

```

## python 中

使用ddddorc库 识别验证码

``` py

import ddddocr

def recognize_captcha(image_path): // 识别验证码
    ocr = ddddocr.DdddOcr()
    with open(image_path, 'rb') as f:
        img_bytes = f.read()

    res = ocr.classification(img_bytes)
    return res

if __name__ == '__main__':  // 入口 
    image_path = 'captcha.png'
    code = recognize_captcha(image_path)
    print(code)
```

with open(image_path, 'rb') as f:  // 第一个参数是文件路径，第二个参数是打开文件的模式 as f是给文件对象起的名字

文件模式如下:
r: 以只读方式打开文件。文件的指针将会放在文件的开头。这是**默认模式**。
rb: 以二进制格式打开一个文件用于只读。文件指针将会放在文件的开头。这是默认模式。
r+: 打开一个文件用于读写。文件指针将会放在文件的开头。
rb+:以二进制格式打开一个文件用于读写。文件指针将会放在文件的开头。
w: 打开一个文件只用于写入。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。
wb: 以二进制格式打开一个文件只用于写入。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。
w+: 打开一个文件用于读写。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。
wb+:以二进制格式打开一个文件用于读写。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。
a: 打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。
ab: 以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。
a+: 打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。
ab+:以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。如果该文件不存在，创建新文件用于读写。
