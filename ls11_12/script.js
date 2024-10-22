// 1. Реалізувати алгоритм: лінійний пошук для наступного масиву ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів']
console.log('----------------Лінійний пошук-------------------------------')
const arrayCity = ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів'];

let city = 'Донецьк';
let act = 0;
console.log('<Лінійний пошук>', arrayCity);
console.log('Пишемо алгоритм, щоб знайти місто', city);
for (let i = 0; i < arrayCity.length; i++) {
    act++;
    if (city === arrayCity[i]) {
        console.log('Знайшлося місто', arrayCity[i], 'під індексом', i, 'за', act, 'дії');
        break;
    }
}


console.log('----------------Бінарний пошук-------------------------------')

// 2. Реалізувати алгоритм: бінарний пошук для наступного масиву [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110

let binarray = [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110];
console.log('<Бінарний пошук>', binarray);
let findetnum = Number(prompt('Уведіть число від 1 до 110'));
let actions = 0;
let start = 0;
let i = 0;
let finish = binarray.length-1;

while (start <= finish) {
    actions++;
    let center = Math.floor((start + finish) / 2);
    if (findetnum=== binarray[center]) {
        console.log ('Алгоритм знайшов те число, яке ви увели');
        break;
    } else if (binarray[center] > findetnum) {
        finish = center - 1;
    } else if (binarray[center] < findetnum) {
        start = center + 1;
    } 

}
console.log('На пошук вашого числа у массиві пішло', actions, 'дій')