<?php

require_once 'vendor/autoload.php';

date_default_timezone_set('Europe/Madrid');

Flight::register('dbProba1','PDO',array('mysql:host=db;dbname=dbname','root','test'));

Flight::route('GET /paginaJs',function(){
    require 'vistas/vista1.html';
});

Flight::route('GET /proba',function(){
    sleep(2);
    echo date('H:m:s');
});

Flight::start();