function delay(ms, message) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, ms);
    });
  }
  
  async function loadProcess() {
    await delay(0, "Начинаем загрузку...");
    await delay(1000, "Загрузка продолжается...");
    await delay(1000, "Загрузка завершена!");
  }
  
  loadProcess();