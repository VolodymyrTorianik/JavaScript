// Приведіть 10 самостійних прикладів з копіюванням масивів/обєктів (5 масивів (2 багаторівневе), 5 об'єктів (2 багаторівневе))

console.log('Приведіть 10 самостійних прикладів з копіюванням масивів/обєктів (5 масивів (2 багаторівневе), 5 об\єктів (2 багаторівневе))');


console.log('-------------------------5 прикладів копіювання масивів');

let array1 = [3, 6, 67, null, true, 'a'];
let array2 = [5, 3, 56];

console.log('1. Копіюємо массиви');

let a1 = [...array1, ...array2];

console.log('Результат', a1);

console.log('------------------------------------------------------------------------');

console.log('2. Копіюємо массиви');

let array3 = [4, 3, 'sdfs']; 
let array4 = [...array3, null, true];


console.log('Результат', array4);

console.log('------------------------------------------------------------------------');

console.log('3. Копіюємо массиви');

let array5 = [4534, null, '3']; 
let array6 = [...array5, 34, 343];


console.log('Результат', array6);


console.log('------------------------------------------------------------------------');

console.log('4. Копіюємо массиви');

let array7 = [1, 4, [34, null, [45, 43, true]], 'asx']; 
let [d1, d2, [d3, d4, [d5, d6, d7]], d8] = array7;


console.log('Результат', d1, d2, d3, d4, d5, d6, d7, d8);


console.log('------------------------------------------------------------------------');

console.log('5. Копіюємо массиви');

let array8 = [77, 4, [true, null], 'ffff']; 
let [x1, x2, [x3, x4], x5] = array8;


console.log('Результат', x1, x2, x3, x4, x5);


console.log('-------------------------5 прикладів копіювання об\єктів');


console.log('1. Копіюємо об\єкти');

let ob1original = {a: 232, b: 'siv', c: null}; 
let ob1copy = { ...ob1original};


console.log('Результат', ob1copy);


console.log('------------------------------------------------------------------------');

console.log('2. Копіюємо об\єкти');

let ob2original = {a: 100, b: true, c: 'work'}; 
let ob2copy = { ...ob2original, c: null, d: 'Igor'};

console.log('Результат', ob2copy);


console.log('------------------------------------------------------------------------');

console.log('3. Копіюємо об\єкти');

const ob3original = { a: true, b: 100};
const ob3copy = { ...ob3original};

ob3copy.a = false;

console.log('Результат до зміни', ob3original);
console.log('Результат після зміни', ob3copy);


console.log('------------------------------------------------------------------------');

console.log('4. Копіюємо об\єкти');

const ob4original = { a: 'Serhiy', b: 28, c: null, d: { b: 2, c: 3 }};
const ob4copy = { ...ob4original};

console.log('Результат', ob4copy);



console.log('------------------------------------------------------------------------');

console.log('5. Копіюємо об\єкти');

const ob5original = { 
    a: 'Vlad', 
    b: 34, 
    c: true, 
    d: { b: 22, c: 123 } 
};

const { a: w1, b: w2, c: w3, d: { s1 = 'u1', s2 = 'u2' } } = ob5original;

console.log(s1, s2, w1);




console.log('------------------------------------------------------------------------');


// Повторіть 14 та 15 домашні завдання (ті які стосуються функціонального програмування), та використовуйте Rest/Spread оператори, деструктиризацію

console.log('Повторіть 14 та 15 домашні завдання (ті які стосуються функціонального програмування), та використовуйте Rest/Spread оператори, деструктиризацію');

console.log('------------------------------------------------------------------------');
console.log('1.Колбек функция за логікою: soldHouse => openCafe => travel');


// Backend

function soldHouse(soldOut, cb) {
    if (soldOut) {
        cb(null, 1000000); 
    } else {
        cb('Щоб були гроші, треба продати будинок!!!!', null);
    }
}

function openCafe(money, cb) {
    const startingCapital = 700000;
    if (money >= startingCapital) {
        const rest = money - startingCapital;
        cb(null, rest); 
    } else {
        cb('Треба більше грошей!!!!', null);
    }
}

function travel(money, cb) {
    const tourCost = 10000;
    if (money >= tourCost) {
        const rest = money - tourCost;
        cb(null, rest); 
    } else {
        cb('Недостатньо грошей для відпочинку', null);
    }
}

// Frontend

soldHouse(true, (...resp) => {
    const [error, money] = resp;
    if (!error) {
        console.log('Ура, в мене є гроші:', money);

        openCafe(money, (...respCafe) => {
            const [errorCafe, restCafe] = respCafe;
            if (!errorCafe) {
                console.log('Я відкрив власну справу! Залишилось грошей:', restCafe);

                travel(restCafe, (...respTravel) => {
                    const [errorTravel, restTravel] = respTravel;
                    if (!errorTravel) {
                        console.log('Гарно відпочив у Турції! Залишилось:', restTravel);
                    } else {
                        console.log('Хочу на відпочинок, де мої гарячі тури???');
                    }
                });
            } else {
                console.log('Я дуже засмучений, нічого не вийшло:', errorCafe);
            }
        });
    } else {
        console.log('Коли вже мені пощастить??? :(', error);
    }
});



console.log('------------------------------------------------------------------------');



console.log('2.Колбек функция за логікою: makeWork => buyCar => goToRestoran');

//Backend

function makeWork(workComplit, cb) {
    console.log('I find job and work hard');
    const incom = 5000000;
    setTimeout(() => {
    workComplit ? cb(null, incom) : cb('I need more money', 0);
    }, 3000);
}

function buyCar(money, cb) {
    console.log('Go to car dealer');
    setTimeout(() => {
    const carPrice = 340000;
     money >= carPrice ? cb(null, money - carPrice) : cb('Not enough money', money);
    }, 2000);
}

function goToRestaurant(money, cb) {
    console.log('I want to celebrate the purchase of a car in a restaurant');
    setTimeout(() => {
    const menuPrice = 2000;
    money >= menuPrice ? cb(null, money - menuPrice) : cb('I have a car, but I don\'t have money for a restaurant.', money);
    }, 1000);
}

//Frontend

makeWork(true, (...workResp) => {
    const [error, incom] = workResp;

    if (!error) {
        console.log('I have money for work:', incom);

        buyCar(incom, (...carResp) => {
            const [errorCar, restCar] = carResp;

            if (!errorCar) {
                console.log('Hooray! I bought a new car! Money left:', restCar);

                goToRestaurant(restCar, (...restResp) => {
                    const [errorRest, restRestaurant] = restResp;

                    if (!errorRest) {
                        console.log('After the restaurant, I had some money left:', restRestaurant);
                    } else {
                        console.log('Restaurant error:', errorRest, 'Money left:', restRestaurant);
                    }
                });
            } else {
                console.log('Car purchase failed:', errorCar, 'Money left:', restCar);
            }
        });
    } else {
        console.log('Work failed:', error);
    }
});




