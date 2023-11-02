function Person(name,age,sex){
    this.name = name 
    this.age = age
    this.sex = sex


}
let p = new Person('海军',18, 'boy')

function Person(name,age,sex){
    var that = {}
    this.name = name 
    this.age = age
    this.sex = sex
    return that
}
let p1 = Person('程总',18)
let p2 = Person('梓帆',19)
console.log(p1)