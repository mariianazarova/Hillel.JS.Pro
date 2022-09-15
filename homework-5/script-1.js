//Вивести в console числа, від 10 до 25 з кроком 0.5 (10 й 25 включно)
console.log("Number from 10 to 25 inclusive with step 0.5:");
for (let i = 10; i <= 25; i += 0.5) {
    console.log(i);
}

//Запитати та зберегти число введене із prompt
const number = +prompt("Enter please number");

//Визначати чи це число просте
let i = 2;
const limit = Math.sqrt(number);
if (number > 1) {
    while (i <= limit) {
        if (number % i !== 0) {
            console.log(`The number ${number} is prime`);
            break;
        }
        console.log(`The number ${number} isn't prime`);
        i++;
    }
} else {
    console.log("The number isn't prime");
}

/*Запитати та зберегти суму покупки введене із prompt. Обрахувати знижку та повідомити
 користувачу значення знижки. Якщо сума покупки до 100 UAН - знижка 3%; якщо сума покупки
до 200 UAH - знижка 5%; якщо сума покупки перевищує 200 UAH - знижка 7% */
const purchase = +prompt("Enter please sum of purchase (only number) UAH");
let discount;
if (purchase <= 100) {
    discount = (0.03 * purchase).toFixed(2);
    console.log(`Your discount is ${discount} UAH`);
} else if (purchase > 100 && purchase <= 200) {
    discount = (0.05 * purchase).toFixed(2);
    console.log(`Your discount is ${discount} UAH`);
} else if (purchase > 200) {
    discount = (0.07 * purchase).toFixed(2);
    console.log(`Your discount is ${discount} UAH`);
} else if (purchase === 0) {
    console.log("You don't have discount");
}

//Вивести таблицю множення чисел від 2 до 9 у зрозумілому форматі
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        const resMultiplication = i * j;
        console.log(`${i} × ${j} = ${resMultiplication}`);
    }
}

//Умова: один долар коштує 36,76 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів. Формат (100 USD = 3 676 UAH)
console.log("1 USD = 36.76 UAH");
for (let i = 10; i <= 100; i += 10) {
    const costDollar = Math.floor(36.76 * i);
    console.log(`${i} USD = ${costDollar} UAH`);
}

/*Запитати у користувача 15 чисел і обрахувати, скільки серед них додатніх, від’ємних і нулів.
 Також визначатити кількість парних і непарних. Вивести статистику через console у зрозумілому форматі. 
 *** Достатньо однієї змінної (не 15) для введення чисел користувачем.*/
let amountPositive = 0,
    amountNegative = 0,
    amountZero = 0,
    amountPair = 0,
    amountUnpaired = 0;
for (let i = 1; i <= 15; i++) {
    const num = +prompt("Enter please number 15 once");
    if (num > 0) {
        amountPositive++;
    } else if (num < 0) {
        amountNegative++;
    } else if (num === 0) {
        amountZero++;
    }
    if ((num % 2) === 0) {
        amountPair++;
    } else {
        amountUnpaired++;
    }
}
console.log(`The amount of positive number is ${amountPositive}`);
console.log(`The amount of negative number is ${amountNegative}`);
console.log(`The amount of zero number is ${amountZero}`);
console.log(`The amount of pair number is ${amountPair}`);
console.log(`The amount of uppaired number is ${amountUnpaired}`);