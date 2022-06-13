app.factory('services_secure_login', ['services', '$window', '$location', 'toastr', function (services, $window, $location, toastr) {
    let service = { protecturl: protecturl, control_activity: control_activity, refresh_token: refresh_token, refresh_cookie: refresh_cookie };
    return service;

    function protecturl() {
        var token = localStorage.getItem('token');
        services.post('login', 'controluser', { 'token': token })
            .then(function (data) {
                if (data == "Correct_User") {
                    console.log("CORRECTO-->El usario coincide con la session");
                } else if (data == "Wrong_User") {
                    console.log("INCORRCTO-->Peligro estan intentando acceder a una cuenta");
                    logout_auto();
                }
            }, function (error) {
                console.log("ANONYMOUS_user");
            });
    }

    function control_activity() {
        var token = localStorage.getItem('token');
        if (token) {
            services.post('login', 'actividad')
                .then(function (response) {
                    if (response == "inactivo") {
                        console.log("usuario INACTIVO");
                        logout_auto();
                    } else {
                        console.log("usuario ACTIVO")
                    }
                }, function (error) {
                    console.log("Error Control_activity" + error);
                });
        } else {
            console.log("No hay usario logeado");
        }
    }

    function refresh_token() {
        var token = localStorage.getItem('token');
        if (token) {

            services.post('login', 'refresh_token', { 'token': token })
                .then(function (data_token) {
                    if (data_token == 'error') {
                        logout_auto();
                    } else {
                        localStorage.setItem("token", data_token);
                        location.reload();
                        // load_menu();
                    }
                }, function (error) {
                    console.log("Error Refresh Token" + error);
                });
        }
    }

    function refresh_cookie() {
        services.post('login', 'refresh_cookie')
            .then(function (response) {
                console.log("Refresh cookie correctly");
            }, function (error) {
                console.log("Error Refresh Coookie" + error);
            });
    }

    function logout_auto() {
        localStorage.removeItem('token');
        toastr.warning("Se ha cerrado la cuenta por seguridad!!");
        $window.location.href = '#/login';
    }
}]);