<?php
    class home_dao {
        static $_instance;

        private function __construct() {
        }

        public static function getInstance() {
            if(!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function select_data_carousel_brand($db) {
            $sql = "SELECT * FROM `brand` ORDER BY name_brand ASC LIMIT 30";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_data_categoria($db) {
            $sql = "SELECT * FROM category LIMIT 6";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_data_type($db) {
            $sql = "SELECT * FROM type_motor ORDER BY cod_tmotor DESC LIMIT 4";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
    }
?>