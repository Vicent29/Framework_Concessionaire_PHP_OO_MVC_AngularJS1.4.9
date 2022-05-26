app.controller('ctrl_shop', function ($scope, $rootScope, $window, toastr, services_shop, services_filters, all_cars) {
    
    $scope.show_car_details = false;
    $scope.show_map_details = false;
    $scope.show_all_shop = false;

    if (localStorage.getItem('filters') ) {
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
    }

    $scope.remove_filters_shop = function () {
        services_filters.remove_all_filters();
        $window.location.reload();
    }

    $scope.redirect_details = function () {
        $scope.show_not_cars = false;
        $scope.show_all_shop = false;
        $scope.show_car_details = true;
        $scope.show_map_details = true;
        services_shop.load_details(this.car.id_car);
    }




});//end controller