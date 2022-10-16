/*Реалізувати фунцію-конструктор Автомобіля.
Реалізувати фунцію-конструктор Автомобіля.
Можливості автомобіля - почати поїздку, закінчити поїздку та 1 поле-властивість - справність авто (число від 0-100).
Реалізувати 3 фунції-конструктори - Хетчбек, Універсал, Седан. Їхнім прототипом - має бути Автомобіль та його можливості відповідно
Окрім можливостей Автомобіля, ці 3 сутності повинні мати свої власні дані - розхід топлива, тип двигуна, об'єм двигуна, модель, рік випуску, маса, статус (або поїздка або готовий до поїздки)
Статус авто - не можна почати нову поїздку не завершивши попередню. Статус має бути Boolean значенням. Де true - це Автомобіль зараз у поїздці. Та false - Автомобіль стоїть, можна починати нову поїздку
Відповідно методи Автомобіля почати та закінчити поїздку змінюють ці статуси у конкретного екземпляра
Справність авто - це число від 0-100. Від кожної поїздки на авто (викликаний методом почати поїздку) - справність зменшується
Кількість такої справності, яка зменшується визначати через Math.random. Випадкове число має бути в межах від 0.1 до 2.5*
Створити кілька автомоблів, поїздити. Переконатись, що кожна поїздка справді впливає на справність авто*/
function Car() {
    const info = {
        ...arguments[0]
    };
    this.fuelConsumption = info[0];
    this.engineType = info[1];
    this.engineVolume = info[2];
    this.modelName = info[3];
    this.madeYear = info[4];
    this.mass = info[5];
    this.carStatus = info[6];
    this.maintence = 100;
}
Car.prototype.startRide = function () {
    if (!this.carStatus) {
        this.carStatus = true;
        this.maintence -= (Math.random() * (2.5 - 0.1) + 0.1).toFixed(2);
    } else {
        console.log(`The car ${this.modelName} is already ridding.`)
    }
}
Car.prototype.endRide = function () {
    this.carStatus = false;
    console.log(`The car ${this.modelName} is ending ride`);
}

function Sedan() {
    Car.call(this, arguments);
}

function HatchBack() {
    Car.call(this, arguments);
}

function Universal() {
    Car.call(this, arguments);
}
Sedan.prototype = Object.create(Car.prototype);
HatchBack.prototype = Object.create(Car.prototype);
Universal.prototype = Object.create(Car.prototype);

const mySedan = new Sedan(15, 'diesel', 3.2, 'Lexus', 2014, 1700, true);
const myHatchBack = new HatchBack(15, 'diesel', 4, 'Toyota Corolla', 2004, 1600, false);
const myUniversal = new Universal(14, 'diesel', 3, 'Audi A6', 2012, 1300, true);
mySedan.startRide();
mySedan.endRide();

myHatchBack.startRide();
myHatchBack.endRide();

myUniversal.startRide();
myUniversal.endRide();

/*Створити функцію Дилер, яка приймає 1 аргумент - створений пунктом вище автомобіль (з його даними)
Функція Дилер визначає скільки коштуватиме ремонт машини відштовхуючись від прейскуранту цін наведених у таблиці
Дилер після ремонту має оновити справність конкретного авто до 100 та повідомити власнику ціну ремонту та наскільки автомобіль був пошкоджений*/

function dealer(car) {
    let priceRepair = 0;
    let coefCarOfYear = 0;
    let coefCarOfEngineType = 0;
    let coefCarOfMass = 0;
    const price = 100 - car.maintence;
    if (car instanceof HatchBack) {
        if (car.madeYear > 2019 && car.madeYear < 2022) {
            coefCarOfYear = 1.2;
        } else if (car.madeYear > 2010 && car.madeYear < 2018) {
            coefCarOfYear = 1.4;
        } else if (car.madeYear > 2000 && car.madeYear < 2009) {
            coefCarOfYear = 1.7;
        } else if (car.madeYear > 1990 && car.madeYear < 1999) {
            coefCarOfYear = 2;
        } else if (car.madeYear < 1990) {
            console.log("Sorry, we don't repair old car which year less 1990");
        }
        if (car.engineType === 'diesel') {
            coefCarOfEngineType = 2.2;
        } else if (car.engineType === 'petrol') {
            coefCarOfEngineType = 1.8;
        }
        if (car.mass > 800 && car.mass < 1100) {
            coefCarOfMass = 1.5;
        } else if (car.mass > 1101 && car.mass < 1400) {
            coefCarOfMass = 1.7;
        } else if (car.mass > 1401) {
            coefCarOfMass = 2;
        }
        priceRepair = (110 * price * (car.maintenance * (coefCarOfYear + coefCarOfEngineType + coefCarOfMass))).toFixed(2);
        console.log(`Price of repair car ${car.modelName} is ${priceRepair}`);
    }
    if (car instanceof Sedan) {
        if (car.madeYear > 2019 && car.madeYear < 2022) {
            coefCarOfYear = 1.5;
        } else if (car.madeYear > 2010 && car.madeYear < 2018) {
            coefCarOfYear = 1.8;
        } else if (car.madeYear > 2000 && car.madeYear < 2009) {
            coefCarOfYear = 2;
        } else if (car.madeYear > 1990 && car.madeYear < 1999) {
            coefCarOfYear = 2.6;
        } else if (car.madeYear < 1990) {
            console.log("Sorry, we don't repair old car which year less 1990");
        }
        if (car.engineType === 'diesel') {
            coefCarOfEngineType = 2.5;
        } else if (car.engineType === 'petrol') {
            coefCarOfEngineType = 2;
        }
        if (car.mass > 800 && car.mass < 1100) {
            coefCarOfMass = 1.6;
        } else if (car.mass > 1101 && car.mass < 1400) {
            coefCarOfMass = 1.8;
        } else if (car.mass > 1401) {
            coefCarOfMass = 2.1;
        }
        priceRepair = (125 * price * (car.maintenance * (coefCarOfYear + coefCarOfEngineType + coefCarOfMass))).toFixed(2);
        console.log(`Price of repair car ${car.modelName} is ${priceRepair}`);
    }
    if (car instanceof Universal) {
        if (car.madeYear > 2019 && car.madeYear < 2022) {
            coefCarOfYear = 2;
        } else if (car.madeYear > 2010 && car.madeYear < 2018) {
            coefCarOfYear = 2.2;
        } else if (car.madeYear > 2000 && car.madeYear < 2009) {
            coefCarOfYear = 2.5;
        } else if (car.madeYear > 1990 && car.madeYear < 1999) {
            coefCarOfYear = 3;
        } else if (car.madeYear < 1990) {
            console.log("Sorry, we don't repair old car which year less 1990");
        }
        if (car.engineType === 'diesel') {
            coefCarOfEngineType = 2.9;
        } else if (car.engineType === 'petrol') {
            coefCarOfEngineType = 2.4;
        }
        if (car.mass > 800 && car.mass < 1100) {
            coefCarOfMass = 1.7;
        } else if (car.mass > 1101 && car.mass < 1400) {
            coefCarOfMass = 1.9;
        } else if (car.mass > 1401) {
            coefCarOfMass = 2.2;
        }
        priceRepair = (130 * price * (car.maintenance * (coefCarOfYear + coefCarOfEngineType + coefCarOfMass))).toFixed(2);
        console.log(`Price of repair car ${car.modelName} is ${priceRepair}`);
    }
}
dealer(myHatchBack);
dealer(mySedan);
dealer(myUniversal);