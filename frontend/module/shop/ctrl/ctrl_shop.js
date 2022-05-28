app.controller('ctrl_shop', function ($scope, $rootScope, $route, $window, $location, all_cars, services_shop, services_filters, services_map) {
    $scope.show_car_details = false;
    $scope.show_map_details = false;
    $scope.show_all_shop = true;
    
    if ($route.current.params.id) {
        $scope.show_not_cars = false;
        $scope.show_all_shop = false;
        $scope.show_car_details = true;
        $scope.show_map_details = true;
        let id = $location.path().split('/')[2];
        services_shop.load_details(id);
    }else if (localStorage.getItem('filters') ) {
        services_filters.shop_filters();
        // highlightFilters();
    } else if (localStorage.getItem('brand_filter')) {
        services_filters.load_brand_filter();
    } else if (localStorage.getItem('category_filter')) {
        services_filters.load_category_filter();
    } else if (localStorage.getItem('type_motor_filter')) {
        services_filters.load_motor_filter();
    } else if (localStorage.getItem('search')) {
        services_filters.load_search_filter();
        // highlightSearch();
    } else if (localStorage.getItem('order')) {
        services_filters.load_orderby_filter();
        // highlightOrderBy();
    } else if (localStorage.getItem('redirect_like')) {
        services_shop.redirect_login_like();
    } else {
        $scope.show_all_shop = true;
        $rootScope.select_cars = all_cars;
        services_map.load_map(all_cars, "list");
    }

    $scope.remove_filters_shop = function () {
        services_filters.remove_all_filters();
        $window.location.reload();
    }

    $rootScope.redirect_details = function () {
        location.href = "#/details/" + this.car.id_car; 
    }

});//end controller