const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Что-то пошло не так"));
    }, 2000);
  });
  
  myPromise
    .then(result => {
      console.log("Успех:", result);
    })
    .catch(error => {
      console.error("Ошибка:", error.message);
    });