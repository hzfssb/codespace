let obj = { name: '德玛西亚' };
let ws = new WeakSet();
ws.add(obj); // 将对象添加到 WeakSet 中

obj = null;//有没有无所谓，有ws就自动垃圾回收

console.log(ws); // 输出 WeakSet 对象，其中应该包含原始的对象