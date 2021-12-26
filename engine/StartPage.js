'use strict'

FormingPage();

function FormingPage () {
    let
        pg_title_visible = document.getElementById('pg_title'),
        pg_events_visible = document.getElementById('pg_events'),
        pg_news_visible = document.getElementById('pg_rank'),
        pg_rank_visible = document.getElementById('pg_news'),
        pg_about_visible = document.getElementById('pg_aboutUs');

        pg_title_visible.style.display = '';
        pg_events_visible.style.display = 'none';
        pg_news_visible.style.display = 'none';
        pg_rank_visible.style.display = 'none';
        pg_about_visible.style.display = 'none';

}