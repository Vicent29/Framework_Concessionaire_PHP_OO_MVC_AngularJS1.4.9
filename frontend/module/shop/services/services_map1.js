app.factory('services_map', ['services', '$rootScope', '$window', function (services, $scope, $rootScope, $window) {
    let service = { load_map_shop: load_map_shop, load_map_details: load_map_details, addMarker_map:addMarker_map};
    return service;

    function load_map_shop() {
        var position = { lat: 40.416705, lng: -3.7035825 };
        mapboxgl.accessToken = 'pk.eyJ1IjoidmljZW50MjkiLCJhIjoiY2t6eWhiOXFmMDBkbzNqcGI3dzV2Y2pkYSJ9.Ryh_RUFmGLZV-VNy8Ompkw';
        map = new mapboxgl.Map({
            container: 'div_map_shop',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: position,
            zoom: 5
        });
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(new mapboxgl.FullscreenControl());
    }

    function load_map_details(data) {
        console.log(data);
        //Mejora para que el popup del details este centrado en la pantalla y el popup se vea dentro del mapa sin tener que moverse.
        var lat = (data.lat - 0.10);
        var position = [data.lon, lat];
        mapboxgl.accessToken = 'pk.eyJ1IjoidmljZW50MjkiLCJhIjoiY2t6eWhiOXFmMDBkbzNqcGI3dzV2Y2pkYSJ9.Ryh_RUFmGLZV-VNy8Ompkw';
        map = new mapboxgl.Map({
            container: 'div_map_details',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: position,
            zoom: 9
        });
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(new mapboxgl.FullscreenControl());
    }


    function addMarker_map(data, opc){
        console.log("Holaaaa");
        if (opc == "list") {
            console.log("estamoos dentreo");
            // HACER UN FOR PARA CADA UNO DE LOS COCHES

            // popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            //     "<div class='more_info_popup'>" +
            //     "<img src= /Framework_Concessionaire_PHP_OO_MVC_AngularJS1.4.9/frontend/" + data[0].img_car + "></img>" +
            //     "<h4><b>" + data[0].id_brand + " " + data[0].name_model + "</b></h4>" +
            //     "<table id='table-shop'> <tr>" +
            //     "<td> <i class='fa-solid fa-location-dot fa-xl'></i> &nbsp;" + data[0].city + "</td>" +
            //     "<td> <i id='col-ico' class='fa-solid fa-road fa-xl'></i> &nbsp;" + data[0].Km + " KM" + "</td>  </tr>" +
            //     "<td> <i id='col-ico' class='fa-solid fa-palette fa-xl'></i> &nbsp;" + data[0].color + "</td>" +
            //     "<td ><i class='fa-solid fa-coins fa-xl'></i> &nbsp;" + data[0].price + " €" + "</td></tr>" +
            //     "</table>" +
            //     "<button class='more_info_list' id='" + data[0].id_car + "'>MORE INFO</button>" +
            //     "<div/>"
            // );
        } else if (opc == "details") {

            popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
                "<img src= /Framework_Concessionaire_PHP_OO_MVC_AngularJS1.4.9/frontend/" + data.img_car + "></img>" +
                "<h4><b>" + data.id_brand + " " + data.name_model + "</b></h4>" +
                "<table id='table-shop'> <tr>" +
                "<td> <i class='fa-solid fa-location-dot fa-xl'></i> &nbsp;" + data.city + "</td>" +
                "<td> <i id='col-ico' class='fa-solid fa-road fa-xl'></i> &nbsp;" + data.Km + " KM" + "</td>  </tr>" +
                "<td> <i id='col-ico' class='fa-solid fa-palette fa-xl'></i> &nbsp;" + data.color + "</td>" +
                "<td ><i class='fa-solid fa-coins fa-xl'></i> &nbsp;" + data.price + " €" + "</td></tr>" +
                "</table>"

            );
        }
        marker = new mapboxgl.Marker()
            .setPopup(popup)
            .setLngLat([data.lon, data.lat])
            .addTo(map);
    }


}]);