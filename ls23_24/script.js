// Даний масив: [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20 11, [11, [true]]. Застосувати наступні методи:
// reverse, flat, includes, join, map, reduce

console.log('Даний масив: [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20 11, [11, [true]]. Застосувати наступні методи:');

let array = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];

// 1.reverse, 
console.log('--------------1. reverse-------------');

res1 = array.reverse();
console.log('Результат виконня методу reverse:', res1);


// 2. flat, 

console.log('--------------2. flat-------------');

res2 = array.flat(Infinity);
console.log('Результат виконня методу flat:', res2);

// 3.includes, 

console.log('--------------3. includes-------------');

res3 = array.includes(19);
console.log('Результат виконня методу includes:', res3);

// 4.join, 

console.log('--------------4. join-------------');

res4 = array.join('-');
console.log('Результат виконня методу join:', res4);

// 5.map, 

console.log('--------------5. map-------------');

let res5 = array.map((el)=> {
    if (el === 1) {
        return 'Zamena';
    } else {
        return el;
    }
});

console.log('Результат виконня методу map:', res5);

// 6.reduce

console.log('--------------6.reduce-------------');

const array2 = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];

const res6 = array2.flat(3).reduce((prev, curr) => {

  if (typeof curr === 'number') {
    return prev + curr; 
  }
  return prev; 
});

console.log('Результат виконня методу map:', res6);



// Даний рядок: 'Hello world and my dear friend ...' Застосувати наступні методи:

console.log('Даний рядок: < Hello world and my dear friend ...> Застосувати наступні методи:');

let str = 'Hello world and my dear friend ...';

// 7. split, 
console.log('---------7. split-----------');


let res7 = str.split(' ');
console.log('Результат методу split:', res7);


// 8. trim, 

console.log('---------8. trim-----------');

let str2 = ' Hello world and my dear friend ... ';

res8 = str2.trim();
console.log('Результат методу trim:', res8);


// 9. toLocaleUpperCase, 

console.log('---------9. toLocaleUpperCase-----------');

let res9 = str.toLocaleUpperCase();
console.log('Результат методу toLocaleUpperCase:', res9);

// 10. toLocaleLowerCase, 

console.log('---------10. toLocaleLowerCase-----------');

let res10 = str.toLocaleLowerCase();
console.log('Результат методу toLocaleUpperCase:', res10);

// 11. charAt, 

console.log('---------11. charAt-----------');

let res11 = str.charAt(6);
console.log('Результат методу charAt (елемент з індексом 6):', res11);

// 12. charCodeAt, 

console.log('---------12. charCodeAt-----------');

let res12 = str.charCodeAt(7);
console.log('Результат методу charCodeAt (юнікод елемента з індексом 7):', res12);

// 13. includes,

console.log('---------13. includes-----------');

let res13 = str.includes('my');
console.log('Результат методу includes:', res13);

// 14. concat, 

console.log('---------14. concat-----------');

let a = 'Good bye';
let res14 = str.concat(a);
console.log('Результат методу concat:', res14);

// 15. search, 

console.log('---------15. search-----------');

let res15 = str.search('world');
console.log('Результат методу search:', res15);

// 16. startsWith, 

console.log('---------16. startsWith-----------');

let res16 = str.startsWith('world');
console.log('Результат методу startsWith:', res16);

// 17. endsWith, 

console.log('---------17. endsWith-----------');

let res17 = str.endsWith('...');
console.log('Результат методу endsWith:', res17);

// 18. indexOf, 

console.log('---------18. indexOf-----------');

let res18 = str.indexOf('w');
console.log('Результат методу indexOf:', res18);


// 19. lastIndexOf, 

console.log('---------19. lastIndexOf-----------');

let res19 = str.lastIndexOf('d');
console.log('Результат методу lastIndexOf:', res19);

// 20. replace

console.log('---------20. replace-----------');

let res20 = str.replace('world', 'Ukraine');
console.log('Результат методу replace:', res20);

// Застосувати інші методи які були використані в лекції (методи стрічок та методи об'єктів)

console.log('-----------------Застосувати інші методи які були використані в лекції (методи стрічок та методи об\'єктів)-------');

// 21. padStart

console.log('---------21. padStart-----------');

let res21 = '7';
res21 = res21.padStart(3, '0');
console.log('Результат методу padStart:', res21); 

// 22. padEnd

console.log('---------22. padEnd-----------');

let res22 = 'Find';
res22 = res22.padEnd(10, '.');
console.log('Результат методу padEnd:', res22); 


// Методи об'єктів

console.log('---------Методи об\'єктів-----------');

const user = {
    name: 'Alex',
    age: 35,
    job: 'Driver',
    maritalStatus: 'married',
    workStatus: true
}

//1. Object.values

console.log('---------//1. Object.values-----------');

const x = Object.values(user);
console.log(x);


//2. Object.keys

console.log('---------//2. Object.keys-----------');

const x1 = Object.keys(user);
console.log(x1);


//3. Object.entries

console.log('---------//3. Object.entries-----------');

const x3 = Object.entries(user);
console.log(x3);


//4. Object.fromEntries

console.log('---------//4. Object.fromEntries-----------');

const ar1 = [['name', 'Alice'], ['age', 25], ['city', 'Kyiv']];
const x4 = Object.fromEntries(ar1);
console.log(x4); 


//5. Object.freeze

console.log('---------//5. Object.freeze-----------');

const user1 = {
    name: 'Alex',
    age: 35,
    job: 'Driver',
    maritalStatus: 'married',
    workStatus: true
}


const user2 = Object.freeze ({
    name: 'Alex',
    age: 35,
    job: 'Driver',
    maritalStatus: 'married',
    workStatus: true
})

user1.name = 'John';
user2.name = 'John';

user1.age = 39;
user2.age = 39;

user1.job = 'IT-developer';
user2.job = 'IT-developer';

console.log('Не замороженний об\'єкт', user1);
console.log('Замороженний об\'єкт', user2);

//6. Object.seal

console.log('---------//6. Object.seal-----------');

const user6 = Object.seal ({
    name: 'Alex',
    age: 35,
    job: 'Driver',
    maritalStatus: 'married',
    workStatus: true
})

user6.name = 'John';
user6.age = 39;
user6.job = 'IT-developer';
delete user.workStatus;

console.log(user6);