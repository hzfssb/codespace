
/**
 * @func 返回固定格式的电话号码 (123)456-7890
 * @params array [1,2,3,4,5,6,7,8,9,0]
 * @return (123)456-7890
 * @author 
 */
// function phoneNumber(numbers){
//     let ans =''
//     for(let i= 0;i < numbers.length;i++){
//         if(i ==0){
//             ans += '('
//         }else if(i ==3){
//             ans += ')'
//         }else if(i == 6){
//             ans += '-'
//         }
//         ans += numbers[i]
//     }
    
//     return ans
//es6 箭头函数
//phoneNumber是对象，函数也是对象
//变量的类型由值来决定
let phoneNumber;//弱类型 undefined null 值为空
// const phoneNumber = numbers => {
//     return "(" + numbers[0] + numbers[1] + numbers[2]
//     + ")" + " " + numbers[3] + numbers[4] + numbers[5] 
//     + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9];
//   }最好
  
//   console.log(phoneNumber([1,2,3,4,5,6,7,8,9,0]));效果基本相同
// //ES6 中的模板字符串语法
// phoneNumber = (numbers) => `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`

// function phoneNumber(numbers){
//     return "(" + numbers[0] + numbers[1] + numbers[2]
//     + ")" + " " + numbers[3] + numbers[4] + numbers[5] 
//     + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9];
//   }
  
  console.log(phoneNumber([1,2,3,4,5,6,7,8,9,0]));
