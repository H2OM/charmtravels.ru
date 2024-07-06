<?php
    define('DEBUG', 1);
    
    define("ROOT", __DIR__ . "/../");
    define("LIB", ROOT . "lib/");
    define("CONF", ROOT . "settings/");
    define("DATA", ROOT . "data/");
//    define("LOCADMIN", preg_replace("#[^/]+$#", '', "http://{$_SERVER['HTTP_HOST']}{$_SERVER['PHP_SELF']}"));
    
    require_once LIB . "vendor/autoload.php";