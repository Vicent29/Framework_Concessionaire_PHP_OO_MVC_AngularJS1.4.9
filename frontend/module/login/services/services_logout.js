app.factory('services_logout',['services','services_localstorage','$window', function (services, services_localstorage,$window) {
    let service = {logout: logout};
    return service;

    function logout() {
        services.post('login', 'logout')
        .then(function (data) {
            services_localstorage.clearSession();
        }, function (error) {
            console.log("error logout");
        });
    }
}]);


   