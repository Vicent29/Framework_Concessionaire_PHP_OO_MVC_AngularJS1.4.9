app.controller('ctrl_login', function ($scope, $rootScope, $window, $location, services_login,) {
    $scope.click_login = function () {
        var form_login = { 'username_log': $scope.username_log, 'passwd_log': $scope.passwd_log}
        services_login.login(form_login);
    }
  
});//end controller