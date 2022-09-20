//Написати функцію, яка приймає 4 аргументи і шукає найменше число серед них
function getMinNumber(num_1, num_2, num_3, num_4) {
    const result = Math.min(num_1, num_2, num_3, num_4);
    if (!isNaN(result)) {
        return result;
    } else {
        console.log("I can't figure out min number");
    }
}
getMinNumber("5", 0, 5, 2);

/*Написати функцію, яка приймає 2 аргументи та шукає найбільший спільний дільник для них. 
Якщо такого числа немає, то повідомляти про відсутність*/
function getGreatestCommonDivisor(num_1, num_2) {
    if (num_2 > num_1) {
        return getGreatestCommonDivisor(num_2, num_1);
    } else if (!num_2) {
        return num_1;
    } else if (num_1 > num_2) {
        return getGreatestCommonDivisor(num_2, num_1 % num_2);
    } else {
        console.log("The greatest common divisorr is missing");
    }
}
getGreatestCommonDivisor(25, 5);

//Написати функцію, яка приймає 1 аргумент та перевіряє чи дане число ідеальне
function getPerfectNumber(num) {
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
}
getPerfectNumber(496);
getPerfectNumber(5);

/*Написати функцію, яка приймає 2 аргументи та обраховує суму в цьому проміжку. 
Зверніть увагу, що можна передати 10 та -2, як аргументи. Суму всіх чисел в цьому проміжку також треба обчислити*/

const getSum = (num_1, num_2) => {
    let sumNumbers = +(num_1);
    for (let i = +(num_1); i <= +(num_2); i++) {
        sumNumbers += i;

    }
    if (!isNaN(sumNumbers)) {
        return sumNumbers;
    } else {
        console.log("I can't do the calculations");

    }

}
getSum(1, 10);

// Написати функцію, яка приймає та конвертує температуру із Цельсій у Фаренгейт
const convertTemperature = function (tempCelsius) {
    const tempFahrenheit = tempCelsius * 1.8 + 32;
    if (!isNaN(tempFahrenheit)) {
        return tempFahrenheit;
    } else {
        console.log("I can't do the calculations");

    }
}
convertTemperature(10);

// Написати фунцію, яка генерує випадкове ціле число в проміжку від 0 до 40
const getRandom = () => {
    let randomNumber;
    for (let i = 0; i <= 40; i++) {
        randomNumber = Math.floor(Math.random(i) * 40);
    }
    return randomNumber;
}
getRandom();