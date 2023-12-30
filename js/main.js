function checkTheGuck(){


let money = 100000;
let time ="2023-12-30";


let appData = {
	budget: money,
	timeData: time,
    expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
    'EMAIL-sheet':"Dick-pik"

 };
    
let value;

value = appData.budget;





let a1 = prompt("Введите обязательную статью расходов в этом месяце"),

    a2 = prompt("Во сколько обойдется?"),
    a3 = prompt("Введите обязательную статью расходов в этом месяце"),
    a4 = prompt("Во сколько обойдется?");

appData.expenses[a1]=a2;
appData.expenses[a3]=a4;

let freeBuget = (Number(appData.expenses[a1]))+(Number(appData.expenses[a3]));
let freeBuget2 = ((+appData.expenses[a1])+ (+appData.expenses[a3]));
alert(Math.floor(appData.budget-freeBuget2)/30+" Ваш ежедневный возможный бюджет");














































































































































}
window.onload = function(){
    checkTheGuck();

}


