var app = angular.module('Framework_Concessionaire_PHP_OO_MVC_AngularJS1.4.9', ['ngRoute', 'toastr', 'ui.bootstrap']);
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
            // resolve: {
                
            // }
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
                    return services.get_api('https://www.googleapis.com/books/v1/volumes?q=electric%20cars&maxResults=20');
                }
            }
        });
}]);

app.run(function($rootScope, services, services_search){
    services_search.search_type_motor();
    services_search.search_brand();

    $rootScope.click_motor_brand = function(type_motor = 0){
        services_search.search_brand(type_motor);
        $rootScope.search_motor_select= type_motor;
    }

    $rootScope.click_brand = function(brand = 0){
        $rootScope.search_brand_select= brand;
    }

    $rootScope.click_autocomplete = function(type_motor = 0, brand = 0, city = 0){
        $rootScope.show_city = true;
        $rootScope.search_motor_select= type_motor;
        $rootScope.search_brand_select= brand;
        services_search.search_autocomplete(type_motor, brand, city);
    }

    $rootScope.click_select_city = function(){
        $rootScope.show_city = false;
        $rootScope.search_city_select = this.city.city;
    }
    $rootScope.click_search = function(){
        services_search.btn_search();
    }
});