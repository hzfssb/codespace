let obj= {
    a:1,
    b:2,
    c:3
}
var arr = []
obj[arr]= 3
console.log(obj);

let map = new Map([
    ['name','老王']
]);

let obj = {a:1}
map.set({a:1},'hello')
console.log(map.get(obj));

map.forEach((value, key, map) => {
    console.log(value, key, map);
});