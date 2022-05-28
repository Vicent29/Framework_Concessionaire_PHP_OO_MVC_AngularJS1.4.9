<?php
    class shop_dao {
        static $_instance;

        private function __construct() {
        }

        public static function getInstance() {
            if(!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        // CARS
        public function select_all_cars($db ) {
            $sql = "SELECT *  FROM car c, model m WHERE c.model = m.id_model ORDER BY c.count DESC";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_one_car($db,$id) {
            $sql = "SELECT * FROM car c, model m, type_motor t, category ca WHERE c.id_car = '$id' AND  c.model = m.id_model AND c.category = ca.id_cat AND c.motor = t.cod_tmotor";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_imgs_car($db,$id) {
            $sql = "SELECT i.id_car, i.img_cars FROM img_cars i WHERE i.id_car = '$id'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_shop_filters($db, $filtros) {
            $sql = "SELECT c.*,m.id_brand, m.name_model, t.name_tmotor, ca.name_cat
			FROM car c, model m, type_motor t, category ca
			WHERE  c.model = m.id_model 
			AND c.category = ca.id_cat
			AND c.motor = t.cod_tmotor
			AND $filtros";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_filter_home($db, $filter) {
            $sql = "SELECT c.*,m.id_brand, m.name_model, t.name_tmotor, ca.name_cat FROM car c, model m, type_motor t, category ca WHERE  c.model = m.id_model AND c.category = ca.id_cat AND c.motor = t.cod_tmotor AND $filter";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        //SELECT SEARCH
        public function select_motor_search($db, $motor) {
            $sql = "SELECT * FROM car c, type_motor t ,model m
			        WHERE c.motor = t.cod_tmotor
			        AND c.model = m.id_model
			        AND t.cod_tmotor= '$motor'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_brand_search($db, $brand) {
            $sql = "SELECT * FROM car c,model m
                    WHERE c.model = m.id_model
                    AND m.id_brand= '$brand'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_city_search($db, $city) {
            $sql = "SELECT * FROM car c, model m WHERE c.model = m.id_model AND c.city= '$city'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_motor_brand_search($db, $motor, $brand) {
            $sql = "SELECT * FROM car c, type_motor t, model m
                    WHERE c.model = m.id_model
                    AND c.motor = t.cod_tmotor
                    AND t.cod_tmotor = '$motor'
                    AND m.id_brand = '$brand'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_brand_city_search($db, $brand, $city) {
            $sql = "SELECT * FROM car c, model m
                    WHERE c.model = m.id_model	
                    AND m.id_brand= '$brand'
                    AND c.city= '$city'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_motor_city_search($db, $motor, $city) {
            $sql = "SELECT * FROM car c, type_motor t ,model m
                    WHERE c.motor = t.cod_tmotor
                    AND c.model = m.id_model
                    AND t.cod_tmotor= '$motor'
                    AND c.city= '$city'
                    LIMIT";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_all_search($db, $motor, $brand, $city) {
            $sql = "SELECT * FROM car c, type_motor t ,model m
                    WHERE c.motor = t.cod_tmotor
                    AND c.model = m.id_model
                    AND t.cod_tmotor= '$motor'
                    AND m.id_brand= '$brand'
                    AND c.city= '$city'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        //COUNT MORE VISIT AND ALL_CARS ORDER
        public function count_more_visit($db, $id) {
            $sql = "UPDATE car c SET c.count = c.count+1 WHERE C.id_car = '$id'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_all_cars_order($db, $order) {
            $sql = "SELECT * FROM car c, model m WHERE c.model = m.id_model  ORDER BY c.$order ASC";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        //CARS RELATED
        public function select_cars_related($db, $type) {
            $sql = "SELECT * FROM car c, model m WHERE c.model = m.id_model AND c.motor = '$type'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        // LIKES
        public function select_load_likes($db, $username) {
            $sql = "SELECT l.id_car FROM likes l WHERE l.id_user = (SELECT u.id_user FROM users u WHERE u.username = '$username')";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function select_likes($db, $id_car, $username) {
            $sql = "SELECT l.id_car FROM likes l
                    WHERE l.id_user = (SELECT u.id_user FROM users u WHERE u.username = '$username') 
                    AND l.id_car = '$id_car'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function like($db, $id_car, $username) {
            $sql = "INSERT INTO likes (id_user, id_car) VALUES ((SELECT  u.id_user FROM users u WHERE u.username= '$username') ,'$id_car')";
            return $db->ejecutar($sql);
        }

        public function dislike($db, $id_car, $username) {
            $sql =  "DELETE FROM likes WHERE id_car='$id_car' AND id_user=(SELECT  u.id_user FROM users u WHERE u.username= '$username')";
            return  $db->ejecutar($sql);
        }

    }
?>