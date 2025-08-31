function personinfo(person){
    console.log(`Имя: ${person.name}, возраст: ${person.age}`);
}

const person = {

    name: "Рыжий",
    age: 27,
    IQ: 5
}

personinfo(person);