console.log('Уровень 4.1 задачника JavaScript');



console.log('1. Сделайте функцию, которая вернет текущий день недели словом.');

function dayWeek() {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const today = new Date();
    return console.log(days[today.getDay()]);
     
}

dayWeek();

console.log('-----------------------------------------------------------');

console.log('2. Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.');

function WeekInfo(date) {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
        console.error('Некорректная дата');
        return;
    }
    return days[parsedDate.getDay()];
}


console.log(WeekInfo('2025-01-01'));


console.log('-----------------------------------------------------------');

console.log('3. Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.');

function seconds2Days(seconds) {
    if (typeof seconds !== 'number' || seconds < 0) {
        console.error('Введите положительное число секунд');
        return;
    }
    return seconds / (24 * 60 * 60);
}

console.log(seconds2Days(86400));



console.log('-----------------------------------------------------------');

console.log('4. Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.');

function myString(length, str) {
    return str.slice(0, length);
}

console.log(myString(4, 'Hello World!'));


console.log('-----------------------------------------------------------');

console.log('5. Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате.');


function Zodiac(date) {

    if (!(date instanceof Date) || isNaN(date.getTime())) {
        console.error('Некорректная дата');
        return;
    }
    const day = date.getDate();
    const month = date.getMonth() + 1; 

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Водолей";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return "Рыбы";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Овен";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Телец";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Близнецы";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Рак";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Лев";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Дева";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Весы";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Скорпион";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Стрелец";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "Козерог";
    } 
}


const date = new Date(2025, 0, 15); 
console.log(Zodiac(date)); 

console.log('-----------------------------------------------------------');


console.log('6. Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.');


function sumOfDivisors(num) {
    if (num <= 0) return 0; 

    let sum = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i; 
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }

    return sum;
}


console.log(sumOfDivisors(12));
console.log(sumOfDivisors(15)); 
console.log(sumOfDivisors(0)); 

console.log('-----------------------------------------------------------');

console.log('Уровень 4.2 задачника JavaScript');

console.log('1. Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.');

function sumOfDigits(num) {
    return String(num).split('').reduce((sum, digit) => sum + Number(digit), 0);
}

console.log('Для числа 34 =', sumOfDigits(34));

console.log('-----------------------------------------------------------');

console.log('2. Сделайте функцию, которая параметром будет принимать число и удалять из него нули.');

function removeZeros(num) {
    return Number(String(num).replace(/0/g, ''));
}

console.log('Для числа 10203 =', removeZeros(10203));

console.log('-----------------------------------------------------------');

console.log('3. Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году.');

function daysUntilDate(year, month, day) {
    const now = new Date();
    now.setHours(0, 0, 0, 0); 
    const target = new Date(year, month - 1, day); 
    const diffInMs = target - now;
    return Math.round(diffInMs / (1000 * 60 * 60 * 24));
}

console.log(daysUntilDate(2025, 2, 15)); 

console.log('-----------------------------------------------------------');

console.log('4. Сделайте функцию, которая параметром будет принимать год и проверять, високосный он или нет.');

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log('2024 рік', isLeapYear(2024)); 
console.log('2025 рік',isLeapYear(2025)); 

console.log('-----------------------------------------------------------');

console.log('5. Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.');

function leapYearsLastCentury() {
    const currentYear = new Date().getFullYear();
    const leapYears = [];
    for (let year = currentYear - 100; year <= currentYear; year++) {
        if (isLeapYear(year)) {
            leapYears.push(year);
        }
    }
    return leapYears;
}

console.log(leapYearsLastCentury()); 


console.log('-----------------------------------------------------------');

console.log('6. Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.');

function daysUntilMonthEnd() {
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const diffInMs = endOfMonth - now;
    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
}

console.log(daysUntilMonthEnd());

console.log('-----------------------------------------------------------');


console.log('7. Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде объекта.');

function getDayName() {
    const daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const now = new Date();
    const currDayIndex = now.getDay();

    return {
        prev: daysOfWeek[(currDayIndex - 1 + 7) % 7],
        curr: daysOfWeek[currDayIndex],
        next: daysOfWeek[(currDayIndex + 1) % 7]
    };
}

