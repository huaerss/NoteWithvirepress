# Dokcer常用指令

## 查看Docker版本

```shell
docker --version
```

## 安装镜像以及查看镜像的版本

```shell
docker search <镜像名>
docker pull <镜像名>:<标签>
docker pull nginx:latest // 安装nginx镜像
docker images // 查看所有镜像
```

## 构建自己的docker镜像

```shell
docker build -t <你的应用名>:<标签> 
docker build -t my-node-app:latest . // 构建一个名为my-node-app的镜像
docker run -d -p 8080:8080 --name my-running-app my-node-app:latest

```

## 启动容器

```shell
docker run -d -p 8080:80 --name mynginx nginx  // 启动一个nginx容器 并映射到本地8080端口

```

## 查看正在运行的容器 ps命令

```shell
docker ps   // 查看正在运行的容器
docker ps -a // 查看所有容器
docker ps -l // 查看最后一次运行的容器
docker ps --format "{{.ID}}: {{.Names}}"
docker ps -q // 只显示容器ID
```

## 停止容器

### 停止所有正在运行的容器

```shell
docker stop 容器ID
dcoker stop $(docker ps -aq) // 停止所有容器 

```

这个命令的工作原理是：

`docker ps -aq` 会列出所有容器的ID（无论状态如何）。
`docker stop`命令会停止一个或多个容器。通过将所有容器ID传递给`docker stop`，它会停止所有容器。

### 删除所有容器

一旦所有容器都停止了，你可以使用以下命令删除它们：

```shell
docker rm $(docker ps -aq)
```

### 使用单个命令停止并删除所有容器

```shell
docker rm -f $(docker ps -aq)
```

`-f` 或`--force` 选项会强制停止运行中的容器，然后将其删除。

## 删除docker镜像

### 删除单个镜像

```shell
docker rmi <镜像ID>
```

### 删除所有镜像

```shell
docker rmi $(docker images -a -q)
```

`docker images -a -q`：列出所有镜像的 ID，-a 表示所有镜像（包括未使用的），-q 表示只输出镜像 ID。

`$(...)`：将 `docker images -a -q` 的输出作为 `docker rmi`命令的参数。

`docker rmi`：删除指定的镜像，这里使用`$(docker images -a -q)` 的输出作为参数，即删除所有镜像。
