function promis() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Промис выполнен! 🎉");
        resolve();
      }, 3000);
    });
  }
  
  
  promis();