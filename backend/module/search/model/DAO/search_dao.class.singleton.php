<?php
    class search_dao {
        static $_instance;

        private function __construct() {
        }

        public static function getInstance() {
            if(!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function select_type_car($db) {
            $sql = "SELECT * FROM type_motor";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_brand($db) {
            $sql = "SELECT b.name_brand FROM brand b";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_motor_brand($db, $motor) {
            $sql = "SELECT DISTINCT b.name_brand FROM car c, model m, brand b
                    WHERE c.model = m.id_model
                    AND m.id_brand = b.name_brand
                    AND  c.motor = '$motor'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_auto_motor($db, $auto, $motor) {
            $sql = "SELECT DISTINCT C.city FROM car c, type_motor t 
                    WHERE c.motor = t.cod_tmotor
                    AND t.cod_tmotor = '$motor'
                    AND c.city LIKE '$auto%'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_auto_motor_brand($db, $auto, $motor, $brand) {
            $sql = "SELECT DISTINCT c.city FROM car c, type_motor t, model m
                    WHERE c.motor = t.cod_tmotor
                    AND c.model = m.id_model 
                    AND t.cod_tmotor = '$motor'
                    AND m.id_brand = '$brand'
                    AND c.city LIKE '$auto%'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_auto_brand($db, $auto, $brand) {
            $sql = "SELECT DISTINCT c.city FROM car c, model m WHERE c.model = m.id_model AND m.id_brand = '$brand' AND c.city LIKE '$auto%'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_auto($db, $auto) {
            $sql = "SELECT DISTINCT c.city FROM car c WHERE c.city LIKE '$auto%'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
  
    }
?>