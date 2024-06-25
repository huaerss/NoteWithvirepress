# Docker-compose 综合指令

## 启动服务的指令

- `docker-compose up`：启动服务。
- `docker-compose up -d`：以后台模式运行服务。
- `docker-compose up --build`：在启动前重新构建服务的镜像。
- `docker-compose up --build -d`：在后台模式下启动并重新构建服务的镜像。

## 停止服务的指令

- `docker-compose down`：停止服务并删除容器、网络、卷和镜像。
- `docker-compose stop <service_name>`：停止特定服务。

## 构建服务的指令

- `docker-compose build`：构建或重新构建服务。

## 查看日志的指令

- `docker-compose logs`：查看所有服务的日志。
- `docker-compose logs <service_name>`：查看特定服务的日志。

## 拉取镜像的指令

- `docker-compose pull`：拉取服务的最新镜像。

## 列出服务的指令

- `docker-compose ps`：列出所有运行中的服务。

## 删除容器的指令

- `docker-compose rm`：删除停止的容器。

## 显示配置的指令

- `docker-compose config`：显示当前配置的所有服务。

## 扩展服务实例的指令

- `docker-compose scale <service_name>=<number>`：扩展指定服务的实例数量。
