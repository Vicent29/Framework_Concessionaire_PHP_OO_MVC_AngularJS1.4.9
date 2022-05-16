var app = angular.module('Framework_Concessionaire_PHP_OO_MVC_AngularJS1.4.9', ['ngRoute', 'toastr']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/contact", {
            templateUrl: "frontend/module/contact/view/contact.html", 
            controller: "ctrl_contact"
        }).otherwise("/home", {
            templateUrl: "frontend/module/contact/view/contact.html", 
            controller: "ctrl_contact"
        });
}]);