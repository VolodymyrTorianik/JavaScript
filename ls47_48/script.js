// * Розділяти всі завдання коментарями і писати що треба робити в завданні.

// 1. Створити 2 кубіка, при кліку на перший: другий повинен змінювати свій колір на рандомний.

console.log('1. Створити 2 кубіка, при кліку на перший: другий повинен змінювати свій колір на рандомний.');

const kub1 = document.querySelector('.kub1');

kub1.onclick = ()=> {

const kub2 = document.querySelector('.kub2');

const r = Math.floor(Math.random()*256);
const g = Math.floor(Math.random()*256);
const b = Math.floor(Math.random()*256);

kub2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};




// 2. Створити текстовий блок, при спробі його скопіювати покажіть користувачу вікно "Текст неможливо скопіювати!!".

console.log('2. Створити текстовий блок, при спробі його скопіювати покажіть користувачу вікно "Текст неможливо скопіювати!!".');

const copypast = document.getElementById('copypast');

copypast.addEventListener('copy', ($event)=> {
    $event.preventDefault();
    alert('Текст неможливо скопіювати!!')
});

// 3. Створити кубік 100х100 який міняє свій колір в залежності від того на яких координатах ви знаходитесь (r - X координата, g - Y координата, b - середнє арифметичне X+Y/2).

console.log('3. Створити кубік 100х100 який міняє свій колір в залежності від того на яких координатах ви знаходитесь (r - X координата, g - Y координата, b - середнє арифметичне X+Y/2).');

const kub3 = document.querySelector('.kub3');
kub3.addEventListener('mousemove', ($event)=> {

    const x = $event.clientX;
    const y = $event.clientY; 

    const r = x % 256; 
    const g = y % 256; 
    const b = Math.floor((x + y) / 2) % 256; 

    kub3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});




// 4. Створіть 3 кубіка один в одному які будуть при кліку виводити щось про себе в консоль

console.log('4. Створіть 3 кубіка один в одному які будуть при кліку виводити щось про себе в консоль');

const kub4 = document.querySelector('.kub4');
const kub5 = document.querySelector('.kub5');
const kub6 = document.querySelector('.kub6');


kub4.onclick = ($event) =>{
    console.log('I am black Kub');
    $event.stopPropagation();
}

kub5.onclick = ($event) =>{
    console.log('I am green Kub');
    $event.stopPropagation();
}

kub6.onclick = ($event) =>{
    console.log('I am red Kub');
    $event.stopPropagation();
}


// 5. Створіть ще 3 кубіка які є один в одному, змініть напрямок виконання івенту, зупиніть виконання івентів на другому івенті (Див. лекцію).

console.log('5. Створіть ще 3 кубіка які є один в одному, змініть напрямок виконання івенту, зупиніть виконання івентів на другому івенті (Див. лекцію).');


const kub7 = document.querySelector('.kub7');
const kub8 = document.querySelector('.kub8');
const kub9 = document.querySelector('.kub9');


kub7.onclick = () =>{
    console.log('I am Yellow Kub');
}

kub8.onclick = ($event) =>{
    $event.stopPropagation();
    console.log('I am Chocolate Kub');

}

kub9.onclick = () =>{
    console.log('I am Darkviolet Kub');
}



// 6. Використайте будь яку форму з домашної про форми (в модулі HTML\CSS), та отримайте дані з неї у вигляді об'єкту, виведіть об'єкт форми в консоль. Відмініть поведінку за замовчуванням для кнопки submit у формі (Див. лекцію). 

console.log('6. Використайте будь яку форму з домашної про форми (в модулі HTML\CSS), та отримайте дані з неї у вигляді об\'єкту, виведіть об\'єкт форми в консоль. Відмініть поведінку за замовчуванням для кнопки submit у формі (Див. лекцію). ');

const myForm = document.querySelector('.formstyle');

myForm.addEventListener('submit', ($event)=>{
    $event.preventDefault();
    const formData = {
        email: myForm.exampleInputEmail.value, 
        password: myForm.exampleInputPassword.value, 
        agree: myForm.exampleCheck.checked, 
        gender: myForm.selectsex.value 
    };

    console.log(formData);    
});



