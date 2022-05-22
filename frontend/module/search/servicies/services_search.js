app.factory('services_search', ['services', '$rootScope', function (services, $rootScope) {
    let service = { search_type_motor: search_type_motor, search_brand: search_brand, search_autocomplete: search_autocomplete, btn_search: btn_search };
    return service;

    function search_type_motor() {
        services.post('search', 'type_car')
            .then(function (response) {
                $rootScope.tmotor_search = response;
            }, function (error) {
                console.log("error search_type_motor");
            });


    }

    function search_brand(type_motor) {
        if (type_motor == undefined || type_motor == 0) {
            services.post('search', 'brand_car')
            .then(function (response) {
                $rootScope.brands_search = response;
            }, function (error) {
                console.log("error search_brand");
            });
        }else {
            services.post('search', 'brand_category', {'type_car': type_motor})
            .then(function (response) {
                $rootScope.brands_search = response;
            }, function (error) {
                console.log("error search_type_motor_brand");
            });
            
        }
        

    }

    function search_autocomplete(type_motor, brand, city) {
        if (city != "") {
            services.post('search', 'autocomplete', {complete: city, type_car: type_motor, brand_car: brand})
            .then(function (response) {
                $rootScope.city_search = response;
            }, function (error) {
                console.log("error search_city");
            });
        }else {
            $rootScope.city_search = [];
        }
    }

    function btn_search() {
        if ($rootScope.search_motor_select == undefined){
            $rootScope.search_motor_select = 0;
        }
        if (($rootScope.search_brand_select == undefined)){
            $rootScope.search_brand_select = 0;
        }
        var search= [];

        if ($rootScope.search_city_select == undefined) {
            search.push({ "city": '0' });
            search.push({ "type_car": $rootScope.search_motor_select});
            search.push({ "brand_car": $rootScope.search_brand_select});
        } else {
            search.push({ "city": $rootScope.search_city_select});
            search.push({ "type_car": $rootScope.search_motor_select});
            search.push({ "brand_car": $rootScope.search_brand_select});
        }

        localStorage.removeItem('total_prod');
        localStorage.removeItem('filters');
        localStorage.removeItem('brand_filter');
        localStorage.removeItem('category_filter');
        localStorage.removeItem('type_motor_filter');
        localStorage.removeItem('order');

        localStorage.setItem('search', JSON.stringify(search));
        location.href = "#/shop";
    }


}]);