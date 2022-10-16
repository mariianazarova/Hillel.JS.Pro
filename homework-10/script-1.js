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
function HatchBack(){
    Car.call(this,arguments);
}
function Universal(){
    Car.call(this,arguments);
}
Sedan.prototype=Object.create(Car.prototype);
HatchBack.prototype=Object.create(Car.prototype);
Universal.prototype=Object.create(Car.prototype);

const mySedan=new Sedan(15, 'diesel',3.2,'Lexus', 2014,1700,true);
const myHatchBack=new HatchBack(15,'diesel',4,'Toyota Corolla',2004,1600,false);
const myUniversal=new Universal(14,'diesel', 3,'Audi A6',2012,1300,true);
mySedan.startRide();
mySedan.endRide();

myHatchBack.startRide();
myHatchBack.endRide();

myUniversal.startRide();
myUniversal.endRide();


