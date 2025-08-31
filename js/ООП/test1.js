class Book {
    constructor(nazvanie, avtor, god){
        this.nazvanie = nazvanie;
        this.avtor = avtor;
        this.god = god;
    }

    info(){
        console.log(`Книга: ${this.nazvanie}, Автор: ${this.avtor}, Год издания: ${this.god}`);
    }
}

const myBook = new Book('Война и мир', 'Лев Толстой', '1847');
//myBook.info();


class EBook extends Book {
    constructor(nazvanie, avtor, god, razmerfaila){
        super(nazvanie, avtor, god);
        this.razmerfaila = razmerfaila;
    }

    info(){
        console.log(`Книга: ${this.nazvanie}, Автор: ${this.avtor}, Год издания: ${this.god}, Размер файла: ${this.razmerfaila} MB`);
    }
}

const myBook1 = new EBook('Война и мир', 'Лев Толстой', '1847', '3');
myBook1.info();