// promise + then / async + await 解决回调地狱问题
// file: 这个参数表示要读取的文件的路径。它是传递给 fs.readFile 方法的，用于指定具体哪个文件将被读取。

// encoding: 这个参数用于指定文件读取时使用的字符编码。常见的编码如 'utf-8' 用于正确解析文件为字符串。如果不指定编码，fs.readFile 方法将返回原始的缓冲区（Buffer）数据。

// resolve: 这是一个函数，当在Promise中的异步操作成功时，它被调用。调用 resolve 会将Promise的状态从“pending”（未决）变为“fulfilled”（已实现），并将成功的结果数据传递给任何通过 .then() 注册的处理函数。

// reject: 这也是一个函数，当Promise中的异步操作失败时，它被调用。调用 reject 会将Promise的状态从“pending”变为“rejected”（已拒绝），并将错误原因传递给任何通过 .catch() 注册的处理函数。

// const fs = require('fs');

// function readFileByPromise(file, encoding) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, encoding, (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(data);
//     });
//   });
// }

// readFileByPromise('./a.txt', 'utf-8')
//   .then(data => {
//     console.log(data);
//     return readFileByPromise('./b.txt', 'utf-8');
//   })
//   .then(data => {
//     console.log(data);
//     return readFileByPromise('./c.txt', 'utf-8');
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });



const fs = require('fs')

function readFileByPromise(filename) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, 'utf-8', (err, data) => {
			if (err) reject(err)
			resolve(data)
		})
	})
}

(async function() {
    try {
        const a = await readFileByPromise('./a.txt', 'utf-8');
        console.log(a);
        const b = await readFileByPromise('./b.txt', 'utf-8');
        console.log(b);
        const c = await readFileByPromise('./c.txt', 'utf-8');
        console.log(c);
    } catch (err) {
        console.error(err);
    }
})();
