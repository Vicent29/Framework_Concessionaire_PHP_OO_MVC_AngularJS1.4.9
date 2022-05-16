<?php
 if (isset($_SESSION["tiempo"])) {  
    $_SESSION["tiempo"] = time();
}

    class ctrl_shop {
        function all_cars() {
            echo json_encode(common::load_model('shop_model', 'get_all_cars', [$_POST['args'][0], $_POST['args'][1]]));
        }

        function details_car() {
            echo json_encode(common::load_model('shop_model', 'get_details_car', $_POST['id']));
        }

        function operations_filters_shop() {
            echo json_encode(common::load_model('shop_model', 'get_shop_filters', [ $_POST['args'][0], $_POST['args'][1], $_POST['args'][2], $_POST['args'][3], $_POST['args'][4], $_POST['args'][5]]));
        }

        function home_filter() {
            echo json_encode(common::load_model('shop_model', 'get_home_filter',[ $_POST['args'][0], $_POST['args'][1], $_POST['args'][2], $_POST['args'][3] ]));
        }

        function operations_search_filter() {
            echo json_encode(common::load_model('shop_model', 'get_search_filter',[ $_POST['args'][0], $_POST['args'][1], $_POST['args'][2], $_POST['args'][3], $_POST['args'][4], $_POST['args'][5]]));
        }

        function count_more_visit() {
            echo json_encode(common::load_model('shop_model', 'get_count_more_visit', $_POST['id_car']));
        }

        function order_filter() {
            echo json_encode(common::load_model('shop_model', 'get_order_filter',[$_POST['args'][0],$_POST['args'][1],$_POST['args'][2]]));
        }

        function count_cars_pag() {
            echo json_encode(common::load_model('shop_model', 'get_count_cars_pag'));
        }

        function count_cars_home_filters() {
            echo json_encode(common::load_model('shop_model', 'get_count_cars_home_filters',[$_POST['args'][0],$_POST['args'][1]]));
        }

        function count_order_filter() {
            echo json_encode(common::load_model('shop_model', 'get_count_order_filter', $_POST['value_orderby'][0]['order']));
        }

        function count_cars_related() {
            echo json_encode(common::load_model('shop_model', 'get_count_cars_related', [$_POST['type_car']]));
        }

        function cars_related() {
            echo json_encode(common::load_model('shop_model', 'get_cars_related', [$_POST['type'],$_POST['loaded'],$_POST['items']]));
        }

        function control_likes() {
            echo json_encode(common::load_model('shop_model', 'get_control_likes',[$_POST['id_car'], $_POST['token']]));
        }

        function load_likes_user() {
            echo json_encode(common::load_model('shop_model', 'get_load_likes_user', $_POST['token']));
        }
    }
?>