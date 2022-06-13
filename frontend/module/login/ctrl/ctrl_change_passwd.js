app.controller('ctrl_change_passwd', function ($scope, $rootScope, $route, $window, $location, services_passwd) {
    $scope.send_email_recover = function () {
        var email = $scope.email_rec;
        services_passwd.email_recuperate(email);
    }

    $scope.send_form_recover = function () {
        var form_recover = { 'new_passwd1': $scope.new_passwd1, 'new_passwd2': $scope.new_passwd2}
        var email_token= $route.current.params.token_email;
        services_passwd.send_new_passwd(form_recover,email_token, "recover");
    }
    
    $scope.send_form_change = function () {
        var form_change = { 'old_passwd': $scope.old_passwd, 'new_passwd': $scope.new_passwd}
        var email_token= $route.current.params.token_email;
        services_passwd.send_new_passwd(form_change,email_token, "modificate");
    }


  
});//end controller