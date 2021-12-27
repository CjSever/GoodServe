'use strict'
// onload pg_events

function get_pg_events(){
    let
        pg_events = new XMLHttpRequest(),
        comment = document.createComment('connecting module pg_events'),
        link_style_events = document.createElement('link');
        link_style_events.rel = 'stylesheet';
        link_style_events.href = 'modules/mod_pg_events/style/pg_events.css';
        
        pg_events.open('GET', 'modules/mod_pg_events/pg_events.html');
    
        pg_events.onload = function(){
            document.body.innerHTML = pg_events.response;
            document.head.append(comment);
            document.head.append(link_style_events);
        }
    
        pg_events.send();

    }
    