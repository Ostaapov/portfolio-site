let friend = {
    name: "Андрей",
    age: "27",
    country: "Грузия"
};

for (let key in friend){
    console.log(key +": " + friend[key]);
}