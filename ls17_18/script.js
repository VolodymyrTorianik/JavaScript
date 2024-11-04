
// - Напишіть 5 прикладів анонімної функції

console.log('-------01------5 прикладів анонімної функції------------------------');

//1.1 

console.log('1.1////');

(function() {
    console.log('Перший приклад');
    
})();

//1.2

console.log('1.2////');

const x = 1;
(() => {
    const f = 3+x;
    console.log(f);  
})();


//1.3 

console.log('1.3////');

(function(a) {
    a = 2 +3;
    return console.log(a);   
})();


//1.4

console.log('1.4////');

((index1, index2) => {
    index1 = 5;
    index2 = 6;
    if (index1 < index2) {
        console.log(true);
    }  else {
        console.log(false);
    }
})();


//1.5

console.log('1.5////');

(function(n) {
    n = 3+4;
    console.log(n);    
})();



// - Напишіть 5 прикладів самовикликаючої функції

console.log('------02-------Напишіть 5 прикладів самовикликаючої функції------------------------');

//2.1

(function() {
    console.log('First self function');
})();


//2.2

(function() {
    let x=2;
    console.log(x);
})();


//2.3

(function() {
    let z = 2+3;
    console.log(z);
})();


//2.4

(function() {
    let numb = 4;
    if (numb <3) {
        console.log('Good')
    } else {
        console.log('Bad')
    }
})();


//2.5

(function() {
    console.log('Last self function');
})();



// - Повторіть колбек функцію bubbleSort з лекції 


console.log('-------03------Повторіть колбек функцію bubbleSort з лекції------------------------');

function MyBubbleSort(array, callbackfunk) {
    for (i = 0; i < array.length; i++) {
        for(let j=0; j < array.length; j++) {

        let compres = callbackfunk(array[j], array[j+1]);
        if(compres) {
            let temp = array[j];
            array[j] = array [j+1];
            array[j+1] = array [j];
            array[j+1] = temp;
        }
        }
    } 

    return array;
}

let arr777 = [3, 5, 2, 1, 8, 12, 45, 54, 0, 87];

function compleft(x, y) {
    return x > y;
}

const arraysort = MyBubbleSort(arr777, compleft);

console.log(arraysort);


//  Калькурятор.
//   Створіть функцію calc(num1, num2, action), яка приймає 2 числа з prompt
//   та знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)
//   Результат повернути (return) і вивести


console.log('-----------04-------------------Калькурятор-----------------------------------------');

function calc(num1, num2, action) {

    let result;
    switch(action) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !==0) {
            result = num1 / num2;    
            } else {
            console.log('На 0 ділити не можна!!!');                
            }
            break;            
    }
    return result;
}

let number1 = Number(prompt('Уведіть перше число'));
let number2 = Number(prompt('Уведіть друге число'));
let act = prompt('Уведіть дію (+, -, /, *)');
let res = calc(number1, number2, act); 
console.log('Ви обрали операцію', number1, act, number2);
console.log('В результаті ми отримуємо', res);



//   На основі цього завдання зробіть 3 приклади:

console.log('-----------05-------------------Калькурятор 3 прикладі-----------------------------------------');

//  - Зробіть калькулятор застосовуючи підхід Function in function (1-ий приклад Function in function в лекції)


console.log('-----------5.1-------------------Function in function (1-ий приклад Function in function в лекції)-----------------------------------------');

function calculator1(num1, num2, action) {
    function plus() {return num1 + num2};
    function minus() {return num1 - num2};
    function mnog() {return num1 * num2};
    function dele() {return num1 / num2};

    switch(action) {
        case '+': return plus();
        case '-': return minus();
        case '*': return mnog();
        case '/': return dele();
    }
}

const res1 = calculator1(4, 5, '+');
const res2 = calculator1(9, 5, '-');
const res3 = calculator1(4, 2, '*');
const res4 = calculator1(12, 3, '/');

console.log('Результат додавання', res1);
console.log('Результат віднімання', res2);
console.log('Результат множення', res3);
console.log('Результат ділення', res4);


//  - Зробіть калькулятор застосовуючи підхід Function in function (2-ий приклад Function in function в лекції)

console.log('-----------5.2-------------------Function in function (2-ий приклад Function in function в лекції)-----------------------------------------');


function plus(a1, a2) {return a1 + a2};
function minus(a1, a2) {return a1 - a2};
function mnog(a1, a2) {return a1 * a2};
function dele(a1, a2) {return a1 / a2};

function calculator2(a1, a2, action) {

    switch(action) {
        case '+': return plus(a1, a2);
        case '-': return minus(a1, a2);
        case '*': return mnog(a1, a2);
        case '/': return dele(a1, a2);
    }
}

const itogo1 = calculator2(12, 5, '+');
const itogo2 = calculator2(32, 5, '-');
const itogo3 = calculator2(5, 2, '*');
const itogo4 = calculator2(64, 8, '/');

console.log('Результат додавання', itogo1);
console.log('Результат віднімання', itogo2);
console.log('Результат множення', itogo3);
console.log('Результат ділення', itogo4);



//  - Зробіть калькулятор використовуючи функцію зворотнього виклику (callback function), 

console.log('-----------5.3-------------------Калькулятор callback function-----------------------------------------');

function operplus(x, y) { return x + y};
function operminus(x, y) { return x - y};
function opermulti(x, y) { return x * y};
function operdivide(x, y) { return x / y};

function calculate(x, y, operation) {
    return operation(x, y);
}

console.log(calculate(10, 5, operplus));
console.log(calculate(10, 5, operminus));
console.log(calculate(10, 5, opermulti));
console.log(calculate(10, 5, operdivide));