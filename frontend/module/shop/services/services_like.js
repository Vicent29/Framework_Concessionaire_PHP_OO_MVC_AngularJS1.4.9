app.factory('services_like', ['services', '$rootScope', '$location', 'toastr', function (services, $rootScope, $location, toastr) {
    let service = { load_likes: load_likes, add_favs: add_favs, redirect_like: redirect_like, redirect_login_like: redirect_login_like };
    return service;

    function load_likes() {
        var token = localStorage.getItem('token');
        var procedencia = $location.path().split("/");
        if (token) {
            services.post('shop', 'load_likes_user', { 'token': token })
                .then(function (response) {
                    var ids_likes = [];
                    var all_car = [];
                    for (row in response) {
                        ids_likes.push(response[row]['id_car']);
                    }
                    if (procedencia[1] == "shop") {
                        for (row in $rootScope.select_cars) {
                            $rootScope.select_cars[row].favs_class = "fa-solid fa-heart fa-lg";
                            all_car.push($rootScope.select_cars[row]);
                        }
                        for (row in all_car) {
                            if (ids_likes.includes(all_car[row].id_car)) {
                                all_car[row].favs_class = "fa-solid fa-heart fa-lg like_red"
                            }
                        }
                    } else {
                        $rootScope.info_details.favs_class = "fa-solid fa-heart fa-lg";
                        if (ids_likes.includes($rootScope.info_details.id_car)) {
                            $rootScope.info_details.favs_class = "fa-solid fa-heart fa-lg like_red"
                        }
                    }

                }, function (error) {
                    console.log("load_cars" + error);
                });
        } else {
            if (procedencia[1] == "shop") {
                for (row in $rootScope.select_cars) {
                    $rootScope.select_cars[row].favs_class = "fa-solid fa-heart fa-lg ";
                }
            } else {
                $rootScope.info_details.favs_class = "fa-solid fa-heart fa-lg";
            }
        }
    }

    function add_favs(id_car) {
        var token = localStorage.getItem('token');
        services.post('shop', 'control_likes', { 'id_car': id_car, 'token': token })
            .then(function (response) {
            }, function (error) {
                console.log("Save like in bd" + error);
            });
    }


    function redirect_like(id_car, lugar) {
        const redirect = [];
        redirect.push(id_car, lugar);
        localStorage.setItem('redirect_like', redirect);
        localStorage.setItem('id_car', id_car);
        toastr.warning("Debes de iniciar session");
        location.href = '#/login';
        setTimeout("location.href = '#/login';", 1000);
    }


    function redirect_login_like() {
        console.log("Redirect services_shop redirect like");
        var redirect = localStorage.getItem('redirect_like').split(",");
        if (redirect[1] == "details") {
            location.href = "#/details/" + redirect[0]; 
            localStorage.removeItem('redirect_like');
            localStorage.removeItem('page');
        } else if (redirect[1] == "list_all") {
            console.log("Redirect shop");
            localStorage.removeItem('redirect_like');
            localStorage.setItem('reload', "yes");
            location.href = "#/shop/"
        }
    }

}]);