console.log('---------------РІВЕНЬ 2----------------');

console.log('---------------РІВЕНЬ1----------------');

console.log('---------------Завдання 1.1----------------');

console.log('Дана некоторая строка. Найдите позицию первого нуля в строке.');

let a11 = "34354325403434";

console.log('Беремо строку', a11);

let indA11 = a11.indexOf('0');

console.log('Індекс першого нуля', indA11); // 3


console.log('---------------Завдання 1.2----------------');

console.log('Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.');

for (i = 10; i <= 1000; i++) {
    
    let numString = i.toString();

    let firstNum = parseInt(numString[0]);
    let secondNum = parseInt(numString[1]);
    if (firstNum + secondNum === 5 ) {
        console.log(i);
        
    }
}


console.log('---------------Завдання 1.3----------------');

console.log('Дан массив. Удалите из него элементы с заданным значением.');

let array13 = [2, 34, 32, 5, 6, 5, 6, 8];

console.log('Маємо масив', array13);

let newArr13 = array13.filter(i => i !== 6);

console.log('Отримаємо масив без 6', newArr13);



console.log('---------------Завдання 1.4----------------');

console.log('Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Найдите сумму первой половины элементов этого массива.');

let array14 = [1, 2, 3, 4, 5, 6];

let newArr14 = Math.floor(array14.length/2);

let sum14 = 0;

for (i=0; i < newArr14;  i++) {
    sum14 +=  array14[i];
}

console.log('Сума першої половини елементів масиву', sum14);


console.log('---------------РІВЕНЬ 2----------------');


console.log('---------------Завдання 2.1----------------');

console.log('Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.');

let b21 = [4, 5, 6, -3, -4, 0, -1];
console.log('Є масив', b21);
let sumb21 = 0;
for (i = 0; i < b21.length; i++) {
    if (b21[i]< 0) {
        sumb21 ++;
    }
}

console.log('Кількість відємних чисел у массиві', sumb21);


console.log('---------------Завдання 2.2----------------');

console.log('Дан массив с числами. Оставьте в нем только положительные числа.');


let b22 = [1, -2, 6, -3, -1, 7, -2];

console.log('Маємо масив', b22);

let newArr22 = b22.filter(i => i > 0);

console.log('Отримаємо масив', newArr22);

console.log('---------------Завдання 2.3----------------');

console.log('Дана строка. Удалите предпоследний символ из этой строки.');

let b23 = 'Hello my friends!';
console.log('Маємо стрічку', b23);
let newB23 = b23.slice(0, -2) + b23.slice(-1);

console.log('Видаляємо передостанній символ і отримаємо нову', newB23);


console.log('---------------Завдання 2.4----------------');

console.log('Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.');

let b24 = [1, 2, 3, 4, 5, 6];

let halfB24 = Math.floor(b24.length/2);
let firstPart = b24.slice(0, halfB24);
let secondPart = b24.slice(halfB24);

console.log('Поділили на два різні масиви', firstPart, secondPart);

let firstSum = firstPart.reduce((acc, curr) => acc + curr);
let secondtSum = secondPart.reduce((acc, curr) => acc + curr);

let resultB24 = firstSum / secondtSum;

console.log('Результат ділення першої суми половини масиву на другу', resultB24);


console.log('---------------РІВЕНЬ 3----------------');


console.log('---------------Завдання 3.1----------------');

console.log('Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.');

let c1 = 'world';
let c2 = 'day';

console.log('Перевіряємо слова', c1, 'та', c2);

let c3 =  c1[c1.length-1];
let c4 =  c2[0]

if (c3 === c4) {
    console.log('Вітаємо! Остання буква першого слова дорівнює першій букві другого!');
} else {
    console.log('Помилка');
    
}



console.log('---------------Завдання 3.2----------------');


console.log('Дана некоторая строка. Найдите позицию третьего нуля в строке.');

let c32 = '3434203432403400';

