// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.


function XO(str) {
    var lower = str.toLowerCase();
    var array = lower.split('');

    const x = array.filter(letter => letter === 'x');
    const o = array.filter(letter => letter === 'o');

    if (x.length === o.length) {
        return true
    } else {
        return false
    }
}