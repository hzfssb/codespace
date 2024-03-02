# js为什么要有异步
因为js是单线程的编程语言，同一时间只能执行一个任务

# js为什么不设计成多线程？
1. 节约内存
2. 没有锁，解锁的过程，节约上下文切换的时间

# 请你聊一聊异步的发展史？
- 是什么
 js中从最早的异步处理方式到现在的最新的异步处理方式

- 发展史
1. 回调函数: 代码维护困难（回调地狱）
2. promise(es6新增): 
    1. 维护了一个状态，state，值为：pending fulfilled rejected,目的
        是让promise的状态一经改变，无法再次修改，也就保证了 then 和 catch 不
        可能同时触发
    2. 内部的resolve函数会修改state为fulfilled，并触发then中的回调

    3. .then: 
       1. 默认返回一个promise对象，状态为fulfilled
       2. 当then前面的promise状态为fulfilled，then中的回调直接执行
           当then前面的promise状态为rejected，then中的第二个回调直接执行
           当then前面的promise状态为pending，then中的回调需要被缓存起来交给
           resolve或者reject执行
3. generator  function* gn() {}  let gen = gn(); 不是调用函数，而是构造新的实例对象
    1.可以分段执行，可以暂停
    2. 可以控制每一阶段的返回值
    3. 可以知道是否执行完毕        
    4. 可以借助Thunk和co模块处理异步，但写法复杂。可以借助async await或promise简化
4.  async/await:    
    1. es6提供的一种新的异步解决方案
    2. 没有错误捕获机制，只能外层用try catch处理
    3. 基于generator+promise来实现的，本质是在generator的基础上通过递归来自动执行一个又一个的next函数，
       并传递参数，当done为true时，结束递归
