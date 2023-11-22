//保证A先执行
//promise语法
function A() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('异步A完成');
            resolve()
        }, 1000)
    })
}
function B() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('异步B完成');
            resolve()
        }, 500)
    })
}
function C() {
    setTimeout(() => {
        console.log('异步C完成');
    }, 100)
}
A()
    .then(() => { //then虽然默认会返回promise对象，
        //但是当.then的回调有人为返回的promise对象时，.then默认的promise会被覆盖
        return B()
    })
    .then(() => {
        C()
    })

async function foo() {
    await A() //await 会阻塞后续代码，将后续代码推入微任务队列
    console.log(1);
    await B()
    await C()
}
foo()    