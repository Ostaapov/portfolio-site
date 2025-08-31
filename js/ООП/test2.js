class BankAccount {
  // Приватное поле (с #)
  #balance = 0;

  constructor(initialAmount = 0) {
    if (initialAmount >= 0) {
      this.#balance = initialAmount;
    } else {
      console.error("Начальный баланс не может быть отрицательным");
    }
  }

  // Метод для внесения денег
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Вы внесли ${amount} у.е. Текущий баланс: ${this.#balance}`);
    } else {
      console.log("Сумма для внесения должна быть положительной.");
    }
  }

  // Метод для снятия денег
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Вы сняли ${amount} у.е. Остаток: ${this.#balance}`);
    } else {
      console.log("Недостаточно средств или неверная сумма.");
    }
  }

  // Метод для просмотра баланса
  getBalance() {
    return this.#balance;
  }
}

// Пример использования:
const myAccount = new BankAccount(100);
myAccount.deposit(50);      // Вы внесли 50 у.е. Текущий баланс: 150
myAccount.withdraw(30);     // Вы сняли 30 у.е. Остаток: 120
console.log(myAccount.getBalance()); // 120