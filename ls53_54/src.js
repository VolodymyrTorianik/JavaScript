// * Розділяти всі завдання коментарями і писати що треба робити в завданні.

// 1. Створіть функцію, яка виводить текст "Hello, World!" в консоль з затримкою у 3 секунди за допомогою setTimeout.
//   Опишіть в console.info, як функція виконується асинхронно.

console.log('1. Створіть функцію, яка виводить текст "Hello, World!" в консоль з затримкою у 3 секунди за допомогою setTimeout. Опишіть в console.info, як функція виконується асинхронно.');

console.info('Ця функція виконуєеться ассинхронно. Ми використовуємо setTimeout, щоб затримати виконання функції на 3 секунди.')

function HelloWorld() {
    console.log('start function HelloWorld');
    
    setTimeout(()=>{
        console.log('Hello, world!');        
    }, 3000)
}

HelloWorld()

// 2. Створіть промисіфіковані функції, і функцію яка виконує кілька запитів до різних промисифікованих функцій за допомогою
//    - Promise.all
//    - Promise.allSettled
//    - Promice.race
//    - Promice.any
console.log('--------------------------------------------------');

console.log('2. Створіть промисіфіковані функції, і функцію яка виконує кілька запитів до різних промисифікованих функцій за допомогою: Promise.all, Promise.allSettled, Promice.race, Promice.any, Promice.any');

// Промисіфіковані функції
function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Дані з джерела 1');
        }, 1000); 
    });
}

function func2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Помилка в джерелі 2');
        }, 2000); 
    });
}

function func3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Дані з джерела 3');
        }, 1500); 
    });
}

// Promise.all

function usePromiseAll() {
    console.log('Використовуємо Promise.all...');
    Promise.all([func1(), func2(), func3()])
        .then(results => {
            console.log('Promise.all - Успіх:', results);
        })
        .catch(error => {
            console.log('Promise.all - Помилка:', error);
        });
}

// Promise.allSettled
function usePromiseAllSettled() {
    console.log('Використовуємо Promise.allSettled...');
    Promise.allSettled([func1(), func2(), func3()])
        .then(results => {
            console.log('Promise.allSettled - Результати:', results);
        });
}

// Promise.race

function usePromiseRace() {
    console.log('Використовуємо Promise.race...');
    Promise.race([func1(), func2(), func3()])
        .then(result => {
            console.log('Promise.race - Перший успіх:', result);
        })
        .catch(error => {
            console.log('Promise.race - Перша помилка:', error);
        });
}

// Promise.any
function usePromiseAny() {
    console.log('Використовуємо Promise.any...');
    Promise.any([func1(), func2(), func3()])
        .then(result => {
            console.log('Promise.any - Перший успішний результат:', result);
        })
        .catch(error => {
            console.log('Promise.any - Усі проміси не виконано:', error);
        });
}


usePromiseAll();
usePromiseAllSettled();
usePromiseRace();
usePromiseAny();

console.log('--------------------------------------------------');

// 3. Використовуючи асинхронний код, напишіть програму, 
//    яка виконує певну асинхронну операцію (наприклад, затримка за допомогою setTimeout) декілька разів у циклі.
//    Покажіть, як код виконується асинхронно та управляється з використанням:
//    - async/await
//    - Promise

console.log('3. Використовуючи асинхронний код, напишіть програму, яка виконує певну асинхронну операцію (наприклад, затримка за допомогою setTimeout) декілька разів у циклі. Покажіть, як код виконується асинхронно та управляється з використанням: - async/await,   - Promise');

console.log('-----------------async/await---------------------------------');


function delay(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds)
    });
}

async function asyncAwaitf() {
    console.log('Починаємо виконання коду...');

    for (let i = 1; i <= 5; i++) {
        console.log(`Початок`);
        await delay(500); 
        console.log(`Завершено`);
    }

    console.log('Виконання завершено');
}

asyncAwaitf();

console.log('------------------Promise--------------------------------');

function zatrymka(sec) {
    return new Promise(resolve => {
        setTimeout(resolve, sec)
    });
}


function promiseVariant() {
    console.log('Починаємо виконання з використанням Promise...');

    let a1 = Promise.resolve(); 

    for (let i = 1; i <= 5; i++) {
        a1 = a1
            .then(() => {
                console.log(`Початок циклю з Promise`);
                return delay(2000); 
            })
            .then(() => {
                console.log(`Кінець циклу з Promise`);
            });
    }

    a1.then(() => {
        console.log('Виконання завершено (Promise).');
    });
}

promiseVariant();




// 4. Створіть анімацію об'єкта на веб-сторінці, використовуючи тільки CSS для анімації (наприклад, @keyframes).
//    Потім використайте JavaScript для асинхронного запуску анімації, наприклад, при кліку на кнопку.

console.log('Четверте завдання виконав у окремому файлику animation.html');
