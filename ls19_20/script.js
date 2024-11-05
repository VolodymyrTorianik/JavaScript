// * Розділяйте кожний пункт домашнього в коді коментарями.

// * 1-8 завдання повинно бути виконане через цикл forEach.

// 1. Напишіть цикл, який виводить всі парні числа від 20 до 32.

console.log('// 1. Напишіть цикл, який виводить всі парні числа від 20 до 32.');

const array1 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]

array1.forEach(numbers => {
    if(numbers % 2==0) {
        console.log(numbers);
        
    }
});


// 2. Створіть масив зі списком:

//    вашого улюбленого фрукту,
//    вашого улюбленого кольору,
//    ім'я,
//    рандомного числа,
//    вашого віку.

//    Виведіть цей проітерований масив на консоль і визначте його тип даних.

console.log('// 2. Створіть масив зі списком:');

const array2 = ['Apple', 'Red', 'Volodymyr', 1988, 36];

console.log('Дано массив:', array2);

array2.forEach(item => {
    console.log('Елемент:', item, 'Тип данних:', typeof item);
    
});


// 3. Напишіть цикл який виводить всі непарні числа від 17 до 39.

console.log('// 3. Напишіть цикл, який виводить всі парні числа від 20 до 32.');

const array3 = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]

array3.forEach(numbers => {
    if(numbers % 2==1) {
        console.log(numbers);
        
    }
});


// 4. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи

console.log('// 4. Даний масив [1, 5, true, hello, false, null, iiii, 54, null], виведіть парні елементи');

const array4 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

array4.forEach((simple, i) => {
    if(i % 2 ===0) {
        console.log(simple);
        
    }
});


// 5. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи


console.log('// 5. Даний масив [1, 5, true, hello, false, null, iiii, 54, null], виведіть не парні елементи');

const array5 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

array5.forEach((simple, i) => {
    if(i % 2 ===1) {
        console.log(simple);
        
    }
});


// 6. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.

console.log('// 6. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.');

const array6 = [1, 2, 4, 2, 3, 55, 66, 777, 12];
let summa = 0;
array6.forEach(element => {
    summa += element;
});

console.log(summa);



// 7. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.

console.log('// 7. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.');

const array7 = [1, 2, 4, 2, 3, 5, 6, 7, 1];
let multip = 1;
array7.forEach(element => {
    multip *= element;
});

console.log(multip);

// 8. Створіть prompt в якому потрібно проітерувати число з 0. 
//    Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію.
//    Якщо це числа 100 і більше, завершити ітерацію.

console.log('8. Створіть prompt в якому потрібно проітерувати число з 0. Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію.');

let numberprompt = prompt('Уведіть число від 0 до 100');
let array8 = [];
let x = 0;

for (x = 0; x <= numberprompt; x++) {
    array8[x] = x;
}

array8.forEach(elem => {
    if (elem >= 100) return;
    if (elem >= 5 && elem <= 10) return;
    console.log(elem);
  });


// * Використовуємо Math

// 9. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до меншого числа і повертає значення.

console.log('// 9. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до меншого числа і повертає значення.');

function firstmath(a) {
    return Math.floor(a);
}

const firstnum = firstmath(7.56);
console.log('Заокруглюємо число 7.56 до значення:', firstnum);



// 10. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до більшого числа і повертає значення.

console.log('// 10. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до більшого числа і повертає значення.');

function secondmath(a) {
    return Math.ceil(a);
}

const secondnum = secondmath(9.56);
console.log('Заокруглюємо число 9.56 до значення:', secondnum);



// 11. Створіть функцію яка генерує рандомне число (випадкове) від 0 до 1000 і повертає його.

console.log('//11. Створіть функцію яка генерує рандомне число (випадкове) від 0 до 1000 і повертає його.');

function thirdmath() {
    return Math.floor(Math.random() * 1001);
}

let exemple1 = thirdmath();
console.log(exemple1);

let exemple2 = thirdmath();
console.log(exemple2);

// 12. Створіть функцію яка приймає 2 числа та виодить степіть перше число основне, друге сама степіть.

console.log('// 12. Створіть функцію яка приймає 2 числа та виодить степіть перше число основне, друге сама степіть.');
console.log('// Приводимо число 4 до 3 степені');
function fourthmath(num, exp) {
    let res = Math.pow(num, exp);
    return console.log('Результат степіні:', res, 'Сама степінь:', exp);
}

fourthmath(4, 3);

