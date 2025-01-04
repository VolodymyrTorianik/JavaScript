// 3. Створіть HTML сторінку, яка записує дату останнього входу користувача у localStorage.
// При повторному відвідуванні сторінки показуйте дату попереднього входу та оновлюйте її.

console.log('3. Створіть HTML сторінку, яка записує дату останнього входу користувача у localStorage.');

const loginUser = document.getElementById('last-login');
const lastLogin = localStorage.getItem('lastLogin');
const todayDate = new Date().toLocaleString();

if (lastLogin) {
    loginUser.innerText = `Останній раз ви були на цій сторінці: ${lastLogin}`;
} else {
    loginUser.innerText = `Привіт, ви тут уперше!`;
}

localStorage.setItem('lastLogin', todayDate);




// 4. Створіть список завдань (to-do list масив з полями title, date, describe, isDone), який зберігається в localStorage у форматі JSON.
// Створіть фунції які зможуть: додавати, видаляти й відмічати завдання як виконані.

console.log('4.Створіть список завдань (to-do list масив з полями title, date, describe, isDone), який зберігається в localStorage у форматі JSON.');

        let tasks = JSON.parse(localStorage.getItem('toDoList')) || [];

        function renderTasks() {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = '';

            tasks.forEach((task, index) => {
                const taskDiv = document.createElement('div');
                taskDiv.className = `task ${task.isDone ? 'done' : ''}`;
                taskDiv.innerHTML = `
                    <div>
                        <strong>${task.title}</strong> (${task.date})<br>
                        <small>${task.describe}</small>
                    </div>
                    <div>
                        <button onclick="toggleTask(${index})">
                            ${task.isDone ? 'Зняти відмітку' : 'Виконано'}
                        </button>
                        <button onclick="deleteTask(${index})">Видалити</button>
                    </div>
                `;
                taskList.appendChild(taskDiv);
            });

            localStorage.setItem('toDoList', JSON.stringify(tasks));
        }

        function addTask(event) {
            event.preventDefault();
            const title = document.getElementById('title').value;
            const date = document.getElementById('date').value;
            const describe = document.getElementById('describe').value;

            tasks.push({
                title,
                date,
                describe,
                isDone: false
            });

            document.getElementById('taskForm').reset();
            renderTasks();
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            renderTasks();
        }

        function toggleTask(index) {
            tasks[index].isDone = !tasks[index].isDone;
            renderTasks();
        }

        document.getElementById('taskForm').addEventListener('submit', addTask);
        renderTasks();


// 5. Реалізуйте таймер сесії, який показує, скільки часу користувач провів на сторінці.
// Час початку сесії зберігайте у sessionStorage, і при оновленні сторінки він має продовжувати відлік.

console.log('5. Реалізуйте таймер сесії, який показує, скільки часу користувач провів на сторінці.');

let sessionStartTime = sessionStorage.getItem("sessionStartTime");

if (!sessionStartTime) {

    sessionStartTime = Date.now();
    sessionStorage.setItem("sessionStartTime", sessionStartTime);
}

function updateSessionTimer() {
    const currentTime = Date.now();
    const elapsedMilliseconds = currentTime - sessionStartTime;
    

    const seconds = Math.floor((elapsedMilliseconds / 1000) % 60);
    const minutes = Math.floor((elapsedMilliseconds / (1000 * 60)) % 60);
    const hours = Math.floor(elapsedMilliseconds / (1000 * 60 * 60));


    const timerElement = document.getElementById("sessionTimer");
    timerElement.textContent = `Ви на сторінці: ${hours} год. ${minutes} хв. ${seconds} сек.`;
}


setInterval(updateSessionTimer, 1000);


document.body.innerHTML += `<div id="sessionTimer" style="font-size: 20px; margin-top: 20px;"></div>`;
updateSessionTimer();

