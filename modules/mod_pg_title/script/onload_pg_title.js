'use strict'
// onload pg_title

function get_pg_title(){
    let
        pg_title = new XMLHttpRequest(),
        comment = document.createComment('connecting module pg_title'),
        link_style_title = document.createElement('link');
        link_style_title.rel = 'stylesheet';
        link_style_title.href = 'modules/mod_pg_title/style/pg_title.css';
        
        pg_title.open('GET', 'modules/mod_pg_title/pg_title.html');
    
        pg_title.onload = function(){
            document.body.innerHTML = pg_title.response;
            document.head.append(comment);
            document.head.append(link_style_title);
        }
        
    pg_title.send();
    response = pg_title.title.response;
    return response;
}
