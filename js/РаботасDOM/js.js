let button1 = document.getElementById("button1");

button1.addEventListener("click", function(){
    button1.textContent = button1.textContent === "Жми!" ? "Текст изменен! Жми!" : "Жми!";
    button1.style.backgroundColor = button1.style.backgroundColor === "" ? "blue" : "";
});


let input = document.getElementById('name');
let button2 = document.getElementById('addElement');
let spisok = document.getElementById('spisok');

button2.addEventListener('click', () => {
    let text = input.value.trim();
    if (text !== "") {
        let li = document.createElement('li');
        li.textContent = text;
        spisok.appendChild(li);
        input.value = "";
    }
});


let delbutton = document.querySelector('#delBt');
let spisok1 = document.querySelector('#spisok');

delbutton.addEventListener('click', () => {
    let lastEl = spisok1.lastElementChild;
    if (lastEl) {
        spisok1.removeChild(lastEl);
    }
});
