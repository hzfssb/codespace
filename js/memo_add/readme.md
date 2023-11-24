# 企业级开发

- 代码的健壮性
    校验一下参数
    进程的安全性
    单线程 简单 + event loop  太脆了
    throw + try caatch()


- cache 自由变量  key 设置

    - arguements 伪数组 兼容性不太好
    [...arguements].join(')
    Array.from(arguments)  
    Object.prototype.toString
    Array.prototype.join.call(arguments) 借给ar去执行
    [1,2,3].join(',') //this 指向数组 

    - fiboncci 爬楼梯
     -递归的通用问题，递归不停的入栈
     -记忆函数 备忘录
     -自底向上
     f(1) =1 f(2)=1 f(3) = f(1)+f(2)


-使用递归，可以快速的，基于自顶向下的思想来解决问题 
   - 程序栈的问题   

   -可以先使用memoize 备忘录模式，优化 
   空间 { } key:value

都可以自底向上解决，f(n) = f(n-1) +f(n-2),动态规划 dp
   for 循环



再优化，空间上，不要数组，只要最后结果  [a,b] = [b,a+b]