# 生成验证码并用cookie + session保存

## 安装必要的依赖包

1.安装生成验证码的包,如svg-captcha

```js
pnpm install svg-captcha
```

2.安装cookie解析的中间件cookie-parser

```js
pnpm install cookie-parser
```

## 生成验证码

```js
const svgCaptcha = require('svg-captcha');

// 创建验证码
router.get('/captcha', (req, res) => {  
  const captcha = svgCaptcha.create({
    size: 4, // 验证码长度
    ignoreChars: '0o1i', // 验证码字符中排除 0o1i
    noise: 2, // 干扰线条的数量
    color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
    background: '#eee' // 验证码图片背景颜色
  });

  // 保存到session
  req.session = captcha.text.toLowerCase(); 

  // 保存到cookie
  res.cookie('captcha', req.session); 

  res.type('svg');
  res.send(captcha.data);
});
```
