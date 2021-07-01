---
title: Arduino与Assembly
date: 2019-11-01 16:22:08
tags: 
- 单片机
categories: 
- 2019
- KCL
- Arduino
password: password
top: 1000
---



## Lab--汇编语言初识&语法结构
<!--more-->
### 第一个程序的理解
 1. .equ SREG,0x3f     :treat the label SREG as 0x3f
 2. .org 0     :the start address
 3. r16\-\-r31,PPRB,PORTC等等在microprocessor's CPU也就是Atmega328p里



## lab2 portb 连led
### 缩写
1. #### SREG : status register
2. #### Rd : Destination register in the register file

### arduino里几个概念
1. #### ATmega是Arduino里面的正方形芯片,microcontroller
2. #### PORTB 
        : an 8-bit I/O port with internal pull-up resistors, 位于: 正方形芯片的周边小点(8个:PB7:0)
        它们 连接着the external digital pins
| Atemega pin  |  Nano digital pin |
| -----------  |  --------------   |
|     PB0(在芯片的四周))      |      D8(在nano的两周,可连接面包板的线)           |
|     PB1      |      D9           |
| ....         |     ....          |
3. #### digital pin:
        位于nona两周: I/O interface(HIGH/LOW)
4. CPU怎么链接PORTB: databus
5. DDRB跟PORTB,PORTC等等地位相等,都在register里,都是一个一个的寄存器,都是8bit.(each port on Atmega328 has a **Data Direction Register**)
6. DDRB和PORTB的**关系**:
     each bit of in PORTB has a corresponding input or output mode bit in DDRB.
## Lab3 portc 很好理解 读value

## 疑问疑惑
### 程序内的语法: 
1. main,mainloop的意思
2. rjmp?
3. brlo **lessthan**? 为什么是lessthan,brlo本身不就是当lower时吗
4. .org 0,地址0 是跟0x06等等同一地位吗,那我在.equ里面最小的那个地址开始可以吗 \-\-11.3
### led_on.s:
1. SREG的作用是什么,设置为0要干什么
### 第三个程序:portc(lab3)
1. 从PINC中读取数据到PORTC,那pinc的数据从何而来?
