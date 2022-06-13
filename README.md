<h1 align="center">​​♻️​​ WEB ECO-CAR | CONCESIONARIRE ​​​♻️​​​</h1>
<hr style="height: 2px; color:white;">
<h2 id="index">🔗​ <u>INTRODUCTION</u></h2>
<div style="margin-left: 35px;">
    <h4>What is<a style="text-decoration: none; color:black"
            href="https://github.com/Vicent29/Framework_Concessionaire_PHP_OO_MVC_jQuery.git"><b
                style="color:blue;"> ECO-CAR</b>?</a></h4>
    <p style="margin-top: -10px;">It is a web page in which you can buy any type of car, besides being able to geolocate
        them and log in with your gmail or github, add the cars that you like to favorites and soon we will add the
        functionality of the cart</p>
</div>
<hr>
<h2 id="index">📌 <u>INDEX</u> 📌</h2>
<div>
    <ul>
        <li style="margin-bottom: 4px;"><b><a style="text-decoration: none; color:black"
                    href="#index">INTRODUCCIÓN</a></b></li>
        <li style="margin-bottom: 4px;"><b><a style="text-decoration: none; color:black" href="#index">INDEX</a></b>
        </li>
        <li style="margin-bottom: 4px;"><b><a style="text-decoration: none; color:black" href="#index">CONTENT</a></b>
        </li>
        <ul>
            <li><b><a style="text-decoration: none; color:black" href="#header">Header</a></b></li>
            <li><b><a style="text-decoration: none; color:black" href="#menu">Menu</a></b></li>
            <li><b><a style="text-decoration: none; color:black" href="#modules">Modules</a></b></li>
        </ul>
        <li style="margin-bottom: 4px;"><b><a style="text-decoration: none; color:black"
                    href="#tech">TECHNOLOGIES</a></b></li>
        <li style="margin-bottom: 4px;"><b><a style="text-decoration: none; color:black" href="#lib">LIBRERIES</a></b>
        </li>
    </ul>
</div>
<hr>
<h2 id="index">⚪ <u>CONTENT</u></h2>
<div style="margin-left: 35px;">
    <h3 id="header" style="font-family: serif;"><b>◼️​ HEADER:</b></h3>
        <div style="margin-left: 30px;">
            <table border="5" style="border-collapse: collapse;">
                <tr>
                    <th>SECTION</th>
                    <th>FEATURES</th>
                </tr>
                <tr>
                    <td><b>SEARCH:</b></td>    
                    <td>You can see the search view where you will be redirected to the shop with the filters you have applied</td>
                </tr>
                <tr>
                    <td><b>LOGIN:</b></td>
                    <td>
                        You will be able to see the default profile picture or avatar and user information. Also, if there is not user logged in, you can go to the login view by clicking on the default avatar.</td>
                </tr>
            </table>
        </div>
    <h3 id="menu" style="font-family: serif;"><b>◼️​ MENU:</b></h3>
        <div>
            <ul>
                <li>In the <b style="color:blue;">ECO-CAR</b> menu you can find the different modules or sections that we have on the page, such as:</li> 
                <ul>
                    <li>ICON PAGE</li>
                    <li>HOME</li>
                    <li>SHOP</li>
                    <li>TRANSLATE</li>
                </ul>
            </ul>
        </div>
    <h3 id="modules" style="font-family: serif;"><b>◼️​ MODULES:</b></h3>
    <div style="margin-left: 30px;">
        <table border="5" style="border-collapse: collapse;">
            <tr>
                <th>MODULE</th>
                <th>FEATURES</th>
            </tr>
            <tr>
                <td style="color: orange;"><b>HOME:</b></td> 
                <td>In this module you can see a carousel (<a href="https://angular-ui.github.io/bootstrap/versioned-docs/1.2.4/">ui-bootstrap</a>) with the brands, a menu with the different categories and another menu with the different types of cars such as (electric, hybrid, adapted...). Also in the lower part of the home module we can find some books related to all the advantages of electric cars with the api <a href="https://developers.google.com/books">Google Books Api</a></td>
            </tr>
            <tr>
                <td style="color: orange;"><b>SHOP:</b></td> 
                <td>In this module you will be able to see all the cars that we have at your disposal, in addition to a section with filters so that you can select your preferences. On the other hand you can find a map where each of the cars is geolocated (<a href="https://docs.mapbox.com/mapbox.js/api/v3.3.1/">Map Box Api</a>). Finally you can add the cars you like to your favorites or enter the details of each of the cars to see more specific information. On the other hand, in the shop you can find a pagination service made by me, which in each page contains 4 cars (<a href="https://github.com/Vicent29/Framework_Concessionaire_PHP_OO_MVC_AngularJS1.4.9/blob/master/frontend/module/shop/services/services_pagination.js"><b>Custom Pagination</b></a>)</td>
            </tr>
            <tr>
                <td style="color: orange;"><b>SEARCH:</b></td> 
                <td>In this module you can find a filter where you can search by type of car and depending on the type you can select a brand and the city where you want to search for it</td>
            </tr>
            <tr>
                <td style="color: orange;"><b>LOGIN:</b></td> 
                <td>In this module you can find everything related to the log in, you can register with the page credentials. On the other hand you can log in with a user registered on the page or with a gmail or gitgub account. You can also change your password or change the password in case you do not remember by sending an email to your gmail. Finally, another feature of this module is to send a verification email every time you perform an action on your account, for example (registration, password change...)</td>
            </tr>
            <tr>
                <td style="color: orange;"><b>CONTACT:</b></td> 
                <td>In this module you can find a small form with which you can contact us, regardless of whether it is to solve a problem on the page or if you have any questions or problems with a specific product.</td>
            </tr>
            <tr>
                <td style="color: orange;"><b>TRANSLATE:</b></td> 
                <td>In this module you can find all the functionalities that we use to translate a large part of the page in English, Spain and Valenciano</td>
            </tr>
        </table>
    </div>
