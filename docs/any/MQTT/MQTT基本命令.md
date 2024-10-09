# MQTT 基本命令

## 1. 连接服务器 以及查询 MQTT 服务状态

```shell
mosquitto_sub -h
```

查询状态

```shell
sudo systemctl status mosquitto
```

## 2. 监听主题

```shell
mosquitto_sub -h <MQTT服务器地址> -t <主题名> -v

mosquitto_sub -h localhost  -p 7799 -t test/topic -v

```

## 3. 发布消息

```shell
mosquitto_pub -h <MQTT服务器地址> -t <主题名> -m "<消息内容>"
mosquitto_pub -h localhost -p 7799 -t test/topic -m "Hello, MQTT!"
```

