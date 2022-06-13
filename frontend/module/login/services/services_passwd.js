app.factory("services_passwd", ["services", "services_localstorage", "$location", "$window", "$rootScope", "$route", "toastr", function (services, services_localstorage, $location, $window, $rootScope, $route, toastr) {
    let service = { email_recuperate: email_recuperate, send_new_passwd: send_new_passwd };
    return service;

    // ASK EMAIL

    function email_recuperate(email) {
        if (validate_send_email_rec(email) != 0) {
            var opc_passwd = $route.current.params.opc;
            services.post('login', 'send_recover_email', { "email_rec": email, "opc_passswd": opc_passwd })
                .then(function (data) {
                    if (data == "error_email") {
                        $rootScope.error_email_rec = "* The email doesn't exist"
                    } else if (data == "email_social_login") {
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
                var data = form + email_token;
                console.log(data);
                // ajaxPromise('?module=login&op=send_new_passwd_modificate', 'POST', 'JSON', data)
                //     .then(function (data) {
                //         if (data == "error_old_passwd") {
                //             $("#error_old_passwd").html("* The passsword is incorrect");
                //         } else if (data == "correctly_update") {
                //             $("#error_old_passwd").html("");
                //             toastr.success("Password changed successfully");
                //             setTimeout('window.location.href = "?module=login&op=login_register_view&load_all_view"; ', 1500);
                //         }
                //         // }).catch(function () {
                //         //console.log("Error send_email_modificate_passwd");
                //     });
            }
        } else if (opc_passwd == "recover") {
            if (validate_recover_password(form) != 0) {
                angular.extend(form, {"email_token":email_token}); //Mejora para añadir a la varible form una nueva clave/valor
                services.post('login', 'send_new_passwd_recover', form)
                    .then(function (data) {
                        if (data == '"correctly_update"') {
                            toastr.success("Password changed successfully");
                            $window.location.href = '#/login';
                        }
                    }, function (error) {
                        console.log("Error function login in service_login" + error);
                    });
            }
        }
    }

    // VALIDATES RECOVER AND CHANGE PASSSWD

    function validate_modificate_password(form) {
        // var pssswd_exp = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
        // var error = false;

        // if (document.getElementById('old_passwd').value.length === 0) {
        //     document.getElementById('error_old_passwd').innerHTML = "* Tienes que escribir tu antigua contraseña";
        //     error = true;
        // } else {
        //     if (document.getElementById('old_passwd').value.length < 8) {
        //         document.getElementById('error_old_passwd').innerHTML = "* La password tiene que tener 8 caracteres como minimo";
        //         error = true;
        //     } else {
        //         if (!pssswd_exp.test(document.getElementById('old_passwd').value)) {
        //             document.getElementById('error_old_passwd').innerHTML = "* Debe de contener mayusculas, minusculas y simbolos especiales";
        //             error = true;
        //         } else {
        //             document.getElementById('error_old_passwd').innerHTML = "";
        //         }
        //     }
        // }

        // if (document.getElementById('new_passwd').value.length === 0) {
        //     document.getElementById('error_new_passwd').innerHTML = "* Debe de introducir la nueva contraseña";
        //     error = true;
        // } else if (!pssswd_exp.test(document.getElementById('new_passwd').value)) {
        //     document.getElementById('error_new_passwd').innerHTML = "* Debe de contener mayusculas, minusculas y simbolos especiales";
        //     error = true;
        // } else {
        //     if (document.getElementById('new_passwd').value.length < 8) {
        //         document.getElementById('error_new_passwd').innerHTML = "La password tiene que tener 8 caracteres como minimo";
        //         error = true;
        //     } else {
        //         if (document.getElementById('new_passwd').value === document.getElementById('old_passwd').value) {
        //             document.getElementById('error_new_passwd').innerHTML = "* Introduzca una pasword diferente a la anterior";
        //         } else {
        //             document.getElementById('error_new_passwd').innerHTML = "";
        //         }
        //     }
        // }
        // if (error == true) {
        //     return 0;
        // }
    }


    function validate_recover_password(form) {
        console.log(form.new_passwd1);
        console.log(form.new_passwd2);
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
