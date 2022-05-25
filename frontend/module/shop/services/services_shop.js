app.factory('services_shop', ['services', '$rootScope', function (services, $rootScope) {
    let service = { redirect_login_like:redirect_login_like };
    return service;

    function redirect_login_like() {
        console.log("Redirect services_sho redirect like");
    }

}]);