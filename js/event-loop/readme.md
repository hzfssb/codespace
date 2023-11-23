
# js 单线程（一条腿走路，看见同步往下走，异步先不执行settimeout）：
                          降低对设备内存的开销
                          没有锁的概念节省上下文切换时间
            
            

- 进程：cpu运行指令和保存上下文所需要的时间

- 线程：
    1.gpu这个画笔渲染这个页面的html渲染线程
    2.http的请求线程
    3.js引擎的执行线程等
     1和3是互斥的
    线程是进程中更小的单位描述了一段指令执行所执行的时间

    # 异步
    -宏任务  (macrotask) :
    script
    setTimeout
    setInterval
    setImmeditiate
    input output
    页面渲染

    -微任务  (microtask)
    promise.then(),而promise属于同步
    MutationObserver
    process.nextTick：在Node.js环境中，process.nextTick()方法用于将一个任务推迟到事件循环的下一个迭代中执行。


    # event-loop
    过程：
    1.执行同步代码 （这属于宏任务）
    2.当执行栈为空，查询是否有异步代码需要执行
    3.执行微任务
    4.如有需要，会渲染页面
    5.执行宏任务（这也叫下一轮的event-loopde的开启)

## 浏览器新开一个tab页面，就是新开一个进程
需要多个线程配合才能完成页面的显示