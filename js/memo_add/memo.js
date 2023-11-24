//记忆函数，闭包的高级功能
function memoize(fn) {
    if(typeof fn != 'function') {
        throw new Error('请传入函数')
    }
    var cache = {} //key:value o(1) 空间换时间
    return function() {
        // 唯一性 
        var key = arguments.length  + Array.prototype.join.call (arguments, ",");//arguements是类/伪数组，没有join方法
        console.log(key);
        if (key in cache) {
            return cache[key]
        } else {
            return cache[key] = fn.apply(this,arguments)
        }      
    }
}

//commonjs
module.exports = memoize