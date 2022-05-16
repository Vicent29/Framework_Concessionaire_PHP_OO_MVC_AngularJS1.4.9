<?php
    class login_model {
        private $bll;
        static $_instance;
        
        function __construct() {
            $this -> bll = login_bll::getInstance();
        }

        public static function getInstance() {
            if (!(self::$_instance instanceof self)) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function get_register($args) {
            return $this -> bll -> get_register_BLL($args);
        }

        public function get_verify_email($args) {
            return $this -> bll -> get_verify_email_BLL($args);
        }

        public function get_login($args) {
            return $this -> bll -> get_login_BLL($args);
        }
        public function get_send_recover_email($args) {
            return $this -> bll -> get_send_recover_email_BLL($args);
        }

        public function get_send_new_passwd($args) {
            return $this -> bll -> get_send_new_passwd_BLL($args);
        }

        public function get_social_login($args) {
            return $this -> bll -> get_social_login_BLL($args);
        }
        
        public function get_verify_email_token($args) {
            return $this -> bll -> get_verify_email_token_BLL($args);
        }

        public function get_logout() {
            return $this -> bll -> get_logout_BLL();
        }

        public function get_data_user($token) {
            return $this -> bll -> get_data_user_BLL($token);
        }

        public function get_actividad() {
            return $this -> bll -> get_actividad_BLL();
        }

        public function get_controluser($token) {
            return $this -> bll -> get_controluser_BLL($token);
        }

        public function get_refresh_token($token) {
            return $this -> bll -> get_refresh_token_BLL($token);
        }

        public function get_refresh_cookie() {
            return $this -> bll -> get_refresh_cookie_BLL();
        }

    }
?>