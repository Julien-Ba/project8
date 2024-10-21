function convertToBinary() {
    const display = document.querySelector('#binaryResult');
    let input = document.querySelector('#decimalInput');

    for (const char of Array.from(input.value)) {
        console.log(char);
        if (isNaN(+char))
            return display.textContent = '';
    }

    // If it's 0 no need for conversion
    if (input.value === '0')
        return display.textContent = '0';

    let num = parseFloat(input.value);

    // Separate int & fraction
    let integerPart = Math.floor(num);
    let fractionalPart = num - integerPart;

    // Convert integer part to binary
    let intResult = '';
    while (integerPart > 0) {
        intResult += integerPart % 2;
        integerPart = Math.floor(integerPart / 2);
    }
    intResult = intResult.split('').reverse().join('');

    // If it's only an integer, skip the fractional part
    if (fractionalPart === 0)
        return display.textContent = intResult;

    // Convert fractional part to binary
    let fracResult = '';
    while (fractionalPart > 0) {
        fractionalPart *= 2;
        let bit = Math.floor(fractionalPart);
        fracResult += bit;
        fractionalPart -= bit;

        // Limit precision to avoid infinite loops with repeating fractions
        if (fracResult.length > 10) break;
    }

    // Recombine int & fraction
    return display.textContent = `${intResult}.${fracResult}`;
}
