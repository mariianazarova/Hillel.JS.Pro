//Запитати у користувача "Яке Ваше імʼя?" та зберегти у змінну
const yourName = prompt("What's Your Name?");
//Запитати у користувача "Яке Ваше прізвище?" та зберегти у змінну
const yourSurname = prompt("What's Your Surname?");
//Запитати у користувача "Яке Ваше улюблене число?" та зберегти у змінну
const yourFavoriteNumber = prompt("What's Your Favorite Number");
console.log(yourName);
console.log(yourSurname);
console.log(yourFavoriteNumber);
//Дані, які ввів користувач, вивести у форматі - "Вітаю, {тут_ім'я} {тут_прізвище}! Ваше улюблене число - {тут_число}"
console.log(`"Hello,${yourName} ${yourSurname}! Your Favorite Number Is ${yourFavoriteNumber}"`);
//Запитати у користувача "Введіть перше число" та зберегти у змінну
const firstNumber = +prompt("Enter Please The First Number");
//Запитати у користувача "Введіть друге число" та зберегти у змінну
const secondaryNumber = +prompt("Enter Please The Secondary Number");
//Обчислити та вивести результати таких операцій над числами - сума, різниця, добуток, ділення
const sum = firstNumber + secondaryNumber;
console.log(sum);
const difference = firstNumber - secondaryNumber;
console.log(difference);
const multiplication = firstNumber * secondaryNumber;
console.log(multiplication);
const division = firstNumber / secondaryNumber;
console.log(division);
//Запитати у користувача "В якому році Ви народились?" та зберегти у змінну цей результат
const userAge = prompt("What year were you born?");
//Визначити та зберегти вік цього користувача у змінну
console.log("User year's born is", userAge);
//Знайти та обчислити остачу від ділення будь-яких двох чисел у форматі: 
//"Остача від ділення числа {тут_ число_1} на число {тут_число_2} рівна {тут_результат_операції}"
const remainder = firstNumber % secondaryNumber;
console.log(`"Remainder of a number"${firstNumber} by number ${secondaryNumber} equal ${remainder}`);
//Користувач вводить число. Визначити чи число парне чи не парне
const thirdNumber = +prompt("Enter Please The Third Number For Pairing Checks");
const isPairingNumber = thirdNumber % 2 === 0;
console.log(isPairingNumber);