# 机器学习任务
transformers huggingface的核心库
- pipeline 分发任务
  pipeline(task,model)
 -数组和哈希表
   - 相同点
      数据容器 线性  
      -区别
      数组，dict字典(o(1)) 栈，队列，链表 连续和不连续 内存空间
      非线性 树 图
      查找线性容器里
      python中的：相当于js中的{}，作用域
- transformers 支持哪些npl任务
    SUPPORTED_TASKS.items 常量
    items 值是一个dict js json
    for in for 计数循环
    Output 硬盘
    同步代码I/o 远程 内存|硬盘 网络传输的耗时
    requests.get(url, stream=True).raw
    http 请求方法      