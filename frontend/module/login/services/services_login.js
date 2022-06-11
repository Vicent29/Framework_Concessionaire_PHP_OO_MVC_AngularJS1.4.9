app.factory("services_login", ["services", "services_localstorage", "$location", "$window", "$rootScope", "toastr",function (services, services_localstorage, $location, $window, $rootScope, toastr){
    let service = { login: login };
    return service;

    function login(data) {
        if (validate_login(data) != 0) {
            services.post('login', 'login', data)
                .then(function (result) {
                    var result = JSON.parse(result);
                    if (result == "error_user") {
                        $rootScope.error_username_log = "* El usario no existe,asegurase de que lo a escrito correctamente"
                    } else if (result == "error_actiavate") {
                        toastr.warning("El usario esta desacivado, revise su bandeja de entrada");
                        setTimeout($location.path("/home"), 1000);
                    }
                    else if (result == "error_passwd") {
                        $rootScope.error_passwd_log = "* La contraseña es incorrecta"
                    } else {
                        services_localstorage.setSession(result)
                        toastr.success("Loged succesfully");
                        if (localStorage.getItem('redirect_like')) {
                            $location.path("/shop");
                        } else {
                            console.log("Dentro del else");
                            localStorage.setItem('reload', "yes");
                            $location.path("/home");
                        }
                    }
                }, function (error) {
                    console.log("Error function login in service_login" + error);
                });
        }
    }
    function validate_login(data) {
        var error = false;

        if (data['username_log'] === undefined) {
            $rootScope.error_username_log = "* Tienes que escribir el usuario";
            error = true;
        } else {
            if (data['username_log'].length <= 5) {
                $rootScope.error_username_log = "* El usuario tiene que tener 5 caracteres como minimo";
                error = true;
            } else {
                $rootScope.error_username_log = "";
            }
        }
        if (data['passwd_log'] === undefined) {
            $rootScope.error_passwd_log = "* Tienes que escribir la contraseña";
            error = true;
        } else {
            $rootScope.error_passwd_log = "";
        }
        if (error == true) {
            return 0;
        }
    }

}]);
