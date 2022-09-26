/*Cтворити функцію, яка створює та реєструє нову команду у автопробізі. 
Під час виклику функції потрібно передати дані про команду - назва команди, ім'я водія, рік народження
 водія, марка автомобіля, спонсор команди та чи водій допущений до автопробігу */
const RegisterAutoRacingTeam = (teamName, driverName, bithOfYearDriver, carBrand, sponsorName, isAllowed) => {
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
const newTeam_1 = RegisterAutoRacingTeam('AutoFirst', 'Petr', 1991, 'Audi', 'Microsoft', true);
/*Запитати дані (через prompt та циклічно) про нового користувача у системі та зберегти його в об'єкт. 
Дані про користувача - логін, пароль, місто, країна, стать, вік */
const newUser = {};
newUser.login = prompt("Enter please login");
newUser.password = promt("Enter please password");
newUser.city = prompt("Enter please city");
newUser.country = promt("Enter please country");
newUser.sex = promt("Enter please sex");
newUser.age = prompt("Enter please age");
for (let key in newUser) {
    console.log(key);
    console.log(newUser[key]);
}