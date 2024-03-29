# nginx 常用命令  

## 别忘记重启

``` sh
 sudo nginx -s reload 
```

### 创建nginx 并且遍历子目录为nginx群组

``` sh
  sudo chown -R nginx:nginx /var/www/html/note
```

### nginx 修改权限权限  

-R 或 --recursive：递归更改指定目录及其所有子目录中的文件的权限。
-v 或 --verbose：显示详细输出，告诉用户 chmod 命令正在更改哪些文件的权限。
-c 或 --changes：类似于 -v，但只在确实更改了权限时才给出反馈。
-f 或 --silent、--quiet：不显示大多数错误信息。
例如，755 表示所有者有全部权限（7），组有读取和执行权限（5），其他人也有读取和执行权限（5）。

```  sh
    sudo chmod -R 755 /var/www/html/note

```

### Nginx错误日志

 ``` sh
    sudo tail -f /var/log/nginx/error.log
    sudo nginx -s reload  
```

### Nginx 复制粘贴 / 剪切

``` sh
   sudo cp -r /home/vmhk/note/* /var/www/html/note/
```

### 删除文件

删除单个文件：

```sh
rm filename
```

删除多个文件：

```sh
rm filename1 filename2 filename3
```

删除匹配特定模式的文件（例如，删除所有 .txt 文件）：

```sh
rm *.txt
```

要删除目录及其中的文件和子目录，可以使用 -r（递归）选项：

```sh
rm -r directoryname
```

如果你希望在删除文件或目录之前收到提示（以防止意外删除），可以使用 -i 选项：

```sh
rm -i filename
```
