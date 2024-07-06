<?php
    use app\Router;
    use app\Db;

    require_once __DIR__ . "/settings/config.php";
    require_once LIB . "functions.php";

    $Routing = new Router();

    session_start();

//    Db::instance();

    if($Routing->determineRoute()) {

        $Routing->tempClass->run($Routing->query);

    } else {

        header("HTTP/1.0 404 Not Found");
        die;
    }
  