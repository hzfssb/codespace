var arr = []
//只会10 10 10 ...
for (var i = 0; i < 10; i++) {
    arr[i] = function () {
        console.log(i);
    }
}

//0 1 2 3 4 ...
for (let i = 0; i < 10; i++) {
    arr[i] = function () {
        console.log(i);
    }
}

//闭包方法
for (var i = 0; i < 10; i++) {
    (function a(j) {
        arr[i] = function () {
            console.log(j);
        }
    })(i)
}
// -----
for (var j = 0; j < arr.length; j++) {
    arr[j]()
}