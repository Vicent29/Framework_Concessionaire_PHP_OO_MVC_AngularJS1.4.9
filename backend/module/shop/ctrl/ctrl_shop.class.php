<?php
 if (isset($_SESSION["tiempo"])) {  
    $_SESSION["tiempo"] = time();
}

    class ctrl_shop {
        function all_cars() {
            echo json_encode(common::load_model('shop_model', 'get_all_cars'));
        }

        function details_car() {
            echo json_encode(common::load_model('shop_model', 'get_details_car', $_POST['id']));
        }

        function operations_filters_shop() {
            echo json_encode(common::load_model('shop_model', 'get_shop_filters', [ $_POST[0], $_POST[1], $_POST[2]]));
        }

        function home_filter() {
            echo json_encode(common::load_model('shop_model', 'get_home_filter',[ $_POST[0], $_POST[1]]));
        }

        function operations_search_filter() {
            echo json_encode(common::load_model('shop_model', 'get_search_filter',[ $_POST[0], $_POST[1], $_POST[2]]));
        }

        function count_more_visit() {
            echo json_encode(common::load_model('shop_model', 'get_count_more_visit', $_POST['id_car']));
        }

        function order_filter() {
            echo json_encode(common::load_model('shop_model', 'get_order_filter',[$_POST[0]]));
        }

        function cars_related() {
            echo json_encode(common::load_model('shop_model', 'get_cars_related', [$_POST['type']]));
        }

        function control_likes() {
            echo json_encode(common::load_model('shop_model', 'get_control_likes',[$_POST['id_car'], $_POST['token']]));
        }

        function load_likes_user() {
            echo json_encode(common::load_model('shop_model', 'get_load_likes_user', $_POST['token']));
        }
    }
?>