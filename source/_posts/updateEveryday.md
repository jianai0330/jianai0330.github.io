---
title: 系统们的更新日志
date: 2021-07-05 09:44:13
tag:
- ubuntu系统问题
categories:
- UbuntuRecovery
password: password
top: 50
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
