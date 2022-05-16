app.controller('ctrl_contact', function($scope, services, toastr) {
    $scope.regName = /^[A-Za-z\s]{6,60}$/;
    $scope.regEmail = /^[A-Za-z0-9._-]{5,20}@[a-z]{3,6}.[a-z]{2,4}$/;
    $scope.regAsunto = /^[A-Za-z-\s]{6,60}$/;
    $scope.regMessage = /^[A-Za-z0-9-\s.]{1,200}$/;

    
    $scope.sendEmail = function() {
        let data_form = {'name': $scope.name, 'email': $scope.email, 'matter': $scope.asunto, 'message': $scope.message};
        services.post('contact', 'send_email_contact', data_form)
        .then(function(response) {
            console.log(response);
            if (response == '"Succes"') {
                toastr.success('The email has been sended, you will receive an answer as soon as posible.' ,'Email sended');
                $scope.name = null;
                $scope.email = null;
                $scope.asunto = null;
                $scope.message = null;
            }else {
                toastr.error('Something happend when trying to send.' ,'Error');
            }// end_else
        }, function(error) {
            console.log(error);
        });// end_request
    }// end_$sendEmail
});