console.log(getDayName());

console.log('-----------------------------------------------------------');


console.log('Уровень 4.3 задачника JavaScript');

console.log('1. Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.');

function removeDuplicates(arr) {
    return [...new Set(arr)];
  }

console.log(removeDuplicates([1, 3, 5, 6, 3, 1, 3, 4]));


console.log('-----------------------------------------------------------');

console.log('2. Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.');

function remove3Duplicates(arr) {
    const count = {};

    arr.forEach(item => {
        count[item] = (count[item] || 0) + 1;
    });

    return arr.filter(item => count[item] <= 3);
}

const arr = [1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5];
console.log(remove3Duplicates(arr));


console.log('-----------------------------------------------------------');


console.log('3. Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.');
console.log('-----------------------------------------------------------');

function removeNearDuplicates(arr) {
    return arr.filter((item, index) => item !== arr[index - 1]);
  }

console.log(removeNearDuplicates([2, 2, 3, 4, 5, 5]));
  

console.log('4. Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта: {max: 9, min: 1,}');
console.log('-----------------------------------------------------------');

function findMaxMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
}

console.log(findMaxMin([100, 50, 25, 15, 10]));



console.log('Уровень 4.4 задачника JavaScript');


console.log('1. Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.');

function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
}

console.log(countDivisors(12)); 


console.log('-----------------------------------------------------------');


console.log('2. Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.');

function getZodiacSign(date) {
    const month = date.getMonth() + 1;  
    const day = date.getDate();

    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return 'Овен';
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return 'Телец';
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return 'Близнецы';
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return 'Рак';
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return 'Лев';
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return 'Дева';
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return 'Весы';
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        return 'Скорпион';
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return 'Стрелец';
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        return 'Козерог';
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return 'Водолей';
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return 'Рыбы';
    }
}

console.log(getZodiacSign(new Date(2024, 5, 15))); 


console.log('-----------------------------------------------------------');


console.log('3. Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.');

function getDivisors(n) {
    const divisors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

console.log(getDivisors(12)); 


console.log('-----------------------------------------------------------');


console.log('4. Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.');

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); 
console.log(isPrime(10)); 


console.log('-----------------------------------------------------------');


console.log('5. Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.');

function removeEvenDigits(n) {
    return parseInt(n.toString().split('').filter(digit => parseInt(digit) % 2 !== 0).join('')) || 0;
}


console.log(removeEvenDigits(123456));


console.log('-----------------------------------------------------------');


console.log('6. Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.');

function generateRandomArray(n, min, max) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}


console.log(generateRandomArray(5, 1, 10)); 


console.log('-----------------------------------------------------------');


console.log('Уровень 4.5 задачника JavaScript');

console.log('1. Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.');

function isNumber(str) {
    return /^\d+$/.test(str);
  }
  
console.log(isNumber('342342423'));
console.log(isNumber('34sd2342423'));  

console.log('-----------------------------------------------------------');

console.log('2. Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.');

function isFraction(str) {
    return /^[+-]?\d*\.\d+$/.test(str);
  }
 
console.log(isFraction('3.14'));
console.log(isFraction('23'));  


console.log('-----------------------------------------------------------');



console.log('3. Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.');


function secondLargest(arr) {
    let uniqueArr = [...new Set(arr)];
    if (uniqueArr.length < 2) return null; 
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr[1];
  }
  
console.log(secondLargest([34, 21, 12, 5, 3, 6]));


  
console.log('-----------------------------------------------------------');



console.log('4. Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.');

function range(min, max) {
    let result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    return result;
  }

  console.log(range(5, 10));
  

console.log('-----------------------------------------------------------');



console.log('5. Сделайте функцию, которая заполнит массив случайными латинскими буквами.');

function randomLettersArray(length) {
    let result = [];
    for (let i = 0; i < length; i++) {
      let randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26)); 
      result.push(randomChar);
    }
    return result;
  }

