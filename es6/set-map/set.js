// let arr = [1,1,2,3,3]
// let obj = {
//     a :1,
//     b:1,
//     c:1
// }

// let set = new Set([1,1,2,3,4])
// set.add(5)
// console.log(set);//数组去重

var arr = [1,2,1,1,'1']
function unique(arr) {
    // let s = new Set(arr)
    // let res =  Array.from(s)
    // return res //直接return Array.from(new Set(arr))或return [...new Set(arr)]
}

var unique = (arr) => [...new Set(arr)]
console.log(unique(arr));