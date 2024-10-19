

//1. Напишіть цикл, який виводить всі парні числа від 20 до 32.

//1.1 (FOR)
console.log('---------------1 Завдання-----------------')
console.log('---------------FOR-----------------')

for (i=20; i<=32; i+=2) {
    console.log(i)
}


//1.2 (FOR OF)

console.log('--------------FOR-OF------------------')
let firstarray = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]

for (let num1 of firstarray) {
    if (num1 % 2 ==0) {
        console.log(num1)
    }
}


//1.3 (FOR IN)

console.log('--------------FOR-IN------------------')

for (let num2 in firstarray) {
    if (firstarray[num2] % 2 ==0) {
        console.log(firstarray[num2])
    }
}


//1.4 (WHILE)

console.log('--------------WHILE------------------')

let num3=20

while (num3<=32) {
    if (num3 % 2==0) {
        console.log(num3)
    }
    num3++
}

//1.5 (WHILE DO)

console.log('--------------WHILE-DO------------------')

let num4 = 20

do {
    if (num4 % 2==0) {
        console.log(num4)
    }
    num4++    
} while (num4<=32)

//2. Створіть масив зі списком:  вашого улюбленого фрукту, вашого улюбленого кольору, ім'я, рандомного числа,  вашого віку. Виведіть цей проітерований масив на консоль і визначте його тип даних.
console.log('---------------2 Завдання-----------------')
console.log('---------------FOR-----------------')
const user = ['apple', 'red', 'Alex', 56, 36]

//1.1 (FOR)

for (i=0; i<user.length; i++) {
    console.log(user[i], typeof user[i])
}
//1.2 (FOR OF)

console.log('--------------FOR-OF------------------')
for (let elem of user) {
    console.log(elem, typeof elem)
}
//1.3 (FOR IN)

console.log('--------------FOR-IN------------------')

for(let el in user) {
    console.log(user[el], typeof user[el])
}

//1.4 (WHILE)
console.log('--------------WHILE------------------')
let item = 0
while (item<user.length) {
    console.log(user[item], typeof user[item])
    item++;
}

//1.5 (WHILE DO)
console.log('--------------WHILE-DO------------------')
let doItem = 0
do {
    console.log(user[doItem], typeof user[doItem])
    doItem++
} while (doItem<user.length)

//3. Напишіть цикл який виводить всі непарні числа від 17 до 39.

console.log('---------------3 Завдання-----------------')

//1.1 (FOR)
console.log('---------------FOR-----------------')
for (i=17; i<=39; i+=2) {
    console.log(i)
}
//1.2 (FOR OF)
console.log('---------------FOR-OF-----------------')

const numberarray= [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]


for (let i of numberarray) {
    if (i % 2 ==1) {
        console.log(i)
    }
    i++
}

//1.3 (FOR IN)

console.log('---------------FOR-IN-----------------')
for (let index in numberarray) {
    if (index % 2 ==0) {
        console.log(numberarray[index])
    }
    index++    
}

//1.4 (WHILE)
console.log('---------------WHILE-----------------')

let x = 0
while (x<=numberarray.length) {
    if (x % 2 ==0) {
        console.log(numberarray[x])
    }
    x++ 
}

//1.5 (WHILE DO)
console.log('---------------WHILE-DO----------------')

let y = 0
do {
    if (y % 2 ==0) {
        console.log(numberarray[y])
    }
    y++ 
} while (y<=numberarray.length)

//4. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи
console.log('---------------4 Завдання-----------------')


const parnarray = [1, 5, true, 'hello', false, null, 'iiii', 54, null]

//1.1 (FOR)
console.log('---------------FOR-----------------')
for (i=0; i<parnarray.length; i+=2) {
    console.log(parnarray[i])
}

//1.2 (FOR OF)
console.log('---------------FOR-OF----------------')

let x1 = 0
for (let i of parnarray) {
    if (x1 % 2 == 0) {
        console.log(i)
    }
   x1++ 
}

//1.3 (FOR IN)
console.log('---------------FOR-IN----------------')

for (let i in parnarray){
    if(i % 2 == 0) {
      console.log(parnarray[i])
    }  
  }


//1.4 (WHILE) 
console.log('---------------WHILE----------------')

let g = 0
while (g < parnarray.length) {
    if (g % 2 == 0) {
        console.log(parnarray[g])
    }
    g++
}


//1.5 (WHILE DO)
console.log('---------------WHILE-DO---------------')
let d = 0
do {
    if (d % 2 ==0) {
        console.log(parnarray[d])
    }
    d++ 
} while (d<=parnarray.length)


//5. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи

console.log('---------------5 Завдання-----------------')


const neparnarray = [1, 5, true, 'hello', false, null, 'iiii', 54, null]

//1.1 (FOR)
console.log('---------------FOR-----------------')
for (i=1; i<neparnarray.length; i+=2) {
    console.log(neparnarray[i])
}

//1.2 (FOR OF)
console.log('---------------FOR-OF----------------')

let neparn1 = 0
for (let i of neparnarray) {
    if (neparn1 % 2 == 1) {
        console.log(i)
    }
    neparn1++ 
}

//1.3 (FOR IN)
console.log('---------------FOR-IN----------------')

