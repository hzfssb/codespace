function foo() {
    var myName = '旭旭';
    let test1 = 1
    let test2 = 2
    var innerBar = {
        getName: function () {
            console.log(test1);
            return myName;
        },
        setName: function (newName) {
           
            myName = newName;
        }
    };
    return innerBar;
}

var bar = foo()
bar.setName('浪哥');
console.log(bar.getName());






function a(){

    function b(){
        var bbb = 234
        console.log(aaa);
    }
    var aaa = 123
    return b
}
var c = a()
c()
//a的执行上下文没有完全被销毁