---
title: MatLab
date: 2019-10-30 19:50:22
tags: 
- MatLab
categories:
- 2019
- KCL
- MatLab
password: password
top: false
---
# 疑问
<!--more-->

## 创建x轴的数组
s = linspace()
与直接\[ : : \]
## 绘制函数图象时
syms变量--fplot
与直接设置x和y对应数组--plot
## 设置坐标轴范围时
xlim(xmin ymin)和ylim()
与aixs\[xmin xmax ymin ymax\]
是一个道理
## 绘制图像的几个函数
- plot()
- line():画直线型
- polar():极坐标下绘曲线
## 求函数一段范围内的极值
- lab7
- 感觉有几种方法
- 画分段函数的几种方法:正常拆分开;@x

# 矩阵
## 创建矩阵的方法
1. B=a:h:b;  其中a,b代表一维矩阵（向量）的区间，h为步宽
2. zeros(行数,列数).ones,rand同.
3. 
4. 