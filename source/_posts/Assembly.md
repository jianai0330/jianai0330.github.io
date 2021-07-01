---
title: CS_note
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

# 五 performance measurement and analysis
<!--more-->
  ##  PPT提纲
  1. 性能equation : 1. CPU time 2. Amdahl's law
  2. benchmarking: 
  3. 性能optimisation: 
   RISA&CISC(the two main kinds of ISA design)
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
   1. flushing the pipeline: conditional branck instructions
   2. clock rate=machine cycles per second
   3. 
   4. 



  ## 疑惑
  1. CPU里clock cycle的理解
  2. 对于RAM里的两种memory ports: 1. 32-bits for data/address 2. 8-bit for OPCODE, 
      是说每个横格长都是40bit吗,每一个data前面都有8bit的OPCODE吗,那怎么行得通呢
  3. byte-addressable & word-addressable:
          byte..:every byte has its own address. (word:every word) 