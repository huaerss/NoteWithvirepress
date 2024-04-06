# 直接使用服务器部署

## 更新node版本

使用Linux发行版的包管理器更新Node.js:
在Ubuntu/Debian上

``` shell
sudo apt update
sudo apt install nodejs
```

在CentOS/RHEL上:

``` shell
sudo yum update
sudo yum install nodejs
```

## 安装PM2

``` shell
npm install pm2 -g
```

## 启动应用

``` shell
pm2 start app.js
// 改名pm2 
pm2 start app.js --name my-api
```

## 重启应用

``` shell
pm2 restart app_name
```
