function makeCounter(num) {
    let count = num - num;
    function incrementCount() {
        count+= num;
        return count;
    }
    return incrementCount;
}

const siansCounter = makeCounter(5);

const output1 = siansCounter();
const output2 = siansCounter();
const output3 = siansCounter();

console.log(output1, output2, output3);
