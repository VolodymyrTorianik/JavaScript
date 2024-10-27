//1. Реалізувати алгоритм: сортування бульбашкою для наступного масиву [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19]

console.log('------------1. Сортування Бульбашкою-------------');

let BubbleArray = [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19];

for (i = 0; i < BubbleArray.length; i++) {
    
    if (BubbleArray[i] > BubbleArray[i+1]) {
        let temp = BubbleArray[i];
        BubbleArray[i] = BubbleArray [i+1];
        BubbleArray[i+1] = BubbleArray [i];
        BubbleArray[i+1] = temp;
    }
} 

console.log(BubbleArray);


//2. Вивести всі алгоритми цієї лекції і попередньої в функції, викличте функції

console.log('------------2. Вивести всі алгоритми цієї лекції і попередньої в функції-------------');

console.log('------------2.1 Сортування Бульбашкою-------------');

function BubbleSort() {

let array1 = [3, 7, 8, 11, 43, 2, 23, 11, 170, 18, 76, 20, 19];

for (i = 0; i < array1.length; i++) {
    
    if (array1[i] > array1[i+1]) {
        let temp = array1[i];
        array1[i] = array1 [i+1];
        array1[i+1] = array1 [i];
        array1[i+1] = temp;
    } 
    
} 

console.log(array1);

}

BubbleSort()

console.log('------------2.2 Лінійний алгоритм пошуку [33, 21, 12, 34, 45, 67, 42, 1, 4, 5] -------------');

function LineSearch() {
    let n = Number(prompt('Уведіть число для пошуку'));
    let x = 0;
    let arr2 = [33, 21, 12, 34, 45, 67, 42, 1, 4, 5];
    for (i = 0; i < arr2.length; i++) {
        x++;
        if (arr2[i] === n) {
            console.log('Ми знайшли ваше число. Кількість дій: ', x);
            break;
        }
    }
}

LineSearch()

console.log('------------2.3 Бинарный алгоритм пошуку [1, 2, 7, 6, 11, 34, 45, 57, 88, 99, 100] -------------');

function BinarSearch () {
    let array3 = [1, 2, 7, 6, 11, 34, 45, 57, 88, 99, 100];
    let num3 = Number(prompt('Уведіть число для пошуку'));
    let actions = 0;
    let left = 0;
    let right = array3.length-1;

    while (left <= right) {
        actions++;
        let center = Math.floor((left + right) / 2);
        if (num3=== array3[center]) {
            console.log('Ми знайшли ваше число за допомогою бинарного пошуку. Кількість дій:', actions); 
            break;
        } else if (array3[center] > num3) {
            right = center - 1;
        } else if (array3[center] < num3) {
        left = center + 1;
        } 

    }

}

BinarSearch()

//3. Створіть функцію яка виводить в консоль пояснення того що таке hosting

console.log('------------3 Створіть функцію яка виводить в консоль пояснення того що таке hosting -------------');

function AboutHosting() {
    console.log('Hosting - це специфічний механізм, який проходить перед компілятором по всьому коду, Шукає функціі та підіймає їх угору. Це дає змогу використовувати змінні та функції перед тим, як ми оголосили їх.')
}

AboutHosting()

//4. Створіть функцію яка виводить в консоль пояснення що таке scope

console.log('------------4 Створіть функцію яка виводить в консоль пояснення того що таке scope -------------');

function AboutScope() {
    console.log('Scope, або області видимості, це усе, що розміщенно у фігурних душках. Наприклад, змінні const aбо let, оголошені в функції, будуть доступні лише у рамках її облісті видимості.')
}

AboutScope()


//5. Створіть функцію яка виводить в консоль пояснення чим поганий var


console.log('------------5 Створіть функцію яка виводить в консоль пояснення пояснення чим поганий var -------------');

function AboutVar() {
    console.log('Змінні, оголошені за допомогою var, можуть бути доступними і за межами області видимості, що може привести до непередбачуванних результатів виконання коду. До того ж, на етапі хостінгу відбувається підняття угору оголошенних змінних var зі значенням undefined.')
}

AboutVar()