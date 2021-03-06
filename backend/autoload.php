<?php
    require_once("paths.php");
    require_once(MODEL_PATH . 'middleware_auth.php');
    
    spl_autoload_extensions('.php,.inc.php,.class.php,.class.singleton.php');
    spl_autoload_register('loadClasses');
    
    function loadClasses($className) {
        $breakClass = explode('_', $className);
        $modelName = "";
        
        if (isset($breakClass[1])) {
            $modelName = strtoupper($breakClass[1]);
        }
        if (file_exists(BACKEND . 'module/' . $breakClass[0] . '/model/'. $modelName . '/' . $className . '.class.singleton.php')) {
            set_include_path('module/' . $breakClass[0] . '/model/' . $modelName.'/');
            spl_autoload($className);
        }else if (file_exists(BACKEND . 'model/' . $className . '.class.singleton.php')){
            set_include_path(BACKEND . 'model/');
            spl_autoload($className);
        }else if (file_exists(BACKEND . 'model/' . $className . '.class.php')){
            set_include_path(BACKEND . 'model/');
            spl_autoload($className);
        }else if (file_exists(BACKEND . 'utils/' . $className . '.inc.php')) {
            set_include_path(BACKEND . 'utils/');
            spl_autoload($className);
        }
    }
