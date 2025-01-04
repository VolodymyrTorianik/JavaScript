// 1. Створіть HTML сторінку, яка відображає, скільки разів користувач її відвідував.
// Використовуйте localStorage для збереження кількості відвідувань.

// Результат:
//  На сторінці повинно з’являтися щось на кшталт: "Ви відвідали цю сторінку 5 разів."

console.log('1. Створіть HTML сторінку, яка відображає, скільки разів користувач її відвідував. Використовуйте localStorage для збереження кількості відвідувань.');



let visitCount = localStorage.getItem('visitCount');


visitCount++;
localStorage.setItem('visitCount', visitCount);

document.getElementById('visit-count').innerText = `Ви відвідали цю сторінку ${visitCount} разів.`;



// 2. Реалізуйте просту форму входу (2 prompt), де користувач вводить ім'я та пароль.
// Після входу ім'я користувача зберігається у sessionStorage.
// На іншій вкладці перевіряйте, чи користувач увійшов (при завантаженні сторінки),
// і виводьте повідомлення: "Привіт, [Ім'я користувача]".


console.log('2. Реалізуйте просту форму входу (2 prompt), де користувач вводить ім\'я та пароль.');

        const user = sessionStorage.getItem('user');

        if (user) {
            document.getElementById('greeting').innerText = `Привіт, ${user}!`;
        } else {
            const userName = prompt('Введіть ваше імя:');
            const userPass = prompt('Введіть ваш пароль:');

            if (userName) {
                sessionStorage.setItem('user', userName);
                document.getElementById('greeting').innerText = `Привіт, ${userName}!`;
            } else {
                document.getElementById('greeting').innerText = 'Ви не увійшли.';
            }
        }




// 3. Реалізуйте таймер сесії, який показує, скільки часу користувач провів на сторінці.
// Час початку сесії зберігайте у cookie при оновленні сторінки він має продовжувати відлік.


console.log('3. Реалізуйте таймер сесії, який показує, скільки часу користувач провів на сторінці.');

    function getCookie(user) {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
          const [key, value] = cookie.split('=');
          if (key === user) return value;
        }
        return null;
      }

      function setCookie(user, value, days) {
        const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = `${user}=${value}; expires=${expires}; path=/`;
      }
  

      const sessionStart = getCookie('sessionStart') || Date.now();
      if (!getCookie('sessionStart')) {
        setCookie('sessionStart', sessionStart, 1);
      }
  
  
      function updateTimer() {
        const currentTime = Date.now();
        const elapsedTime = Math.floor((currentTime - sessionStart) / 1000); 
        document.getElementById('timer').textContent = elapsedTime;
      }
  
      updateTimer();
      setInterval(updateTimer, 1000);