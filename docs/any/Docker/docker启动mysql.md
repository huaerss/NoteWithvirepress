# Dokcer启动mysql

## 拉取mysql镜像

```shell
docker pull mysql
```

## 启动mysql容器

```shell
docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -d -p 3306:3306 mysql:latest
```

`docker run`: 这是启动 Docker 容器的命令。
`--name some-mysql`: 为容器指定一个名称，方便后续管理。您可以选择任何您喜欢的名称。
`-e MYSQL_ROOT_PASSWORD=your_password`: 设置 MySQL 的 root 用户密码。
`-d`: 在后台运行容器 (detached mode)。
`-p` 3306:3306: 将容器的 3306 端口映射到主机的 3306 端口，以便您可以从主机访问 MySQL。
`mysql:latest` :指定要使用的镜像名称和标签。这里我们使用最新版本的 MySQL 镜像。

## 启动后返回容器ID 并查看容器是否启动 并进入容器

成功启动容器后，您将看到容器的 ID。您可以使用此 ID 来查看容器的详细信息，或者停止容器。

```shell
docker logs mysql
```

### 进入容器

``` shell
docker exec -it mysql bash

```

### 查看正在运行的容器

```shell

docker ps

```

## 访问mysql 并允许远程访问

```shell
mysql -h 127.0.0.1 -p 3306 -u root -p 123456
```

### 允许远程访问

1.进入容器

```shell
docker exec -it mysql bash
```

2.连接mysql

```shell
mysql -uroot -p123456
```

3.修改 `mysql.user` 表:

```sql
use mysql;
update user set host='%' where user='root';
flush privileges;
```

## 其他指令 可以先进入容器后再执行

进入容器后可以只执行 -e 后面的命令

### 修改密码

```shell
docker exec -it mysql mysql -uroot -p123456 -e "ALTER USER 'root'@'localhost' IDENTIFIED BY 'newpassword';"
```

`-e`: 执行sql语句

刷新权限

```shell
docker exec -it mysql mysql -uroot -p123456 -e "flush privileges;"
```
