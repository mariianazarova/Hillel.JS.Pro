window.addEventListener('DOMContentLoaded', () => {
    const inputSec = document.querySelector('.sec-input');
    document.querySelector('.sec-submit').addEventListener('click', (event) => {
        event.preventDefault();
        if (!inputSec.value) {
            alert("Sorry, you didn't enter seconds left in Russia before her disappears");
        } else {
            alert(`${inputSec.value} seconds left in Russia before her disappears`);
        }
    })


    const selectDate = document.querySelector('.date-input');
    document.querySelector('.date-submit').addEventListener('click', () => {
        if (!selectDate.value) {
            alert("Sorry, you didn't choose date of campaign");
        }
        const endDate = new Date(selectDate.value).getTime();
        const currentDate = new Date().getTime();
        if (endDate <= currentDate) {
            alert("Sorry, you chose past date");
        } else {
            const interval = endDate - currentDate;
            const years = Math.round(interval / 31557600000);
            const months = Math.round((interval % 31557600000) / 2629800000);
            const days = Math.round((interval % 2629800000) / 86400000);
            const hours = Math.round((interval % 86400000) / 3600000);
            const minutes = Math.round((interval % 3600000) / 60000);
            alert(`By the start of the campaign left: ${years} years, ${months} months, ${days} days, ${hours}hours, ${minutes} minutes`);
        }
    })

const selectPhoneBrand=document.querySelector('.phone-brand');
const selectPhoneRam=document.querySelector('.phone-ram');
const selectPhoneBuiltInMemory=document.querySelector('.phone-built-in-memory');
document.querySelector('.phone-calc').addEventListener('click',()=>{
let sumPhonePrice=0;
if(selectPhoneBrand.value==='Iphone')
{
    sumPhonePrice+=35000;
} else if(selectPhoneBrand.value==='Samsung'){
    sumPhonePrice+=15000;
} else if (selectPhoneBrand.value==='Pixel'){
    sumPhonePrice+=10000;
} else if (selectPhoneBrand.value==='OnePlus')
{
    sumPhonePrice+=14000;
}
if(selectPhoneRam.value==='2'){
    sumPhonePrice+=500;
} else if (selectPhoneRam.value==='4'){
    sumPhonePrice+=800;
} else if (selectPhoneRam.value==='6'){
    sumPhonePrice+=1000;
} else if (selectPhoneRam.value==='8'){
    sumPhonePrice+=1200;
}
if (selectPhoneBuiltInMemory.value==='64'){
    sumPhonePrice+=700;  
} else if (selectPhoneBuiltInMemory.value==='128'){
    sumPhonePrice+=900;
} else if (selectPhoneBuiltInMemory.value==='256'){
    sumPhonePrice+=1300;
} else if (selectPhoneBuiltInMemory.value==='512'){
    sumPhonePrice+=2000;
}
alert (`${selectPhoneBrand.value} cost ${sumPhonePrice} UAH`);
})

})