console.log(randomLettersArray(10));


  
console.log('-----------------------------------------------------------');



console.log('6. Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.');

function fibonacciSum(n) {
    let a = 0, b = 1, sum = 0;
    for (let i = 0; i < n; i++) {
      sum += a;
      [a, b] = [b, a + b]; 
    }
    return sum;
  }
  
console.log(fibonacciSum(25));


console.log('-----------------------------------------------------------');

console.log('Уровень 4.6 задачника JavaScript');

console.log('1. Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.');


function isValidDate(dateStr) {
    const date = new Date(dateStr);
    return date.toString() !== 'Invalid Date' && dateStr === date.toISOString().split('T')[0];
  }

console.log(isValidDate('2024-02-12'));  
console.log(isValidDate('2028-23-12'));

console.log('-----------------------------------------------------------');



console.log('2. Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.');


function randomString(length) {
    let result = '';
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  
console.log(randomString(8));

console.log('-----------------------------------------------------------');



console.log('3. Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.');


function firstLettersUpperCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
  }

console.log(firstLettersUpperCase('hello world'));
  


console.log('-----------------------------------------------------------');


console.log('4. Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.');


function getDel(arr) {
    return arr.map(num => {
      let divisors = [];
      for (let i = 1; i <= num; i++) {
        if (num % i === 0) divisors.push(i);
      }
      return divisors;
    });
  }
  
console.log(getDel([32, 51, 23, 15]));

console.log('-----------------------------------------------------------');



console.log('5. Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта: {d: 12, h: 10, m: 59, s: 59}');


function timeConversion(seconds) {
    const d = Math.floor(seconds / (24 * 3600));
    seconds -= d * 24 * 3600;
    const h = Math.floor(seconds / 3600);
    seconds -= h * 3600;
    const m = Math.floor(seconds / 60);
    seconds -= m * 60;
    const s = seconds;
  
    return { d, h, m, s };
  }

console.log(timeConversion(3800));
  
console.log('Уровень 4.7 задачника JavaScript');

console.log('-----------------------------------------------------------');

console.log('1. Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.');

function sortWords(text) {
    return text.split(' ').sort().join(' ');
  }

console.log(sortWords('xbox rice film apple'));
  
console.log('-----------------------------------------------------------');



console.log('2. Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.');

function commonEl(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
  }

console.log(commonEl([null, true, 1, 'sdasd'], [true, false, 6, 32, null, 'sdasd']));



console.log('-----------------------------------------------------------');



console.log('3. Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.');

function getRandNum() {
    let lastNumber = null;
    
    return function() {
      let randomNum;
      
     
      do {
        randomNum = Math.floor(Math.random() * 100); 
      } while (randomNum === lastNumber);
      
      lastNumber = randomNum;
      return randomNum;
    };
  }
  
  const random = getRandNum();
  
  console.log(random());
  console.log(random()); 
  console.log(random());
  console.log(random());
  


console.log('-----------------------------------------------------------');



console.log('4. Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:');

function nextElement(arr, element) {
    const index = arr.indexOf(element);
    if (index === -1) return null; 
    return arr[(index + 1) % arr.length];
  }
  

console.log(nextElement([1, 2, 3, 4, 5], 4));


console.log('Уровень 4.8 задачника JavaScript');

console.log('-----------------------------------------------------------');

console.log('1. Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.');

function getRandom1(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandom1([1, 2, 3, 4, 5]));

console.log('-----------------------------------------------------------');


console.log('2. Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.');

function getRandom2(arr, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        let randomIndex = Math.floor(Math.random() * arr.length); 
        result.push(arr[randomIndex]); 
    }
    return result;
}

const myArray2 = [1, 2, 3, 4, 5];
const n2 = 3; 
console.log(getRandom2(myArray2, n2));


console.log('-----------------------------------------------------------');


console.log('3. Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.');

