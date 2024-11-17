                                                                ///Math///////
console.log('------------------Math-------------------');


// 1.  Math.floor

let m1 = 4.5;
console.log('Math.floor:', Math.floor(m1));
console.log('-------------------------------------');


// 2.  Math.ceil

let m2 = 4.7;
console.log('Math.ceil:', Math.ceil(m2));
console.log('-------------------------------------');

// 3.  Math.random

let m3 = Math.random();
console.log('Math.random:', m3);
console.log('-------------------------------------');


// 4.  Math.random

let m4 = Math.pow(6, 2);
console.log('Math.random:', m4);
console.log('-------------------------------------');


// 5.  Math.round

let m5 = Math.round(4.5);
console.log('Math.round:', m5);
console.log('-------------------------------------');


// 6.  Math.sqrt

let m6 = Math.sqrt(64);
console.log('Math.sqrt:', m6);
console.log('-------------------------------------');


// 7.  Math.cbrt

let m7 = Math.cbrt(27);
console.log('Math.cbrt:', m7);
console.log('-------------------------------------');

                                                                ///Meтоди масивів///////

console.log('------------------Meтоди масивів-------------------');

let array = [1, 3, 343, 23, 4, 5, true, false, 11, [1, 2, 3], 1, 5, 18];

console.log('Методи для массива:', array);
console.log('-------------------------------------');

//1. Push

let x1 = array.push('last');
console.log('Push:', x1);
console.log('-------------------------------------');

//2. Unshift

let x2 = array.unshift('first');
console.log('Unshift:', x2);
console.log('-------------------------------------');

//3. pop

let x3 = array.pop();
console.log('Pop:', x3);
console.log('-------------------------------------');

//4. Shift

let x4 = array.shift();
console.log('Shift:', x4);
console.log('-------------------------------------');


//5. Reverse

let x5 = array.reverse();
console.log('Reverse:', x5);
console.log('-------------------------------------');


//6. Flat

let x6 = array.flat(2);
console.log('Flat:', x6);
console.log('-------------------------------------');


//7. Includes

let x7 = array.includes(5);
console.log('Includes 5:', x7);
console.log('-------------------------------------');

//8. Join

let x8 = array.join(' ');
console.log('Join:', x8);
console.log('-------------------------------------');

//9. Map 

let x9 = array.map((el)=>{
    if (el > 5) {
        return 'Changes';
    } else {
        return el;
    }
})

console.log('Map:', x9);
console.log('-------------------------------------');

//10. Reduce

let array2 = [3, 4, 5, 6, 7, 7, 7, 8];
console.log('Маємо массив', array2);

let x10 = array2.reduce((prev, cur)=> {
    return prev + cur;
})

console.log('Обчислимо сумму усіх єлементів за допомогою Reduce:', x10);
console.log('-------------------------------------');

//11. Slice

let array3 = [true, false, 11, 1, 5, 18];

console.log('Массив для slice і splice:', array3);

let newArray = array3.slice(1, 4);
console.log('Slice(1, 4):', newArray);
console.log('-------------------------------------');


//12. Splice

let x12 = array3.splice(1, 2, 'x', 'y');
console.log('Splice Заміна:', array3);
console.log('Splice Видалені:', x12);

console.log('-------------------------------------');




                                                                ///Meтоди стрічок///////


console.log('------------------Meтоди стрічок-------------------');

let str1 = 'I always love to eat pizza!'
console.log('Маємо рядок:', str1);

// 1. Split 

let s1 = str1.split(' ');
console.log('Split:', s1);

console.log('-------------------------------------');

// 2. trim

let str2 = '   I always love to eat pizza!   '
console.log('Маємо рядок:', str2);
let s2 = str1.trim();
console.log('Trim:', s2);

console.log('-------------------------------------');

// 3. toLocaleUpperCase

let s3 = str1.toLocaleUpperCase();
console.log('toLocaleUpperCase:', s3);

console.log('-------------------------------------');


// 4. toLocaleLowerCase

let s4 = str1.toLocaleLowerCase();
console.log('toLocaleLowerCase:', s4);

console.log('-------------------------------------');

// 5. charAt

let s5 = str1.charAt(5);
console.log('charAt:', s5);

console.log('-------------------------------------');


// 6. charCodeAt

let s6 = str1.charCodeAt(5);
console.log('charCodeAt:', s6);

console.log('-------------------------------------');


// 7. includes

let s7 = str1.includes('pizza');
console.log('includes:', s7);

console.log('-------------------------------------');

// 8. concat

let s8 = str1.concat(' Trust me!');
console.log('concat:', s8);

console.log('-------------------------------------');


// 9. search

let s9 = str1.search('love');
console.log('search:', s9);

console.log('-------------------------------------');


// 10. startsWith

let s10 = str1.startsWith('I');
console.log('startsWith:', s10);

console.log('-------------------------------------');

// 11. endsWith

let s11 = str1.endsWith('pasta');
console.log('endsWith:', s11);

console.log('-------------------------------------');


// 12. indexOf

let s12 = str1.indexOf('l');
console.log('indexOf:', s12);

console.log('-------------------------------------');


// 13. lastIndexOf

let s13 = str1.lastIndexOf('i');
console.log('lastIndexOf:', s13);

console.log('-------------------------------------');


// 14. replace

let s14 = str1.replace('pizza', 'pasta');
console.log('replace:', s14);

console.log('-------------------------------------');


                                                                ///Методи об'єктів///////

console.log('------------------Meтоди об\'єктів-------------------');

const manID = {
    name: 'Stefan',
    country: 'Ukraine',
    age: 34,
    jobb: true,
    childrens: false,
    status: 'alone',
}                                                                


console.log('Маємо об\'єкт', manID);


//1. Object.values

let ob1 = Object.values(manID);
console.log('Object.values:', ob1);

console.log('-------------------------------------');

//2. Object.keys

let ob2 = Object.keys(manID);
console.log('Object.keys:', ob2);

console.log('-------------------------------------');


//3. Object.entries

let ob3 = Object.entries(manID);
console.log('Object.entries:', ob3);

console.log('-------------------------------------');


//4. Object.fromEntries

let ob4 = Object.fromEntries(ob3);
console.log('Object.entries:', ob4);

console.log('-------------------------------------');

//5. Object.freeze

const userUnfreeze = {
    name: 'Stefan',
    country: 'Ukraine',
    age: 34,
    jobb: true,
    childrens: false,
    status: 'alone',
} 
console.log('Маємо об\єкт', userUnfreeze);

userUnfreeze.name = 'Igor';
userUnfreeze.country = 'Poland';
userUnfreeze.jobb = false;
console.log('Результат заміни без заморозки', userUnfreeze);
console.log('-------------------------------------');
const userFreeze = Object.freeze ({
    name: 'Stefan',
    country: 'Ukraine',
    age: 34,
    jobb: true,
    childrens: false,
    status: 'alone',
}) 
console.log('Маємо об\єкт', userFreeze);
userFreeze.name = 'Igor';
userFreeze.country = 'Poland';
userFreeze.jobb = false;
console.log('Результат з Object.freeze', userFreeze);

console.log('-------------------------------------');

//6.  Object.seal

let ob5 = Object.seal ({
    name: 'Stefan',
    country: 'Ukraine',
    age: 34,
    jobb: true,
    childrens: false,
    status: 'alone',
})

console.log('Об\єкт до змін:', ob5);

ob5.name = 'Cristiano';
ob5.age = 41;
ob5.childrens = true;

console.log('Object.seal:', ob5);





























