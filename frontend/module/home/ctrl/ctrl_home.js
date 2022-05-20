app.controller('ctrl_home', function ($scope, brands, categorys, type_motor, books) {
    // CARRUSEL
    
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
        $scope.books_home = books_array;

});//end controller