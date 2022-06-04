app.factory('services_localstorage',['$window', '$location', 'toastr', function ($window, $location, toastr) {
    let service = {setSession: setSession, clearSession: clearSession, setJumpPage: setJumpPage};
    return service;

    function setSession(jwt) {
        localStorage.setItem('token', jwt);
    //     $window.location.reload();
    }

    function clearSession() {
        toastr.success("Logout succesfully");
        localStorage.removeItem('token');
        $location.path("/home/reload"); 
        setTimeout($window.location.reload(), 2000);
    }

    function setJumpPage() {
        let jumpPage = localStorage.jumpPage;
        localStorage.removeItem('jumpPage');
        return jumpPage;
    }
}]);