let firstnull = c32.indexOf('0');
let secondnull = c32.indexOf('0', firstnull+1);
let thirdnull = c32.indexOf('0',  secondnull+1);

console.log('Індекс третього нуля у стрічці', c32, 'дорівнює', thirdnull);


console.log('---------------Завдання 3.3----------------');


console.log('Даны числа, разделенные запятыми: 12,34,56. Найдите сумму этих чисел.');

let c33 = '12, 34, 56';

let arrc33 = c33.split(',');

let newarr33 = arrc33.map(Number);

let summ33 = newarr33.reduce((acc, num) => acc + num);
console.log('Сума чисел дорівнює', summ33);




console.log('---------------Завдання 3.4----------------');

console.log('Дана дата в следующем формате: 2025-12-31 Преобразуйте эту дату в объект:');

let date34 = '2025-12-31';
let [year, month, day] = date34.split('-');

let objDate34 = {
    year: year,
    month: month,
    day: day
};

console.log(objDate34);



console.log('---------------РІВЕНЬ 4----------------');


console.log('---------------Завдання 4.1----------------');

console.log('Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.');

let d41 = 'fsdfs342fdfs';
console.log('Шукаємо індекс першої цифри у стрічці', d41);

let firstNumber = d41.search(/\d/);

console.log(firstNumber);


console.log('---------------Завдання 4.2----------------');

console.log('Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.');

let obj42 = {
    name: 'Igor', 
    lastName: 'Sivko',
    age: 45,
    jobb: true
}

console.log('Маємо об\єкт', obj42);

let arrayKey = Object.keys(obj42);
let arrayValue = Object.values(obj42);

console.log('Виводимо ключі', arrayKey);
console.log('Виводимо значення', arrayValue);

console.log('---------------Завдання 4.3----------------');

console.log('Дано число. Выведите в консоль количество четных цифр в этом числе.');

let num43 = 4353566741;

let num43Str = num43.toString();

let countsum = 0;

for (i of num43Str) {
    
    if (Number(i) % 2 === 0) {
        countsum++;
    }
    
}

console.log('Кількість парних цифр у числі', num43,'складає', countsum);



console.log('---------------Завдання 4.4----------------');

console.log('Дана некоторая строка: abcde. Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: AbCdE');

let string44 = 'abcde';
let res44 = '';
let bigLetter = 0;

for (i of string44) {
    if (bigLetter % 2 ===0) {
        res44+= i.toUpperCase();
    } else {
        res44+= i;
    }
    bigLetter++; 
}

console.log('Результат', res44);


console.log('---------------Завдання 4.5----------------');

console.log('Дана некоторая строка со словами: aaa bbb ccc Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: Aaa Bbb Ccc');

let string45 = 'aaa bbb ccc';

let array45 = string45.split(' ');

let topLetter = array45.map(i => {
 return i.charAt(0).toUpperCase() + i.slice(1)
});

let res45 = topLetter.join(' ');

console.log('Результат', res45);


console.log('---------------РІВЕНЬ 5----------------');


console.log('---------------Завдання 5.1----------------');

console.log('Дана некоторая строка, например, вот такая: 023m0df0dfg0. Получите массив позиций всех нулей в этой в строке.');

let string51 = '023m0df0dfg0';
let array51 = [];
for (i = 0; i < string51.length; i++) {
    if (string51[i]==='0') {
        array51.push(i);
    }
}

console.log('Массив усіх позицій нулів в стрічці', string51, 'виглядає так', array51);



console.log('---------------Завдання 5.2----------------');


console.log('Дана некоторая строка: abcdefg. Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее: abdeg');

let string52 = "abcdefg";
let res52 = "";

for (i = 0; i < string52.length; i++) {
  if ((i + 1) % 3 !== 0) {  
    res52 += string52[i]; 
  }
}

console.log(res52);  



console.log('---------------Завдання 5.3----------------');

console.log('Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.');

