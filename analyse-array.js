function analyseArray (str, arr) {
    if (arr.length === 0) return

    for (i = 0; i < arr.length; i++) {
            console.log(`${str}.${i}: ${arr[i]}`);
        }
    }

module.exports = analyseArray;