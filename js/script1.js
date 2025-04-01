alert("Привет, мир!");

function showAlert(){
    alert("Ты нажал на кнопку!")
}

//2 блок

//2

let x = 5;
x += 3;

if (x > 10) {
    console.log("x больше 10");
} else {
    console.log("x меньше или равен 10")
}

//3

for (let i = 1; i <= 10; i++){
    console.log(i);
}

//4

let human = {
    name: "Андрей",
    age: 27,
    profession: IT
};

console.log(human);

//5

function sum(x, y) {
    return (x + y);
}

console.log(sum(4,6));

//сравнение сложных структур

//1

let arr1 =  [1, 2, 3];
let arr2 = [1, 2, 3];
//как сравнить?

//2
let obj1 = {name: "Андрей"};
let obj2 = {name: "Андрей"};
//как сравнить?


//3
function nullorundefined(x) {
    return x === null || x === undefined;
}
console.log(nullorundefined(5));

//4
let str ="Привет, Андрей!";
let x1 = 5;
let arr3 = [1, 2, 3];
let obj3 = {name:"Андрей", возраст: 27};

console.log(typeof str);
console.log(typeof x1);
console.log(typeof arr3);
console.log(typeof obj3);

//операторы

//1
let s1 = "Андрей";
let s2 = "Лопатин";

let sum = s1 + " " + s2;

console.log(sum);


//2

let perem = 8;

if (typeof perem === "number" || typeof perem === "string"){
    console.log("Переменная является числом или строкой");
} else {
    console.log("Переменная не является числом или строкой");
}

//3
let name1 = "Андрей";
let age = 27;
let string1 = `Привет, меня зовут ${name1}, мне ${age} лет`;

console.log(string1);


//4

let x4 = 5;
let x5 = "56";

let sum5 = x4 + Number(x5);

console.log(sum5);

