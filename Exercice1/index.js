function pairNumbers(firstNumber, lastNumber) {
    const pairNumbers = [];
    for (let i = firstNumber; i <= lastNumber; i++) {
        if (i % 2 === 0)
            pairNumbers.push(i);
    }
    return pairNumbers;
}

export default pairNumbers
