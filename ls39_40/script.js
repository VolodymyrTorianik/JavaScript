// 1. Через клас створити об\'єкт People який всі дані отримує ззовні з полями: name, f_name, old, isMarried, hasPossition, children  Вивести об\'єкт в консоль.

console.log('1. Через клас створити об\'єкт People який всі дані отримує ззовні з полями: name, f_name, old, isMarried, hasPossition, children  Вивести об\'єкт в консоль.');


class People {
    constructor(name, f_name, old, isMarried, hasPosition, children) {
        this.name = name; 
        this.f_name = f_name; 
        this.old = old; 
        this.isMarried = isMarried;
        this.hasPosition = hasPosition; 
        this.children = children; 
    }
}

const user001 = new People (
    "Serhiy",
    "Sidorenko",
    28,
    false,
    "JS Developer",
    true
);

console.log(user001);

console.log('--------------------------------------');

// 2. Через клас shortWork створити власні методи масивів всередині класу: filter, find, includes, join, slice

console.log('// 2. Через клас shortWork створити власні методи масивів всередині класу: filter, find, includes, join, slice');

class shortWork {
    constructor(array) {
        this.array = array; 
    }

    filter(callback) {
        const result = [];
        for (let i = 0; i < this.array.length; i++) {
            if (callback(this.array[i], i, this.array)) {
                result.push(this.array[i]);
            }
        }
        return result;
    }

    find(callback) {
        for (let i = 0; i < this.array.length; i++) {
            if (callback(this.array[i], i, this.array)) {
                return this.array[i];
            }
        }
        return undefined;
    }

    includes(value) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === value) {
                return true;
            }
        }
        return false;
    }

    join(separator = ',') {
        let result = '';
        for (let i = 0; i < this.array.length; i++) {
            result += this.array[i];
            if (i < this.array.length - 1) {
                result += separator;
            }
        }
        return result;
    }

    slice(start = 0, end = this.array.length) {
        const result = [];
        start = start < 0 ? this.array.length + start : start;
        end = end < 0 ? this.array.length + end : end;

        for (let i = start; i < end && i < this.array.length; i++) {
            result.push(this.array[i]);
        }
        return result;
    }
}

const myArray = new shortWork([1, 2, 3, 4, 5]);

console.log(myArray.filter((x) => x > 2));
console.log(myArray.find((x) => x === 3)); 
console.log(myArray.includes(4)); 
console.log(myArray.join('-')); 
console.log(myArray.slice(1, 4)); 

console.log('--------------------------------------');



// 3. Через клас створити об\'єкт Car який всі дані отримує ззовні з полями:  name, model, year, isNew, cost, wheels  Вивести об\'єкт в консоль.

console.log('3. Через клас створити об\'єкт Car який всі дані отримує ззовні  з полями:  name, model, year, isNew, cost, wheels  Вивести об\'єкт в консоль.');

class Car {
    constructor (name, model, year, isNew, cost, wheels) {
        this.name = name; 
        this.model = model; 
        this.year = year; 
        this.isNew = isNew; 
        this.cost = cost; 
        this.wheels = wheels;
    };
};

const myCar = new Car (
    "Skoda", 
    "Octavia", 
    2017, 
    false, 
    18500, 
    "winter",
);

console.log(myCar);


// 4. Через клас створити об\'єкт Animal який отримує дані ззвоні, створити мінімум 3 поля, та додати через прототайп поведінку для об\'єкту (мінімум 2 методи).

console.log('--------------------------------------');


console.log('4. Через клас створити об\'єкт Animal який отримує дані ззвоні, створити мінімум 3 поля, та додати через прототайп поведінку для об\'єкту (мінімум 2 методи).');

class Animal {
    constructor(type, name, age, breed) {
        this.type = type, 
        this.name = name,
        this.age = age,
        this.breed = breed
    };
};

Animal.prototype.go = function () {
    console.log(this.type, this.name, 'go to new owner');    
};

Animal.prototype.eat = function () {
    console.log(this.breed, this.name, 'eating meat');    
};

const myCat = new Animal (
    'Cat', 
    'Simba', 
    8, 
    'Siam'
);

console.log(myCat);

myCat.go();
myCat.eat();

console.log('--------------------------------------');


// 5. Створити клас Dog, через прототип унаслідувати поведінку від класу Animal та додати власну поведінку (мінімум 2 методи).

