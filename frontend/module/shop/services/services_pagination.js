app.factory('services_pagination', ['services', 'services_map','services_like', '$rootScope', '$window', function (services, services_map, services_like, $scope, $rootScope, $window) {
    let service = {pagination: pagination, change_page:change_page};
    return service;
    
    function pagination(cars) {
        $rootScope.all_cars = cars;
        $rootScope.page = 1;
        $rootScope.total_page = Math.ceil(cars.length/4);
        $scope.all_pages = [];
        for(i = 1; i <= $rootScope.total_page; i++){
            $scope.all_pages.push(i);
        }
        change_page($rootScope.page);
    }

    function change_page(page) {
    $scope.show_prev = true;
    $scope.show_next = true;
    window.scrollTo(0, 0); 
        $scope.current_page = page;
        $scope.select_cars =  $rootScope.all_cars.slice((($scope.current_page - 1) * 4), (($scope.current_page) * 4));
        services_map.load_map( $scope.select_cars, "list");
        services_like.load_likes();
        if(page >= $rootScope.total_page ){
            $scope.show_next = false;
            $scope.show_next_red = true;
        } 
        if(page <= 1){
            $scope.show_prev = false;
            $scope.show_prev_red = true;
            $scope.show_next_red = false;
        }else if (page > 1){
            $scope.show_next_red = false;
            $scope.show_prev = true;
            $scope.show_prev_red = false;
        }
        if ($scope.all_pages.length == $scope.current_page) {
            $scope.show_next = false;
            $scope.show_next_red = true;
        }
        
    }

}]);