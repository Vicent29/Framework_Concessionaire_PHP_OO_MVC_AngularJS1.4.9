app.controller('ctrl_shop', function ($scope, $rootScope, $route, $window, $location, all_cars, services_shop, services_filters, services_pagination, services_like, toastr) {
    $scope.show_car_details = false;
    $scope.show_map_details = false;
    $scope.show_cars_related = false;
    $rootScope.show_btn_car_releted = false;
    $scope.show_all_shop = true;
    $scope.show_pagination = true;

    localStorage.setItem('num_cars', 3);

    if (localStorage.getItem('reload') == "yes") {
        localStorage.removeItem('reload');
        $window.location.reload();
    } else {
        if ($route.current.params.id) {
            $scope.show_not_cars = false;
            $scope.show_all_shop = false;
            $scope.show_pagination = false;
            $scope.show_car_details = true;
            $scope.show_map_details = true;
            $scope.show_cars_related = true;
            let id = $location.path().split('/')[2];
            services_shop.load_details(id);
        } else if (localStorage.getItem('filters')) {
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
            services_like.redirect_login_like();
        } else {
            $scope.show_all_shop = true;
            services_pagination.pagination(all_cars);
        }
    }

    $rootScope.search_filters_home = function (color, door, catgoria) {
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
        var cars_releted = JSON.parse(localStorage.getItem('cars_releted'));
        console.log(cars_releted.length + " <= " + localStorage.getItem('num_cars'));

        localStorage.setItem('num_cars', localStorage.getItem('num_cars') + 3);

        if (cars_releted.length <= localStorage.getItem('num_cars')) {
            $rootScope.show_btn_car_releted = false;
        } else {
            $rootScope.show_btn_car_releted = true;
        }
        $rootScope.info_cars_related = cars_releted.slice(0, localStorage.getItem('num_cars'));
    }

    $rootScope.change_page = function (page) {
        services_pagination.change_page(page);
    }

    $rootScope.not_page = function (page) {
        if (page == "less") {
            toastr.warning("You are on the first page");
        } else if (page == "more") {
            toastr.warning("You are on the last page");
        }
    }

    $rootScope.click_like = function () {
        var procedencia = $location.path().split("/");
        if (localStorage.token) {
            if (procedencia[1] == "details") {
                console.log(this.info_details.id_car);
                services_like.add_favs(this.info_details.id_car);
                if (this.info_details.favs_class == "fa-solid fa-heart fa-lg like_red") {
                    this.info_details.favs_class = "fa-solid fa-heart fa-lg";
                } else {
                    this.info_details.favs_class = "fa-solid fa-heart fa-lg like_red";
                }
            } else if (procedencia[1] == "shop") {
                services_like.add_favs(this.car.id_car);
                if (this.car.favs_class == "fa-solid fa-heart fa-lg like_red") {
                    this.car.favs_class = "fa-solid fa-heart fa-lg";
                } else {
                    this.car.favs_class = "fa-solid fa-heart fa-lg like_red";
                }
            }

        } else {
            var procedencia = $location.path().split("/");
            if (procedencia[1] == "details") {
                services_like.redirect_like(this.info_details.id_car, "details");
            } else {
                services_like.redirect_like(this.car.id_car, "list_all");
            }
        }
    }


});//end controller