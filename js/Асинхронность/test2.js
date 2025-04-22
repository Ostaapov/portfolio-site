async function post(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log('Пост:', data);
    }
    catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

post();