let array53 = [1, 2, 3, 4, 5, 6];
let summ1 = 0;
let summ2 = 0;

for (i = 0; i < array53.length; i++) {

    if (i % 2 === 0) {
        summ1 += array53[i];
    } else {
        summ2 += array53[i];
    }
}

result53 = summ1 / summ2;

console.log('Результат виконання операції', result53);



console.log('---------------РІВЕНЬ 6----------------');


console.log('---------------Завдання 6.1----------------');

console.log('Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.');


let string61 = "ds7fda1b2c3d4e5";

console.log('Отримаємо стрічку', string61);

let array61 = [];

for (let i = 0; i < string61.length; i++) {
    if (!isNaN(string61[i]) && string61[i] !== " ") {  
        array61.push(i);  
    }
}

console.log('Отримаємо массив', array61);



console.log('---------------Завдання 6.2----------------');

console.log('Дан массив с некоторыми числами, например, вот такой: [123, 456, 789] Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987]');

let array63 = [123, 456, 789];

let newArray63 = array63.map(i => {
    return Number(i.toString().split('').reverse().join(''));
});

console.log(newArray63);



console.log('---------------Завдання 6.3----------------');

console.log('Дана некоторая строка с числом: 1234567, Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: 1 234 567');

let num63 = '1234567';
let res63 = '';
for (let i = num63.length - 1, count = 1; i >= 0; i--, count++) {
    res63 = num63[i] + res63;
    if (count % 3 === 0 && i !== 0) {
        res63 = ' ' + res63;
    }
}

console.log(res63);


console.log('---------------Завдання 6.4----------------');

console.log('Дана некоторая строка: AbCdE, Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее: aBcDe');

let string64 = 'AbCdE';
let newstr64 = '';

for (let i of string64) {
    
    if (i === i.toUpperCase()) {
        newstr64 += i.toLowerCase();
    } else {
        newstr64 += i.toUpperCase();
    }
}

console.log('Результат', newstr64); 


console.log('---------------Завдання 6.5----------------');

console.log('Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6] Слейте пары элементов вместе: [12, 34, 56]');

let array65 = [1, 2, 3, 4, 5, 6];
let newarr65 = [];
for (let i = 0; i < array65.length; i += 2) {
    newarr65.push(Number(array65[i].toString() +array65[i + 1].toString()));
}

console.log('Результат', newarr65);



console.log('---------------Завдання 6.6----------------');

console.log('Дана некоторая строка со словами: aaa bbb ccc eee fff Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: aaa Bbb ccc Eee fff');


let string66 = 'aaa bbb ccc eee fff';


let newstring66 = string66.split(' ');

for (let i = 1; i < newstring66.length; i += 2) {
    newstring66[i] = newstring66[i][0].toUpperCase() + newstring66[i].slice(1);
}

let res66 = newstring66.join(' ');

console.log(res66);


console.log('---------------РІВЕНЬ 7----------------');


console.log('---------------Завдання 7.1----------------');

console.log('Дана некоторая строка: a bc def ghij Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее: A BC DEF ghij');


let string71 = 'a bc def ghij';
let newstr71 = string71.split(' ');
let array71 = [];

for (let i of newstr71) {
    if (i.length <= 3) {
        array71.push(i.toUpperCase());
    } else {
        array71.push(i);
    }
}

let result71 = array71.join(' ');
console.log('Результат', result71); 



console.log('---------------Завдання 7.2----------------');

console.log('Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.');

let simbol72 = 'x';

if (simbol72 === simbol72.toUpperCase()) {
    console.log('Це символ вернього регістру');
} else { 
    console.log('Це символ нижнього регістру');
}




console.log('---------------Завдання 7.3----------------');

console.log('Дано некоторое число, например, такое: 123789 Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28');

let num73 = 123789;
let string73 = num73.toString();
let result73 = '';

for (i = 0; i <string73.length; i++) {
    if (string73[i] % 2 ===0) {
        result73 += string73[i];
    } 
}

