#学习笔记

##  chmod 添加执行权限
    chmod +x ./pre-commit

## eslint

    https://eslint.org/docs/developer-guide/nodejs-api

## git stash 命令

    git stash push -k
    git stash pop

    常规 git stash 的一个限制是它会一下暂存所有的文件。有时，只备份某些文件更为方便，让另外一些与代码库保持一致。一个非常有用的技巧，用来备份部分文件：

    1、add 那些你不想备份的文件（例如： git add file1.js, file2.js）
    2、调用 git stash –keep-index。只会备份那些没有被add的文件。
    3、调用 git reset 取消已经add的文件的备份，继续自己的工作。


    git stash: 备份当前的工作区的内容，从最近的一次提交中读取相关内容，让工作区保证和上次提交的内容一致。同时，将当前的工作区内容保存到Git栈中。


    git stash pop: 从Git栈中读取最近一次保存的内容，恢复工作区的相关内容。由于可能存在多个Stash的内容，所以用栈来管理，pop会从最近的一个stash中读取内容并恢复。
    git stash list: 显示Git栈内的所有备份，可以利用这个列表来决定从那个地方恢复。
    git stash clear: 清空Git栈。此时使用gitg等图形化工具会发现，原来stash的哪些节点都消失了。

## web hooks

    https://docs.gitlab.com/ee/user/project/integrations/webhooks.html

## 无头浏览器

    https://developers.google.com/web/updates/2017/04/headless-chrome
    https://www.npmjs.com/package/phantomjs
    https://www.npmjs.com/package/puppeteer
    https://www.npmjs.com/package/nightwatch

## 总结
    finished，师傅领进门，修行在个人。奈何公司用的是svn，估摸着大同小异。