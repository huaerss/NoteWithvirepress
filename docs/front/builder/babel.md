# 构建工具 Bable

Babel 是一个 JavaScript 编译器，可以将 ES6/ES7 代码转换为 ES5 代码，从而可以在现有环境中运行。 Babel 本身不具备任何转换功能，它需要通过插件的方式来支持新的语法特性。

流程如下：

1. Babel 解析代码，生成 AST
2. Babel 利用插件对 AST 进行转换, 生成新的 AST
3. Babel 生成新的代码

[Babel 的工具包](https://babeljs.io/docs/babel-parser)

## AST 抽象语法树

它可以让 Babel 更好地理解代码的结构和含义。通过遍历 AST，Babel 可以精确地定位需要转换的代码片段，并根据插件的规则进行相应的转换操作。这种基于语法树的转换方式比简单的字符串替换更加健壮和可靠。

查看 AST 的方式有很多种，可以通过 Babel 提供的在线工具 [AST Explorer](https://astexplorer.net/) 来查看。

例如，下面是一个简单的 ES6 代码片段：

```js
const code = `const foo = (a, b) => a + b;`
```

编译后的 ES5 代码：

```js
const code = `var foo = function foo(a, b) {
  return a + b;
};`
```

抽象语法树的格式为

```json
{
  "type": "Program", // 程序
  "body": [
    // 代码块
    {
      "type": "VariableDeclaration", // 变量声明
      "declarations": [
        // 记录声明的变量
        {
          "type": "VariableDeclarator", // 变量声明
          "id": {
            // 标识符
            "type": "Identifier",
            "name": "foo"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "a"
              },
              {
                "type": "Identifier",
                "name": "b"
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "name": "a"
              },
              "right": {
                "type": "Identifier",
                "name": "b"
              }
            },
            "generator": false,
            "expression": true,
            "async": false
          }
        }
      ],
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```

## 安装 Babel 语法转换插件

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

- `@babel/core` 是 Babel 的核心模块，提供了 Babel 的转换 API
- `@babel/cli` 是 Babel 的命令行工具
- `@babel/preset-env` 是 Babel 的预设插件，包含了所有转换 ES6/ES7/ES8 语法的插件

## 使用 Babel

1.写入需要转换的代码

```js
const a = () => {
  console.log('hello world')
}
```

2.使用 Babel 转换代码

```js
import fs from 'fs'
import babel from '@babel/core'
import presetEnv from '@babel/preset-env'
const code = fs.readFileSync('./arrow.js', 'utf8')
const transformFunction = (t) => {
  console.log(t)
}
const result = babel.transform(code, {
  //usage 就是按需引入
  //entry 就是就手动引入
  presets: [[presetEnv, { useBuiltIns: 'usage', corejs: 3 }]], // 这句话的意思是使用@babel/preset-env这个插件 里面的useBuiltIns属性是usage 也就是按需引入 corejs用来模拟新的特性的代码 3是版本号
})
console.log(result.code)
```

3.他是如何实现 ES6 转 ES5 的呢？
例如一个 filter 方法 他会先判断是否支持 ES6 的 filter 方法，如果支持就直接使用 ES6 的 filter 方法，如果不支持就使用自己写的 filter 方法 在 Array.prototype 上添加一个 filter 方法

```js
if (!Array.prototype.filter) {
  Array.prototype.filter = function (fn) {
    var arr = this
    var result = []
    for (var i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) {
        result.push(arr[i])
      }
    }
    return result
  }
}
```