console.log('Результат', Number( result73));


console.log('---------------РІВЕНЬ 8----------------');


console.log('---------------Завдання 8.1----------------');

console.log('Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.');

let string81 = "We Love World";
console.log('маємо стрічку', string81);

let count81 = 0;

for (let i of string81) {
    if (i === i.toUpperCase()) {
        count81++;
    }
}

if (count81 <= 2) {
    console.log('У стрічці не більше 2 великих літер');
} else {
    console.log('У стрічці більше 2 великих літер');
}


console.log('---------------Завдання 8.2----------------');

console.log('Дана некоторая строка: 1 22 333 4444 22 5555 1 Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее: 1 22 333 22 1');


let string82 = "1 22 333 4444 22 5555 1";

let newstring82 = string82.split(' ');

let filtstring82 = newstring82.filter(i => i.length <= 3);

let result82 = filtstring82.join(' ');

console.log(result82);


console.log('---------------Завдання 8.3----------------');

console.log('Даны два массива: let arr1 = [1, 2, 3] let arr2 = [\'a\', \'b\', \'c\'] Слейте эти массивы в новый массив следующим образом: [1, 2, \'a\', \'b\', \'c\', 3]');

let array83 = [1, 2, 3];
let array84 = ['a', 'b', 'c'];

let res83 = [...array83.slice(0, 2), ...array84, ...array83.slice(2)];

console.log('Результат', res83); 


console.log('---------------РІВЕНЬ 9----------------');

console.log('Дано некоторое число: 123456 Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее: 12 + 34 + 56');


console.log('---------------Завдання 9.1----------------');


let num91 = 123456;
let string91 = num91.toString(); 
let result91 = 0;

for (let i = 0; i < string91.length; i += 2) {
    let sum = string91.slice(i, i + 2); 
    result91 += Number(sum);          
}

console.log('Результат', result91); 


console.log('---------------Завдання 9.2----------------');


console.log('Дан массив с числами: [1, 2, 3, 4, 5] Выведите в консоль элементы этого массива в обратном порядке.');

let array92 = [1, 2, 3, 4, 5];

let newArray = array92.reverse();

newArray.map(i => {
  console.log(i);  
});


console.log('---------------РІВЕНЬ 10----------------');


console.log('---------------Завдання 10.1----------------');

console.log('Дана строка с буквами и цифрами 54544a1b2c3. Проверьте, что в этой строке не более трех букв.');

function letterCheck(string) {
    let count101 = 0;
    for (let i of string) {

      if (i >= 'a' && i <= 'z') {
        count101++;

        if (count101 > 3) {
          return false;
        }
      }
    }
    return true; 
  }
  
let result101 = letterCheck('54544a1b2c3');
console.log('Результат перевірки 3 букв ', result101);



console.log('---------------Завдання 10.2----------------');

console.log('Дано число. Получите первую четную цифру с конца этого числа.');

function firstNumb(numb) {
    const num102 = numb.toString().split('');

    for (let i = num102.length - 1; i >= 0; i--) {
      const digit = parseInt(num102[i]); 
      if (digit % 2 === 0) {
        return digit;
      }
    }
    return null; 
  }

  let numbe102 = 12345; 

  let res102 = firstNumb(numbe102);

  console.log('Перша парна цифра з кінця числа', res102); 
  

console.log('---------------Завдання 10.3----------------');


function newSymbol(str) {
    return str.split(' ') 
              .map(word => '!' + word.slice(1)) 
              .join(' '); 
  }

  let res103 = newSymbol('abcde abcde abcde');
  console.log(res103); 
  


console.log('---------------Завдання 10.4----------------');


function DubleElement(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) { 
        return true; 
      }
    }
    return false; 
  }

  let array104 =  [1, 3, 3, 5, 4, 7, 8, 6, 0];
console.log('Маємо массив', array104);

  console.log('Результат перевірки 2 однакових елементів у массиві', DubleElement(array104));
  


  