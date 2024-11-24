console.log('1. Колбек функція з лекції');
//BackEnd//

function clearHouse(isClean, cb) {
    console.log('House Start');    
    setTimeout(()=> {
        const salary = 500;
        if(isClean) {
            cb(null, salary);
        } else {
            cb('Нічого не заробив (((', 0);
        }
    }, 3000);
}

function shop(money, cb) {
    console.log('Shop Start');
    setTimeout(()=> {
        
        const costOfShorts = 100; 
        if(costOfShorts <= money) {
            const rest = money - costOfShorts; 
            cb(null, rest); 
        } else {
           cb('Треба ще десь заробити, бо остався без шортів', money);
                       
        }
    }, 2000);
}


function mac(money, cb) {
    setTimeout(()=> {
        const priceBigMac = 100;
        if(money >= priceBigMac) {
            const restMac = money - priceBigMac;
            cb(null, restMac);
        } else {
            cb('Знову я голодний...', money);
        }
    }, 1000);
}

//FrontEnd//
 
clearHouse(true, (error, salary)=> {
    if (!error) {
        console.log('Ура! Я заробив', salary);
        shop(salary, (errorShop, restOfShop)=> {

            if (!errorShop) {
                console.log('Теперь в мене є шорти та ще залишилась решта', restOfShop);
                mac(restOfShop, (errorMac, restofMac)=> {
                    if(!errorMac) {
                        console.log('Дуже смачний бургер був, у кармані ще залишилось', restofMac);                        
                    } else {
                        console.log(restOfShop, restofMac);
                        
                    }
                });        
            } else {
                console.log(errorShop, restOfShop);
            }
        
        });        
    } else {
        console.log('Чи бувають більші злидні?', error, salary);
        
    }
});
