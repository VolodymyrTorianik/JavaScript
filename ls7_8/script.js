//1. Перевести тип і в консоль вивести результат через typeof:

//- стрічку в булевий

a = '1'
console.log(typeof a)
console.log(typeof Boolean(a))

console.log('----------------------')
//- число в булевий

b = 0
console.log(typeof b)
console.log(typeof Boolean(b))

console.log('----------------------')

//- стрічку в число

c = '23'
console.log(typeof c)
console.log(typeof Number(c))

console.log('----------------------')

//- нул в булевий

d = null
console.log(typeof d)
console.log(typeof Boolean(d))

console.log('----------------------')

//- андефайнед в булевий

e = undefined
console.log(typeof e)
console.log(typeof Boolean(e))

console.log('----------------------')


//2. Створити об'єкт* user із 3 рівнями вкладеностей (на кожному рівні не менше 3 поля)

user = {
    name: 'Alex',
    age: 35,
    gender: 'male',
    country: 'Ukraine',
    maritalstatus: 'married',
    job: 'programmer',
    wife: {
        name: 'Anna',
        age: 34,
        gender: 'female',
        favoritfood: {
            fructs: 'apple',
            meat: 'chikken',
            drinks: 'milk'
        }

    }
}

//2.1  Вивести на 2 рівні 1 поле, та на 3 рівні 2 поля в консоль

console.log (user.wife.name)
console.log (user.wife.favoritfood.fructs)
console.log (user.wife.favoritfood.meat)
console.log('----------------------')
//3. Створити масив* list із 3 рівнями вкладеності (на кожному рівні не менше 3 елементів)

const myFirstArray = ['hello', 'good', 'bad', 'color', ['red', 'blue', 'white', [1, 5, 7, 8, 9] ]]

//3.1 Вивести на 2 рівні 1 елемент, та на 3 рівні 2 елемента в консоль

console.log (myFirstArray[4][0])

console.log (myFirstArray[4][3][1])
console.log (myFirstArray[4][3][3])
console.log('----------------------')
//4. Напишіть цикл for, який виводить всі парні числа від 2 до 20.

for (i = 2; i<=20; i += 2) {
    console.log(i)
}
console.log('----------------------')
//5. Створіть масив зі списком вашого улюбленого фрукту, вашого улюбленого кольору, і вашого віку. Виведіть цей масив на консоль і визначте його тип даних.

const mySecondArray = ['apple', 'green', 36]

console.log(mySecondArray)
console.log(typeof mySecondArray)
console.log('----------------------')

//6. Напишіть 2 prompt які приймають два числа. виведіть більше з них. Використайте конструкцію if-else.

let firstpromt = prompt('Eneter First Number')
let secondpromt = prompt('Eneter Second Number')

if (firstpromt > secondpromt) {
    console.log(firstpromt)
} else if (firstpromt < secondpromt) {
    console.log(secondpromt)    
} else {
    console.log('You entered the same numbers')
}
console.log('----------------------')
//7. Напишіть цикл for який виводить всі непарні числа від 1 до 15.

for (nummer = 1; nummer <= 15; nummer +=2) {
    console.log(nummer)
}
console.log('----------------------')

//8. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи

const myThirdArray = [1, 5, true, 'hello', false, null, 'iiii', 54, null]

for (i=0; i<myThirdArray.length; i++) {
    if (i%2 == 0) {
        console.log(myThirdArray[i])
    }
}

console.log('----------------------')

//9. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи

const myFourthArray = [1, 5, true, 'hello', false, null, 'iiii', 54, null]

for (i=0; i<myFourthArray.length; i++) {
    if (i%2 == 1) {
        console.log(myFourthArray[i])
    }
}

console.log('----------------------')

//10. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх елементів масиву.

let superarray = [1, 2, 4, 2, 3, 55, 66, 777, 12]
let summa = 0

for (i=0; i<superarray.length; i++) {
    summa +=superarray[i]
}

console.log(summa)

console.log('----------------------')

//11. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.

let megaarray = [1, 2, 4, 2, 3, 5, 6, 7, 1]
let itogo = 1

for (i=0; i<megaarray.length; i++) {
    itogo *=megaarray[i]
}

console.log(itogo)