</div>
<hr>
<h2 id="tech">🛠️ <u>TECHNOLOGIES</u> <b>//</b> <u>API'S</u></h2>
<div style="margin-left: 35px;">
    <h3 style="font-family: serif;"><b>◼​ FRONTEND / BAKEND:</b></h3>
        <ul style="margin-top: -10px;">
            <li><a style="color: blue; "href="https://www.php.net/">PHP</a> -- Backend</li>
            <li><a style="color: blue;" href="https://developer.mozilla.org/es/docs/Web/JavaScript">JavaScript</a> -- Frontend</li>
            <li><a style="color: blue;" href="https://angularjs.org/">AngularJS</a> -- Frontend</li>
        </ul>
    <h3 style="font-family: serif;"><b>◼️​ OTHER TECNOLOGYES:</b></h3>
        <ul style="margin-top: -10px;"> 
            <li><a style="color: blue;" href="https://www.mysql.com/">MySQL</a></li>
        </ul>
    <h3 style="font-family: serif;"><b>◼️​ API'S:</b></h3>
        <ul style="margin-top: -10px;">
            <li><a style="color: blue;" href="https://developers.google.com/books">Google Books Api</a></li>
            <li><a style="color: blue;" href="https://docs.mapbox.com/mapbox.js/api/v3.3.1/">Map Box Api</a></li>
        </ul>
</div>
<hr>
<h2 id="lib">📚 <u>LIBRARIES</u></h2>
<div style="margin-left: 35px;">
    <ul style="margin-top: -5px;">
        <li><a style="color: blue;" href="https://www.npmjs.com/package/angularjs-toaster">AngukarJS Toastr 3.0</a></li>
        <li><a style="color: blue;" href="https://console.firebase.google.com/">Firebase Auth 3.5.2</a></li>
        <li><a style="color: blue;" href="https://getbootstrap.com/docs/4.0/">Bootstrap 4.0</a></li>
        <li><a style="color: blue;" href="https://angular-ui.github.io/bootstrap/">ui.bootstrap 0.10</a></li>
        <li><a style="color: blue;" href="https://fontawesome.com/">Font Awesome 6.1</a></li>
        <li><a style="color: blue;" href="https://www.npmjs.com/package/ng-infinite-scroll">ng-infinite-scroll 1.3</a></li>
    </ul>
</div>

