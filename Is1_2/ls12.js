var a = 1
var b = 145
var c = 'Натисніть ОК'
var d = 'Підвердіть або Скасуйте'
var e = 'Уведіть довільный текст'

let result = 'Code work good!'
let firsname = 'Ігор'
let age = 32
let question ='Вам є 18 років?'
let phone = 380931233432

const studentName = 'Denilsen'
const studentID = 5
const studentAge = 19
const studentAdress = 'Enter Your Adress'
const information = 'Successful code completion!'

console.log(a)
document.write(b)
document.write('<hr>')
alert(c)
confirm(d)
prompt(e)


confirm(question)
document.write(firsname)
document.write('<hr>')
document.write(age)
document.write('<hr>')
document.write(phone)
console.log(result)


document.write('<hr>')
prompt(studentAdress)
document.write('<b>Name:</b> ', studentName)
document.write('<hr>')
document.write('<b>ID:</b> ', studentID)
document.write('<hr>')
document.write('<b>Age:</b> ', studentAge)
document.write('<hr>')
console.log(information)

document.write('<hr>')
document.write('<br>')
document.write('<h3>JavaScript пропонує нам три варианта оголошення змінних: <b>var, let та const</b>.</h3>')
document.write('<br>')
document.write('<b>Var</b> - один із трьох способів оголошення змінних. При необхідності його можно перевизначити. На данний момент вважається застарілим способом оголошення змінних, тому у більшості випадків сьогонді використовуються let або const.')
document.write('<br>')
document.write('<b>Let</b> - другий варіант оголошеннях змінних, який використовуються замість var. При використанні let дозволяється змінювати значення змінної, якщо у цьому буде необхідніть.')
document.write('<br>')
document.write('<b>Const</b> - данний спосіб оголошення змінної не дає можливости змінювати ії значення після ініціалізації.')
document.write('<br>')
document.write('<b>Декларація</b> - це етап, на якому ми оголошуєму змінну, використовуючи для цього один із трьох способів: var, let або const.')
document.write('<br>')
document.write('<b>Ініціалізація</b> - на цьому етапі відбувається присвоєння значення для змінної. Дані, записані під час ініціалізації, зберігаються в оперативній пам\'яті комп\'ютера та можуть бути використані пізніше у коді. ')