function getRandomElement(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error("Введите непустой массив.");
    }

    let previousIndex = -1;

    return function () {
        let currentIndex;

        do {
            currentIndex = Math.floor(Math.random() * array.length);
        } while (currentIndex === previousIndex);

        previousIndex = currentIndex;
        return array[currentIndex];
    };
}


const getNextRandomElement = getRandomElement([1, 2, 3, 4, 5]);
console.log(getNextRandomElement()); 
console.log(getNextRandomElement()); 
console.log(getNextRandomElement()); 






console.log('-----------------------------------------------------------');



console.log('4. Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.');

function getPrimesInRange(start, end) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

console.log(getPrimesInRange(10, 50));


console.log('-----------------------------------------------------------');



console.log('5. Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвращать их сумму.');


function sumNumbers(...numbers) {
    if (numbers.some(num => typeof num !== 'number')) {
        throw new Error("Все аргументы должны быть числами.");
    }

    return numbers.reduce((sum, current) => sum + current, 0);
}


console.log(sumNumbers(1, 2, 3, 4, 5)); 
console.log(sumNumbers(10,4, 7));   


console.log('-----------------------------------------------------------');



console.log('6. Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.');


function generateR6(N, min, max) {
    const array = [];
    let previousNumber = null;

    for (let i = 0; i < N; i++) {
        let randomNumber;

        do {
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (randomNumber === previousNumber);

        array.push(randomNumber);
        previousNumber = randomNumber;
    }

    return array;
}

console.log(generateR6(10, 1, 5));


console.log('-----------------------------------------------------------');



console.log('7. Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.');

function generateUniqueRandomArray(N, min, max) {
    const range = max - min + 1;
    if (N > range) {
        throw new Error("Невозможно заполнить массив: диапазон меньше, чем количество уникальных чисел.");
    }

    const numbers = new Set();

    while (numbers.size < N) {
        const randomNumber = Math.floor(Math.random() * range) + min;
        numbers.add(randomNumber);
    }

    return Array.from(numbers);
}


console.log(generateUniqueRandomArray(5, 1, 10));

console.log('-----------------------------------------------------------');

console.log('Уровень 4.9 задачника JavaScript');

console.log('1. Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.');

function februar() {
    const today = new Date();
    const currentYear = today.getFullYear();
    let nextLeapYear = currentYear;
    while (!(nextLeapYear % 4 === 0 && (nextLeapYear % 100 !== 0 || nextLeapYear % 400 === 0))) {
        nextLeapYear++;
    }

    const leapDay = new Date(nextLeapYear, 1, 29);
    const timeDifference = leapDay - today;


    if (timeDifference === 0) {
        return 0;
    }


    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}


console.log(februar()); 


console.log('-----------------------------------------------------------');



console.log('2. Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы.');


function getMasslenica() {
    const today = new Date();
    const currentYear = today.getFullYear();

    function getMasslenica(year) {
        const february = 1; 
        const lastDayOfFebruary = new Date(year, february + 1, 0);
        const dayOfWeek = lastDayOfFebruary.getDay(); 

        const offset = dayOfWeek === 0 ? 0 : dayOfWeek;
        return new Date(year, february, lastDayOfFebruary.getDate() - offset);
    }

    const maslenitsaThisYear = getMasslenica(currentYear);
    if (today <= maslenitsaThisYear) {
        return maslenitsaThisYear; 
    }

    return getMasslenica(currentYear + 1); 
}


console.log(getMasslenica().toLocaleDateString()); 


console.log('-----------------------------------------------------------');



console.log('3. Сделайте функцию, которая будет возвращать случайный цвет.');

function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
}

console.log(getRandomColor()); 


console.log('-----------------------------------------------------------');



console.log('4. Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.');

function getCommonDivisors4(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Аргумент должен быть непустым массивом чисел.");
    }
    function getDivisors4(num) {
        const divisors = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisors.push(i);
            }
        }
        return divisors;
    }

     let commonDivisors = getDivisors4(numbers[0]);


    for (let i = 1; i < numbers.length; i++) {
        const currentDivisors = getDivisors4(numbers[i]);
        commonDivisors = commonDivisors.filter(divisor => currentDivisors.includes(divisor));
    }

    return commonDivisors;
}


