console.log('script start')
async function async1() {
    await async2() //浏览器给await开小灶，虽然是.then异步，但被当成同步，直接被调用
    console.log('async1 end') //await 会阻塞后续代码，将后续代码推入微任务队列
}
async function async2() {
    console.log('async2 end')
}
async1()
setTimeout(function () {
    console.log('setTimeout')
}, 0)
new Promise(resolve => {
    console.log('Promise')
    resolve()
})
    .then(function () {
        console.log('promise1')
    })
    .then(function () {
        console.log('promise2')
    })
console.log('script end')