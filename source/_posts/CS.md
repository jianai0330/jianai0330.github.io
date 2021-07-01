---
title: CS
date: 2019-10-31 13:24:07
tags: 
- CS
categories: 
- 2019
- KCL
- CS
password: password
top: 200
---

# 一
## 冯诺依曼结构
<!--more-->
# 二 Assembly 1
1. CPU
    registers
    ALU
    control unit
    data bus
2. memory organisation
    byte-addressable/word-addressable
    RAM chips:random access memory  lengthXwidth
3. I/O
4. Bus
5. Clocks
    clock cycles
    clock frequency(互为倒数)
    CPU time
6. Interrupts
7. MARIE ISA
     - load: load contents of address x into AC
     - store: store the contents of AC at address X
     - add
     - subt
     - input/output
     - halt: 暂停
     - skipcond: skip next instruction on condition
     - jump X: load the value of X into PC
   那么load store jump好像没区别啊?
8. RTL: register transfer language
# 三 Assembly 2
1. fetch-decode-execute cycle
    PC
    MAR
    IR
    PC
    MAR
    MBR
2. Interrupt processing:PPT上有两个流程图
     flags register
     maskable
     Nonmaskable interrupts
3. 注意PPT里一个简单program在computer里运行的流程图!
4. Assemblers汇编器的工作流程:PPT!
     1st pass: symbol table
     2nd pass: the instructions are completed using the value from the **symbol table**.
     完成将汇编语言变成机器语言的过程
5. 一个汇编语言程序:main和mainloop是address label.?? main&mainloop的理解
```
      .equ SREG,0x3F
      .org
      main:   ldi r16,0
              out SREG,r16
      mainloop: rjmp mainloop
```
6. indirect addressing mode时:
7. JnS:operates by storing the current PC value in the first address of the routine itself,then continue with the instruction following that.    Jump-and-store.
    JumpI:return from the subroutine.
