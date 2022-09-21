//Написати функцію, яка приймає 4 аргументи і шукає найменше число серед них
const getMinNumber = (num_1, num_2, num_3, num_4) => {
    if (!isNaN(num_1) && !isNaN(num_2) && !isNaN(num_3) && !isNaN(num_4) && num_1 !== null && num_2 !== null && num_3 !== null && num_4 !== null && num_1 !== undefined && num_2 !== undefined && num_3 !== undefined && num_4 !== undefined) {
        const result = Math.min(num_1, num_2, num_3, num_4);
        return result;
    } else {
        console.log("Unfortunately, I can't figure out min number");
    }
}
getMinNumber("5", 0, 6, 2);

/*Написати функцію, яка приймає 2 аргументи та шукає найбільший спільний дільник для них. 
Якщо такого числа немає, то повідомляти про відсутність*/
const getGreatestCommonDivisor = (num_1, num_2) => {
    if (!isNaN(num_1) && !isNaN(num_2) && num_1 !== undefined && num_2 !== undefined && num_1 !== null && num_2 !== null) {
        if (num_2 > num_1 && num_2 > 0 && num_1 > 0) {
            return getGreatestCommonDivisor(num_2, num_1);
        } else if (!num_2) {
            return num_1;
        } else if (num_1 > num_2 && num_2 > 0 && num_1 > 0) {
            return getGreatestCommonDivisor(num_2, num_1 % num_2);
        } else {
            console.log("Unfortunately,the greatest common divisor is missing");
        }
    } else {
        console.log("Unfortunately,the greatest common divisor is missing");
    }
}
getGreatestCommonDivisor(25, 5);

//Написати функцію, яка приймає 1 аргумент та перевіряє чи дане число ідеальне
const getPerfectNumber = (num) => {
    if (!isNaN(num) && num !== undefined && num > 0) {
        let sumDivisor = 0;
        for (let i = 1; i <= num / 2; i++) {
            if (num % i === 0) {
                sumDivisor = sumDivisor + i;
            }
        }
        if (sumDivisor === num && sumDivisor !== 0) {
            console.log("The number is perfect");
        } else {
            console.log("The number isn't perfect");
        }
    } else {
        console.log("Unfortunately, I can't do the calculations")
    }
}
getPerfectNumber(496);
getPerfectNumber(5);

/*Написати функцію, яка приймає 2 аргументи та обраховує суму в цьому проміжку. 
Зверніть увагу, що можна передати 10 та -2, як аргументи. Суму всіх чисел в цьому проміжку також треба обчислити*/
const getSumNumber = (num_1, num_2) => {
    if (num_2 > 0 && !isNaN(num_1) && !isNaN(num_2) && num_1 !== undefined && num_2 !== undefined && num_1 !== null && num_2 !== null) {
        let sumNumbers = 0;
        for (let i = +(num_1); i <= +(num_2); i++) {
            sumNumbers += i;
        }
        return sumNumbers;
    } else {
        console.log("Unfortunately, I can't do the calculations");
    }
}
getSumNumber(1, 10);

// Написати функцію, яка приймає та конвертує температуру із Цельсій у Фаренгейт
const convertTemperature = (tempCelsius) => {
    if (!isNaN(tempCelsius) && tempCelsius !== undefined && tempCelsius !== null) {
        const tempFahrenheit = tempCelsius * 1.8 + 32;
        return tempFahrenheit;
    } else {
        console.log("Unfortunately,I can't do the calculations");
    }
}
convertTemperature(10);

// Написати фунцію, яка генерує випадкове ціле число в проміжку від 0 до 40
const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 40);
    return randomNumber;
}
getRandomNumber();