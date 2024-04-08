# 通过cli创建nestjs项目

``` js
npm i -g @nestjs/cli  // 安装cli
nest new [项目名称]

```

## 启动项目 我们需要热更新 就启动npm run start:dev就可以了

``` js
  "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    ```
