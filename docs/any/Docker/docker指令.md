# Dokcer常用指令

## 查看Docker版本

```shell
docker --version
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