console.log('5. Створити клас Dog, через прототип унаслідувати поведінку від класу Animal та додати власну поведінку (мінімум 2 методи).');

class Dog extends Animal {
    color;
    constructor(type, name, age, breed, color) {
        super(type, name, age, breed);
        this.color = color; 
    }
}

Dog.prototype.live = function () {
    console.log(this.breed, this.name, 'live in home');    
};

Dog.prototype.guards = function () {
    console.log(this.breed, this.name, 'guards the house');    
};


const myDog = new Dog (
    'Dog', 
    'Rex', 
    4, 
    'Collie', 
    'White'   
)

console.log(myDog);


myDog.go();
myDog.eat();
myDog.live();
myDog.guards();


console.log('--------------------------------------');


// 6. Створити клас Poli Який в консоль буде виводити короткий опис того що таке поліморфізм.

console.log('6. Створити клас Poli Який в консоль буде виводити короткий опис того що таке поліморфізм.');


class Poli {
    describe() {
      console.log("Поліморфізм — це здатність об'єктів різних класів реагувати на однакові методи по-різному. Це дозволяє писати більш гнучкий та масштабований код.");
    }
  }
  
  const poli = new Poli();
  poli.describe(); 
  

  console.log('--------------------------------------');

// 7. Привести приклад поліморфізму.

console.log('7. Привести приклад поліморфізму.');


class AnimalPoli {
    voice() {
      console.log("Animal make voice");
    }
  }
  
  class Tiger extends AnimalPoli {
    voice() {
      console.log("Tiger roars");
    }
  }
  
  class Cow extends AnimalPoli {
    voice() {
      console.log("Cow make Muuu");
    }
  }
  
  const animals = [new AnimalPoli(), new Tiger(), new Cow()];
  animals.forEach(animal => animal.voice());


  console.log('--------------------------------------');


// 8. Створити клас Inc Який в консоль буде виводити короткий опис того що таке інкапсуляція.

console.log('8. Створити клас Inc Який в консоль буде виводити короткий опис того що таке інкапсуляція.');

class Inc {
    describe() {
      console.log(
        "Інкапсуляція — це концепція ООП, яка дозволяє надавати доступ лише до тих даних і методів, які необхідні. "
      );
    }
  }

  const inc = new Inc();
  inc.describe(); 
  

  console.log('--------------------------------------');

// 9. Створити клас калькурятор на геттерах і сеттерах з діями *, /, +, -, вираховувати степінь, факторіал, корінь  Клас повинен містити поле date яке буде обновляти конкретну дату і час використання калькулятора.

console.log('9. Створити клас калькурятор на геттерах і сеттерах з діями *, /, +, -, вираховувати степінь, факторіал, корінь  Клас повинен містити поле date яке буде обновляти конкретну дату і час використання калькулятора.');


class Calculator {
    constructor() {
      this._date = new Date(); 
    }
  
  
    get date() {
      return this._date;
    }
  

    set date(newDate) {      
        this._date = newDate;
    }
  

    add(a, b) {
      this.updateDate();
      return a + b;
    }
  

    subtract(a, b) {
      this.updateDate();
      return a - b;
    }
  

    multiply(a, b) {
      this.updateDate();
      return a * b;
    }
  
 
    divide(a, b) {
      this.updateDate();
      return a / b;
    }
  

    power(a, b) {
      this.updateDate();
      return Math.pow(a, b);
    }
  
    factorial(n) {
      this.updateDate();
      if (n < 0) {
        console.log("Помилка: факторіал для від'ємних чисел не існує.");
        return null;
      }
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  
    squareRoot(a) {
      this.updateDate();
      return Math.sqrt(a);
    }
  
    updateDate() {
      this._date = new Date();
    }
  }
  
 
  const calc = new Calculator();
  
  console.log(calc.add(5, 3));         
  console.log(calc.subtract(10, 4));   
  console.log(calc.multiply(2, 3));    
  console.log(calc.divide(10, 2));     
  console.log(calc.power(2, 3));      
  console.log(calc.factorial(5));      
  console.log(calc.squareRoot(16));   
  
  console.log("Дата та час останнього використання калькулятора:", calc.date);
  
  calc.date = new Date("2025-01-06T12:00:00");  
  console.log("Нова дата:", calc.date);  
  