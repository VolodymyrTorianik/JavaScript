// - Перепишіть код по колбекам (лекція де було clearHouse) використовуючи функції генератори


function* clearHouse(isClean) {
    if (isClean) {
        yield 500;
    } else {
        throw new Error('Tреба прибрати будинок, щоб отримати гроші!!!!');
    }
}

function* shopTop(money) {
    const priceGoods = 50;
    if (money >= priceGoods) {
        yield money - priceGoods;
    } else {
        throw new Error('Треба більше грошей!!!!');
    }
}

function* mcDonalds(money) {
    const priceBigMac = 100;
    if (money >= priceBigMac) {
        yield money - priceBigMac;
    } else {
        throw new Error('Хочешь їсти, треба більше працювати!!!!');
    }
}

function exeGen() {
    try {
        const houseIt = clearHouse(true);
        const money = houseIt.next().value;
        console.log('Дякую за грошенята!!!');



        const shopIt = shopTop(money);
        const rest = shopIt.next().value;
        
        console.log('Я нарешті купив те, чого так хотів, та ще залишилося здачі', rest);


        const mcdacIt = mcDonalds(rest);
        const restBigMac = mcdacIt.next().value;
        
        console.log('Ням-ням, дуже смачно! А ще й залишилось гривень', restBigMac);
    } catch (error) {
        
        console.log(error.message);
    }
}

exeGen();



console.log('- Перепишіть код по колбекам (лекція де було clearHouse) використовуючи функції генератори')

// - Напишіть регулярний вираз (Цифри від 1 до 5, літери від A до F великі і малі і довжина рядка не більше 9 символів)
//   та через input валідуйте його (результат виводьте на екран)

console.log('- Напишіть регулярний вираз (Цифри від 1 до 5, літери від A до F великі і малі і довжина рядка не більше 9 символів та через input валідуйте його (результат виводьте на екран)')

const regex = /^[1-5A-Fa-f]{1,9}$/;

document.getElementById('inputField').addEventListener('input', function() {
    const inputValue = this.value;
    const isValid = regex.test(inputValue);
    document.getElementById('result').textContent = isValid ? 'Валідний input' : 'Невалідний input';
});
