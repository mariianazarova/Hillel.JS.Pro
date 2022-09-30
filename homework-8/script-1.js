/*Створити масив, довжину та елементи якого задає користувач (через prompt).
 Елементами масиву повинні бути числа*/
const arrayNumber = Array();
const lengthArray = +prompt("Enter please the length of array");
if (!Number.isInteger(lengthArray)) {
    console.log("Sorry, we cannot to process data");
} else {
    for (let i = 0; i < lengthArray; i++) {
        let elementArray = +prompt("Enter please number");
        if (!Number.isInteger(elementArray)) {
            console.log("Sorry, elements of array need to be numbers");
        } else {
            arrayNumber.push(+elementArray);
        }
    }
}
/*Відсортувати масив за зростанням.*/
arrayNumber.sort((num_1, num_2) => num_2 - num_1);

/*Дано масив - список покупок. Кожен елемент масиву - 
це обʼєкт вигляду: {productName: 'bread', productPrice: 14.5, 
productQuantity: 2}. Мінімальний довжина такого масиву - 6*/
const purchasesList = [{
        productName: 'bread',
        productPrice: 14.5,
        productQuantity: 2
    },
    {
        productName: 'milk',
        productPrice: 30,
        productQuantity: 1
    },
    {
        productName: 'eggs',
        productPrice: 40,
        productQuantity: 3
    },
    {
        productName: 'chicken fillet',
        productPrice: 60,
        productQuantity: 1
    },
    {
        productName: 'apple',
        productPrice: 30,
        productQuantity: 1
    },
    {
        productName: 'chocolate',
        productPrice: 40,
        productQuantity: 1
    }
];

/*Порахувати загальну вартість корзини та вивести суму у зрозумілому форматі*/
const totalPurchasesPrice = purchasesList.reduce((totalPurchasesPrice, {
    productPrice,
    productQuantity
}) => totalPurchasesPrice + productPrice * productQuantity, 0);
console.log(`The total price of purchases is ${totalPurchasesPrice}`);

/*Порахувати найменшу кількість продукту, який потрібно купити*/
const minQuantityProduct = purchasesList.sort((item_1, item_2) => item_1.productQuantity > item_2.productQuantity ? 1 : -1);
console.log(`The min quantity of products is ${minQuantityProduct[0].productName}`);

/*Порахувати загальну кількість продуктів (productQuantity)*/
let sum = 0;
const amountQuantityProduct = purchasesList.forEach((element) => sum += element.productQuantity);
console.log(`The total quantity of product is ${sum}`);

/*Знайти найдорожчий продукт*/

const expensiveProduct = purchasesList.sort((element_1, element_2) => element_2.productPrice - element_1.productPrice)[0];
console.log(`The expensive product is ${expensiveProduct.productName}`);

/*Створити функцію, яка повинна додавати новий продукт в існуючий масив
Дані про новий продукт - користувач вводить із prompt*/
const addNewProduct = (product) => {
    productName = prompt("Enter please product name");
    productPrice = +prompt("Enter please product price");
    productQuantity = +prompt("Enter please quantity product");
    if (!Number.isInteger(productPrice) || !Number.isInteger(productQuantity) || productName === undefined || productName === null) {
        console.log("Sorry, something is wrong");
    } else {
        product.push({
            productName,
            productPrice,
            productQuantity
        })
        return product;
    }
}
console.log(addNewProduct(purchasesList));

/*Створити функцію, яка повинна видаляти конкретний продукт із існуючого масиву продуктів
Дані про видалення такого продукту - користувач вводить із prompt лише назву*/
const deleteProduct = (product) => {
    productName = prompt("Enter please product name to delete");
    if (productName === undefined || productName === null) {
        console.log("Sorry, something is wrong");
    } else {
        const indexProduct = product.findIndex(element => element.productName === productName);
        if (indexProduct >= 0) {
            product.splice(indexProduct, 1);
        } else {
            console.log("Sorry, we cannot find product");
        }
    }
    return product;
}
console.log(deleteProduct(purchasesList));

/* Дано масив [16, -3, 54,-4, 72,-56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54, 76, -4, 12, 6, -35]*/
const arrayNumber_2 = [16, -3, 54, -4, 72, -56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54, 76, -4, 12, 6, -35];

/*Знайти суму та кількість позитивних елементів.*/
let sumPositiveNumber=0;
arrayNumber_2.forEach(element=>element > 0 ? sumPositiveNumber+=element:false);
arrayNumber_2.filter(element => element > 0).length;

/*Знайти мінімальний елемент масиву та його порядковий номер.*/
const minNumber = Math.min(...arrayNumber_2);
const indexMinNumber = arrayNumber_2.indexOf(minNumber) + 1;

/*Знайти максимальний елемент масиву та його порядковий номер.*/
const maxNumber = Math.max(...arrayNumber_2);
const indexMaxNumber = arrayNumber_2.indexOf(maxNumber) + 1;

/*Визначити кількість негативних елементів.*/
arrayNumber_2.filter(element => element < 0).length;

/*Знайти кількість непарних позитивних елементів.*/
arrayNumber_2.filter(element => element % 2 !== 0 && element > 0).length;

/*Знайти суму парних позитивних елементів.*/
let sumPositiveUnpairedNumber = 0;
const PositiveUnpairedNumber = arrayNumber_2.filter(element => element % 2 == 0 && element > 0);
PositiveUnpairedNumber.forEach(element => sumPositiveUnpairedNumber += element);

/*Знайти добуток позитивних елементів.*/
let multiplicationPositiveNumber = 1;
arrayNumber_2.forEach(element => element > 0 ? multiplicationPositiveNumber *= element : false);