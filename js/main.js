let money,time,counter;


function start(){

    money = prompt("Введите Ваш бюджет на месяц");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    counter = 0;

    while(isNaN(money) || money == '' || money == null){
        money = prompt("Введите Ваш бюджет на месяц");

    }

}

start();


// Эту часть оставляем и вводим все в функцию
// let money = prompt("Введите Ваш бюджет на месяц"),
//     time = prompt("Введите дату в формате YYYY-MM-DD"),
//     counter = 0;


let appData = {
    budget:money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timedata:time,
    saving:true,
    chooseExpenses:function(){
        function chooseExpenses(){
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
        }
        
        chooseExpenses();
    },
    detect:function(){
        appData.moneyPerDay =Math.floor(appData.budget/30);
console.log("Ваш ежедневный бюджет: " +appData.moneyPerDay);

    },
    detectLevel:function(){
        if(appData.moneyPerDay <200){
            console.log("Низкий уровень достатка");
        }else if (appData.moneyPerDay >200 && appData.moneyPerDay<400){
            console.log("Низкий уровень достатка");
        }else if (appData.moneyPerDay >400 && appData.moneyPerDay<2000){
            console.log("Средний уровень достака");
        }else if(appData.moneyPerDay>2000){
            console.log("Высокий уровень достатка");
        };

    },
    checkSaving:function(){
        if(appData.saving == true){
            let save =  +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            
            alert("Доход в месяц с вашего депозита составит: "+ appData.monthIncome);
        }

    },
    chooseOptExpenses:function(){
        for(i=0;i<3;i++){
            let a = prompt("“Статья необязательных расходов?”");
            appData.optionalExpenses[i] =a;
        }

    
    },
    choseIncime:function(){
        let items = prompt("Что принесет дополнительный доход?(перечислите через запятую)");


        if (typeof(items) != "string" || typeof(items) == null || items == ""){
            console.log("Вы ввели некорректную информацию!");

        }else{
            appData.income = items.split(",");
            appData.income.push(prompt("Может что-то еще ?"));
            appData.income.sort();

        };




        appData.income.forEach(function(items,i){
            console.log("Способы доп. заработка: " + (i+1) + " - " + items);
        });



         
    

}

};

for(key in appData){
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
};