8. Clear
9.  if
10. for/while
11. Procedure invocation:f()
12. 两个samole constructs!!
# 四 instruction set architectures/pipelines
1. instruction formats
      1. little endian
      big endian:正常的
      比较: ///
      1. how the CPU store data(3种)CPU的特殊内部存储结构
        ![三种结构](https://wkretype.bdimg.com/retype/zoom/6a64416127d3240c8447ef13?pn=7&o=jpg_6&md5sum=1830449c7405e4dd2a4f0bb2c1b9644e&sign=df6cd0909c&png=126611-139487&jpg=805027-909057)
          1. stack: instructions and operands都从stack里拿,先进后出
              stack机器用1/0operand instructions
              Push X, Pop X
              Add/Mult
          2. accumulator: operand在memory中
          3. general purpose register: 比accumulator快,instructions更长:
              Memory-memory:
              register-memory:至少1个operand在register.
              load-store:无operand在memory.   
      2. 注意0123address machimes 的code(作业中有) 
2. instruction types

3. addressing: where the **operand** is located.(a constant, a register, memory location)
     immediate
     direct
     indirect
     indexed:final=base+index
4. instruction level Pipelining
    S = NKt<sub>p</sub> / (K+N-1)t<sub>p</sub>
    =K
    pipeline hazards隐患

# 五 performance measurement and analysis

  ##  PPT提纲
  1. 性能equation : 1. CPU time 2. Amdahl's law
  2. benchmarking: 
  3. 性能optimisation: 
   RISA&CISC(the two main kinds of ISA design)指令集类型
       **RISC**:reduced instruction set computers   **shorten time by reducing clock cycle**
          simple instructions,few addressing mode
       **CISC**:complex isc **reduce the number of instructions per program**
          complex instructions,many addressing modes
   Branch optimisation: pipeline hazards
     delayed branching
     Branch prediction
  4. disk性能: 概念: utilisation U<sub>d</sub>=r<sub>req</sub> / r<sub>srv</sub>
     FCFS: first-come,first served
     SSTF:shortest seek time first(出现starvation的概念)
     SCAN:not an acronym
     C-SCAN:circular SCAN
     LOOK/C-LOOK

     注意比较各种情况下的好坏
  ## 课上和课后总结理解难点

# 七 二进制① JoshM
  ## PPT提纲
  1. negative numbers in binary: 几个概念: unsighed binary
      formats: 
    1. signed magnitude  : MSB(the most significant bit) is a sign bit\-\-\-0+&1-  源码
        0的源码有两种:00000000&10000000,0的补码只有:00000000.
    2. One's complement. 反码
    3. Two's complement  补码(对于正数补码相同)
          [X]<sub>补</sub> = X + M
          这个M是mod M,模数M根据机器数的位数而定,位数为81则M=2<sup>8</sup>    
      对于负数:
      1.真值:将各位变反,then最低位+1
      2.源码: 符号位不变,其余各位变反then最低位+1
        11111111是-1的补码,10000000是-128的补码.0的补码只有一个:00000000.

    4. 注意优缺点!!!(PPT17)
    5. 各方式表示的范围(8bits)
        unsigned binary: 0 \-\-\-255
        源码:-127(11111111)\-\-\-+127(01111111)
        反码:-127(11111111)\-\-\-+127(01111111)
        补码:-128(10000000)\-\-\-+127(01111111)


  ## 二进制运算法则
    1. 10转2:减权定位
             除基取余(直到商为0):从最下面的余数开始!
       小数10转2:减权定位
                乘基取整:从最上面的余数开始
    2. 2转10: 按权相加(小数2转10同)
    3. 十转八:除基取余比较简单

# 八 binary ②
## 上课 PPT
1. unsigned: 
   1. unsigned addtion\-\-\-**overflow**
      - 是一个圈,从111再加就是000了
      - incrementinf by one **?!?!** 那几句话没理解PPT第5页
   2. subtraction (注意借位,需要练习)
       - first check the minus...???
   3. multipication
       - 感觉像分列式,分几个part乘,最后加一起.
   4. division: 很像十进制的除法方式.
2. signed magnitude arithmetric:
    1. 加
     1. check the **sign** firstly
     2. 如果**符号不同**: 比较绝对值大小\-\-\-\-\-\-用大的减小的\-\-\-\-\-\-用绝对值大的数的sign.
     3. overflow 那个圈没理解
    2. 减
     1. x-y: - y如果是`负`\-\-\-\-\-\-变成**x+(-y)**
             - y是`正`且x是`负`\-\-\-\-变成*-(-x+y)**
             - y是`正`且x是`正`\-\-\-\-变成**(-y)+x**
             - 但我第一次做作业,全错...
3. one's complement arithmetic
     1. 反码,加完多一位,再加(多么神奇...需要记忆以及与其它区分)
4. two's complement arithmetic
     1. 忽略加完后的第一位.
     2. **detecting overflow**
         新概念:carry和borrow
         carry-in = carry-out\-\-\-\-\-\-no overflow
         but这个是怎么计算的???

5. Error detection and correction:
     1. hamming distance:不同的位数
     2. parity bit :要sufficient才能correct error,
     3. code word : 存在的必要是什么
     4. 是在bus上传递数据用的吗?那学过的存储模式pocode+address跟这个是什么关系?


## 重难点解析
1. 三个overflow的图一定要好好理解.
2. ~~真值,补码,反码,源码之间的变化!!~~
3. 补码overflow detect
4. sign的减法和乘除



# 九 floating-point binary
## 预习+回看
1. 

# 疑惑
1. Assembly 2 里 JnS 
2. 那么load store jump好像没区别啊? \-\-\-11.6
3. 对于Assembly1作业中的第3题.醍醐灌顶:
    A 1-bit address can address two words (0, 1).
    A 2-bit address can address four words (00, 01, 10, 11).
    A 3-bit address can address eight words (000, 001, 010, 011, 100, 101, 110, 111).
    but![答案不一样](https://www.coursehero.com/doc-asset/bg/d6bc39dcf48520faf6897593e05282dad7676ae0/splits/v9.frq.clean/split-1-page-1-html-bg.jpg)
4. **八\-\-\-二进制2**需要加强理解和动手去做的:1. ~~三种表示二进制数的转化自己去操作~~. 2. 进制直接每种情况的转化去运算.   \-\-\-11.13
5. ~~对于加了sign的源码,为什么不是额外加一位呢,不影响原本的真值吗?~~  \-\-\-11.13八课上
6. 对于补码的运算,手机里的照片 理解和解惑. \-\-\-11.13八课上
7. \-\-\-11.13晚自习 二进制转八进制,万一位数除不尽3怎么办?

# 作业tutorial 的总结
1. \-\-\-11.13晚,week7,binary1.
   - 减权定位终于知道了怎么做
   - 小数10转2,乘积取整还不会
   - 4个表示方法的范围需要记住
2. \-\-\-11.13晚,week8,binary2.
   - unsigned减法必须是正数,因为它无负数
   - unsigned除法中除不尽就用reminder余数
   - signed的减法中,1110111-0010001为何overflow呢
   - 0010101-0110011算不对啊,按照(-y)+x的规则啊
   - signed的乘除法,全错.(我原本的方法是忽略头一位,再在最后加上头一位)
   - 反码的加:01101+00100 为何overflow
   - 补码的加: carry-in和carry-out和overflow detected 是什么
   - 一定要记住正数的反码和补码都是它,运算的时候一定要仔细1+1变为0
     