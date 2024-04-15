# Git个人使用中的常用命令

## git pull 时报错

```sh
error: cannot lock ref 'refs/remotes/origin/master': ref refs/remotes/origin/master is at 024542440b5c7685b483b822cb8d99eed08cddf5 but expected d19ed0a711b4c6581635f869275a0fd8ac2c141b
From https://github.com/huaerss/NoteWithvirepress
 ! d19ed0a..0245424  master     -> origin/master  (unable to update local ref)
```

根据错误信息，这是由于本地仓库中 refs/remotes/origin/master 引用的提交 ID 与远程仓库的实际提交 ID 不匹配导致的。可以通过以下步骤尝试解决：

### 删除本地的 master 分支引用

这会删除本地仓库中 origin/master 分支的引用。

```sh

git update-ref -d refs/remotes/origin/master 
```

### 重新获取远程仓库的最新信息

这会从远程仓库重新获取所有分支和标签的最新信息，并更新本地的引用。

```sh
git fetch origin
```

### 重新pull
  
  ```sh
  git pull
  ```

### 作为最后的手段，如果以上方法都无法解决，可以考虑删除本地仓库，重新克隆一份

```sh
rm -rf NoteWithvirepress 
git clone https://github.com/huaerss/NoteWithvirepress.git
```

## git 冲突解决

>一般是本地文件和远程文件同时修改了同一行代码，导致冲突。

```sh
error:Your local changes to the following files would be overwritten by merge:
        docs/back/node-frame/cookie+验证码.md
Please commit your changes or stash them before you can merge.
Aborting
```

### 1.提交本地修改

```sh
git add docs/back/node-frame/cookie+验证码.md
git commit -m "你的提交信息"
```

将本地修改提交为一个新的提交，然后再次执行 git pull。Git 会尝试自动合并远程的更改。如果合并成功，就可以继续工作了。如果出现合并冲突，需要手动解决冲突，然后提交合并结果。

### 2.暂存本地修改

```sh
git stash
git pull
git stash pop 
```

使用 git stash 将本地修改暂存起来

git pull 拉取远程更改。拉取完成后

使用 git stash pop 将暂存的修改恢复到工作目录。如果出现合并冲突，需要手动解决冲突，然后提交合并结果。

### 3.丢弃本地修改

```sh
git checkout -- docs/back/node-frame/cookie+验证码.md
git pull
```

如果你不需要保留本地的修改，可以使用 git checkout 命令直接丢弃本地的修改。然后再执行 git pull 拉取远程更改。
