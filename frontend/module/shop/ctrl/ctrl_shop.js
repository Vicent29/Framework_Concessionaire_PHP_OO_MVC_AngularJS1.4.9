app.controller('ctrl_shop', function ($scope, $rootScope, $route, $window, $location, all_cars, services_shop, services_filters, services_map) {
    $scope.show_car_details = false;
    $scope.show_map_details = false;
    $scope.show_cars_related = false;
    $rootScope.show_btn_car_releted = false;
    $scope.show_all_shop = true;
    localStorage.setItem('num_cars', 3);
    
    if ($route.current.params.id) {
        $scope.show_not_cars = false;
        $scope.show_all_shop = false;
        $scope.show_car_details = true;
        $scope.show_map_details = true;
        $scope.show_cars_related = true;
        let id = $location.path().split('/')[2];
        services_shop.load_details(id);
    }else if (localStorage.getItem('filters') ) {
        services_filters.load_shop_filters();
        services_filters.highlightFilters();
    } else if (localStorage.getItem('brand_filter')) {
        services_filters.load_brand_filter();
    } else if (localStorage.getItem('category_filter')) {
        services_filters.load_category_filter();
    } else if (localStorage.getItem('type_motor_filter')) {
        services_filters.load_motor_filter();
    } else if (localStorage.getItem('search')) {
        services_filters.load_search_filter();
        services_filters.highlightSearch();
    } else if (localStorage.getItem('order')) {
        services_filters.load_orderby_filter();
        $rootScope.select_orderby = localStorage.getItem('order');
    } else if (localStorage.getItem('redirect_like')) {
        services_shop.redirect_login_like();
    } else {
        $scope.show_all_shop = true;
        $rootScope.select_cars = all_cars;
        services_map.load_map(all_cars, "list");
    }

    $rootScope. search_filters_home = function (color, door, catgoria) {
        services_filters.save_shop_filters(color, door, catgoria);
        $window.location.reload();
    }

    $rootScope.order_btn = function (select_orderby) {
        services_filters.save_orderby(select_orderby);
        $window.location.reload();
    }

    $scope.remove_filters_shop = function () {
        services_filters.remove_all_filters();
        $window.location.reload();
    }

    $rootScope.redirect_details = function () {
        location.href = "#/details/" + this.car.id_car; 
    }
 
    $rootScope.more_cars_related = function () {
        var cars_releted= JSON.parse( localStorage.getItem('cars_releted'));
        console.log(cars_releted.length +" <= "+ localStorage.getItem('num_cars'));
        
        localStorage.setItem('num_cars', localStorage.getItem('num_cars') + 3);

        if (cars_releted.length <= localStorage.getItem('num_cars')) {
            $rootScope.show_btn_car_releted = false;
        }else {
            $rootScope.show_btn_car_releted = true;
        } 
        $rootScope.info_cars_related = cars_releted.splice(0, localStorage.getItem('num_cars'));
    }

});//end controller