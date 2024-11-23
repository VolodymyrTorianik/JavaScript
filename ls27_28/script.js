console.log('----------------Рекурсія-------------');

const ar1 = [3, 4, 5, 'num', false, true, 3];
console.log('Маємо массив', ar1);
console.log('-----------------------------');
console.log('Ітеруємо за допомогою рекурсії:');
function rec1(ar1, i = 0) {
    if (ar1.length > i) {
        console.log(ar1[i]);
        rec1(ar1, ++i);
    }

}
rec1(ar1);
console.log('Використання функції ще раз для іншого массиву:');
rec1([3, 3, 4, 12, 12]);

console.log('----------------Реверсивна логіка-------------');

const ar2 = [true, 7, 2,  3, null, 6];
console.log('Маємо массив', ar2);
console.log('Ітеруємо за допомогою Реверсивної логіки:');
function rec2(ar2, i = 0) {
    if (ar2.length <= i) return;

    console.log(ar2[i]);
    rec2(ar2, ++i);
}

rec2(ar2);

console.log('---------------Замикання-------------');
console.log('---------------Приклад з VAR-------------');

function stepper () {
    var num = 0;

    function dec() {
        num++;
    }

    function inc()  {
        num--;
    }

    function getNum() {
        return num;
    }

    return {
        dec : dec,
        inc : inc,
        getNum : getNum   
    };

}

let ObjStepper = stepper();

console.log(ObjStepper);

ObjStepper.dec();

console.log(ObjStepper.getNum());

console.log('---------------Колбеки-------------');


function clearHouse(isClean, cb) {
    if (isClean) {
        cb(500);
    } else {
        cb('Tреба прибрати будинок, щоб отримати гроші!!!!');
    }
}

function shopTop(money, cb) {
    const priceGoods = 50;
    if (money >= priceGoods) {
        const rest = money - priceGoods;
        cb(rest);
    } else {
        cb('Треба більше грошей!!!!')
    }

}

function mcDonalds(money, cb) {
    const priceBigMac = 100;
    if (money >= priceBigMac) {
        const rest = money - priceBigMac;
        cb(rest);
    } else {
        cb('Хочешь їсти, треба більше працювати!!!!')
    }
}

clearHouse(true, (resp)=> {
    if (typeof resp === 'number') {
        console.log('Дякую за грошенята!!!');
        shopTop(resp, (rest)=> {
            if (typeof rest ==='number') {
                console.log('Я нарешті купив те, чого так хотів, та ще залишилося здачі', rest);
                mcDonalds(rest, (restBigMac)=>{
                    if (typeof restBigMac ==='number') {
                        console.log('Ням-ням, дуже смачно! А ще й залишилось гривень', restBigMac);                        
                    } else {
                        console.log('Я все ще голодний і це мене дратує.');
                        
                    }
                });
            } else {
                console.log('На жаль, я не зміг нічого купити...');
                
            }
        });        
    } else {
        console.log('Охохох... Знову не повезло з грошимами :(');
        
    }

});