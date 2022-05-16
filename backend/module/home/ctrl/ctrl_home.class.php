<?php
 if (isset($_SESSION["tiempo"])) {  
    $_SESSION["tiempo"] = time(); //Devuelve la fecha actual
}
    class ctrl_home {
        function carousel_brand() {
            echo json_encode(common::load_model('home_model', 'get_carousel_brand'));
        }

        function categoria() {
            echo json_encode(common::load_model('home_model', 'get_categoria'));
        }

        function type() {
            echo json_encode(common::load_model('home_model', 'get_type'));
        }

    }
?>