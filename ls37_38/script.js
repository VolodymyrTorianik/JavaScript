// 1. Через функцію конструктор створити об'єкт Car з полями:  name, model, old, price, wheels.   Вивести об'єкт в консоль.

console.log('1. Через функцію конструктор створити об\'єкт Car з полями:  name, model, old, price, wheels.   Вивести об\'єкт в консоль.');

console.log('------------------------------------------------');

function Car(name, model, old, price, wheels) {
    this.name = name, 
    this.model = model, 
    this.old = old, 
    this.price = price, 
    this.wheels = wheels
}

const myCar = new Car ('Mercedes', 'S500', 25, 11500, 'winter');

console.log(myCar);



// 2. Через прототайп створити власні методи масивів: some, every, splice


console.log('2. Через прототайп створити власні методи масивів: some, every, splice');

console.log('---------------Some---------------------------------');


Array.prototype.newSome = function(cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

const arr1 = [2, 3, 4, 5, 6, 7]; 
const value1 = arr1.newSome (digital => digital > 6);

console.log('Результат умови (хоча б одна цифра більше за 6) для массиву', arr1);
console.log(value1);



console.log('---------------Every---------------------------------');

Array.prototype.newEvery = function(cb) {
    for (let i =0; i < this.length; i++) {
        if (!cb(this[i], i, this)) {
            return false;
        }    
    }

    return true;
    
}

const arr2 = [2, 4, 7, 12]; 
const arr3 = [2, 4, 6, 12]; 
const value2 = arr2.newEvery (digital => digital % 2 === 0);
const value3 = arr3.newEvery (digital => digital % 2 === 0);

console.log('Результат умови (щоб усі елменти були парними) для массиву', arr2);
console.log(value2);
console.log('Результат умови (щоб усі елменти були парними) для массиву', arr3);
console.log(value3);


console.log('---------------Splice---------------------------------');


Array.prototype.newSplice = function (start, deleteCount, ...items) {
        const result = [];
        const arrayLength = this.length;
    if (start < 0) {
        start = Math.max(arrayLength + start, 0);
    } else {
        start = Math.min(start, arrayLength);
    }
    
    for (let i = 0; i < deleteCount; i++) {
        result.push(this[start + i]);
    }

    const originalLength = this.length;

    for (let i = start + deleteCount; i < originalLength; i++) {
        this[i - deleteCount] = this[i];
    }

    this.length = originalLength - deleteCount;

    if (items.length > 0) {

        for (let i = this.length - 1; i >= start; i--) {
            this[i + items.length] = this[i];
        }
        for (let i = 0; i < items.length; i++) {
            this[start + i] = items[i];
        }
    }

    return result;
};

const arr4 = [5, 3, 3, 4, 1, 2];
console.log('Маємо массив', arr4);
const value4 = arr4.newSplice(1, 2);
console.log('Видаляємо елементи за допомогою splice', value4);

const value5 = arr4.newSplice(1, 0, null, true);
console.log('Додаємо елементи за допомогою splice', arr4);


// 3. Через функцію конструктор створити об'єкт dog з полями: name, model, year, cost  Вивести об'єкт в консоль.

console.log('3. Через функцію конструктор створити об\'єкт dog з полями: name, model, year, cost  Вивести об\'єкт в консоль.');

console.log('------------------------------------------------');

function Dog (name, model, year, cost) {
    this.name = name,
    this.model = model,
    this.year = year,
    this.cost = cost
}

const myDog = new Dog ('Collie', 'Longhaired', 2020, 3500);

console.log(myDog);



// 4. Через функцію конструктор створити об'єкт Parent, створити мінімум 3 поля, та додати через прототайп поведінку для об'єкту (мінімум 2 методи).


console.log('4. Через функцію конструктор створити об\'єкт Parent, створити мінімум 3 поля, та додати через прототайп поведінку для об\'єкту (мінімум 2 методи).');

function Parent (name, last_name, age, house, car) {
    this.name = name, 
    this.last_name = last_name, 
    this.age = age, 
    this.house = house, 
    this.car = car
}

Parent.prototype.moving = function () {
    console.log(this.name, this.last_name, 'moving to new country');    
}


Parent.prototype.friends = function () {
    console.log(this.name, this.last_name, 'find new friends in new country');    
}

const parentID = new Parent ('Olexander', 'Onyschenko', 58, true, false)

console.log(parentID);

parentID.moving();
parentID.friends();

console.log('------------------------------------------------');


// 5. Створити об'єкт Son, через прототип унаслідувати поведінку від об'єкту Parent та додати власну поведінку (мінімум 2 методи).

console.log('5. Створити об\'єкт Son, через прототип унаслідувати поведінку від об\'єкту Parent та додати власну поведінку (мінімум 2 методи).');

function Son (name, last_name, age, house, car) {
    this.name = name, 
    this.last_name = last_name, 
    this.age = age, 
    this.house = house, 
    this.car = car
}

Son.prototype = Parent.prototype;

Son.prototype.goToScholl = function () {
    console.log(this.name, this.last_name, 'go to new school');    
}

Son.prototype.goToGym = function () {
    console.log(this.name, this.last_name, 'go to new gym');    
}

const sonID = new Son ('Anton', 'Onyschenko', 18, true, false);

console.log(sonID);

sonID.moving();
sonID.friends();
sonID.goToScholl();
sonID.goToGym();



console.log('------------------------------------------------');


// 6. Створити КЛАС People із полями: name, age, isMarried, isChilds, job створити 3 інстанси класу People і вивести їхні поля в консоль.

console.log('6. Створити КЛАС People із полями: name, age, isMarried, isChilds, job створити 3 інстанси класу People і вивести їхні поля в консоль.');

class People  {
    constructor(name, age, isMarried, isChilds, job) {
        this.name = name, 
        this.age = age, 
        this.isMarried = isMarried, 
        this.isChilds = isChilds, 
        this.job = job
    };

    live() {
        console.log(this.name, 'живе у Києві');
    };

    workTime(time) {
        console.log(this.name, 'працює', time, 'годин');
        
    };

    rest() {
        console.log(this.name, 'відпочиває у ресторані');
        
    }

}

const peop1 = new People ('Стас', 32, true, false, 'водій');

console.log(peop1);

peop1.live();
peop1.workTime(10);
peop1.rest();

console.log('------------------------------------------------');


// 7. Створити КЛАС Tiger із полями: name, kind, age, speed, wight, height Додатково створити методи: changeName, addAge, changeSpeed, run  Вивести поля класу в консоль та використати методи.


console.log('7. Створити КЛАС Tiger із полями: name, kind, age, speed, wight, height Додатково створити методи: changeName, addAge, changeSpeed, run  Вивести поля класу в консоль та використати');

class Tiger {
    constructor (name, kind, age, speed, wight, height) {
        this.name = name, 
        this.kind = kind, 
        this.age = age, 
        this.speed = speed, 
        this.wight = wight, 
        this.height = height
    }

    changeName(newName) {
        this.name = newName;
    }

    addAge(newAge) {
        this.age = newAge;
    }

    changeSpeed(newSpeed) {
        this.speed = newSpeed;
    }

    run() {
        console.log(this.name, 'бігає дуже швидко');
        
    } 
}

const tig1 = new Tiger ('Франк', 'бенгальский', 8, 180, 345, 145);


console.log(tig1);

tig1.run();

tig1.changeName('Сімба');
tig1.addAge(12);
tig1.changeSpeed(150);

console.log(tig1);

tig1.run();



console.log('------------------------------------------------');


// 8. Перевірити всі створені об'єкти на те чи вони походять від кожного класу (чи ф-ції конструктора), вивести результат в консоль.


console.log('8. Перевірити всі створені об\'єкти на те чи вони походять від кожного класу (чи ф-ції конструктора), вивести результат в консоль.');

console.log('------------------------------------------------');


console.log(myCar instanceof Car);

console.log(myDog instanceof Dog);

console.log(parentID instanceof Parent);

console.log(sonID instanceof Son);

console.log(sonID instanceof Parent);

console.log(sonID instanceof Dog);

console.log(peop1 instanceof People);

console.log(tig1 instanceof Tiger);
