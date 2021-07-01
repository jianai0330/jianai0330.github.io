---
title: FC
date: 2019-11-13 14:15:59
tags:
categories: 
- 2019
- KCL
- FC
password: password
top:
---

# 六 graphs 7.1
<!--more-->
## PPT提纲 \-\-\-11.13 拖延症...
1. graph的种类:
 - simple(e.g.Niche overlap graphs in ecology): \-\-\-\-\-\-\-\-没方向undirected,没multiple edges,没loop edges
 - multigraph(e.g.Road networks):\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-没方向undirected,有multiple edges,有loop
 - directed graph(e.g.representing binary relations前几章学的):\-\-有方向directed,没multiple edges,有loop
 - !开头比较三者的表格理解!
2. undirected graphs概念
    一些概念: 两个点相连 它们adjacent,此线edge incident with 两个点
    degree:此点含线edge的条数
     由此有:isolated孤家寡人 & pendant(一条,degree 1,垂饰很好理解)
    Handshaking theorem:**edge的条数=点们的degree的和/2**
3. directed graph的一些概念(它有方向!)
    起点is the initial or start vertex of 线,终点 is the terminal or end vertex of 线
    in-degree:此点含作为终点的线的条数
    out-degree:此点含作为起点的线的条数(注意loop一个圈的话是in和out都要算进去的)
    公式:线的条数=in/out
4. adjacency matrix
5. Path
   - length:所包含edge的条数
   - Simple:doesnt contain the same **edge** twice
   - Hamiltonian path: 在simple的基础上passing every **vertex 一次**
6. cycle(可与path类比)
7. complete graph (n-clique)   n-cycle
8. subgraph
9. connected graphs   , conneed component
10. isomorphic同构 if isomorphism(保持结构的双射)  , invariant

    ​          


# 七 tree
## PPT提纲`预习` \-\-\-\-11.13
1. 定义: vertices,root,edge
2. edge是一条线,vertix是点 ?
3. rooted tree
4. parent,child,siblings. leaf,internal(vertices with at least one child)
   ancestors(以上线上的所有),descendants
5. 应用: binanry search trees & decomposition trees
6. 概念:level,height,balanced,subtree
7. m-ary tree, full m-ary tree,full binary tree
8. 有几个二级结论:
    - 对于full binary tree :n internal vertices \-\-\-\-\-\-**2n+1** vertices
    - 对于full m-ary  tree: n internal vertices \-\-\-\-\-\-**m*n+1** vertices
9. 逻辑式可以用二叉树
10. binary search trees : sorting linearly ordered list
11. tree traversal: preoder,inorder,postorder

## 课上 | 提纲
1. 概念和定义
    什么是TREE
  - **simple** graph with no simple cycles(有cycle就不是tree,必须要是connected的)
  - a unique simple path between任意两点
  - 如果加一条edge，会产生cycle
  - 如果减一条edge，会disconnected


2. rooted tree
  - 特性是其中一个vertex被当作root（放在top）
  - 两个rooted trees are **isomorphic** \-\-\-\-\-bijection
    - root to rooted
    - edges to edges
    - non-edges to non-edges
        ？

  - basic terminology
    - 特别注意internal vertices 和 leaves，一个有children，一个没有children。
    - leaves没children，是垂饰in graph？
    - level： 从root的0开始
    - height： 也要从0开始算！ height=层数-1！
    - balanced的概念理解过来就是每一个分支的长都要等于height或者height-1。
    -
3. 几个特殊的tree和二级结论：
    - m-ary treeM
        - 每一个internal的children不超过m
    - full m-ary tree
        - 每一个internal的children等于m
        - 不明白 这怎么可能？！
    - full binary tree
        - 每一个internal 有2children
    - m*n+1

    - logic formula
4. BST
    - 注意linear order, partial order的概念
    - lexicographical order
5. traversal遍历 三种

## 疑问
1. graph和tree里edgetoedge和nonedge到底是什么意思 怎么用

# 八 fc \-\-\-11.17周日
finite automata : finite-state machines
1. preliminaries:alphabets and words
 - length
 - concatenation
 - prefix,suffix
 - language

2.finite automation:a theoretical model for programs using a constant amount of memory regardless of the input form.
 - finite **control device**:in any moment it can be in one of its **states**. it is hard-wired how it changes from one state to another.
 - states:(initial states,favourable states)
 - input tape:divied into cells
 - how it starts:
   - the finite control device is in its unique initial state.
   这句话是什么意思？？
   - the reminder
 - how it works:
    - moves the reading head
    - choose the next state of its control device???
    这句话什么意思？？
    - the control device is hard-wired\-\-\-\-\-\-the next state depends on
        - the previous state
        - the character read from the tape

    - ending:
        - if control device is in a favourable state: the input word is accepted
        - otherwise: rejected
 - **state transition diagrams**
    - directed multigraph
        - 点：the states
        - 箭头线的标签：input


# 作业中易错点总结
1. \-\-\-11.14 五 概率
   1. 题型: 要运用贝叶斯定理的题目,1. 先画个*二叉树*帮助理解, 2. 计算时哪个包含哪个一定要搞清楚
   2. 判断indenpent: 三个公式
2. \-\-\-11.14 Small六
   - 六个工作分给五个人的答案没理解
3. \-\-\-11.14 六 graph
   - isomorphic: f是bijection(one-to-one&onto)
   - invariant
   - 题型:判断一句话是否是invariant: 与onto和one-to-one结合为题目服务(例题好好理解)
   - 题型:根据题干描述画graph时,注意看清楚给出的要求的类型!
   - 题型:证明两个graph是isomorphic的: 画出图,再一一f对应
   - Largetutorial最后一题:只能说思维要开阔了...


# 疑问
1. \-\-\-11.13 六graph里directed graph的计算edge的公式,一个点可以同时有in和out,且数量不同,那怎么算?