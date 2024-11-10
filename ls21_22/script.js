// 1. find: 
console.log('---------------1. find--------------------');

let array = [1, 2, 'Alex', true, false, 11, 15, 'Stop', 15];

let res1 = array.find((el) =>{
    return el > 4;
});

console.log('Результат виконання умови:', res1, 'Для массиву:', array);


// 2. findIndex: 

console.log('---------------2. findIndex--------------------');

let res2 = array.findIndex((el)=>{
    return el === 'Alex';
});

console.log('Результат виконання умови:', res2, 'Для массиву:', array);


// 3. indexOf: 

console.log('---------------3. indexOf: --------------------');

let res3 = array.indexOf('Stop');

console.log('Результат виконання умови:', res3, 'Для массиву:', array);

// 4. lastIndexOf: 

console.log('---------------4. lastIndexOf:--------------------');

let res4 = array.lastIndexOf(15);

console.log('Результат виконання умови:', res4, 'Для массиву:', array);


// 5. sort: 

console.log('---------------5. sort: --------------------');

const array2 = [11, 2, 3, 41, -1, 0, 44, 76, 14];

console.log('Массив до сортування:', array2);

let res5 = array2.sort((a, b) => a - b);

console.log('Массив після сортування:', res5);

// 6. reverse: 

console.log('---------------6. reverse:--------------------');

let res6 = array2.reverse();

console.log('Массив після перевертання:', res6);

// 7. filter: 

console.log('--------------7. filter: --------------------');

const array3 = [13, 232, 2, 11, 2, 3, 41, -1, 0, 44, 76, 14];

let res7 = array3.filter((el)=> el < 13);

console.log('Результат виконання умови:', res7, 'Для массиву:', array3);

// 8. some: 

console.log('---------------8. some: --------------------');

let res8 = array3.some((el)=> el < 13);

console.log('Якщо хоча б один елемент відповідає умові, результат буде true. Результат: ', res8);


// 9. every: 

console.log('---------------9. every: --------------------');

let res9 = array3.some((el)=> el > -2);

console.log('Якщо всі елементи відповідають умові, результат буде true. Результат: ', res9);

// 10. include: 

console.log('---------------10. include: --------------------');

let res10 = array3.includes(11);

console.log('Результат виконання умови:', res10, 'Для массиву:', array3);

// 11. flat: 

console.log('---------------11. flat: --------------------');

let array4 = [343, 11, [3, 2, 8, 'help', [true, null, 12, [8, 2, 12, false]]]];

let res11 = array4.flat(Infinity);
console.log('Многомірний массив:', array4);
console.log('Результат виконання метода flat:', res11);


// 12. concat: 

console.log('---------------12. concat: --------------------');

let array5 = ['apple', 'bread', 'banan'];
let res12 = array4.concat(array5);
console.log('Результат виконання метода concat:', res12);

// 13. entries: 

console.log('---------------13. entries:--------------------');

const array6 = [13, 232, 2, 11, 2, 3, 41, -1, 0, 44, 76, 14];

let a = array6.entries((el)=> el < 10);
let res13 = a.next().value;
console.log('Результат виконання метода entries:', res13);


// 14. toString: 

console.log('---------------14. toString:--------------------');

// 15. map: 

let res14 = array6.toString();
console.log('Результат виконання метода toString:', res14);


console.log('---------------15. map:--------------------');



let res15 = array6.map((el)=> {
    if (el > 13) {
        return true;
    } else {
        return el;
    }
});

console.log('Массив до використання map:', array6);
console.log('Результат виконання метода map:', res15);



