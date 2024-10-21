function pairNumbers(firstNumber, lastNumber) {
    const pairsArray = [];
    for (let i = firstNumber; i <= lastNumber; i++) {
        if (i % 2 === 0)
            pairsArray.push(i);
    }
    return pairsArray.toString();
}

export default pairNumbers
