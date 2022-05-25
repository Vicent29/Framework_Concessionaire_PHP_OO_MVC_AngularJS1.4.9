app.controller('ctrl_shop', function ($scope, $rootScope, $window, toastr, services_shop, services_filters, all_cars) {
    //esconder mapas del details//
    $scope.show_map_details = false;

    //////////si hay filtros op no///////
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
        $rootScope.select_cars = all_cars;
    }

    

    $scope.remove_filters_shop = function () {
        services_filters.remove_all_filters();
        $window.location.reload();
    }


});//end controller