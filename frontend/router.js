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
        })
        .otherwise("/home", {
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

app.run(function($rootScope, services){
    console.log("Soy el apprun");
});