<?php
    class search_model {
        private $bll;
        static $_instance;
        
        function __construct() {
            $this -> bll = search_bll::getInstance();
        }

        public static function getInstance() {
            if (!(self::$_instance instanceof self)) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function get_type_car() {
            return $this -> bll -> get_type_car_BLL();
        }

        public function get_brand_car() {
            return $this -> bll -> get_brand_car_BLL();
        }

        public function get_brand_category($args) {
            return $this -> bll -> get_brand_category_BLL($args);
        }

        public function get_autocomplete($args) {
            return $this -> bll -> get_autocomplete_BLL($args);
        }

        

    }
?>