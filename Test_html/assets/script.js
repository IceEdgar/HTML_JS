let count = 0;
function changedColor() {
    // получили элемент по ID
    let el2 = document.getElementById("el1");
    console.log(el2);
    // добавили класс
    // 3 / 2 = 1, 1 в остатке
    // 4 / 2 = 2, 0 в остатке
    if (count % 2 == 0) {
        el2.classList.add('ice');
    } 
    // удалили класс
    else {
        el2.classList.remove('ice');
    }
    count++;
}

let btm1 = document.getElementById("btm1");
console.log(btm1);

btm1.addEventListener('click', changedColor)

let name1 = document.getElementById("name");
console.log(name1);

name1.addEventListener(askName);

function askName(){
    var name = prompt("Ваше имя?", "");
    if (name == null) {
        alert("Это не имя");        
    } 
    else {
        alert("Ваше имя - " + name + "!")
    }
}