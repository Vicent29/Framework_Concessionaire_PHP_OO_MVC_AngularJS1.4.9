<?php
class common {
    
    public static function load_error() {
        require_once(VIEW_PATH_INC . 'top_page.php');
        require_once(VIEW_PATH_INC . 'header.html');
        require_once(VIEW_PATH_INC . 'menu.html');
        require_once(VIEW_PATH_INC . '404.html');
        require_once(VIEW_PATH_INC . 'footer.html');
    } //end load error

    public static function load_view($top_page, $view) {
        $top_page = VIEW_PATH_INC . $top_page;
        $top_page_default = VIEW_PATH_INC . 'top_page.php';
        if ((file_exists($top_page)) && (file_exists($view)) && (file_exists($top_page_default))) {
            require_once($top_page_default);
            require_once($top_page);
            require_once(VIEW_PATH_INC . 'header.html');
            require_once(VIEW_PATH_INC . 'menu.html');
            require_once($view);
            require_once(VIEW_PATH_INC . 'footer.html');
        } else { 
            self::load_error();
        } //end else if
    } //end load_view


    public static function load_model($model, $function = null, $args = null) {
        $dir = explode('_', $model);
        $path = constant('MODEL_' . strtoupper($dir[0])) .  $model . '.class.singleton.php';
        // /Framework_Concessionaire_PHP_OO_MVC_AngularJS1.4.9/module/home/model/model/home_model.class.singleton.php
        if (file_exists($path)) {
            require_once ($path);
            if (method_exists($model, $function)) {
                $obj = $model::getInstance();
                if ($args != null) {
                    return call_user_func(array($obj, $function), $args);
                }
                return call_user_func(array($obj, $function));
            }
        }
        throw new Exception();
    }//end_laod_model


  public static function friendlyURL($url) {
        $link = "";
        if (URL_FRIENDLY) {
            $url = explode("&", str_replace("?", "", $url));
            foreach ($url as $key => $value) {
                $aux = explode("=", $value);
                $link .=  $aux[1]."/";
            }
        } else {
            $link = "index.php?" . $url;
        }// end_else
        return SITE_PATH . $link;
    }// end_friendlyURL


    public static function generate_token_secure($longitud){
        if ($longitud < 4) {
            $longitud = 4;
        }
        return bin2hex(openssl_random_pseudo_bytes(($longitud - ($longitud % 2)) / 2));
    }

}//class