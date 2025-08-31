let car1 = {
    mark: "BMW",
    model: "E3",
    year: 1999
};

let car2 = {
    mark: "Toyota",
    model: "Camry",
    year: 2002
};

let car3 = {
    mark: "Lada",
    model: "Oka",
    year: 2003
};

let arr = [car1, car2, car3];

const [first] = arr;

console.log(first);