for (let i in neparnarray){
    if(i % 2 == 1) {
      console.log(neparnarray[i])
    }  
  }


//1.4 (WHILE) 
console.log('---------------WHILE----------------')

let neparn2 = 0
while (neparn2 < neparnarray.length) {
    if (neparn2 % 2 == 1) {
        console.log(neparnarray[neparn2])
    }
    neparn2++
}


//1.5 (WHILE DO)
console.log('---------------WHILE-DO---------------')
let neparn3 = 0
do {
    if (neparn3 % 2 ==1) {
        console.log(neparnarray[neparn3])
    }
    neparn3++ 
} while (neparn3<neparnarray.length)


//6. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.
console.log('---------------6 Завдання-----------------')

const mymass = [1, 2, 4, 2, 3, 55, 66, 777, 12]

//1.1 (FOR)
console.log('---------------FOR-----------------')
let mysumm = 0
for (i=0; i<mymass.length; i++) {
    mysumm += mymass[i]
}

console.log('Cумма усіх елементів: ', mysumm)

//1.2 (FOR OF)
console.log('---------------FOR-OF----------------')

let mysumm2 = 0

for (let i of mymass) {
    mysumm2 += i
}

console.log('Cумма усіх елементів: ', mysumm2)

//1.3 (FOR IN)
console.log('---------------FOR-IN----------------')
let mysumm3 = 0

for (let i in mymass) {
    mysumm3 += mymass[i]
}

console.log('Cумма усіх елементів: ', mysumm3)

//1.4 (WHILE)
console.log('---------------While----------------')
let mysumm4 = 0
let sumindex = 0
while (sumindex<mymass.length) {
    mysumm4 += mymass[sumindex]
    sumindex++
}

console.log('Cумма усіх елементів: ', mysumm4)

//1.5 (WHILE DO)
console.log('---------------While-DO---------------')

let mysumm5 = 0
let sumdo = 0
do {
    mysumm5 += mymass[sumdo]
    sumdo++
} while (sumdo < mymass.length)

console.log('Cумма усіх елементів: ', mysumm5)    

//7. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.

console.log('---------------7 Завдання-----------------')

const yourmass = [1, 2, 4, 2, 3, 55, 66, 777, 12]

//1.1 (FOR)
console.log('---------------FOR-----------------')
let mymulti = 1
for (i=0; i<yourmass.length; i++) {
    mymulti *= yourmass[i]
}

console.log('Множення усіх елементів: ', mymulti)

//1.2 (FOR OF)
console.log('---------------FOR-OF----------------')

let mymulti2 = 1

for (let i of yourmass) {
    mymulti2 *= i
}

console.log('Множення усіх елементів: ', mymulti2)

//1.3 (FOR IN)
console.log('---------------FOR-IN----------------')
let mymulti3 = 1

for (let i in yourmass) {
    mymulti3 *= yourmass[i]
}

console.log('Множення усіх елементів: ', mymulti3)

//1.4 (WHILE)
console.log('---------------While----------------')
let mymulti4 = 1
let multiindex = 0
while (multiindex<yourmass.length) {
    mymulti4 *= yourmass[multiindex]
    multiindex++
}

console.log('Множення усіх елементів: ', mymulti4)

//1.5 (WHILE DO)
console.log('---------------While-DO---------------')

let mymulti5 = 1
let multido = 0
do {
    mymulti5 *= yourmass[multido]
    multido++
} while (multido < yourmass.length)

console.log('Множення усіх елементів: ', mymulti5)   

//8. Створіть prompt в якому потрібно проітерувати число з 0.  Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію. Якщо це числа 100 і більше, завершити ітерацію.
console.log('---------------8 Завдання-----------------')
//1.1 (FOR)
console.log('---------------FOR-----------------')
let promtnumber = prompt("Enter number for 0 to 100:")

for (let i =0; i<= promtnumber; i++){
  if (i >= 5 && i <= 10)
     continue
  if (i >= 100)
     break
  console.log(i)
}


//1.2 (FOR OF)
console.log('---------------FOR--OF---------------')

let arraypromt = [];
for(let i = 0; i<= promtnumber; i++){
    arraypromt[i] = i
}

for(let x21 of arraypromt){
  if(x21 >=5&& x21 <= 10)
     continue
  if(x21>= 100)
     break
  console.log(x21)
}


//1.3 (FOR IN)

console.log('---------------FOR--IN---------------')
for(let i in arraypromt){
  let x22 = arraypromt[i]
  if(x22>= 5&& x22 <= 10)
     continue;
  if(x22 >= 100)
     break;
  console.log(x22)
}


//1.4 (WHILE)
console.log('---------------WHILE---------------')
i = 0;
while(i<= promtnumber){
  if(i >= 5&& i <= 10){
    i++
    continue
  }
  if (i >= 100) {
    break
  }
  console.log(i)
  i++
}

//1.5 (WHILE DO)
console.log('---------------WHILE-DO--------------')
let ww = 0;
do{
  if(ww >=5 && ww <= 10){
    ww++
    continue;
  }
  if (ww >= 100){
    break
  }
  console.log(ww)
  ww++
} while(ww <= promtnumber)

