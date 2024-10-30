//1. Створіть функцію для обчислення факторіалу числа.
//   Створіть функцію calculateFactorial(n), яка приймає аргумент n (ціле число)
//   і виводить в консоль факторіал цього числа. Використовуйте цикл для обчислення факторіалу.

console.log('-----------------1. Створіть функцію для обчислення факторіалу числа.----------------------------')

function calculateFactorial(n) {
    let result = 1;
    
    for (i = 1; i <= n; i++) {
        result *= i;
    } 

    console.log('Факторіал числа', n, 'дорівнює:', result);
}

const num = Number(prompt("Введіть ціле число для обчислення факторіалу:"));
calculateFactorial(num);



// 2. Підрахунок кількості слів у рядку.
//    Створіть функцію countSymb(sym), яка приймає рядок через prompt
//    і виводить в консоль кількість слів у цьому рядку.
//    Використовуйте умови та цикли для підрахунку слів.
//    ** Підказка стрічку також можна ітерувати, використваши .length

console.log('-----------------2. Підрахунок кількості слів у рядку.----------------------------')

function countSymb(sym) {

    let word = 0;
    let inword = false;

    for (let i = 0; i < sym.length; i++) {
        if (sym[i] !== ' ' && !inword) {
            inword = true; 
            word++;   
        } else if (sym[i] === ' ') {
            inword = false; 
        }
    }

    console.log(`Кількість слів у рядку:` , word);
}

let stringtext = prompt("Введіть рядок для підрахунку кількості слів:");
countSymb(stringtext);



// 3. Створіть функцію для визначення простого числа (ціле число це число без коми: 1, 44, 100 ітд).
//    Створіть функцію isPrime(number), яка приймає аргумент number і повертає (return) true,
//    якщо число є простим, і false, якщо не є.
//    ** Просте число це 3, 56, 23
//       Не просте це 1.33, 4.1, 55.222

console.log('-----------------3. Функція для визначення простого числа----------------------------')

function isPrime(number) {
    if (number %1 === 0) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

let numbercheck = prompt('Уведіть просте або не просте число для перевірки');
isPrime(numbercheck);



// 4. Запит на пароль.
//    Створіть функцію passwordPrompt(), яка приймає пароль і повторення паролю через prompt().
//    Після цього викликайте цю функцію, якщо паролі співпадають має вивестись (console): Успіх, а в іншому випадку: Невдача.


console.log('-----------------4. Запит на пароль----------------------------')

function passwordPrompt(pass, checkpass) {
    if (pass === checkpass) {
        console.log ('Успіх');
    } else {
        console.log('Невдача');
    }
} 

let pass1 = prompt('Уведіть пароль');
let pass2 = prompt('Підтвердіть пароль');

passwordPrompt(pass1, pass2); 



// 5. Факторіал чисел в діапазоні.
//    Створіть функцію factorialRange(num1, num2, num3),
//    яка приймає 2 числа.
//    Функція має обчислити факторіали всіх чисел і повернути (return) результат у вигляді об'єкта {num1: num2, num3: } і вивести


console.log('-----------------5. Факторіал чисел в діапазоні.----------------------------')


function factorialRange(num1, num2) {
        function fact(n) {
            let result = 1;           
            for (i = 1; i <= n; i++) {
                result *= i;
            } 
            return result;
        }

let resobject = {};

for (let i = num1; i <= num2; i++) {
    resobject[i] = fact(i);
}
return resobject;
}

let itogo = factorialRange(3, 6)
console.log('Приклад для обчислення факторіалу для діапазону від 3 до 6');
console.log(itogo);


// 6. Калькурятор.
//    Створіть функцію calc(num1, num2, action), яка приймає 2 числа з prompt
//    та знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)
//    Результат повернути (return) і вивести

console.log('-----------------6. Калькурятор----------------------------')

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