console.log(getCommonDivisors4([12, 18, 24])); // [1, 2, 3, 6]
console.log(getCommonDivisors4([10, 25, 50])); // [1, 5]



console.log('-----------------------------------------------------------');



console.log('5. Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.');

function getMaxInSubarrays(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Аргумент должен быть непустым двухмерным массивом.");
    }

    return arr.map(subArray => {
        if (!Array.isArray(subArray) || subArray.length === 0) {
            throw new Error("Каждый элемент массива должен быть подмассивом.");
        }
        return Math.max(...subArray);
    });
}

console.log(getMaxInSubarrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); 
console.log(getMaxInSubarrays([[10, 20], [5, 5], [30, 40]]));


console.log('-----------------------------------------------------------');

console.log('Уровень 4.10 задачника JavaScript');

console.log('1. Сделайте функцию, которая параметром будет принимать букву и проверять, это буква кириллицы или латиницы.');

function checkLetterType(letter) {
    if (typeof letter !== 'string' || letter.length !== 1) {
        throw new Error("Аргумент должен быть одиночной буквой.");
    }
    const isLatin = /^[a-zA-Z]$/.test(letter);
    const isCyrillic = /^[а-яА-ЯёЁ]$/.test(letter);

    if (isLatin) {
        return 'Латиница';
    } else if (isCyrillic) {
        return 'Кириллица';
    } else {
        return 'Не буква';
    }
}


console.log(checkLetterType('a')); 
console.log(checkLetterType('я'));
console.log(checkLetterType('1')); 



console.log('-----------------------------------------------------------');



console.log('2. Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке.');


function shuffleArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Аргумент должен быть массивом.");
    }

    const shuffledArray = [...arr];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

const originalArray = [1, 2, 3, 4, 5];
const shuffled = shuffleArray(originalArray);
console.log(shuffled); 
console.log(originalArray); 


console.log('-----------------------------------------------------------');



console.log('3. Дан текст со словами. Запишите все слова этого текста в специальный объект. Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы.');

function groupWordsByFirstLetter(text) {
    if (typeof text !== 'string') {
        throw new Error("Аргумент должен быть строкой.");
    }


    const words = text.split(/\s+/);

    const groupedWords = {};

    words.forEach(word => {
        const firstLetter = word[0].toLowerCase(); 
        if (!groupedWords[firstLetter]) {
            groupedWords[firstLetter] = [];
        }
        groupedWords[firstLetter].push(word);
    });

    return groupedWords;
}

// Пример использования:
const text = "Апельсин банан яблоко абрикос арбуз";
const grouped = groupWordsByFirstLetter(text);
console.log(grouped);

console.log('-----------------------------------------------------------');



console.log('4. Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами.');

function getPrimeDivisors(num) {
    if (num <= 1) {
        throw new Error("Число должно быть больше 1.");
    }

    function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    const primeDivisors = [];

  
    for (let i = 2; i <= num; i++) {
        if (num % i === 0 && isPrime(i)) {
            primeDivisors.push(i);
        }
    }

    return primeDivisors;
}


console.log(getPrimeDivisors(28)); 
console.log(getPrimeDivisors(60)); 


console.log('-----------------------------------------------------------');



console.log('5. Сделайте функцию, которая параметром будет принимать слово и возвращать массив его слогов.');

function splitIntoSyllables(word) {
    if (typeof word !== 'string') {
        throw new Error("Аргумент должен быть строкой.");
    }


    const syllables = word.match(/[аеёиоуыэюяАЕЁИОУЫЭЮЯaeiouy]+[^аеёиоуыэюяАЕЁИОУЫЭЮЯaeiouy]*|[^аеёиоуыэюяАЕЁИОУЫЭЮЯaeiouy]+/g);

    return syllables || [];
}


console.log(splitIntoSyllables("check"));
console.log(splitIntoSyllables("hello"));



console.log('-----------------------------------------------------------');

