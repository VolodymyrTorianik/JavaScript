// * Розділяти всі завдання коментарями і писати що треба робити в завданні.


console.log('---------------------------------------------------------');
console.log('1. Опирайтесь на код лекцій про колбеки. 2. Промисифікуйте функції. 3. Викликайте ланцюжок виклку асинхронних функцій через Promise.');

//Back


function clearHouse(isClean) {
    return new Promise ((resolve, reject)=>{
        console.log('house start');
        setTimeout(()=> {
        const salary = 500;    
        if (isClean) {
            resolve(salary);
        } else {
            reject('Tреба прибрати будинок, щоб отримати гроші!!!!');
        }
    }, 3000);  
    });
}

function shopTop(money) {

    return new Promise((resolve, reject)=>{
    console.log('shop start');
    setTimeout(()=> {
    const priceGoods = 50;
    if (money >= priceGoods) {
        const rest = money - priceGoods;
        resolve(rest);
    } else {
        reject('Треба більше грошей!!!!');
    }
}, 2000)
})  
}

function mcDonalds(money) {
    return new Promise ((resolve, reject)=>{
    console.log('mac start');
    setTimeout(()=> {
    const priceBigMac = 100;
    if (money >= priceBigMac) {
        const rest = money - priceBigMac;
        resolve(rest);
    } else {
        reject('Хочешь їсти, треба більше працювати!!!!')
    }
    }, 1000) 
})  
}

//Front


clearHouse(true)
    .then(reward => {
        console.log(reward, 'reward house');         
        return shopTop(reward)
    }).then (rest=> {
        console.log(rest, 'rest shop');
        return mcDonalds(rest)
    }).then(rest => {
        console.log(rest, 'rest mac');
        
    }).catch(error => {
        console.log(error);
        
    }).finally(()=> {
        console.log('finally');
        
    })




// 4.  Викликайте ланцюжок виклку асинхронних функцій через async/await.

console.log('4.  Викликайте ланцюжок виклку асинхронних функцій через async/await.');


async function handleCode() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Отримуємо якісь данні');
      }, 1000);
    });
  }
  
  async function processCode(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }
  
  async function AsyncAwaitResult() {
    try {
      const data = await handleCode();
      const result = await processCode(data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  
  AsyncAwaitResult();
  


// 5. Покажіть приклади використання Promise.all, Promise.allSetlled, Promise.race.

console.log('5. Покажіть приклади використання Promise.all, Promise.allSetlled, Promise.race.');


// Promise.all

const promise1 = new Promise((resolve) => 
    setTimeout(() => {
        resolve('First')
    }, 4000));

const promise2 = new Promise((resolve) => 
    setTimeout(() => {
        resolve('Second')
    }, 5000));


Promise.all([promise1, promise2])
  .then(results => {
    console.log('All promises resolved:', results)
    })
  .catch(error => {
    console.log('Error:', error)
    });

// Promise.allSettled

const promise3 = new Promise((resolve) => 
    setTimeout(() => {
        resolve('Third')
    }, 6000));
const promise4 = new Promise((_, reject) => 
    setTimeout(() => {
        reject('Fourth error')
    }, 7000));

Promise.allSettled([promise3, promise4])
  .then(results => console.log('All promises settled:', results));

// Promise.race

const promise5 = new Promise((resolve) => 
    setTimeout(() => {
        resolve('Race 1')
    }, 8000));
const promise6 = new Promise((resolve) => 
    setTimeout(() => {
        resolve('Race 2')
    }, 9000));

Promise.race([promise5, promise6])
  .then(result => console.log('Race winner:', result))
  .catch(error => console.log('Race error:', error));
