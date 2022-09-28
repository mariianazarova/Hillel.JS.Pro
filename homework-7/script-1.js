/*Cтворити функцію, яка створює та реєструє нову команду у автопробізі. 
Під час виклику функції потрібно передати дані про команду - назва команди, ім'я водія, рік народження
 водія, марка автомобіля, спонсор команди та чи водій допущений до автопробігу */
const registerAutoRacingTeam = (teamName, driverName, bithOfYearDriver, carBrand, sponsorName, isAllowed) => {
    if (!isNaN(teamName) || !isNaN(driverName) || !isNaN(carBrand) || !isNaN(sponsorName) ||
        teamName !== undefined || teamName !== null || driverName !== undefined || driverName !== null ||
        carBrand !== undefined || carBrand !== null ||
        sponsorName !== undefined || sponsorName !== null ||
        Number.isInteger(bithOfYearDriver) || isAllowed !== undefined || isAllowed !== null ||
        !Number.isInteger(teamName) || !Number.isInteger(driverName) || !Number.isInteger(carBrand) || !Number.isInteger(sponsorName)) {
        const dateTeam = {
            teamName: teamName,
            driverName: driverName,
            bithOfYearDriver: bithOfYearDriver,
            carBrand: carBrand,
            sponsorName: sponsorName,
            isAllowed: isAllowed,
        }
        return dateTeam;
    } else {
        console.log("Sorry, we can't process the information");
    }
}
const newTeam_1 = registerAutoRacingTeam('AutoFirst', 'Petr', 1991, 'Audi', 'Microsoft', true);

/*Запитати дані (через prompt та циклічно) про нового користувача у системі та зберегти його в об'єкт. 
Дані про користувача - логін, пароль, місто, країна, стать, вік */
for (let i = 0; i <= 3; i++) {
    const newUser = {};
    newUser.login = prompt("Enter please login");
    newUser.password = prompt("Enter please password");
    newUser.city = prompt("Enter please city");
    newUser.country = prompt("Enter please country");
    newUser.sex = prompt("Enter please sex");
    newUser.age = prompt("Enter please age");
}
for (let key in newUser) {
    console.log(key);
    console.log(newUser[key]);
}

/*Створити функцію, яка буде міняти дані в конкретного користувача створеного пунктом вище. 
Наприклад сhangeUserData(user_1, city, 'Kherson'). Де user_1 - 
обʼєкт в якому буде мінятись, city - поле, яке буде мінятися на нове значення - 'Kherson'*/
const changeUserData = (obj, field, value) => {
    if (obj !== undefined || obj !== null || !isNaN(obj) || !Number.isInteger(obj) || field !== undefined || field !== null || !isNaN(field) || !Number.isInteger(field) || value !== undefined || value !== null || !isNaN(value) || !Number.isInteger(value)) {
        return obj.field = value;
    } else {
        console.log("Sorry, we can't process the information");
    }
}
changeUserData(user_1, city, 'Kherson');

/* Створити об'єкт cтудента - name, surname, age, course, city, greeting, addHomework. greeting - метод, 
котрий виводить повідомлення через console.log('Hi. everyone!'). 
addHomework - метод, котрий виводить повідомлення через console.log('Sending my howework... Please, wait') */
const student = {
    name: "Olga",
    surname: "Krivenko",
    age: 23,
    course: 5,
    city: "Odesa",
    greeting: function () {
        console.log("Hi, everyone!");
    },
    addHomework: function () {
        console.log("Sending my howework... Please, wait");
    }
}

/*Cтворити функцію isEmpty, яка повертає true, якщо об’єкт не має властивостей (порожній), інакше false.*/
const isEmpty = (obj) => {
    for (let key in obj) {
        if (key === undefined || key === null)
            return true;
        else {
            return false;
        }
    }
}
const obj_1 = {};
const obj_2 = {
    fruit: "apple",
}
isEmpty(obj_1);
isEmpty(obj_2);

/*Створити об’єкт для зберігання 
виручки команди продавців, наприклад: 
{Taras: 2000, Marta: 10 Ivan: 1200, Petro: 400, Roma: 366, Alina: 829}*/
const earningsSalerTeam = {
    Taras: 2000,
    Marta: 10,
    Ivan: 1200,
    Petro: 400,
    Roma: 366,
    Alina: 829,
}

/*Створити фукнцію, яка працює з цим обʼєктом 
та обчислює суму всіх виручок та виводить результат через сonsole.log*/
const calcTotalErnings = (obj) => {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    console.log(sum);
}
calcTotalErnings(earningsSalerTeam);

/* Створити фукнцію, яка працює з цим обʼєктом 
та яка знаходить продавця з найменшою виручкою та виводить результат через сonsole.log у зрозумілому форматі*/
const calcMinErnings = (obj) => {

    console.log(`${Object.keys(obj).filter(key => obj[key] === Math.min.apply(null, Object.values(obj)))} has the smallest ernings`);
}
calcMinErnings(earningsSalerTeam);

/*Створити фукнцію, яка знаходить продавця з найбільшою виручкою 
та виводить результат через сonsole.log у зрозумілому форматі*/
const calcMaxErnings = (obj) => {

    console.log(`${Object.keys(obj).filter(key => obj[key] === Math.max.apply(null, Object.values(obj)))} has the greatest ernings`);
}
calcMaxErnings(earningsSalerTeam);

/*Створити фукнцію, яка випадковим чином вибирає 
продавця місяця та виводить привітання цьому працівнику через сonsole.log у зрозумілому форматі*/
const getRandomSeller = (obj) => {
    console.log(`I congratulate you ${Object.keys(obj)[Math.floor(Math.random() * (Object.keys(obj).length))]}! You are the best seller in this month!`)
}
getRandomSeller(earningsSalerTeam);