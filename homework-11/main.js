window.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('wrapper');
    const product = document.createElement('ul');
    const sumProduct = document.createElement('p');
    const theMostExpensiveProductList = document.createElement('p');
    const avPrice = document.createElement('p');
    let theMostExpensiveProduct = "";
    const listProducts = [{
            productName: "Bread",
            productData: {
                weight: 200,
                certificate: true,
                dateOfExpiry: "21/10/2022",
                sugarFree: true,
            },
            productProvider: "FOP Skyba R.R.",
            productCountry: "UA",
            productPrice: 11.75,
        },
        {
            productName: "Milk",
            productData: {
                weight: 1000,
                certificate: true,
                dateOfExpiry: "11/12/2022",
                sugarFree: true,
            },
            productProvider: "FOP Skyba R.R.",
            productCountry: "UA",
            productPrice: 35.00,
        },
        {
            productName: "Chocolate",
            productData: {
                weight: 250,
                certificate: false,
                dateOfExpiry: "11/12/2023",
                sugarFree: false,
            },
            productProvider: "Korona",
            productCountry: "UA",
            productPrice: 60.00,
        },
        {
            productName: "Banana",
            productData: {
                weight: 2000,
                certificate: true,
                dateOfExpiry: "21/01/2023",
                sugarFree: false,
            },
            productProvider: "Banana",
            productCountry: "EG",
            productPrice: 50.00,
        },
        {
            productName: "Orange",
            productData: {
                weight: 1000,
                certificate: true,
                dateOfExpiry: "14/11/2022",
                sugarFree: false,
            },
            productProvider: "Orange",
            productCountry: "SP",
            productPrice: 100,
        },
        {
            productName: "Apple",
            productData: {
                weight: 3000,
                certificate: true,
                dateOfExpiry: "24/10/2022",
                sugarFree: false,
            },
            productProvider: "FOP Skyba R.R.",
            productCountry: "UA",
            productPrice: 20.00,
        },
        {
            productName: "Avocado",
            productData: {
                weight: 1000,
                certificate: true,
                dateOfExpiry: "30/12/2022",
                sugarFree: false,
            },
            productProvider: "Avocado",
            productCountry: "SP",
            productPrice: 600.00,
        },
        {
            productName: "Potatoe",
            productData: {
                weight: 1000,
                certificate: true,
                dateOfExpiry: "30/11/2022",
                sugarFree: false,
            },
            productProvider: "Potatoe",
            productCountry: "UA",
            productPrice: 20.00,
        },
        {
            productName: "Carrot",
            productData: {
                weight: 1000,
                certificate: true,
                dateOfExpiry: "30/11/2022",
                sugarFree: true,
            },
            productProvider: "FOP Skyba R.R.",
            productCountry: "UA",
            productPrice: 30.00,
        },
        {
            productName: "Chicken meat",
            productData: {
                weight: 1000,
                certificate: false,
                dateOfExpiry: "30/11/2022",
                sugarFree: true,
            },
            productProvider: "FOP Skyba R.R.",
            productCountry: "UA",
            productPrice: 60.00,
        },
        {
            productName: "Rabbit meat",
            productData: {
                weight: 1000,
                certificate: false,
                dateOfExpiry: "15/11/2022",
                sugarFree: false,
            },
            productProvider: "FOP Skyba R.R",
            productCountry: "UA",
            productPrice: 180.00,
        },
        {
            productName: "Grapefruit",
            productData: {
                weight: 500,
                certificate: true,
                dateOfExpiry: "15/11/2022",
                sugarFree: false,
            },
            productProvider: "Grapefruit",
            productCountry: "SP",
            productPrice: 80.00,
        },
        {
            productName: "Sugar",
            productData: {
                weight: 1000,
                certificate: false,
                dateOfExpiry: "15/11/2022",
                sugarFree: false,
            },
            productProvider: "FOP Skyba R.R",
            productCountry: "UA",
            productPrice: 60.00,
        },
        {
            productName: "Salt",
            productData: {
                weight: 500,
                certificate: true,
                dateOfExpiry: "30/11/2022",
                sugarFree: false,
            },
            productProvider: "FOP Skyba R.R",
            productCountry: "UA",
            productPrice: 20.00,
        },
        {
            productName: "Green Tea",
            productData: {
                weight: 200,
                certificate: false,
                dateOfExpiry: "30/11/2023",
                sugarFree: false,
            },
            productProvider: "Richard",
            productCountry: "EN",
            productPrice: 90.00,
        },
    ];
    let sum = 0;

    for (let i = 0; i < listProducts.length; i++) {
        const productItem = document.createElement('li');
        if ((i + 1) % 2 === 0) {
            productItem.classList.add('even')
        }

        productItem.innerHTML = `${listProducts[i].productName} <img width="10" src="img/${listProducts[i].productCountry}.png" alt="${listProducts[i].productCountry}">`;

        if (!listProducts[i].productData.certificate) {
            productItem.innerHTML = "<span class=\"nocertificate\">(!)</span> " + productItem.innerHTML;
        }

        product.append(productItem);
    }

    sum = listProducts.reduce((acc, item) => {
        return acc + item.productPrice;
    }, 0);

    const maxPrice = listProducts.reduce((a, b) => a.productPrice > b.productPrice ? a : b).productPrice;
    theMostExpensiveProduct = listProducts.filter(item => item.productPrice === maxPrice);

    sumProduct.innerText = `The sum of all products is: ${sum}`;
    theMostExpensiveProductList.innerText = `The most expensive product is: ${theMostExpensiveProduct[0].productName}`;
    avPrice.innerText = `The average price: ${sum / listProducts.length}`;

    wrapper.append(product);
    wrapper.append(sumProduct);
    wrapper.append(theMostExpensiveProductList);
    wrapper.append(avPrice);
});