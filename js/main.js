let money = prompt("Введите Ваш бюджет на месяц"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    counter = 0;


let appData = {
    budget:money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timedata:time,
    saving:false
}


for(let i = 0;i<2;i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько бойдется?");

    if((typeof(a))==='string' && (typeof(a)) != null && (typeof(b) != null && a != '' && 
    b != '' && a.length<50 && b.length <50)){
        console.log("Данные сохранены!");
        appData.expenses[a] =b;


    }else{
        i--;
        alert("Просьба ввести корректную информацию");
        console.log("Введенные данные не корректны !");
        
        console.log("Кол-во некорректно веденных данных"+ ++counter);


    }
};  
appData.moneyPerDay =(appData.budget/30);
console.log("Ваш ежедневный бюджет: " +appData.moneyPerDay);


function detectLevel(val){
    if(appData.moneyPerDay <200){
            console.log("Низкий уровень достатка");
        }else if (appData.moneyPerDay >200 && appData.moneyPerDay<400){
            console.log("Низкий уровень достатка");
        }else if (appData.moneyPerDay >400 && appData.moneyPerDay<2000){
            console.log("Средний уровень достака");
        }else if(appData.moneyPerDay>2000){
            console.log("Высокий уровень достатка");
        };
};

detectLevel(appData.moneyPerDay);


function chooseOptExpenses(){
    for(i=0;i<3;i++){
        let a = prompt("“Статья необязательных расходов?”");
        appData.optionalExpenses[i] =a;
    }
}

chooseOptExpenses();
console.log( appData.optionalExpenses);