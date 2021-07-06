---
title: 系统们的更新日志
date: 2021-07-05 09:44:13
tag:
- ubuntu系统问题
categories:
- UbuntuRecovery
password: password
top: 500
---


# 少出岔子 ok💢
<!-- more -->

1. 21.7.5
    1. [按e把splash后面的参数修改成了nomodeset](https://blog.csdn.net/weixin_43074462/article/details/100716511)
        - 但是是一次性的 不是一劳永逸
    2. 所以进入系统后编辑`sudo vi /etc/default/grub `, 修改为`GRUB_CMDLINE_LINUX_DEFAULT=“quiet splash nomodeset”`，最后更新`sudo update-grub`
        - 重启后顺利开机
        - 但是，开机第一幕自动grub没解决
    3. 解决自动进入grub
```
sudo update-grub
sudo grub-install /dev/sda
```

2. ## 写个博客更新日志
    1. 21.7.6 改了背景颜色（就在source里_data）[颜色](https://www.sioe.cn/yingyong/yanse-rgb-16/)
        - [前人经验](https://marmalade.vip/nextthemebeautify3.html)

```
├── .github            #git信息
├── languages          #多语言
|   ├── default.yml    #默认语言
|   └── zh-Hans.yml      #简体中文
|   └── zh-tw.yml      #繁体中文
├── layout             #布局，根目录下的*.ejs文件是对主页，分页，存档等的控制
|   ├── _custom        #可以自己修改的模板，覆盖原有模板
|   |   ├── _header.swig    #头部样式
|   |   ├── _sidebar.swig   #侧边栏样式
|   ├── _macro        #可以自己修改的模板，覆盖原有模板
|   |   ├── post.swig    #文章模板
|   |   ├── reward.swig    #打赏模板
|   |   ├── sidebar.swig   #侧边栏模板
|   ├── _partial       #局部的布局
|   |   ├── head       #头部模板
|   |   ├── search     #搜索模板
|   |   ├── share      #分享模板
|   ├── _script        #局部的布局
|   ├── _third-party   #第三方模板
|   ├── _layout.swig   #主页面模板
|   ├── index.swig     #主页面模板
|   ├── page           #页面模板
|   └── tag.swig       #tag模板
├── scripts            #script源码
|   ├── tags           #tags的script源码
|   ├── marge.js       #页面模板
├── source             #源码
|   ├── css            #css源码
|   |   ├── _common    #*.styl基础css
|   |   ├── _custom    #*.styl局部css
|   |   └── _mixins    #mixins的css
|   ├── fonts          #字体
|   ├── images         #图片
|   ├── uploads        #添加的文件
|   └── js             #javascript源代码
├── _config.yml        #主题配置文件
└── README.md          #用GitHub的都知道
```
1. search功能还不行
2. 进度条正中央的不见了
3. 密码不管用了
4. 标题和菜单颜色
