<?php
    class shop_model {
        private $bll;
        static $_instance;
        
        function __construct() {
            $this -> bll = shop_bll::getInstance();
        }

        public static function getInstance() {
            if (!(self::$_instance instanceof self)) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function get_all_cars() {
            return $this -> bll -> get_all_cars_BLL();
        }

        public function get_details_car($args) {
            return $this -> bll -> get_details_car_BLL($args);
        }

        public function get_shop_filters($args) {
            return $this -> bll -> get_shop_filters_BLL($args);
        }

        public function get_home_filter($args) {
            return $this -> bll -> get_home_filter_BLL($args);
        }

        public function get_search_filter($args) {
            return $this -> bll -> get_search_filter_BLL($args);
        }

        public function get_count_more_visit($args) {
            return $this -> bll -> get_count_more_visit_BLL($args);
        }

        public function get_order_filter($args) {
            return $this -> bll -> get_order_filter_BLL($args);
        }

        public function get_cars_related($args) {
            return $this -> bll -> get_cars_related_BLL($args);
        }

        public function get_control_likes($args) {
            return $this -> bll -> get_control_likes_BLL($args);
        }

        public function get_load_likes_user($args) {
            return $this -> bll -> get_load_likes_user_BLL($args);
        }

    }
?>