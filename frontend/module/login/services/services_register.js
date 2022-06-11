app.factory("services_register", ["services", "services_localstorage", "$location", "$window", "$rootScope", "toastr", function (services, services_localstorage, $location, $window, $rootScope, toastr) {
    let service = { register: register, veryfy_email_user: veryfy_email_user };
    return service;

    function register(data) {
        if (validate_register(data) != 0) {
            services.post('login', 'register', data)
                .then(function (result) {
                    console.log(result);
                    if (result == "error_email") {
                        $rootScope.error_email_reg = "* El email ya esta en uso, asegurate de no tener ya una cuenta"
                    } else if (result == "error_user") {
                        $rootScope.error_username_reg = "* El usuario ya esta en uso, intentalo con otro"
                    } else {
                        toastr.warning("Check registration from email");
                        setTimeout("location.href = '#/login';", 1500);
                    }
                }, function (error) {
                    console.log("Error function login in service_login" + error);
                });
        }

    }
    function validate_register(data) {
        var error = false;
        var username_exp = /^(?=.{5,}$)(?=.*[a-zA-Z0-9]).*$/;
        var mail_exp = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        var pssswd_exp = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;

        if (data['username_reg'] === undefined) {
            $rootScope.error_username_reg = "* Tienes que escribir el usuario";
            error = true;
        } else {
            if (data['username_reg'].length <= 5) {
                $rootScope.error_username_log = "* El username tiene que tener 5 caracteres como minimo";
                error = true;
            } else {
                if (!username_exp.test(data['username_reg'])) {
                    $rootScope.error_username_log = "* No se pueden poner caracteres especiales";
                    error = true;
                } else {
                    $rootScope.error_username_log = "";
                }
            }
        }

        if (data['email_reg'] === undefined) {
            $rootScope.error_email_reg = "* Tienes que escribir un correo";
            error = true;
        } else {
            if (!mail_exp.test(data['email_reg'])) {
                $rootScope.error_email_reg = "* El formato del mail es invalido";
                error = true;
            } else {
                $rootScope.error_email_reg = "";
            }
        }

        if (data['passwd1_reg'] === undefined) {
            $rootScope.error_passwd1_reg = "* Tienes que escribir la contraseña";
            error = true;
        } else {
            if (data['passwd1_reg'].length < 8) {
                $rootScope.error_passwd1_reg = "* La password tiene que tener 8 caracteres como minimo";
                error = true;
            } else {
                if (!pssswd_exp.test(data['passwd1_reg'])) {
                    $rootScope.error_passwd1_reg = "* Debe de contener minimo 8 caracteres, mayusculas, minusculas y simbolos especiales";
                    error = true;
                } else {
                    $rootScope.error_passwd1_reg = "";
                }
            }
        }

        if (data['passwd2_reg'] === undefined) {
            $rootScope.error_passwd2_reg = "* Tienes que repetir la contraseña";
            error = true;
        } else {
            if (data['passwd2_reg'].length < 8) {
                $rootScope.error_passwd2_reg = "* La password tiene que tener 8 caracteres como minimo";
                error = true;
            } else {
                if (data['passwd2_reg'] === data['passwd1_reg']) {
                    $rootScope.error_passwd2_reg = "";
                } else {
                    $rootScope.error_passwd2_reg = "* La password's no coinciden";
                    error = true;
                }
            }
        }

        if (error == true) {
            return 0;
        }

    }

    function veryfy_email_user(token) {
        services.post('login', 'verify_email', { "token_email": token })
            .then(function (result) {
                toastr.success("Verify email succesfully");
                setTimeout("location.href = '#/home';", 1500);
            }, function (error) {
                console.log("Error function login in service_login" + error);
            });
    }


}]);
