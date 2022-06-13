app.controller('ctrl_login_register', function ($scope, $rootScope, $route, $window, $location, services_login, services_register, services_social_login) {

    if ($route.current.params.token_verify) {
        var token= $route.current.params.token_verify;
       services_register.veryfy_email_user(token);
    }

    $scope.click_login = function () {
        var form_login = { 'username_log': $scope.username_log, 'passwd_log': $scope.passwd_log}
        services_login.login(form_login);
    }

    $scope.click_register = function () {
        var form_register = { 'username_reg': $scope.username_reg, 'passwd1_reg': $scope.passwd1_reg, 'passwd2_reg': $scope.passwd2_reg, 'email_reg': $scope.email_reg}
        services_register.register(form_register);
    }

    $scope.click_login_git = function () {
        services_social_login.social_login("github");
    }

    $scope.click_login_google = function () {
        services_social_login.social_login("google");
    }

    $scope.clcik_recover_passwd = function () {
        location.href = "#/passwd/ask_email/recover"; 
    }

    $scope.clcik_modificate_passwd = function () {
        location.href = "#/passwd/ask_email/modificate";  
    }
  
});//end controller