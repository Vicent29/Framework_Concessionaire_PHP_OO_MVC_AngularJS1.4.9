<?php
    class home_model {
        private $bll;
        static $_instance;
        
        function __construct() {
            $this -> bll = home_bll::getInstance();
        }

        public static function getInstance() {
            if (!(self::$_instance instanceof self)) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function get_carousel_brand() {
            return $this -> bll -> get_carousel_brand_BLL();
        }

        public function get_categoria() {
            return $this -> bll -> get_categoria_BLL();
        }

        public function get_type() {
            return $this -> bll -> get_type_BLL();
        }


    }
?>