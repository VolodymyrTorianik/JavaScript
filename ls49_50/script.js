// * Розділяти всі завдання коментарями і писати що треба робити в завданні.

// 1. Створити промпт при заповненні якого вас перенаправляє на сайт який був введений в промпті.

console.log('1. Створити промпт при заповненні якого вас перенаправляє на сайт який був введений в промпті.');

            const userInput = prompt('Введіть URL сайту у форматі https://example.com:');
            if (userInput) {

                    const url = new URL(userInput);
                    window.location.href = url.href;
 
            }


// 2. Створити функцію яка буде показувати на екрані геолокацію та url шлях сайту.

console.log('2. Створити функцію яка буде показувати на екрані геолокацію та url шлях сайту.');

function showGeolocationAndUrl() {

    const currentUrl = window.location.href;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            document.getElementById('location').innerHTML = `Ваша геолокація: Широта: ${lat}, Довгота: ${lon}`;
            document.getElementById('url').innerHTML = `Поточний URL: ${currentUrl}`;
        });
    } 
}

showGeolocationAndUrl();

// 3. Створити стрім із мікро і відео (Див. лекцію).

console.log('3. Створити стрім із мікро і відео (Див. лекцію).');

const vid = document.getElementById('vid');
window.navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(data=>{
    console.log('data');
    vid.srcObject = data;
    vid.play();    
})
