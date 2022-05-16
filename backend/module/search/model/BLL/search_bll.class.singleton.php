<?php
	class search_bll {
		private $dao;
		private $db;
		static $_instance;

		function __construct() {
			$this -> dao = search_dao::getInstance();
			$this->db = db::getInstance();
		}

		public static function getInstance() {
			if (!(self::$_instance instanceof self)) {
				self::$_instance = new self();
			}
			return self::$_instance;
		}

		public function get_type_car_BLL() {
			return $this -> dao -> select_type_car($this->db);
		}

		public function get_brand_car_BLL() {
			return $this -> dao -> select_brand($this->db);
		}

		public function get_brand_category_BLL($args) {
			return $this -> dao -> select_motor_brand($this->db, $args);
		}

		public function get_autocomplete_BLL($args) {
			$type_car= $args[0];
			$brand_car=$args[1];
			$complete=$args[2];

            if ( ($type_car != "0") && ($brand_car == "0") ) {    
				return $this -> dao -> select_auto_motor($this->db, $complete, $type_car);        
            } else if ( ($type_car != "0") && ($brand_car != "0") ) {
				return $this -> dao -> select_auto_motor_brand($this->db, $complete, $type_car, $brand_car);
            } else if ( ($type_car == "0") && ($brand_car != "0") ) {
				return $this -> dao -> select_auto_brand($this->db, $complete, $brand_car );
            } else {
				return $this -> dao -> select_auto($this->db, $complete);
            }
		}
		

	}
?>