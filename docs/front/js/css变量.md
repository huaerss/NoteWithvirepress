# CSS 变量

## 什么是 CSS 变量

CSS 变量是一种可以在 CSS 中使用的变量，它们以 `--` 开头，可以在整个文档中使用。

## 如何定义 CSS 变量

```css
:root {
  --main-color: #000;
}
```

## 使用 CSS 变量

```css
.element {
  color: var(--main-color);
}
```

## 通过 JS 修改 CSS 变量

```js
// 修改整个文档的 CSS 变量
document.documentElement.style.setProperty('--main-color', '#fff')
// 修改指定元素的 CSS 变量
element.style.setProperty('--main-color', '#fff')
```

## 示例

### 移动的小球

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>移动的小球</title>
    <style>
      .ball {
        width: 50px;
        height: 50px;
        background-color: #ff5733;
        border-radius: 50%;
        position: absolute;
        left: 0;
        animation: moveBall 2s linear infinite alternate;
      }

      @keyframes moveBall {
        from {
          left: 0;
        }

        to {
          left: calc(var(--width));
        }
      }

      .container {
        width: 80%;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="ball"></div>
    </div>
  </body>
  <script>
    const container = document.querySelector('.container')
    const ball = document.querySelector('.ball')
    ball.style.setProperty('--width', `${container.clientWidth}px`) // 注意这个--width 是只有当前元素 生效 或者子元素才能生效
  </script>
</html>
```
