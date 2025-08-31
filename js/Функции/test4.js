function doSomething(callback) {
    console.log("Начинаем выполнение...");
    callback();
    console.log("Завершаем выполнение...");
}

function sayHello() {
    console.log("Привет!");
}

doSomething(sayHello);