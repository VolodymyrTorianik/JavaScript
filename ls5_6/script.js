//1. Перевести тип і в консоль вивести результат через typeof:

console.log('------------стрічка в булевий-------')

let a = 'hello world'
let b = Boolean(a)
console.log(b)

console.log('----------число в булевий-----------')

let c = 0
let d = Boolean(c)
console.log(d)

console.log('----------стрічка в число-----------')

let e = '234'
let f = Number(e)
console.log(f)

console.log('----------нул в булевий-----------')

let g = null
let h = Boolean(g)
console.log(h)

console.log('----------андефайнед в булевий-----------')

let i = undefined
let j = Boolean(i)
console.log(j)

//2. Написати confirm який відносно якого будете показувати в консолі:

console.log('----------if else-----------')

if (confirm('Please, make your choice')) {
    console.log('You confirmed popup')
} else {
    console.log('Confirm Error')
}

//3. Перепишіть попередній приклад використовуючи тернарний оператор:

console.log('----------ternar-----------')

let ternexample = (confirm('Second chance to make your choice')) ? console.log('You confirmed popup'): console.log('Confirm Error')

//4. Через prompt взяти вік та виконати наступні умови в if else:

let agetest = prompt('Enter your age')

if (1<=agetest && agetest <12) {
    console.log('You are child')
} else if  (12<=agetest && agetest <18)  {
    console.log('You are teenager')
} else if  (18<=agetest && agetest <60)  {
    console.log('You are adult person')
} else if  (60<=agetest)  {
    console.log('You are so old')
} else if  (agetest <=0)  {
    console.log('You entered incorrect age')
}

//5. Через prompt взяти імя та виконати наступні умови в switch case:

let nametest = prompt('Please enter who you are: Admin, Student, Teacher or Young?')

switch (nametest) {
    case 'Admin': console.log('I have full access');
    break;
    case 'Student': console.log('Im student');
    break;
    case 'Teacher': console.log('Im teacher');
    break;
    case 'Young': console.log('I young and ready to party');
    break;
    default: console.log('You entered own name');
}

//6. Самостійно приведіть приклади використання порівняльних операторів:

let var1 = 5
let var2 = '10'
let var3= 10

//6.1 < 

if (var1 < var3) {
    console.log(true)
} else {
    console.log(false)
}

//6.2 > 

if (var1 > var3) {
    console.log(false)
} else {
    console.log(true)
}

//6.3 >= 

if (var1 >= var3) {
    console.log(false)
} else {
    console.log(true)
}

//6.4 <= 

if (var1 <= var3) {
    console.log(true)
} else {
    console.log(false)
}

//6.5 == 

if (var1 == var2) {
    console.log(true)
} else {
    console.log(false)
}


//6.6 === 

if (var1 === var2) {
    console.log(true)
} else {
    console.log(false)
}

//6.7 != 

var1 != var2 ? console.log(true): console.log(false) 

//6.8 !== 

var1 !== var2 ? console.log(true): console.log(false) 

//6.9 ||

if (var1 < var3 || var1 === var2) {
    console.log('Success')
} else {
    console.log('Error')
}

//6.10 &&

if (var1 < var3 && var1 === var2) {
    console.log('Good')
} else {
    console.log('Bad')
}