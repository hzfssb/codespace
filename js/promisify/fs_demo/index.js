// 是Node.js中的一段JavaScript代码，用于导入Node.js内置的 fs 模块。
// fs 是“filesystem”的缩写，这个模块提供了一系列的方法来与文件系统进行交互，比如读取文件、写入文件、删除文件等。
const fs = require('fs');

// 回调
fs.readFile('./a.txt', 'utf-8', ((err,data) => {
    // 后端稳定性第一，先有err
    if(err) {
        console.log(err)
        return;
    }
    // Buffer 二进制流
    // console.log(data.toString())
    console.log(data)
    fs.readFile('./b.txt', 'utf-8', ((err,data2) => {
        if(err) {
            console.log(err)
            return;
        }
        // Buffer 二进制流
        // console.log(data.toString())
        console.log(data2)
        fs.readFile('./c.txt', 'utf-8', ((err,data3) => {
            if(err) {
                console.log(err)
                return;
            }
            // Buffer 二进制流
            // console.log(data.toString())
            console.log(data3);
    
        } ) ) 

    } ) ) 
   

}))

