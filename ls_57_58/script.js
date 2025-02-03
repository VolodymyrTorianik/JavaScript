//5. Візьміть будь яку лекцію по ООП, додайте застосування 



class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Мене звати ${this.name}, мені ${this.age} років.`);
    }
}

const per1 = new Person("Олександр", 30);
const per2 = new Person("Ігор", 25);


 
// call, 


personIntro = function(city, country) {
    console.log(`Мене звати ${this.name}, мені ${this.age} років. Я живу в ${city}, ${country}.`);
};

personIntro.call(per1, "Київ", "Україна");
personIntro.call(per2, "Львів", "Україна");


// apply, 

personIntro.apply(per1, ["Київ", "Україна"]);
personIntro.apply(per2, ["Львів", "Україна"]);

// bind

const bindFunc = personIntro.bind(per1, "Одеса", "Україна");

bindFunc();