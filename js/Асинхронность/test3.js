function provChislo(num) {
    return new Promise((resolve, reject) => {
      if (num < 10) {
        resolve('Число меньше 10 - успех.');
      } else {
        reject('Ошибка: число 10 или больше.');
      }
    });
  }

  provChislo(11)
  .then(message => console.log(message))
  .catch(error => console.error(error));