// 1. Через функцію конструктор створити об'єкт People з полями:  name, f_name, old, isMarried, hasPossition, children   Вивести об'єкт в консоль.

console.log('1. Через функцію конструктор створити об\'єкт People з полями:  name, f_name, old, isMarried, hasPossition, children   Вивести об\'єкт в консоль');

function People(name, f_name, old, isMarried, hasPossition, children) {
    this.name = name,
    this.f_name = f_name,
    this.old = old,
    this.isMarried = isMarried,
    this.hasPossition = hasPossition,
    this.children = children
};

const p1 = new People('Igor', 'Petrenko', 32, true, 'Web Developer', 1);
const p2 = new People('Anton', 'Sidorenko', 42, false, 'Driver', 3);

console.log(p1);
console.log(p2);

console.log('-----------------------------------------------');

// 2. Через прототайп створити власні методи масивів: filter, find, includes, join, slice 

console.log('2. Через прототайп створити власні методи масивів: filter, find, includes, join, slice ');

Array.prototype.newFilter = function (cb) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
  

  Array.prototype.newFind = function (cb) {
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  };
  

  Array.prototype.newIncludes = function (inform) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === inform) {
        return true;
      }
    }
    return false;
  };
  

  Array.prototype.newJoin = function (x = ',') {
    let result = '';
    for (let i = 0; i < this.length; i++) {
      result += this[i];
      if (i < this.length - 1) {
        result += x;
      }
    }
    return result;
  };
  
 
  Array.prototype.newSlice = function (a = 0, z = this.length) { 
    const arr = [];
    for (let i = a; i < z; i++) {
      arr.push(this[i]);
    }
    return arr;
  };
  
   const arr = [1, 2, 3, 4, 5, 6, 7];
  

 let a1 = arr.newFilter((num) => num > 2);
 let a2 = arr.newFind((num) => num === 21);
 let a3 = arr.newIncludes(22);
 let a4 = arr.newJoin('-');
 let a5 = arr.newSlice(1, 4);


  console.log(a1); 
  console.log(a2); 
  console.log(a3); 
  console.log(a4); 
  console.log(a5);
  



console.log('-----------------------------------------------');


// 3. Через функцію конструктор створити об'єкт Car з полями: name, model, year, isNew, cost, wheels Вивести об'єкт в консоль.

console.log('3. Через функцію конструктор створити об\'єкт Car з полями: name, model, year, isNew, cost, wheels Вивести об\'єкт в консоль.');

function Car(name, model, year, isNew, cost, wheels) {
    this.name = name,
    this.model = model,
    this.year = year,
    this.isNew = isNew,
    this.cost = cost,
    this.wheels = wheels
};

const car1 = new Car('Audi', 'Q8', 2024, true, 124000, 'winter');
const car2 = new Car('Volkswagen', 'Tiguan', 2018, false, 40000, 'summer');

console.log(car1);
console.log(car2);

console.log('-----------------------------------------------');

// 4. Через функцію конструктор створити об'єкт Animal, створити мінімум 3 поля, та додати через прототайп поведінку для об'єкту (мінімум 2 методи).

console.log(' 4. Через функцію конструктор створити об\'єкт Animal, створити мінімум 3 поля, та додати через прототайп поведінку для об\'єкту (мінімум 2 методи).');

function Animal (name, country, color, age) {
    this.name = name,
    this.country = country,
    this.color = color,
    this.age = age
};


Animal.prototype.eat = function () {
    console.log(this.name, ' eating food');
  };

Animal.prototype.owner = function () {
    console.log(this.name, ' have owner');
  };


const myCat = new Animal ('cat', 'Egypt', 'white', 3);

console.log(myCat);

myCat.eat();
myCat.owner();


console.log('-----------------------------------------------');
// 5. Створити об'єкт Dog, через прототип унаслідувати поведінку від об'єкту Animal та додати власну поведінку (мінімум 2 методи).

console.log(' 5. Створити об\'єкт Dog, через прототип унаслідувати поведінку від об\'єкту Animal та додати власну поведінку (мінімум 2 методи).');

function Dog (name, country, color, age) {
    this.name = name,
    this.country = country,
    this.color = color,
    this.age = age
}

Dog.prototype = Animal.prototype;

const myDog = new Dog ('Sembernar', 'UK', 'black', 2);

console.log(myDog);

myDog.eat();
myDog.owner();

