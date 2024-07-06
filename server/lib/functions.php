<?php
    use app\Db;

    function Hdebug($data) {

        if(DEBUG) {
            echo '<pre>'.print_r($data, true).'</pre>';
        }
    }

    function HdestroySession () {

        $_SESSION = array();

        if (session_id() != "" || isset($_COOKIE[session_name()])) {
            setcookie(session_name(), '', time()-2592000, '/');
        }
            
        session_destroy();
    }

    function HgetSafeString($str) {
    
        return str_replace("'", '', htmlentities(strip_tags($str)));
    }

    function HcheckUserInput() {

        $dataInputs = [];

        foreach($_POST as $key => $value) {

            $value = trim($value, " ");

            switch($key) {

                case "number": 

                    if(!preg_match("/^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/", $value)) {

                        return false;
                    }

                    $dataInputs[$key] = $value;

                    break;

                case "password":

                    $isPasswordNotMultiCasesAndHasOnlyDigits = (!preg_match("/\D+/", $value) || strtolower($value) == $value || strtoupper($value) == $value);

                    if(iconv_strlen($value) < 6 || $isPasswordNotMultiCasesAndHasOnlyDigits) {
                        return false;
                    } 

                    if(isset($_POST["rePassword"]) && $_POST["rePassword"] !== $value) {
                        return false;
                    }

                    $dataInputs[$key] = $value;

                    break;

                case "firstName":

                    if(iconv_strlen($value) < 2 || !preg_match("/^[а-яА-Я]+$/u", $value) || preg_match("/'/", $value)) {
                        return false;
                    }

                    $dataInputs[$key] = $value;

                    break;
                    
                case "secondName":

                    if(iconv_strlen($value) < 2 || !preg_match("/^[а-яА-Я]+$/u", $value) || preg_match("/'/", $value)) {
                        return false;
                    }

                    $dataInputs[$key] = $value;

                    break;

                case "age":

                    if(!is_numeric($value) || ($value < 6 && $value > 150)) {
                        return false;
                    }

                    $dataInputs[$key] = $value;

                    break;

                case "gender":

                    switch($value) {

                        case "Женский":

                            $dataInputs[$key] = "female";

                            break;

                        case "Мужской":

                            $dataInputs[$key] = "male";

                            break;

                        default:

                            return false;
                    }
                    
                    break;

                case "mail":

                    if(!filter_var($value, FILTER_VALIDATE_EMAIL)  || preg_match("/'/", $value)) {
                        return false;
                    }

                    $dataInputs[$key] = $value;

                    break;

                    case "rePassword":

                        $isPasswordNotMultiCasesAndHasOnlyDigits = (!preg_match("/\D+/", $value) || strtolower($value) == $value || strtoupper($value) == $value);

                        if(iconv_strlen($value) < 6 || !preg_match("/\D+/", $value) || strtolower($value) == $value || strtoupper($value) == $value) {
                            return false;
                        } 

                        if(isset($_POST["password"]) && $_POST['password'] != $value) {
                            return false;
                        }

                        break;

                case "agreement":

                    if($value !== "on") {
                        return false;
                    }

                    break;

                case "title":

                    if(iconv_strlen($value) > 30 || iconv_strlen($value) < 5) {
                        return false;
                    }

                    $dataInputs[$key] = $value;

                    break;

                case "message":

                    if(iconv_strlen($value) > 300 || iconv_strlen($value) < 5) {
                        return false;
                    }

                    $dataInputs[$key] = $value;

                    break;

                    default:
                        break;
            }
        }

        ksort($dataInputs);

        return $dataInputs;
    }
