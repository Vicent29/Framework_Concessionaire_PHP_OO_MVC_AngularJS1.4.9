app.factory("services_social_login", ["services", "services_localstorage", "$location", "$window", "$rootScope", "toastr", function (services, services_localstorage, $location, $window, $rootScope, toastr) {
    let service = { social_login: social_login };
    return service;

    function social_login(param) {
        authService = firebase_config();
        authService.signInWithPopup(provider_config(param))
            .then(function (result) {
                var data_user = { id: result.user.uid, username: result.user.displayName, email: result.user.email, avatar: result.user.photoURL, provider: result.credential.provider };
                if (result) {
                    services.post('login', 'social_login', data_user)
                        .then(function (data) {
                            if (data == "error_insert") {
                                toastr.error('Error logging in, you may already have an account.');
                            } else {
                                localStorage.setItem("token", data);
                                localStorage.setItem("social_login", "yes");
                                toastr.success("Loged succesfully");

                                if (localStorage.getItem('redirect_like')) {
                                    localStorage.setItem('reload', "yes");
                                    $window.location.href = '#/shop';
                                } else {
                                    localStorage.setItem('reload', "yes");
                                    $window.location.href = '#/home';
                                }
                            }
                        }, function (error) {
                            console.log("Error social login" + error);
                        });queueMicrotask
                }
            }).catch(function (error) {
                console.log('Error social login', error);
            });
    }

    function firebase_config() {
        var config = {
            apiKey: "AIzaSyAzGh7-z5tVoeu04I4HMqlz4bE4xSgbLSg",
            authDomain: "web-concesionario.firebaseapp.com",
            databaseURL: "https://web-concesionario.firebaseio.com",
            projectId: "web-concesionario",
            storageBucket: "web-concesionario.appspot.com",
            messagingSenderId: "369700061150"  //613764177727    
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        } else {
            firebase.app();
        }
        return authService = firebase.auth();
    }

    function provider_config(param) {
        if (param === 'google') {
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('email');
            return provider;
        } else if (param === 'github') {
            return provider = new firebase.auth.GithubAuthProvider();
        }
    }

}]);
