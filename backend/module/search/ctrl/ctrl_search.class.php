<?php
if (isset($_SESSION["tiempo"])) {  
    $_SESSION["tiempo"] = time();
}

    class ctrl_search {
        function type_car() {
            echo json_encode(common::load_model('search_model', 'get_type_car'));
        }

        function brand_car() {
            echo json_encode(common::load_model('search_model', 'get_brand_car'));
        }

        function brand_category() {
            echo json_encode(common::load_model('search_model', 'get_brand_category', $_POST['type_car']));
        }

        function autocomplete() {
            echo json_encode(common::load_model('search_model', 'get_autocomplete',[$_POST['type_car'],$_POST['brand_car'],$_POST['complete']]));
        }

    }
?>