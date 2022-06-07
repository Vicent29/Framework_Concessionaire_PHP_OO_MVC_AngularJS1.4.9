app.factory('services_like', ['services', '$rootScope', '$window', function (services, $scope, $rootScope, $window) {
    let service = { load_likes: load_likes };
    return service;
    
    function load_likes() {
        var token = localStorage.getItem('token');
        if (token) {
            services.post('shop', 'load_likes_user', { 'token': token })
                .then(function (response) {
                    var ids_likes=[];
                    var all_car=[];
                    for (row in response) {
                        ids_likes.push(response[row]['id_car']);
                    }
                    for (row in $scope.select_cars) {
                        $scope.select_cars[row].favs_class = "fa-solid fa-heart fa-lg";
                        all_car.push($scope.select_cars[row]);
                    }
                    for (row in all_car) {
                        if (ids_likes.includes(all_car[row].id_car)) {
                            all_car[row].favs_class = "fa-solid fa-heart fa-lg like_red"
                        }
                    }
                    
                }, function (error) {
                    console.log("load_cars" + error);
                });
        } else {
            console.log($scope.select_cars)
            for (row in $scope.select_cars) {
                $scope.select_cars[row].favs_class = "fa-solid fa-heart fa-lg ";
            }
        }
    }
}]);