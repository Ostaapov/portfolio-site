fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      console.log(`Имя: ${user.name}`);
    });
  })
  .catch(error => {
    console.error('Ошибка при получении данных:', error);
  });