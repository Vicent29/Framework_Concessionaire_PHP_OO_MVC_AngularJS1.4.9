app.factory('services_shop', ['services', '$rootScope', 'services_map', function (services, $rootScope, services_map) {
    let service = {load_details:load_details, redirect_login_like:redirect_login_like, cars_releted:cars_releted };
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
                cars_releted(response[0][0].motor);
                count_more_visit(id_car);

            }else {
                console.log("error with details" + error);
            }
        }, function (error) {
            console.log(error);
        });
    }

    function cars_releted(type_car){
        services.post('shop', 'cars_related', {'type': type_car})
        .then(function (response) {
            localStorage.setItem('cars_releted', JSON.stringify(response));
            $rootScope.all_cars_releted = response;
            if  ($rootScope.all_cars_releted.length <= 3 ) {
               $rootScope.show_btn_car_releted = false;
            }else {
                $rootScope.show_btn_car_releted = true;
            }
            $rootScope.info_cars_related = $rootScope.all_cars_releted.splice(0,3);
        }, function (error) {
            console.log("error cars related" + error);
        });

    }

    function count_more_visit(id_car){
        services.post('shop', 'count_more_visit', {'id_car':id_car});
    }
    
    function redirect_login_like() {
        console.log("Redirect services_sho redirect like");
    }

}]);