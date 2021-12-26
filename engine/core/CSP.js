'use strict'
// CSP - created structure page

get_pg_title()();
function get_pg_title(){
let

// Создаём локальную переменную pg_title, которая будет объектом XMLHttpRequest
pg_title = new XMLHttpRequest();

// Задаём метод запроса и URL  запроса  
    pg_title.open('GET', 'modules/mod_pg_title/pg_title.html');

// Используем обработчик событий onload, чтобы поймать ответ сервера XMLHttpRequest
pg_title.onload = function(){

    // Выводим в консоль содержимое ответа сервера. Это строка!
        console.log(pg_title.response)

    // Содержимое ответа, помещаем внутрь элемент "body" 
        document.body.innerHTML = pg_title.response
}

// Инициирует запрос. Посылаем запрос на сервер.
pg_title.send();

}

