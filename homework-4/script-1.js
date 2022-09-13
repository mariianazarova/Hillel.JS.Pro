//Додати 0.1 та 0.2 так, що був правильний математичний результат
const NUMBER_1 = 0.1;
const NUMBER_2 = 0.2;
const RESULT = +(NUMBER_1 + NUMBER_2).toFixed(1);
console.log(RESULT);
//Зберегти логін користувача із prompt
const USER_LOGIN = prompt("Enter Your Login");
// Зберегти пароль користувача із prompt
const USER_PASSWORD = prompt("Enter Your Password");
/*Задати умову таким чином, щоб користувач мав змогу зайти в адмін панель, 
тоді й тільки тоді, коли логін та пароль будуть: admin та 12pass33210 відповідно. 
Якщо користувач правильно ввів дані - показуємо в console, що він успішно залогінений.
Якщо ввів невірно пароль - повідомляємо, що проблема з логіном або паролем.
Якщо ввів невірно логін - повідомляємо, що проблема з логіном або паролем.
Якщо ввів обидва невірно - повідомляємо, що такий користувач немає доступу до admin-панелі*/
if (USER_LOGIN === 'admin' && USER_PASSWORD === '12pass33210') {
    console.log("Congratulations! You Successfully Login!");
} else if (USER_LOGIN !== 'admin' && USER_PASSWORD !== '12pass33210') {
    console.log("Sorry, You Do Not Have Access To The Admin Panel");
} else if (USER_LOGIN !== 'admin' || USER_PASSWORD !== '12pass33210') {
    console.log("You Have А Problem With Your Login Or Password");
}

//Запитати в користувача та зберегти кількість грошей, які в нього є.
const USER_MONEY = +prompt("How Money (UAH) Do You Have? Please Enter Only Number");
//Через console.log показати прейскурант цін (Кавун: 21 грн, Морква: 8 грн, Картопля: 12 грн тощо)
const PRICE_WATEMELON = 21;
const PRICE_CARROT = 8;
const PRICE_POTATOE = 12;
//Через console.log показати прейскурант цін (Кавун: 21 грн, Морква: 8 грн, Картопля: 12 грн тощо)
console.log(`Price Of Watermelon Is ${PRICE_WATEMELON} UAH`);
console.log(`Price Of Carrot Is ${PRICE_CARROT} UAH`);
console.log(`Price Of Potatoe Is ${PRICE_POTATOE} UAH`);
//Запитати в користувача, що він б хотів купити

const PURCHASE = prompt("What Would You Buy? Choose Please One Kind Of Products.");
/*Порахувати максимальну кількість придбаного продукту який він обрав та який залишок в нього залишиться. Наприклад: користувач ввів 100 грн й захотів купити кавуни. Максимальна кількість кавунів - 4 шт. та залишок 16 грн. Результат вивести в console у форматі - "За {тут_початкова_сума} грн. Ви можете придбати {тут_кількість} даного продукту. У Вас залишиться {тут_залишок}"
Якщо користувач ввів суму меншу за ціну будь-якого продукту - то потрібно повідомити у форматі "На жаль, у Вас недостатньо коштів для купівлі хоча б 1 шт. будь-якого продукту"
Якщо користувач ввів, наприклад, 20 грн. та хоче придбати кавун, тоді варто повідомити у такому форматі "У вас недостатньо коштів, для купівлі хоча б 1 шт. {тут_назва_продукту}"*/
if (PURCHASE === 'Watermelon' || PURCHASE === 'watermelon' || PURCHASE === 'Watermelons' || PURCHASE === 'watermelons') {
    if (USER_MONEY >= PRICE_WATEMELON) {
        const AMOUNT_WATERMELON = Math.floor(USER_MONEY / PRICE_WATEMELON);
        const REMAINDER_MONEY = USER_MONEY % PRICE_WATEMELON;
        console.log(`Using ${USER_MONEY} UAH You Could Buy ${AMOUNT_WATERMELON} Watermelon. You Will Have ${REMAINDER_MONEY} UAH`);
    } else {
        console.log("Unfortunately, You Do Not Have Enough Money To Buy At Least One Watermelon.");
    }
} else if (PURCHASE === 'Carrot' || PURCHASE === 'carrot' || PURCHASE === 'Carrots' || PURCHASE === 'carrots') {
    if (USER_MONEY >= PRICE_CARROT) {
        const AMOUNT_CARROT = Math.floor(USER_MONEY / PRICE_CARROT);
        const REMAINDER_MONEY = USER_MONEY % PRICE_CARROT;
        console.log(`Using ${USER_MONEY} UAH You Could Buy ${AMOUNT_CARROT} Carrot. You Will Have ${REMAINDER_MONEY} UAH`);
    } else {
        console.log("Unfortunately, You Do Not Have Enough Money To Buy At Least One Carrot.");
    }
} else if (PURCHASE === 'Potatoe' || PURCHASE === 'potatoe' || PURCHASE === 'Potatoes' || PURCHASE === 'potatoes') {
    if (USER_MONEY >= PRICE_POTATOE) {
        const AMOUNT_POTATOE = Math.floor(USER_MONEY / PRICE_POTATOE);
        const REMAINDER_MONEY = USER_MONEY % PRICE_POTATOE;
        console.log(`Using ${USER_MONEY} UAH You Could Buy ${AMOUNT_POTATOE} Potatoe. You Will Have ${REMAINDER_MONEY} UAH`);
    } else {
        console.log("Unfortunately, You Do Not Have Enough Money To Buy At Least One Potatoe.");
    }
} else {
    console.log("Unfortunately, We Do Not Have Such A Product.");
}
//Запитати у користувача дані про трикутник - три сторони (три окремі prompt)
const TRIANGLE_FIRST_SIDE = +prompt("Enter Please The First Side Of Triangle");
const TRIANGLE_SECOND_SIDE = +prompt("Enter Please The Second Side Of Triangle");
const TRIANGLE_THIRD_SIDE = +prompt("Enter Please The Third Side Of Triangle");
//Необхідно визначити, чи такий трикутник існує
if (TRIANGLE_FIRST_SIDE + TRIANGLE_SECOND_SIDE > TRIANGLE_THIRD_SIDE && TRIANGLE_SECOND_SIDE + TRIANGLE_THIRD_SIDE > TRIANGLE_FIRST_SIDE && TRIANGLE_THIRD_SIDE + TRIANGLE_FIRST_SIDE > TRIANGLE_SECOND_SIDE) {
    console.log("The Triangle Exits");
} else {
    console.log("The Triangle Doesn't Exit");
}

/* Обрахувати значення наступних виразів

2 && 0 && 3 || true && false  
0||false 
false

false || " " || 3 && true  
" " || true  
" "

1 && 1000 && '0' || 0 && 'Bob'
1000 && '0' || 0
'0' || 0
'0'

-1 || 0 || 0 && "" || 1010
-1 || 0 || 0 || 1010
-1
*/