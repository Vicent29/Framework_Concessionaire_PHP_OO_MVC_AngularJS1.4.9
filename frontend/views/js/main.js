// ================AJAX-PROMISE================
function ajaxPromise(sUrl, sType, sTData, sData = undefined) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: sUrl,
            type: sType,
            dataType: sTData,
            data: sData,
            beforeSend: function() {
                $("#overlay").fadeIn(300);
            }
        }).done((data) => {
            setTimeout(function() {
                $("#overlay").fadeOut(300);
            }, 500);
            resolve(data)

        }).fail((jqXHR, textStatus, errorThrow) => {
            reject(errorThrow);
        });
    });
}

/*==================== FRIENDLY URL ====================*/
function friendlyURL(url) {
    var link = "";
    url = url.replace("?", "");
    url = url.split("&");
    cont = 0;
    for (var i = 0; i < url.length; i++) {
        cont++;
        var aux = url[i].split("=");
        if (cont == 2) {
            link += "/" + aux[1] + "/";
        } else {
            link += "/" + aux[1];
        }
    }
    //  http://localhost/Framework_Concessionaire_PHP_OO_MVC_AngularJS1.4.9/contact/send_email_contact/
    return window.location.origin + "/Framework_Concessionaire_PHP_OO_MVC_AngularJS1.4.9" + link;
}

//================LOAD-HEADER================
function load_menu() {
    var token = localStorage.getItem('token');
    if (token) {
        ajaxPromise('?module=login&op=data_user', 'POST', 'JSON', { 'token': token })
            .then(function(data) {
                var username= data[0].username.split(' '); //Mejora para quue solo salga el nombre
                if (data.type_user == "client") {
                    console.log("Client loged");
                    $('.opc_exceptions').empty();
                } else {
                    console.log("Admin loged");
                    $('.opc_exceptions').empty();
                   
                }
                $('.log-icon').empty();
                $('#user_info').empty();
                $('<img src="' + data[0].avatar + '"alt="Img user">').appendTo('.log-icon');
                $('<p></p>').attr({ 'id': 'user_info' }).appendTo('#des_inf_user')
                    .html(
                        '<a id="logout"><i id="icon-logout" class="fa-solid fa-right-from-bracket"></i></a>' +
                        '<a>' + username[0] + '<a/>'

                    )

            }).catch(function() {
                console.log("Error al cargar los datos del user");
            });
    } else {
        console.log("No hay token disponible");
        $('.opc_exceptions').empty();
        $('#user_info').hide();
        $('.log-icon').empty();
        $('<a href="?module=login&op=login_register_view"><i id="col-ico" class="fa-solid fa-user fa-2xl"></i></a>').appendTo('.log-icon');


    }
}


//================CLICK-LOGOUT================
function click_logout() {
    $(document).on('click', '#logout', function() {
        localStorage.removeItem('total_prod');
        toastr.success("Logout succesfully");
        setTimeout('logout(); ', 1000);
    });
}

//================LOG-OUT================
function logout() {
    ajaxPromise('?module=login&op=logout', 'POST', 'JSON')
        .then(function(data) {
            if (data == "Done") {
                localStorage.removeItem('token');
                window.location.href = "?module=home&op=view";
            }else {
                console.log("Error logout main.js");
            }
          
        }).catch(function() {
            console.log('Something has occured');
        });

}

// Remove localstorage('page') with click in shop
function click_shop() {
    $(document).on('click', '#opc_shop', function() {
        localStorage.removeItem('page');
        localStorage.removeItem('total_prod');
        console.log("Se ha borrado la pagina");

    });
}


$(document).ready(function() {
    load_menu();
    click_logout();
    click_shop();
});