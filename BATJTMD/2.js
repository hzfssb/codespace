function creatphoneNumber(numbers){
        var format = "(xxx) xxx-xxxx";//模版
    
        for(let i= 0;i < numbers.length;i++){
               format = format.replace('x',numbers[i]);//替换成x
}
    
        return format;
}
console.log(creatphoneNumber([1,2,3,4,5,6,7,8,9,0]));