// 13. Створіть функцію яка приймає число, виводить з нього корінь, заокруглює його і повертає.

console.log('// 13. Створіть функцію яка приймає число, виводить з нього корінь, заокруглює його і повертає.');
console.log('// Обчислюємо корінь з 64');
function fifthmath(num) {
    let res = Math.sqrt(num);
    return console.log('Результат коріня:', res);
}

fifthmath(64);

// * Використовувати методи масивів

// 14. Дано масив [1, 5, true], додати в кінець масиву 'Hello'

console.log('// 14. Дано масив [1, 5, true], додати в кінець масиву Hello');
let a1 = [1, 5, true];
console.log('До', a1);
a1.push('Hello');
console.log('Після', a1);

// 15. Дано масив [1, 5, true], додати в початок масиву 'HelloArray'

console.log('// 15. Дано масив [1, 5, true], додати в початок масиву HelloArray');
let a2 = [1, 5, true];
console.log('До', a2);
a2.unshift('HelloArray');
console.log('Після', a2);

// 16. Дано масив [1, 5, true], видалити останній елемент з масиву

console.log('// 16. Дано масив [1, 5, true], видалити останній елемент з масиву');
let a3 = [1, 5, true];
console.log('До', a3);
a3.pop();
console.log('Після', a3);

// 17. Дано масив [1, 5, true], видалити перший елемент з масиву


console.log('// 17. Дано масив [1, 5, true], видалити перший елемент з масиву');
let a4 = [1, 5, true];
console.log('До', a4);
a4.shift();
console.log('Після', a4);


// 18. Дано масив [5, true, 'hello', false, null, 5] вирізати *в новий масив* з 1 по 5 індекс

console.log('// 18. Дано масив [5, true, hello, false, null, 5] вирізати *в новий масив* з 1 по 5 індекс');
let a5 = [5, true, 'hello', false, null, 5];
console.log('До', a5);
let slicea5 = a5.slice(1, 6);
console.log('Після', slicea5);


// 19. Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс дані

console.log('// 19. Дано масив [5, true, hello, false, null, 5] вирізати з 1 по 5 індекс дані');
let a6 = [5, true, 'hello', false, null, 5];
console.log('До', a6);
a6.splice(1, 6);
console.log('Після', a6);

// 20. Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс та вставити 10, 100, 111, 222

console.log('// 20. Дано масив [5, true, hello, false, null, 5] вирізати з 1 по 5 індекс дані та вставити 10, 100, 111, 222');
let a7 = [5, true, 'hello', false, null, 5];
console.log('До', a7);
a7.splice(1, 6, 10, 100, 111, 222);
console.log('Після', a7);

// 21. Створені масиви під час виконанняцього завдання об'єднайте в рядок, а потім назад приведіть рядок в масив.

console.log('// 21. Створені масиви під час виконанняцього завдання об\'єднайте в рядок, а потім назад приведіть рядок в масив.');

//1

console.log('-------01---------')
console.log('Массив в рядок');
let string1 = a1.join(', ');
console.log(string1);

console.log('Рядок у массив');
let mass1 = string1.split(', ');
console.log(mass1);

//2

console.log('-------02---------')
console.log('Массив в рядок');
let string2 = a2.join(', ');
console.log(string2);

console.log('Рядок у массив');
let mass2 = string2.split(', ');
console.log(mass2);

//3

console.log('-------03---------')
console.log('Массив в рядок');
let string3 = a3.join(', ');
console.log(string3);

console.log('Рядок у массив');
let mass3 = string3.split(', ');
console.log(mass3);

//4

console.log('-------04---------')
console.log('Массив в рядок');
let string4 = a4.join(', ');
console.log(string4);

console.log('Рядок у массив');
let mass4 = string4.split(', ');
console.log(mass4);


//5

console.log('-------05---------')
console.log('Массив в рядок');
let string5 = a5.join(', ');
console.log(string5);

console.log('Рядок у массив');
let mass5 = string5.split(', ');
console.log(mass5);

//6

console.log('-------06---------')
console.log('Массив в рядок');
let string6 = a6.join(', ');
console.log(string6);

console.log('Рядок у массив');
let mass6 = string6.split(', ');
console.log(mass6);


//7

console.log('-------07---------')
console.log('Массив в рядок');
let string7 = a7.join(', ');
console.log(string7);

console.log('Рядок у массив');
let mass7 = string7.split(', ');
console.log(mass7);