<?php
    define('PROJECT', '/Framework_Concessionaire_PHP_OO_MVC_AngularJS1.4.9/backend/');

    //SITE_ROOT
    define('SITE_ROOT', $_SERVER['DOCUMENT_ROOT'] . PROJECT);
    
    //SITE_PATH
    define('SITE_PATH', 'http://' . $_SERVER['HTTP_HOST'] . PROJECT);
    
    //PRODUCTION
    define('PRODUCTION', true);
    
    //MODEL
    define('MODEL_PATH', SITE_ROOT . 'model/');
    
    //MODULES
    define('MODULES_PATH', SITE_ROOT . 'module/');
    
    //RESOURCES
    define('RESOURCES', SITE_ROOT . 'resources/');
    
    //UTILS
    define('UTILS', SITE_ROOT . 'utils/');

    //VIEW
    define('VIEW_PATH_INC', SITE_ROOT . 'views/inc/');

    //CSS
    // define('CSS_PATH', SITE_ROOT . 'views/css/');
    define('CSS_PATH', 'views/css/');
    
    //JS
    // define('JS_PATH', SITE_ROOT . 'views/js/');
    define('JS_PATH', PROJECT . 'views/js/');
    
    //IMG
    define('IMG_PATH', SITE_ROOT . 'views/img/');

    //MODEL_HOME
    define('JS_VIEW_HOME', SITE_PATH . 'module/home/view/js/');
    define('MODEL_HOME', SITE_ROOT . 'module/home/model/model/');
    define('BLL_HOME', SITE_ROOT . 'module/home/model/BLL/');
    define('DAO_HOME', SITE_ROOT . 'module/home/model/DAO/');
    define ('VIEW_PATH_HOME', SITE_ROOT . 'module/home/view/');

    //MODEL_SHOP
    define('JS_VIEW_SHOP', SITE_PATH . 'module/shop/view/js/');
    define('MODEL_SHOP', SITE_ROOT . 'module/shop/model/model/');
    define('BLL_SHOP', SITE_ROOT . 'module/shop/model/BLL/');
    define('DAO_SHOP', SITE_ROOT . 'module/shop/model/DAO/');
    define ('VIEW_PATH_SHOP', SITE_ROOT . 'module/shop/view/');

    //MODEL_SEARCH
    define('JS_VIEW_SEARCH', SITE_PATH . 'module/search/view/js/');
    define('MODEL_SEARCH', SITE_ROOT . 'module/search/model/model/');
    define('BLL_SEARCH', SITE_ROOT . 'module/search/model/BLL/');
    define('DAO_SEARCH', SITE_ROOT . 'module/search/model/DAO/');

    
    //MODEL_CONTACT
    define('JS_VIEW_CONTACT', SITE_PATH . 'module/contact/view/js/');
    define('MODEL_CONTACT', SITE_ROOT . 'module/contact/model/model/');
    define ('VIEW_PATH_CONTACT', SITE_ROOT . 'module/contact/view/');

    //MODEL_LOGIN
    define('JS_VIEW_LOGIN', SITE_PATH . 'module/login/view/js/');
    define('MODEL_LOGIN', SITE_ROOT . 'module/login/model/model/');
    define('BLL_LOGIN', SITE_ROOT . 'module/login/model/BLL/');
    define('DAO_LOGIN', SITE_ROOT . 'module/login/model/DAO/');
    define ('VIEW_PATH_LOGIN', SITE_ROOT . 'module/login/view/');
    define('CSS_LOGIN', 'module/login/view/css/');

    //MODEL_EXCEPTIONS
    // define('JS_VIEW_ERROR', SITE_PATH . 'module/exceptions/view/js/');
    // define('MODEL_ERROR', SITE_ROOT . 'module/exceptions/model/model/');
    // define('BLL_ERROR', SITE_ROOT . 'module/exceptions/model/BLL/');
    // define('DAO_ERROR', SITE_ROOT . 'module/exceptions/model/DAO/');
    // define ('VIEW_PATH_ERROR', SITE_ROOT . 'module/exceptions/view/');
    
    // Friendly
    define('URL_FRIENDLY', TRUE);