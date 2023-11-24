function fibonacci(n) {
    var result = []
    result[0]=1
    result[1]=1
    for(var i = 2;i<n;i++)
    {
        result.push(result[i-1]+result[i-2])
    }
    return result[n-1]
}
console.log(fibonacci(6));