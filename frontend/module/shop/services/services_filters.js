app.factory('services_filters', ['services', '$rootScope', '$window', function (services, $scope, $rootScope, $window) {
    let service = { shop_filters: shop_filters, load_brand_filter: load_brand_filter, load_category_filter: load_category_filter, load_motor_filter: load_motor_filter, load_search_filter: load_search_filter, load_orderby_filter: load_orderby_filter, remove_all_filters: remove_all_filters };
    return service;

    function shop_filters(offset = "0", limit = "20") {
        console.log("Shop filtros services");
    }

    function load_brand_filter(offset = "0", limit = "20") {
        localStorage.removeItem('page');
        var opc = "brand";
        var array_brand = JSON.parse(localStorage.getItem('brand_filter'));
        var brand = array_brand[0].name_brand[0];
        const atributos = [offset, limit, opc, brand];
        select_filters("home_filter", atributos);
    }

    function load_category_filter(offset = "0", limit = "20") {
        localStorage.removeItem('page');
        var opc = "cate";
        var array_category = JSON.parse(localStorage.getItem('category_filter'));
        var category = array_category[0].category_home[0];
        const atributos = [offset, limit, opc, category];
        select_filters("home_filter", atributos);

    }

    function load_motor_filter(offset = "0", limit = "20") {
        localStorage.removeItem('page');
        var opc = "tmotor";
        var array_tmotor = JSON.parse(localStorage.getItem('type_motor_filter'));
        var motor = array_tmotor[0].name_tmotor[0];
        const atributos = [offset, limit, opc, motor];
        select_filters("home_filter",atributos);
    }


    function load_search_filter(offset = "0", limit = "20") {
        localStorage.removeItem('page');
        var search = JSON.parse(localStorage.getItem('search'));
        var type_car = search[1]['type_car'];
        var brand_car = search[2]['brand_car'];
        var city = search[0]['city'];
        var opc_sql = "select";
        const atributos= [offset, limit, type_car, brand_car, city, opc_sql];
        select_filters("operations_search_filter",atributos);
    }

    function load_orderby_filter(offset = "0", limit = "20") {
        console.log("load_orderby_filter");
    }


    function select_filters(func_type, atributos) {
        services.post('shop', func_type, atributos)
            .then(function (response) {
                if (response == "") {
                    $scope.show_not_cars = true;
                }else {
                    $scope.show_not_cars = false;
                    $scope.show_all_shop = true;
                    $scope.select_cars = response;
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