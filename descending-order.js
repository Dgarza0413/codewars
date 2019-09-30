// Your task is to make a function that can take any non-negative integer as a 
// argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
    let arr = []
    for (var i = 0; i < n.toString().length; i++) {
        arr.push(n.toString()[i])
        arr.sort(function (a, b) {
            return b - a
        })
    }
    return parseInt(arr.join(''))
}