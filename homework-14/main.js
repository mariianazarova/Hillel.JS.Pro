window.addEventListener('DOMContentLoaded', () => {
    const inputYear = document.querySelector('.year-input');
    const resultCentury = document.querySelector('.result-century');
    document.querySelector('.year-submit').addEventListener('click', (event) => {
        event.preventDefault();
        if (inputYear.value <= 0) {
            resultCentury.innerHTML = `Result is't valid.`;
        } else {
            let century = Math.floor(inputYear.value / 100) + 1;
            if (century % 10 === 0) {
                century = century + 'th';
                resultCentury.innerHTML = `Result: ${inputYear.value} is a ${century} century.`;
            } else if (century % 10 === 1) {
                century = century + 'st';
                resultCentury.innerHTML = `Result: ${inputYear.value} is a ${century} century.`;
            } else if (century % 10 === 2) {
                century = century + 'nd';
                resultCentury.innerHTML = `Result: ${inputYear.value} is a ${century} century.`;
            } else if (century % 10 === 3) {
                century = century + 'rd';
                resultCentury.innerHTML = `Result: ${inputYear.value} is a ${century} century.`;
            }
        }
    })

    const userValues = document.querySelector('.value-input');
    const resultValue = document.querySelector('.result-value');

    function vowelOne(value) {
        const vowels = 'aeiouy';
        let result = '';

        for (let symbol of value) {
            if (vowels.includes(symbol)) {
                result += '1';
            } else {
                result += '0';
            }
        }
        return result;
    }
    document.querySelector('.value-submit').addEventListener('click', (event) => {
        event.preventDefault();
        if (userValues.value === '') {
            resultValue.innerHTML = `Result is't valid.`;
        } else {
            resultValue.innerHTML = `Result: ${vowelOne(userValues.value)}.`;
        }
    })

    const userValues3 = document.querySelector('.value3-input');
    const resultReversedValue3 = document.querySelector('.result-value3');

    function reversedValue(value) {
        let symbol = value.split(' ');
        let reversedValue = '';
        let result = '';

        for (let i = 0; i < symbol.length; i++) {
            if (symbol[i].length >= 2) {
                reversedValue = symbol[i].split('').reverse();
                result += `${reversedValue.join('')} `;
            } else {
                result += `${symbol[i]}`;
            }
        }

        return result;
    }

    document.querySelector('.value3-submit').addEventListener('click', (event) => {
        event.preventDefault();
        if (userValues3.value === '') {
            resultReversedValue3.innerHTML = `Result is't valid.`;
        } else {
            resultReversedValue3.innerHTML = `Result: ${reversedValue(userValues3.value)}`;
        }
    })
    const userNumbers = document.querySelector('.value4-input');
    const resultNumbers = document.querySelector('.result-value4');
    let numbersArray = [];

    function getHighestAndLowestNumbers(value) {
        numbersArray = value.split("");
        let maxNumber = (a, b) => {
                return a > b ? a : b;
            },
            minNumber = (a, b) => {
                return a < b ? a : b;
            };
        resultNumbers.innerHTML = `Result: max ${numbersArray.reduce(maxNumber)}, min ${numbersArray.reduce(minNumber)}.`;

    }

    document.querySelector('.value4-submit').addEventListener('click', (event) => {
        event.preventDefault();
        if (userNumbers.value === '') {
            resultNumbers.innerHTML = `Result is't valid.`;
        } else {
            getHighestAndLowestNumbers(userNumbers.value);
        }
    })

    const userNumbersArray = document.querySelector('.value5-input');
    const resultNumbersPhone = document.querySelector('.result-value5');
    let numbers = [];

    function createPhoneNumber(value) {
        numbers = value.split("");
        const userPhoneNumbers = numbers.join("").replace(/(...)(...)(.*)/, "($1) $2-$3");
        resultNumbersPhone.innerHTML = `Result: ${userPhoneNumbers}`;
    }
    document.querySelector('.value5-submit').addEventListener('click', (event) => {
        event.preventDefault();
        if (userNumbersArray.value === '' && userNumbersArray.value > 10) {
            resultNumbers.innerHTML = `Result is't valid.`;
        } else {
            createPhoneNumber(userNumbersArray.value);
        }
    })
})