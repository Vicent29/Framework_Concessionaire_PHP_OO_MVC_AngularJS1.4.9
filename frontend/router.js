var app = angular.module('Framework_Concessionaire_PHP_OO_MVC_AngularJS1.4.9', ['ngRoute', 'ui.bootstrap', 'infinite-scroll', 'routeStyles', 'toastr']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/contact", {
            templateUrl: "frontend/module/contact/view/contact.html",
            controller: "ctrl_contact"
        }).when("/home", {
            templateUrl: "frontend/module/home/view/home.html",
            controller: "ctrl_home",
            resolve: {
                brands: function (services) {
                    return services.post('home', 'carousel_brand');
                },
                categorys: function (services) {
                    return services.post('home', 'categoria');
                },
                type_motor: function (services) {
                    return services.post('home', 'type');
                },
                books: function (services) {
                    return services.get_api('https://www.googleapis.com/books/v1/volumes?q=electric%20cars&maxResults=20');
                }
            }
        }).when("/shop", {
            templateUrl: "frontend/module/shop/view/shop.html",
            controller: "ctrl_shop",
            resolve: {
                all_cars: function (services) {
                    return services.post('shop', 'all_cars');
                }
            }
        }).when("/details/:id", {
            templateUrl: "frontend/module/shop/view/shop.html",
            controller: "ctrl_shop",
            resolve: {
                all_cars: function () { }
            }
        }).when("/login", {
            templateUrl: "frontend/module/login/view/login_register.html",
            css: ["frontend/module/login/css/login.css"],
            controller: "ctrl_login_register"
        }).when("/register/verify/:token_verify", {
            templateUrl: "frontend/module/login/view/login_register.html",
            css: ["frontend/module/login/css/login.css"],
            controller: "ctrl_login_register"

        }).otherwise("/home", {
            templateUrl: "frontend/module/home/view/home.html",
            controller: "ctrl_home",
            resolve: {
                brands: function (services) {
                    return services.post('home', 'carousel_brand');
                },
                categorys: function (services) {
                    return services.post('home', 'categoria');
                },
                type_motor: function (services) {
                    return services.post('home', 'type');
                },
                books: function (services) {
                    return services.get_api('https://www.googleapis.com/books/v1/volumes?q=electric%20cars&maxResults=40');
                }
            }
        });
}]);

app.run(function ($rootScope, services, services_search, services_logout) {
    $rootScope.count = 0;

    //--- SEARCH ---
    services_search.search_type_motor();
    services_search.search_brand();

    $rootScope.click_motor_brand = function (type_motor = 0) {
        services_search.search_brand(type_motor);
        $rootScope.search_motor_select = type_motor;
    }

    $rootScope.click_brand = function (brand = 0) {
        $rootScope.search_brand_select = brand;
    }

    $rootScope.click_autocomplete = function (type_motor = 0, brand = 0, city = 0) {
        $rootScope.show_city = true;
        $rootScope.search_motor_select = type_motor;
        $rootScope.search_brand_select = brand;
        services_search.search_autocomplete(type_motor, brand, city);
    }

    $rootScope.click_select_city = function () {
        $rootScope.show_city = false;
        $rootScope.search_city_select = this.city.city;
        //Mejora para que el nombre del valor suba al input cuando seleccioanas la ciudad. 
        $rootScope.autocomplete = this.city.city;
    }
    $rootScope.click_search = function () {
        services_search.btn_search();
    }

    // --- LOAD MENU ---
    var token = localStorage.getItem('token');
    // var social_login = localStorage.getItem('social_login');
    if (token) {
        services.post('login', 'data_user', { 'token': token})
            .then(function (data) {
                console.log(data);
                $rootScope.show_user_loged = true;
                $rootScope.show_avatar = true;
                var username = data[0].username.split(' '); //Mejora para quue solo salga el nombre y no los apellidos
                $rootScope.datos_user = { 'username': username[0], 'avatar_user': data[0].avatar };
                if (data.type_user == "client") {
                    console.log("Client loged");
                } else {
                    console.log("Admin loged");
                    //se cargaria la opcion de exceptions o panel de controlador del admin.
                }
                $rootScope.show_login_default = false;
            }, function (error) {
                console.log("error profile user");
            });
    } else {
        console.log("No hay token disponible");
        $rootScope.show_login_default = true;
    }

    // --- LOG OUT ---

    $rootScope.click_log_out = function () {
     services_logout.logout();
    }

});