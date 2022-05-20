<?php
    define('PROJECT', '/Framework_Concessionaire_PHP_OO_MVC_AngularJS1.4.9');

    //SITE_ROOT
    define('SITE_ROOT', $_SERVER['DOCUMENT_ROOT'] . PROJECT);
    
    //SITE_PATH
    define('SITE_PATH', 'http://' . $_SERVER['HTTP_HOST'] . PROJECT);
    
    //PRODUCTION
    define('PRODUCTION', true);

    // BACKEND
    define('BACKEND', SITE_ROOT . '/backend/');

    // FRONNTEND
    define('FRONTEND', SITE_ROOT . '/frontend/');
    
    //MODEL
    define('MODEL_PATH', BACKEND . 'model/');
    
    //MODULES
    define('MODULES_PATH', BACKEND . 'module/');
    
    //RESOURCES
    define('RESOURCES', BACKEND . 'resources/');
    
    //UTILS
    define('UTILS', BACKEND . 'utils/');

    //VIEW
    define('VIEW_PATH_INC', FRONTEND . 'views/inc/');

    //CSS
    // define('CSS_PATH', FRONTEND . 'views/css/');
    define('CSS_PATH', '/frontend/views/css/');
    
    //JS
    // define('JS_PATH', FRONTEND . 'views/js/');
    define('JS_PATH', PROJECT . '/frontend/views/js/');
    
    //IMG
    define('IMG_PATH', FRONTEND . 'views/img/');

    //MODEL_HOME
    define('JS_VIEW_HOME', FRONTEND . 'module/home/ctrl/');
    define('MODEL_HOME', BACKEND . 'module/home/model/model/');
    define('BLL_HOME', BACKEND . 'module/home/model/BLL/');
    define('DAO_HOME', BACKEND . 'module/home/model/DAO/');
    define ('VIEW_PATH_HOME', FRONTEND . 'module/home/view/');

    //MODEL_SHOP
    define('JS_VIEW_SHOP', FRONTEND . 'module/shop/ctrl/');
    define('MODEL_SHOP', BACKEND . 'module/shop/model/model/');
    define('BLL_SHOP', BACKEND . 'module/shop/model/BLL/');
    define('DAO_SHOP', BACKEND . 'module/shop/model/DAO/');
    define ('VIEW_PATH_SHOP', FRONTEND . 'module/shop/view/');

    //MODEL_SEARCH
    define('JS_VIEW_SEARCH', FRONTEND . 'module/search/ctrl/');
    define('MODEL_SEARCH', BACKEND . 'module/search/model/model/');
    define('BLL_SEARCH', BACKEND . 'module/search/model/BLL/');
    define('DAO_SEARCH', BACKEND . 'module/search/model/DAO/');

    
    //MODEL_CONTACT
    define('JS_VIEW_CONTACT', FRONTEND . 'module/contact/ctrl/');
    define('MODEL_CONTACT', BACKEND . 'module/contact/model/model/');
    define ('VIEW_PATH_CONTACT', BACKEND . 'module/contact/view/');

    //MODEL_LOGIN
    define('JS_VIEW_LOGIN', FRONTEND . 'module/login/ctrl/');
    define('MODEL_LOGIN', BACKEND . 'module/login/model/model/');
    define('BLL_LOGIN', BACKEND . 'module/login/model/BLL/');
    define('DAO_LOGIN', BACKEND . 'module/login/model/DAO/');
    define ('VIEW_PATH_LOGIN', BACKEND . 'module/login/view/');
    define('CSS_LOGIN', 'frontend/module/login/view/css/');
    
    // Friendly
    define('URL_FRIENDLY', TRUE);