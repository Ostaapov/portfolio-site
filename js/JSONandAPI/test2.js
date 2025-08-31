function sendPostRequest() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Мой заголовок',
        body: 'Текст сообщения',
        userId: 1
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Результат POST-запроса:', data);
      })
      .catch(error => {
        console.error('Ошибка при отправке запроса:', error);
      });
  }
  
  // Вызов функции
  sendPostRequest();