app.controller('ctrl_home', function ($scope, $rootScope, $window, brands, categorys, type_motor, books) {

    if (localStorage.getItem('reload') == "yes") {
        localStorage.removeItem('reload');
        $window.location.reload();
    } else {
        // CARRUSEL
        let total = brands.length;
        $scope.myInterval = 3000;
        $scope.keyboard = true;
        $scope.noWrapSlides = false;
        $scope.brands_home = brands.slice(0, total);
        //CATEGORYS
        $scope.categorys_home = categorys;
        //TYPE_MOTOR
        $scope.type_motor_home = type_motor;
        //BOOKS
        var books_array = [];
        books.items.forEach(books => {
            if ((books.volumeInfo.title.length <= 24) && (books.volumeInfo.imageLinks.thumbnail != 0) && (books.volumeInfo.authors != 0) && (books.volumeInfo.publishedDate != 0) && (books.accessInfo.webReaderLink != 0)) {
                const data_books = {
                    'title': books.volumeInfo.title,
                    'image': books.volumeInfo.imageLinks.thumbnail,
                    'authors': books.volumeInfo.authors,
                    'publishDate': books.volumeInfo.publishedDate,
                    'link': books.accessInfo.webReaderLink
                }
                books_array.push(data_books);
            }
        });
        $scope.books_home = books_array.slice(0, 3);
        $scope.loadMore_books = function () {
            $rootScope.count++;
            if ($rootScope.count == 50) {
                $scope.books_home = books_array.slice(0, 6);
            } else if ($rootScope.count == 100) {
                $scope.books_home = books_array.slice(0, 9);
            }
        }


        //REDIRECTS al SHOP
        $scope.click_carrusel_brand = function () {
            var brand_filter = [];
            brand_filter.push({ "name_brand": [this.brand.name_brand] });
            localStorage.removeItem('filters');
            localStorage.removeItem('category_home');
            localStorage.removeItem('type_motor_filter');
            localStorage.setItem('brand_filter', JSON.stringify(brand_filter));
            $window.location.href = '#/shop';
        }

        $scope.click_categorys_home = function () {
            var category_filter = [];
            category_filter.push({ "category_home": [this.cat.name_cat] });
            localStorage.removeItem('filters');
            localStorage.removeItem('brand_filter');
            localStorage.removeItem('type_motor_filter');
            localStorage.setItem('category_filter', JSON.stringify(category_filter));
            $window.location.href = '#/shop';
        }

        $scope.click_motor_home = function () {
            var type_motor_filter = [];
            type_motor_filter.push({ "name_tmotor": [this.type.name_tmotor] });
            localStorage.removeItem('filters');
            localStorage.removeItem('brand_filter');
            localStorage.removeItem('category_filter');
            localStorage.setItem('type_motor_filter', JSON.stringify(type_motor_filter));
            $window.location.href = '#/shop';
        }
    }
});//end controller