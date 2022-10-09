/*Створити функцію-конструктор Людини. Властивості, які будуть описувати екземпляр Людини - ім'я, вік, стать, 
національність, країна, список країн для подорожей. Створити універсальні функції - знайомство, прокидатися, 
засинати й список країн, які Людина хоче відвідати. Роботу цих функцій можна виводити через console.log.
 Але в кожній з функцій повинно використовуватись якомога більше характеристик 
конкретної Людини на якій ця функція викликається (підказка: тут треба використати call/apply)*/
function Person(namePerson, agePerson, sexPerson, nationalityPerson, countryPerson, listCountryForTravelling) {
    this.namePerson = namePerson;
    this.agePerson = agePerson;
    this.sexPerson = sexPerson;
    this.nationalityPerson = nationalityPerson;
    this.countryPerson = countryPerson;
    this.listCountryForTravelling = listCountryForTravelling;

}
Person.prototype.acquaintance = function () {

    console.log(`Hello ${this.namePerson}. Your information: your age is ${this.agePerson}, your sex is ${this.sexPerson}, your nationality is ${this.nationalityPerson}, your country is ${this.countryPerson}`);
}


Person.prototype.wakeUp = function () {

    console.log(`Hello ${this.namePerson}. It's time to wake up!`);
}


Person.prototype.goToBed = function () {

    console.log(`Hello ${this.namePerson}. It's time to go to bed!`);
}

Person.prototype.travellInCountries = function () {

    console.log(`${this.namePerson} want to travell in such countries as ${this.listCountryForTravelling}`);
}

Person.prototype.checkInfo = function () {
    if (Number.isInteger(this.namePerson) || this.namePerson === undefined || this.namePerson === null ||
        !Number.isInteger(this.agePerson) || this.agePerson < 0 ||
        Number.isInteger(this.sexPerson) || this.sexPerson === undefined || this.sexPerson === null ||
        Number.isInteger(this.nationalityPerson) || this.nationalityPerson === undefined || this.nationalityPerson === null ||
        Number.isInteger(this.countryPerson) || this.countryPerson === undefined || this.countryPerson === null ||
        Number.isInteger(this.listCountryForTravelling) || this.listCountryForTravelling === undefined || this.listCountryForTravelling === null) {
        console.log('Sorry, something went wrong');
    } else {
        this.acquaintance();
        this.goToBed();
        this.wakeUp();
        this.travellInCountries();
    }
}
const person1 = new Person('Olga', 29, 'female', 'ukrainian', 'Ukraine', ['Austria', 'Poland', 'Germany']);
person1.checkInfo();

// 2 variant

function Person(namePerson, agePerson, sexPerson, nationalityPerson, countryPerson, listCountryForTravelling) {
    this.namePerson = namePerson;
    this.agePerson = agePerson;
    this.sexPerson = sexPerson;
    this.nationalityPerson = nationalityPerson;
    this.countryPerson = countryPerson;
    this.listCountryForTravelling = listCountryForTravelling;

}
const acquaintance = function () {

    console.log(`Hello ${this.namePerson}. Your information: your age is ${this.agePerson}, your sex is ${this.sexPerson}, your nationality is ${this.nationalityPerson}, your country is ${this.countryPerson}`);
}


const wakeUp = function () {

    console.log(`Hello ${this.namePerson}. It's time to wake up!`);
}


const goToBed = function () {

    console.log(`Hello ${this.namePerson}. It's time to go to bed!`);
}

const travellInCountries = function () {

    console.log(`${this.namePerson} want to travell in such countries as ${this.listCountryForTravelling}`);
}

const checkInfo = function () {
    if (Number.isInteger(this.namePerson) || this.namePerson === undefined || this.namePerson === null ||
        !Number.isInteger(this.agePerson) || this.agePerson < 0 ||
        Number.isInteger(this.sexPerson) || this.sexPerson === undefined || this.sexPerson === null ||
        Number.isInteger(this.nationalityPerson) || this.nationalityPerson === undefined || this.nationalityPerson === null ||
        Number.isInteger(this.countryPerson) || this.countryPerson === undefined || this.countryPerson === null ||
        Number.isInteger(this.listCountryForTravelling) || this.listCountryForTravelling === undefined || this.listCountryForTravelling === null) {
        console.log('Sorry, something went wrong');
    } else {
        acquaintance();
        goToBed();
        wakeUp();
        travellInCountries();
    }
}
const person2 = new Person('Olga', 29, 'female', 'ukrainian', 'Ukraine', ['Austria', 'Poland', 'Germany']);
checkInfo.apply(person2);

//Створити власну реалізацію методу .bind (підказка: в кінці треба помістити цю власну 
//функцію у прототип - Function.prototype.myOwnBind = function () { [тут_код_кастомного_bind] }
function Dog(nameDog, ageDog, sexDog) {
    this.nameDog = nameDog;
    this.ageDog = ageDog;
    this.sexDog = sexDog;
}
const myOwnBind = function () {
    if (Number.isInteger(this.nameDog) || this.nameDog === undefined || this.nameDog === null ||
        !Number.isInteger(this.ageDog) || this.ageDog < 0 ||
        Number.isInteger(this.sexDog) || this.sexDog === undefined || this.sexDog === null) {
        console.log('Sorry, something went wrong');
    } else {
        console.log(`Hello dog ${this.nameDog}. Your information: your age is ${this.ageDog}, your sex is ${this.sexDog}`);
    }

}
const dog1 = new Dog('Rex', 5, 'male');
myOwnBind.bind(dog1)();

//Cтворити функцію, котра приймає 2 параметри - об'єкти. Функція повинна перевіряти чи ці 2 обʼєкти абсолютно ідентичні та повертає результат у зрозумілому форматі
const beverages1 = {
    name: 'majito',
    kind: 'non-alcoholic'
}
const beverages2 = {
    name: 'blue lagoon',
    kind: 'alcoholic'
}

const checkObj = function (obj1, obj2) {
    for (let i in obj1) {

        for (let j in obj2) {
            if (isNaN(obj1[i])&& obj1[i] === undefined && obj1[i] === null && isNaN(obj2[i])&& obj2[i] === undefined && obj2[i] === null) {
                console.log('Sorry, something went wrong');
            } else if (obj1[i] === obj2[j]) {
                console.log("Beverages is identical");
            } else {
                console.log("Beverages isn't identical");
            }
        }
    }
}
checkObj(beverages1, beverages2);

/*Створіть функцію-конструктор Calculator, який створює об’єкти з чотирма (або трьома) методами:
enterData - запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
calculateSum() повертає суму цих властивостей.
calculateNSD() повертає результат пошуку НСД
calculateNSK() повертає результат пошуку НСК*/