---
title: CMTE_note
date: 2019-10-30 19:20:08
tag:
- 空间向量
categories:
- 2019
- KCL
- CMTE
password: password
top: 100
---



# 四 Vector  Algebra
## 空间直线,空间平面
<!--more-->
### 空间直线几个形式的方程,空间平面的方程.

Ax +By +Cz + D = 0

其中n = (A, B, C)是平面的法向量，D是将平面平移到坐标原点所需距离（所以D=0时，平面过原点）

### 空间两直线的距离,点到平面以及到直线的距离 公式

(联立方程)
![点到平面](https://pic002.cnblogs.com/img/zdd/201007/2010071013450338.jpg "公式")

## 已知两平面方程求交点坐标


## 物理学中的力矩和功
机械功:work
力矩:moment of force
     the tendency of a force to make an object **rotate** .
两个物理意义不同,符号相同.牛顿-米.
力矩*t=rXF*, 这个r不是功里面那样的在F方向的位移,而是从转轴到施力点的位移矢量.



# 五 Matrix Algebra
## 3阶矩阵运算易错的是:
第二列的余子式中两列的顺序: 是从左到右 不是从右到左!
## 课件提纲&概念
1. 矩阵\-\-\-多元方程组
2. changes of  axes 旋转\-\-\-\-结合预科课件: 逆时针顺时针
3. ### 几个矩阵和概念
   - square m,column/row vector,diagonal m,unit/identity ma,symmetric m,upper\-/lower\-triangular m,diagonal对角矩阵,scalar数量矩阵(主对角元全相等)
   - singular:奇异(行列式为0)
   - trace: 迹sum of **leading diagonal**主对角线(左上右下)
   - A<sup>T</sup>: 手心手背 转置矩阵
            行列式和转置行列式**相等**
   - minor:余子式,cofactor 代数余子式多一个-1的次方
   - adjoint:伴随矩阵 ***注意特性和公式*** 代数余子式组成
   - #### inverse matrix: 逆矩阵
   - #### Cramer's rule卡姆拉法则 :
   - #### Gaussian elimination: 见矩阵运算板块*高斯消元法*
   - #### ref<br>
         row echelon form阶梯型矩阵: 下阶梯,leadingentry是1.
         rref行简化阶梯形矩阵:在ref基上<p>非零首元所在的列/p<>除了非零首元外，其余元素全为0.每个首项是1.
         每个矩阵,ref不唯一,**rref唯一**.
   - independent & dependent vectors线性相关无关
         linear combination of vectors线性组合(是一个向量而不是关系)
         注意根据定义,线性相关是n个向量组成的组,至少其余n-个可以表示一个

   - Rank 秩 :最大线性无关的向量的个数  在ref形势下含非0的行数
   - **eigenvalue**特征值
          - characteristic polynomial(PPT72页),特征多项式characteristic equation of A特征方程
          - eigenvector特征向量
          -
4.  注意**矩阵×标量**与行列式×标量的区别: 矩阵式乘每个元素,行列式乘一行.
5.  ### 公式总结:
    - (AB)<sup>T</sup> = B<sup>T</sup>A<sup>T</sup> & adj(AB) = adj(B)adj(A)
    - eigenvalue的性质(PPT末尾)
    - `AA*=A*A=|A|E`  (*伴随矩阵)
    -       A<sup>-1</sup>=(1/|A|)*A*(可轻易有上一行结合AA<sup>-1</sup>=E推出)
    -  |A*|=|A|<sup>n-1</sup>  (可轻易有上上一行推出)
6. ### 矩阵运算,化简得基本步骤
   - Gaussian elimination*高斯消元法*:
        1. 最左上角变为1,依次用第一行的减\-把剩下行的第一个数变0,这是第一遍,
        2. 第二遍从第二行开始,把第二行第二列变1,依次用第二行减\-使下面的行的第二个数变0,
        3. 直到成为上三角.
               补充:线性方程组的**初等变换**:
                     1. 交换两个方程的位置(就好比与换矩阵的行!理解了)
                     2. 一个方程两端同乘不为0的数
                     3. 同乘不为0的数后加到另一方程去
   - 转化成ref(下阶梯):PPT第58页
         1. pivot:第一个第一列不为0的行,提到第一行
         2. 依次把下面行的第一列第一行变为0
         3. 去掉第一列,从新开始找pivot
         4. 在此基础上转化成**rref**: 找到非0首元,把其上的全变为0
   - find matrix **rank**:
         1. 矩阵的ref形式里含有非0行的数量 = 矩阵中independent vector(每一行就是一个vector)
   - eigenvalue: AX = aX
          - 已知A可求a
          - 已知A和a可求X(eigenvector)
   - 矩阵加减:要同规模(与行列式不同,矩阵是每排,行列式不同的那一排(其余的每一排要对应相等))
   - 矩阵乘法:好比说AB,要求是A的列数等于B的行数, 那么得到的矩阵规模是A的行数B的列数
## 二级结论
   - ###  上三角行列式
             的值D = 对角线元素乘积
   - ###   n阶行列式的性质
             1. 行列式等于它的转置行列式
             2. 互换行列式中的两行/列,行列式变号(**行列式是一个值数,与矩阵不同**),那矩阵换行呢**??**
             3. 行列式有两行/列对应相等或者对应成比例,行列式 = 0或者行列式有一行全为0,行列式也为0
             4. 行列式乘一个数,就乘一行,跟矩阵一样??
             5. 最重要的来了: 把某一行/列元素的k倍加到另一行/列,行列式的值不变不变不变!
             6. 可以用上述这些进行行列式的计算
   - ###   行列式
             1. 一个特殊行列式: 范德蒙Vandermonde
   -       可交换矩阵commutable: 数量矩阵与同阶任何矩阵,A与单位阵,对角阵与对角阵
   -       方阵的幂
   - 矩阵的初等变换: 极其类似行列式的初等变换






## 疑问疑惑不理解
 1. 矩阵这么乘啊加啊,它行列式的值不会变吗,为什么可以这样
 2. 转化成ref
 3. 怎么用矩阵解三元一次方程(就像解eigenvector)
 4. 我记得我总结过行列式与矩阵的不同??
 5. 记得PPT最后的几个性质 PPT的例题\-\-\-\-可以lab时候做\-\-\-*于10.31*


## 难点和做题总结
  1. 求特征向量的时候,就设xyz根据向量积的基本法则求,它们积是0.
  2.



# 七 函数的极限
## PPT中的基本英文的概念:
1. 夹逼定理:sandwich theorem
2. precose(formal) definition of Limit
3. one-side limut
4. continuity at a point


# 八 导数 \-\-\-11.14上课
## ppt与课本
1. 课本书签中左右导数的具体计算过程
2. 注意题型大部分有可能是物理应用
3. 复习去年学的导数那一章，注意肯定有很多题型（比如说微分什么的计算我记得）
4. \-\-\-\-11.18上matlab: 搞清楚几种极值,什么**local maximum,absolute minimum**对应的中文概念和此时函数的导数二次导数等等的特性.总结出来!
5. 在本周quiz中,出现了一个我竟然忘记的东西!! 那就是 函数此点可导的条件有两个,**1此点连续,2左导数=右导数!!!!**

# 九 微分方程
## ppt提纲
1. first-order initial value problem
2. slope fields
3. **\[Euler's method\]**(https://zh.wikipedia.org/wiki/欧拉方法 "欧拉法")
4. linear equation
5. autonomous equation
  - equilibrium values or rest points
6. phase line
7. systems of equations
  - autonomous
8. phase planes
  - trajectory
