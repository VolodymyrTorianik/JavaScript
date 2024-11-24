console.log('2.Колбек функция за логікою: writeProgram => buyKeyboard => visitCinema');


//Backend

function writeProgram(programDone, cb) {
    console.log('Починаю писати программу');
    const incom = 1000;
   setTimeout(()=>{
    if (programDone) {
        cb(null, incom)
    } else {
        cb('Треба більше вчити JS - грошей не заробив', 0)
    }
    }, 3000);   
}

function buyKeyboard(money, cb) {
    console.log('Іду до магазину за новою клавіатурою');
    setTimeout(() => {
        const keyboardPrice = 340;
        if (money >= keyboardPrice) {
            const rest = money - keyboardPrice;
            cb(null, rest);
        } else {
            cb('Щось замало грошей для нової клавіатури, в мене лише', money);
        }
    }, 2000);
}

function visitCinema (money, cb) {
    console.log('Збираюся йти до кінотеатру');
    setTimeout(() => {
        const cinemaPrice = 200;
        if (money >= cinemaPrice) {
            const restCinema = money - cinemaPrice;
            cb(null, restCinema);
        } else {
            cb('На поп-корн хватає грошей, але на квиток до кіно - ні, в мене лише', money);
        }
    }, 1000);
}



//Frontend

writeProgram(true, (error, incom)=> {
    if(!error) {
        console.log('Перші гроши за написану программу!!!!', incom);
        buyKeyboard(incom, (errorKeybord, restKeybord)=> {
            if(!errorKeybord) {
                console.log('Нарешті купив клавіатуру, та ще й залишилось', restKeybord);
                visitCinema(restKeybord, (errorCinema, restCinema)=> {
                    if(!errorCinema) {
                        console.log('Гарний фільм у 3D! Дуже люблю ходити у кінотеатр! Ще лишилося в кишені', restCinema);                        
                    } else {
                        console.log(errorCinema, restCinema);                       
                    }
                });
            } else {
                console.log(errorKeybord, restKeybord);
                
            }
        });
    }
})
