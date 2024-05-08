# 使用Nginx配置全局https

## 需要用的库

``` sh
sudo apt-get install certbot python3-certbot-nginx
```

## 申请证书

``` sh
sudo certbot --nginx    
```

可以根据提示输入邮箱，同意协议，选择需要申请证书的域名，然后就可以申请成功了。

## 成功后提示

![https1.png](./img/https1.png)
