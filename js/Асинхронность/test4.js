const postUrls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];
  
  Promise.all(postUrls.map(url => fetch(url).then(res => res.json())))
    .then(posts => {
      posts.forEach((post, index) => {
        console.log(`--- Пост ${index + 1} ---`);
        console.log(`Заголовок: ${post.title}`);
        console.log(`Тело: ${post.body}`);
      });
    })
    .catch(error => {
      console.error('Произошла ошибка при загрузке постов:', error);
    });