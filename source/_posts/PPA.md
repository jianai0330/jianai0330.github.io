---
title: PPA_notes
date: 2019-11-03 08:34:48
tags:
categories:
- 2019
- KCL
- PPA
password: password
top:
---

## week5
<!--more-->
### PPT提纲
1. wihle loop
2. for-each
3. #### searching:
     loop condition: *index < files.size() && !found*
4. 不要用input == "bye"比较两个string,一定要用只能用<p>input.equals("bye")</p>
5. Iterator与iterator():
      iterator()是collection有的一个method,return一个Iterator类的object,这个object可以用这几个Iterator类里的method:**hasNext,next,remove**
      格式:`Iterator<ElementType> it = myCollection.iterator()`
6. Index vs Iterator:**remove**的时候用iterator,
7. anonymous objects: ?啥玩意儿,不管了

## week7 Chapter6
### 研读课本
  1. responsibility-driven design, cohesion, coupling, refactoring
  2. intance method:invoked on an **intance** of a class, 注意class method和instance method不互通不能互相引用
  3. enum(enumerated types):枚举
          枚举类型可以像类(class)类型一样，定义为一个单独的文件，当然也可以定义在其他类内部
### 预习PPT&提纲
 1. 几个class:random
 2. Set,Map
      hashSet,hashMap
 3. list,map和set的比较
 4. wrapper classes
     int 和 Interger
 5. autoboxing and unboxing
 6. static


## 七
### yi
1. 为什么add（E e）返回的是boolean
2. random的引用
3. selecting random responses
    - responses的arraylist是怎么产生的


## 八 Week 8

### 上课 ppt
1.  cohesion:  each unit is responsible for one single logical task
     unit: class, method
     关于hashmap的疑问
      - 是否要两个元素，前面的是key，后面的事value？
     对于zuul： 每个class都有相应的作用。game类作为main与user和terminal交流，print东西，但是room就不能print东西。
2. 2 important: coupling: loose coupling  : interface,change 1 do not need to change another.
3. 周五上课\-\-\-看的回放\-\-\-\-11.18
     1.
        - arraylist和hashmap等等里面不能有primitive types
        - primitive types(int,boolean等等)不是object
        - 引出wrapper class(Interger,Float...)
        - primitive-type values wrap in objects to be stored in a **collection**
        - autoboxing & unboxing
        - [int和Integer的比较](https://blog.csdn.net/chenliguan/article/details/53888018 "int和Integer")
        - [这个讲的更详细](https://blog.csdn.net/Teacher_Lee_ZZSXT/article/details/79230501 "更详细的比较")
     2. class variables
       - shared between all instances of the class.
       - 属于class, 独立于instances
       - 有keyword:**static**
       - 用class的name在引用.前
       - 与fields的区别?:field属于class的对象里??
       - 用于:在一个class里不同的对象都需要用的变量
     3. constant
       - **final**
       - 不能change
       - 可以是public的
       - static final : 经常的组合
       - class constants:变量名大写
       - 疑惑:final,constant和fields...static的关系
       - static和final得关系
       - 明确field,local variable...等等这些的关系
       - constant 也可以不是final的,可以再更改它的值
     4. class method
       - static的方法都是class method
       - 可直接调用
       - 那存在的必要是什呢,跟其他的object method比
             \-\-\-不 depend于object
       - limitations: instance method can call class method, but class method cannot call instance method and instance fields. 也就是说它只能用static fields,但object method 能用所有fields.

     5. outside bluej
      - public static void main(String[] arg)


## 九 week9
### Using java without bluej
  1. 几个文件的后缀：java，class,txt..
  2. Javac :终端命令，是java编译器的名称？
  3. Javac 把.java变成.class
  4. Emacs命令
  5. java命令（后接类名无后缀）start JVM，开始执行程序
  6.   the edit-compile-execute cycle：理解JVM
    - Editor\-\-\-source file\-\-\-compiler(javac)\-\-\-class file\-\-\-virtual machine(java)
  7. 每个system都有其JVM
  8. main method应该做什么 \-\-\-PPT里
### Fixed-sized collections
  1. Arrays的特性
     - Fixed in length 他在讲什么memory之类的东西。。。
     - Use a special syntax语法
     - 它的对象没有methods，methods从其他class而来
     - methods都是static的
  2. -最大size可以？？
  3. 与List的不同之处arrays可以store对象引用和基础数据类型疑问又来了，List为何不可
  4. 例子project：weblog-analyzer
  5. array的语法
  6. mutator和accessor忘了
  7. array更改element的原理
  8. array literals
  9. array length
### 周五11.22的回看11.25
  1. for-each loop: remove和add会导致error
```java
for(String s : list){
  if(s.startWith("t")){
    list.remove(s);
    //如果remove,会skip
  }
}
```
  - 为何呢
  - 用 for loop? \-\-\-也不好
  - 解决办法:**Iterator**(用while)
  - Iterator用for的话,最后一个counter不需要
  - [遍历list删除元素的总结](https://blog.csdn.net/github_2011/article/details/54927531 "总结")
  2. 二维数组[][]
    1. 例子:brain
    - Environment里面的setup好奇怪
    2. 处理图片就是处理二维数组

## 十 week10
functional processing of collections
### 预习PPT提纲
1. Lambdas
  - code can be treated as data
  - segments of code can be stored in variables,passed as para
2. Method vs Lambdas


2. Stream
3. filter，map，reduce
4. pipelines


### 周五的recording



## 疑惑与计划
 1. auction project的源代码 看 \-\-\-11.4早于lse


## 代码分析
### brain
1. cells二维数组的初始化令人迷惑

## 网址干货收藏
1. [java基础博客](https://songlee24.github.io/2016/03/16/java-basic-note-1/ "java基础知识")
2. [清华大学计算机系课程](https://github.com/PKUanonym/REKCARC-TSC-UHT "清华大学课程")
3. [知乎人工智能入门](https://zhuanlan.zhihu.com/p/31650418?utm_source=wechat_timeline&utm_medium=social&utm_oi=898106614555504640&from=timeline&isappinstalled=0 "知乎AI入门")
4. [要掌握的算法](https://www.zhihu.com/question/23148377/answer/863990767 "要掌握的算法")
