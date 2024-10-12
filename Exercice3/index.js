function calculateAverage(numbers) {
    const length = numbers?.length;
    if (!length)
        return 'No numbers to calculate average';
    let total = 0;
    numbers.forEach(number => total += number);
    return total / length;
}

console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
