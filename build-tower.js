// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

function towerBuilder(nFloors) {
    let arr = [];
    let block = "*";
    let spacer = " ";
    for (var i = 1; i <= nFloors; i++) {
        arr.push(spacer.repeat((nFloors - i)) + block.repeat((i * 2) - 1) + spacer.repeat(nFloors - i))
    }
    return arr
}