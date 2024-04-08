# SVG转换格式

## SVG格式

``` js
<svg xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0,0,150,50"><rect width="100%" height="100%" fill="#eee"/><path d="M8 19 C78 3,80 23,146 10" stroke="#4fc1e7" fill="none"/><path d="M8 39 C76 48,95 37,137 38" stroke="#55badc" fill="none"/><path fill="#e15099" d="M62.85 28.63L62.91 28.69L57.05 28.81L57.10 28.86Q54.04 28.77 51.11 28.70L51.19 28.78L51.16 28.75Q51.20 35.37 49.15 40.89L49.17 40.91L49.26 41.01Q47.39 41.45 45.64 42.14L45.62 42.12L45.64 42.14Q48.50 36.51 48.50 29.85L48.47 29.82L48.32 29.67Q48.37 21.24 44.26 14.19L44.37 14.30L44.37 14.30Q45.74 14.94 48.21 15.74L48.33 15.87L48.39"/></svg>
```

## 转换格式

如果SVG是内联在HTML中的,可以用`document.querySelector('svg')`获取SVG元素,再用`XMLSerializer().serializeToString()`转成字符串
如果SVG是单独的文件,可以用FileReader读取文件内容
如果SVG是Base64编码的字符串,可以直接使用
将SVG内容转为Blob对象

## 把SVG字符串转为Blob对象,设置MIME type为image/svg+xml

``` js
const svgBlob = new Blob([svgString], {type: 'image/svg+xml;charset=utf-8'});
```

## 解决方法2

使用window.btoa()方法将字符串转为Base64编码,在拼接base64前缀

``` js
window.btoa(svgString)
'data:image/svg+xml;base64,' + window.btoa(data);

```
