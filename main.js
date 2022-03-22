function multiplyBy()
{
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = num1 * num2;
}
function divideBy()
{
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = num1 / num2;
}

let date = new Date()
let weeks = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "Суббота"]
let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября"]

function ex1() {
        document.getElementById("week").innerHTML = weeks[date.getDay()]
        document.getElementById("day").innerHTML = date.getDate()
        document.getElementById("month").innerHTML = months[date.getMonth()]
        document.getElementById("hour").innerHTML = date.getHours()
        document.getElementById("minutes").innerHTML = date.getMinutes()
        document.getElementById("seconds").innerHTML = date.getSeconds()
        document.getElementById("miliseconds").innerHTML = date.getMilliseconds()

}
ex1()

