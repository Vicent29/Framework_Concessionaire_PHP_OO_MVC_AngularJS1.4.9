app.factory('services_shop', ['services', '$rootScope', 'services_map', function (services, $rootScope, services_map) {
    let service = {load_details:load_details, redirect_login_like:redirect_login_like };
    return service;

    function load_details(id_car) {
        $rootScope.myInterval = 3000;
        $rootScope.keyboard=true;
        $rootScope.noWrapSlides = false;
        services.post('shop', 'details_car', {'id': id_car})
        .then(function (response) {
            if (response) {
                $rootScope.imgs_details = response[1][0];
                $rootScope.info_details = response[0][0];
                services_map.load_map($rootScope.info_details, "details");
            }else {
                console.log("error with details");
            }
            
        }, function (error) {
            console.log(error);
        });
    }
    
    function redirect_login_like() {
        console.log("Redirect services_sho redirect like");
    }

}]);