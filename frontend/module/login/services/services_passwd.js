app.factory("services_passwd", ["services", "$location", "$window", "$rootScope", "$route", "toastr", function (services, $location, $window, $rootScope, $route, toastr) {
    let service = { email_recuperate: email_recuperate, send_new_passwd: send_new_passwd };
    return service;

    // ASK EMAIL

    function email_recuperate(email) {
        if (validate_send_email_rec(email) != 0) {
            var opc_passwd = $route.current.params.opc;
            services.post('login', 'send_recover_email', { "email_rec": email, "opc_passswd": opc_passwd })
                .then(function (data) {
                    if (data == '"error_email"') {
                        $rootScope.error_email_rec = "* The email doesn't exist"
                    } else if (data == '"email_social_login"') {
                        toastr.error("You can't change the password, the email belongs to google or git hub");
                        $window.location.href = '#/login';
                    } else {
                        localStorage.setItem("email_token", data);
                        toastr.warning("Check email sended");
                        $window.location.href = '#/login ';
                    }
                }, function (error) {
                    console.log("Error send email recuperate passwd" + error);
                });
        }

    }
    function validate_send_email_rec(email) {
        var mail_exp = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        var error = false;

        if (email == undefined) {
            $rootScope.error_email_rec = "* Tienes que escribir un correo valido";
            error = true;
        } else {
            if (!mail_exp.test(email)) {
                $rootScope.error_email_rec = "* Debe de cumplir el formato de email";
                error = true;
            } else {
                $rootScope.error_email_rec = "";
            }
        }
        if (error == true) {
            return 0;
        }
    }


    // RECOVER AND CHANGE PASSSWD
    function send_new_passwd(form, email_token, opc_passwd) {
        if (opc_passwd == "modificate") {
            if (validate_modificate_password(form) != 0) {
                angular.extend(form, { "email_token": email_token }); //Mejora para añadir a la varible form una nueva clave/valor
                services.post('login', 'send_new_passwd_modificate', form)
                    .then(function (data) {
                        if (data == '"error_old_passwd"') {
                            if (data == '"error_old_passwd"') {
                                $rootScope.error_old_passwd = "* The passsword is incorrect";
                            }
                        } else if (data == '"correctly_update"') {
                            $rootScope.error_old_passwd = "";
                            toastr.success("Password changed successfully");
                            $window.location.href = '#/login';
                        }

                    }, function (error) {
                        console.log("Error function send_new_passwd_modificate in service_passwd" + error);
                    });
            }
        } else if (opc_passwd == "recover") {
            if (validate_recover_password(form) != 0) {
                angular.extend(form, { "email_token": email_token }); //Mejora para añadir a la varible form una nueva clave/valor
                services.post('login', 'send_new_passwd_recover', form)
                    .then(function (data) {
                        if (data == '"correctly_update"') {
                            toastr.success("Password changed successfully");
                            $window.location.href = '#/login';
                        }
                    }, function (error) {
                        console.log("Error function send_new_passwd_recover in service_passwd" + error);
                    });
            }
        }
    }

    // VALIDATES RECOVER AND CHANGE PASSSWD

    function validate_modificate_password(form) {
        var pssswd_exp = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
        var error = false;

        if (form.old_passwd === undefined) {
            $rootScope.error_old_passwd = "* Tienes que escribir tu antigua contraseña";
            error = true;
        } else {
            if (form.old_passwd.length < 8) {
                $rootScope.error_old_passwd = "* La password tiene que tener 8 caracteres como minimo";
                error = true;
            } else {
                if (!pssswd_exp.test(form.old_passwd)) {
                    $rootScope.error_old_passwd = "* Debe de contener mayusculas, minusculas y simbolos especiales";
                    error = true;
                } else {
                    $rootScope.error_old_passwd = "";
                }
            }
        }

        if (form.new_passwd === undefined) {
            $rootScope.error_new_passwd = "* Debe de introducir la nueva contraseña";
            error = true;
        } else if (!pssswd_exp.test(form.new_passwd)) {
            $rootScope.error_new_passwd = "* Debe de contener mayusculas, minusculas y simbolos especiales";
            error = true;
        } else {
            if (form.new_passwd.length < 8) {
                $rootScope.error_new_passwd = "La password tiene que tener 8 caracteres como minimo";
                error = true;
            } else {
                console.log(form.new_passwd == form.old_passwd);
                if (form.new_passwd == form.old_passwd) {
                    $rootScope.error_new_passwd = "* Introduzca una pasword diferente a la anterior";
                } else {
                    $rootScope.error_new_passwd = "";
                }
            }
        }
        if (error == true) {
            return 0;
        }
    }


    function validate_recover_password(form) {
        var pssswd_exp = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
        var error = false;
        if (form.new_passwd1 === undefined) {
            $rootScope.error_new_passwd1 = "* Debe de introducir la nueva contraseña";
            error = true;
        } else if (form.new_passwd1.length < 8) {
            $rootScope.error_new_passwd1 = "* La password tiene que tener 8 caracteres como minimo";
            error = true;
        } else {
            if (!pssswd_exp.test(form.new_passwd1)) {
                $rootScope.error_new_passwd1 = "* Debe de contener mayusculas, minusculas y simbolos especiales";
                error = true;
            } else {
                $rootScope.error_new_passwd1 = "";
            }
        }
        if (form.new_passwd2 === undefined) {
            $rootScope.error_new_passwd2 = "* Debe de repetir la nueva contraseña";
            error = true;
        } else if (form.new_passwd2.length < 8) {
            $rootScope.error_new_passwd2 = "* La password tiene que tener 8 caracteres como minimo";
            error = true;
        } else {
            if (!pssswd_exp.test(form.new_passwd2)) {
                $rootScope.error_new_passwd2 = "* Debe de contener mayusculas, minusculas y simbolos especiales";
                error = true;
            } else {
                if (form.new_passwd1 != form.new_passwd2) {
                    $rootScope.error_new_passwd2 = "* La contarseña no coincide con la anterior";
                    error = true;
                } else {
                    $rootScope.error_new_passwd1 = "";
                }
            }
        }
        if (error == true) {
            return 0;
        }
    }

}]);
