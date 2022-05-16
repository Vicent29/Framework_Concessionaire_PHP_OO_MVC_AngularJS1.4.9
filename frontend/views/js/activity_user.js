function protecturl() {
    var token = localStorage.getItem('token');
    ajaxPromise('?module=login&op=controluser', 'POST', 'JSON', { 'token': token })
        .then(function(data) {
            if (data == "Correct_User") {
                console.log("CORRECTO-->El usario coincide con la session");
            } else if (data == "Wrong_User") {
                console.log("INCORRCTO-->Peligro estan intentando acceder a una cuenta");
                logout_auto();
            }
        }).catch(function() { console.log("ANONYMOUS_user") });
}

function control_activity() {
    var token = localStorage.getItem('token');
    if (token) {
        ajaxPromise('?module=login&op=actividad', 'POST', 'JSON')
            .then(function(response) {
                if (response == "inactivo") {
                    console.log("usuario INACTIVO");
                    logout_auto();
                } else {
                    console.log("usuario ACTIVO")
                }
            }).catch(function() { console.log("Error Control_activity") });
    }else {
        console.log("No hay usario logeado");
    }

}

function refresh_token() {
    var token = localStorage.getItem('token');
    if (token) {
        ajaxPromise('?module=login&op=refresh_token', 'POST', 'JSON', { 'token': token })
            .then(function(data_token) {
                if (data_token == 'error') {
                    logout_auto();
                }else{
                    localStorage.setItem("token", data_token);
                    load_menu();
                }
            }).catch(function() { console.log("Error Refresh Token") });
    }

}

function refresh_cookie() {
    ajaxPromise('?module=login&op=refresh_cookie', 'POST', 'JSON')
        .then(function(response) {
            console.log("Refresh cookie correctly");
        }).catch(function() { console.log("Error Refresh Coookie") });
}

function logout_auto() {
    localStorage.removeItem('token');
    toastr.warning("Se ha cerrado la cuenta por seguridad!!");
    setTimeout('window.location.href = "?module=login&op=login_register_view";', 2000);
}

$(document).ready(function() {
    setInterval(function() { control_activity() }, 600000); //10min= 600000ms
    protecturl();
    setInterval(function() { refresh_token() }, 600000);
    setInterval(function() { refresh_cookie() },600000);
});