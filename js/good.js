function startThis(){ 

let arr = [];
let expensesItemBTN =document.querySelector(".expenses-item-btn"),
     daybudget = document.querySelector('.budget-value'),
     dataTime = document.querySelector(".year-value"),
     dataNounve = document.querySelector(".month-value"),
     dataMoneyDay = document.querySelector(".day-value"),
     expensesItem = document.getElementsByClassName('expenses-item'),
     optionalItem = document.getElementsByClassName('optionalexpenses-item'),
     optionalValue =document.getElementsByClassName('optionalexpenses-value')[0],    //  expensesValue2 = document.querySelector('.expenses-value');
     exValueDiv = document.getElementsByClassName('expenses-value')[0],
     dayBuget =document.getElementsByClassName('count-budget')[0],
     optional =document.getElementsByClassName('optionalexpenses-btn')[0];


let start = document.getElementById('start');
start.addEventListener("click",function(){
    // let time = prompt("Введите сегодняшнюю дату в формате YYYY-MM-DD");
    let money = prompt("Введите Ваш бюджет");
    
    while(isNaN(money) || money==''|| money == null){
            money = +prompt("Введите корректное числовое  значение");
    };
    
    
    let time = new Date();
    daybudget.textContent = money;
    dataTime.value = new Date(Date.parse(time)).getFullYear(); 
    dataNounve.value = new Date(Date.parse(time)).getMonth()+1; 
    dataMoneyDay.value = new Date(Date.parse(time)).getDate(); 



    appData.budget =money;
    appData.timeData =time;
    
    
});

expensesItemBTN.addEventListener('click',function(){
    let sum = 0;

    for(i=0;i<expensesItem.length;i++){
        let a = expensesItem[i].value;
        let b =expensesItem[++i].value;

        if((typeof (a)) != null &&  (typeof(b)) != null && a != '' && b != ''){
            console.log("Успешная проверка");
            appData.expenses[a]=b;
            sum += +b;

        }else{
            alert('заполните все поля');
            i=i-1;
        };                                     
         
        
    };

    console.log('Все данные заполнены');
    exValueDiv.textContent = sum;
    
});


optional.addEventListener('click',function(){
    appData.optionalExpenes.length = 0;
    for(i=0;i<optionalItem.length;i++){
        let opt = optionalItem[i].value;
        appData.optionalExpenes.push(opt);
        
        
    };
    optionalValue.textContent = appData.optionalExpenes.join(' ');
     
});








let appData = {
    budget:"",
    timeData:"",
    expenses:{},
    optionalExpenes:[]

};




};





window.onload = function(){
    startThis();
};