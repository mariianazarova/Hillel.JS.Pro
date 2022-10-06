//Додати 0.1 та 0.2 так, що був правильний математичний результат
const number_1 = 0.1;
const number_2 = 0.2;
const result = +(number_1 + number_2).toFixed(1);
console.log(result);

//Зберегти логін користувача із prompt
const userLogin = prompt("Enter Your Login");

// Зберегти пароль користувача із prompt
const userPassword= prompt("Enter Your Password");

/*Задати умову таким чином, щоб користувач мав змогу зайти в адмін панель, 
тоді й тільки тоді, коли логін та пароль будуть: admin та 12pass33210 відповідно. 
Якщо користувач правильно ввів дані - показуємо в console, що він успішно залогінений.
Якщо ввів невірно пароль - повідомляємо, що проблема з логіном або паролем.
Якщо ввів невірно логін - повідомляємо, що проблема з логіном або паролем.
Якщо ввів обидва невірно - повідомляємо, що такий користувач немає доступу до admin-панелі*/
if (userLogin === 'admin' && userPassword === '12pass33210') {
    console.log("Congratulations! You Successfully Login!");
} else if (userLogin !== 'admin' && userPassword !== '12pass33210') {
    console.log("Sorry, You Do Not Have Access To The Admin Panel");
} else if (userLogin !== 'admin' || userPassword !== '12pass33210') {
    console.log("You Have А Problem With Your Login Or Password");
}

//Запитати в користувача та зберегти кількість грошей, які в нього є.
const userMoney = +prompt("How Money (UAH) Do You Have? Please Enter Only Number");

//Через console.log показати прейскурант цін (Кавун: 21 грн, Морква: 8 грн, Картопля: 12 грн тощо)
const priceWatemelon = 21;
const priceCarrot = 8;
const pricePotatoe = 12;

//Через console.log показати прейскурант цін (Кавун: 21 грн, Морква: 8 грн, Картопля: 12 грн тощо)
console.log(`Price Of Watermelon Is ${priceWatemelon} UAH`);
console.log(`Price Of Carrot Is ${priceCarrot} UAH`);
console.log(`Price Of Potatoe Is ${pricePotatoe} UAH`);

//Запитати в користувача, що він б хотів купити
const purchase = prompt("What Would You Buy? Choose Please One Kind Of Products.");

/*Порахувати максимальну кількість придбаного продукту який він обрав та який залишок в нього залишиться. Наприклад: користувач ввів 100 грн й захотів купити кавуни. Максимальна кількість кавунів - 4 шт. та залишок 16 грн. Результат вивести в console у форматі - "За {тут_початкова_сума} грн. Ви можете придбати {тут_кількість} даного продукту. У Вас залишиться {тут_залишок}"
Якщо користувач ввів суму меншу за ціну будь-якого продукту - то потрібно повідомити у форматі "На жаль, у Вас недостатньо коштів для купівлі хоча б 1 шт. будь-якого продукту"
Якщо користувач ввів, наприклад, 20 грн. та хоче придбати кавун, тоді варто повідомити у такому форматі "У вас недостатньо коштів, для купівлі хоча б 1 шт. {тут_назва_продукту}"*/
if (purchase === 'Watermelon' || purchase === 'WATERMELON' || purchase === 'WATERMELON'.toLocaleLowerCase() || purchase === 'Watermelons' || purchase === 'Watermelons'.toLocaleLowerCase()) {
    if (userMoney >= priceWatemelon) {
        const amountWatermelon = Math.floor(userMoney /priceWatemelon);
        const remainderMoney = userMoney% priceWatemelon;
        console.log(`Using ${userMoney} UAH You Could Buy ${amountWatermelon} Watermelon. You Will Have ${remainderMoney} UAH`);
    } else {
        console.log("Unfortunately, You Do Not Have Enough Money To Buy At Least One Watermelon.");
    }
} else if (purchase === 'Carrot' || purchase === 'CARROT' || purchase === 'CARROT'.toLocaleLowerCase() || purchase === 'Carrots' || purchase === 'Carrots'.toLocaleLowerCase()) {
    if (userMoney>= priceCarrot) {
        const amountCarrot = Math.floor(userMoney / priceCarrot);
        const remainderMoney = userMoney % priceCarrot;
        console.log(`Using ${userMoney} UAH You Could Buy ${amountCarrot} Carrot. You Will Have ${remainderMoney} UAH`);
    } else {
        console.log("Unfortunately, You Do Not Have Enough Money To Buy At Least One Carrot.");
    }
} else if (purchase === 'Potatoe' || purchase === 'POTATOE' || purchase === 'POTATOE'.toLocaleLowerCase() || purchase === 'Potatoes' || purchase === 'Potatoes'.toLocaleLowerCase()) {
    if (userMoney >= pricePotatoe) {
        const amountPotatoe= Math.floor(userMoney / pricePotatoe);
        const remainderMoney = userMoney % pricePotatoe;
        console.log(`Using ${userMoney} UAH You Could Buy ${amountPotatoe} Potatoe. You Will Have ${remainderMoney} UAH`);
    } else {
        console.log("Unfortunately, You Do Not Have Enough Money To Buy At Least One Potatoe.");
    }
} else {
    console.log("Unfortunately, We Do Not Have Such A Product.");
}

//Запитати у користувача дані про трикутник - три сторони (три окремі prompt)
const triangleFirstSide = +prompt("Enter Please The First Side Of Triangle");
const triangleSecondSide = +prompt("Enter Please The Second Side Of Triangle");
const triangleThirdSide = +prompt("Enter Please The Third Side Of Triangle");

//Необхідно визначити, чи такий трикутник існує
if (triangleFirstSide + triangleSecondSide > triangleThirdSide && triangleSecondSide + triangleThirdSide > triangleFirstSide && triangleThirdSide + triangleFirstSide > triangleSecondSide) {
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