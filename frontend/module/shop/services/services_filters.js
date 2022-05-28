app.factory('services_filters', ['services', 'services_map', '$rootScope', function (services, services_map, $scope, $rootScope) {
    let service = { shop_filters: shop_filters, load_brand_filter: load_brand_filter, load_category_filter: load_category_filter, load_motor_filter: load_motor_filter, load_search_filter: load_search_filter, load_orderby_filter: load_orderby_filter, remove_all_filters: remove_all_filters, save_orderby: save_orderby, highlightSearch: highlightSearch };
    return service;

    function shop_filters() {
        console.log("Shop filtros services");
    }

    function load_brand_filter() {
        var opc = "brand";
        var array_brand = JSON.parse(localStorage.getItem('brand_filter'));
        var brand = array_brand[0].name_brand[0];
        const atributos = [opc, brand];
        select_filters("home_filter", atributos);
    }

    function load_category_filter() {
        var opc = "cate";
        var array_category = JSON.parse(localStorage.getItem('category_filter'));
        var category = array_category[0].category_home[0];
        const atributos = [opc, category];
        select_filters("home_filter", atributos);

    }

    function load_motor_filter() {
        var opc = "tmotor";
        var array_tmotor = JSON.parse(localStorage.getItem('type_motor_filter'));
        var motor = array_tmotor[0].name_tmotor[0];
        const atributos = [opc, motor];
        select_filters("home_filter", atributos);
    }


    function load_search_filter() {
        var search = JSON.parse(localStorage.getItem('search'));
        var type_car = search[1]['type_car'];
        var brand_car = search[2]['brand_car'];
        var city = search[0]['city'];
        var opc_sql = "select";
        const atributos = [type_car, brand_car, city];
        select_filters("operations_search_filter", atributos);
    }

    function highlightSearch() {
        var search = JSON.parse(localStorage.getItem('search'));
        if (search[1].type_car != 0) {
            $scope.selected_type_car = search[1].type_car;
        }
        if (search[2].brand_car != 0) {
            $scope.selected_brand = search[2].brand_car;
        }
        if (search[0].city != 0) {
            $scope.autocomplete = search[0].city;
        }
    }

    function save_orderby(order_for) {
        localStorage.removeItem('filters');
        localStorage.removeItem('brand_filter');
        localStorage.removeItem('category_filter');
        localStorage.removeItem('type_motor_filter');
        localStorage.removeItem('search');
        localStorage.setItem('order', order_for);
    }

    function load_orderby_filter() {
        var one_orderby = localStorage.getItem('order');
        const atributos = [one_orderby];
        $rootScope.select_orderby = one_orderby;
        select_filters("order_filter", atributos);
    }

    function select_filters(func_type, atributos) {

        services.post('shop', func_type, atributos)
            .then(function (response) {
                if (response == "") {
                    $scope.show_not_cars = true;
                    services_map.load_map("null", "list");
                } else {
                    $scope.show_not_cars = false;
                    $scope.show_all_shop = true;
                    $scope.select_cars = response;
                    services_map.load_map(response, "list");
                }
            }, function (error) {
                console.log(error);
            });
    }

    function remove_all_filters() {
        localStorage.removeItem('total_prod');
        localStorage.removeItem('page');
        localStorage.removeItem('filters');
        localStorage.removeItem('brand_filter');
        localStorage.removeItem('category_filter');
        localStorage.removeItem('type_motor_filter');
        localStorage.removeItem('search');
        localStorage.removeItem('order');
    }
}]);