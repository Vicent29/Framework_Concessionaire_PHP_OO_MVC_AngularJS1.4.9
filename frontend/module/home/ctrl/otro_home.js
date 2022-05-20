function carousel_Brands() {
    ajaxPromise('?module=home&op=carousel_brand','POST', 'JSON')
    .then(function(data) {
            for (row in data) {
                $('<div></div>').attr('class', "carousel__elements").attr('id', data[row].name_brand).appendTo(".carousel__list").html(
                    "<img class='carousel__img' id='' src='" + data[row].img_brand + "' alt='' >"
                )
            }

            new Glider(document.querySelector('.carousel__list'), {
                slidesToShow: 3,
                dots: '.carousel__indicator',
                draggable: true,
                arrows: {
                    prev: '.carousel__prev',
                    next: '.carousel__next'
                }
            });

        })
        .catch(function(error) {
            console.log(error);
            // window.location.href = "index.php?module=ctrl_exceptions&op=503&type=503&lugar=Carrusel_Brands HOME";
        });
}


function loadCategories() {
    ajaxPromise('?module=home&op=categoria','POST', 'JSON')
    .then(function(data) {
        for (row in data) {

            $('<div></div>').attr('class', "div_cate").attr({ 'id': data[row].name_cat }).appendTo('#containerCategories')
                .html(
                    "<li class='portfolio-item'>" +
                    "<div class='item-main'>" +
                    "<div class='portfolio-image'>" +
                    "<img src = " + data[row].img_cat + " alt='foto' </img> " +
                    "</div>" +
                    "<h5>" + data[row].name_cat + "</h5>" +
                    "</div>" +
                    "</li>"
                )
        }
    }).catch(function(error) {
        console.log(error);
        // window.location.href = "index.php?module=ctrl_exceptions&op=503&type=503&lugar=Type_Categories HOME";
    });
}


function loadCatTypes() {
    ajaxPromise('?module=home&op=type','POST', 'JSON')
    .then(function(data) {
        for (row in data) {
            $('<div></div>').attr('class', "div_motor").attr({ 'id': data[row].name_tmotor }).appendTo('#containerTypecar')
                .html(
                    "<li class='portfolio-item2'>" +
                    "<div class='item-main2'>" +
                    "<div class='portfolio-image2'>" +
                    "<img src = " + data[row].img_tmotor + " alt='foto'" +
                    "</div>" +
                    "<h5>" + data[row].name_tmotor + "</h5>" +
                    "</div>" +
                    "</li>"
                )
        }
    }).catch(function(error) {
        console.log(error);
        // window.location.href = "index.php?module=ctrl_exceptions&op=503&type=503&lugar=Types_car HOME";
    });
}

function load_more_Books_car() {
    var limit = 3;

    $(document).on("click", '#load_more_books', function() {
        limit = limit + 3;
        $('.books_car').remove();
        $('#load_more_books').remove();
        ajaxPromise('https://www.googleapis.com/books/v1/volumes?q=Cars',
                'POST', 'JSON')
            .then(function(data) {
                if (limit === 9) {
                    $('<button class="no-results" id="">No hay mas libros disponibles....</button></br>').appendTo('.btn-more-books');
                } else {
                    $('<button class="load_more_button" id="load_more_books">LOAD MORE</button>').appendTo('.btn-more-books');
                }
                for (i = 0; i < limit; i++) {

                    $('<div></div>').attr({ id: 'books_car', class: 'books_car' }).appendTo('.books_content')
                        .html(

                            '<div class="col-md-4 col-sm-4 col-xs-12">' +
                            '<div class="panel panel-danger adjust-border-radius">' +
                            '<div class="title_book panel-heading adjust-border">' +
                            '<h4>' + data.items[i].volumeInfo.title + '</h4>' +
                            '</div>' +
                            '<div class="panel-body">' +
                            '<ul class="plan">' +
                            '<li class="Img_new"><img src=' + data.items[i].volumeInfo.imageLinks.thumbnail + '</li>' +
                            '<li><i id="col-ico" class="fa-solid fa-user-large fa-sm"></i>&nbsp;&nbsp;' + data.items[i].volumeInfo.authors[0] + '</li>' +
                            '<li><i id="col-ico" class="fa-solid fa-calendar-days fa-sm"></i>&nbsp;&nbsp;' + data.items[i].volumeInfo.publishedDate + '</li>' +
                            '</ul>' +
                            '</div>' +
                            '<div class="panel-footer">' +
                            '<a href=' + data.items[i].volumeInfo.infoLink + ' target="_blank" class="btn btn-danger btn-block btn-lg adjust-border-radius">MORE INFO</a>' +
                            '</div>' +
                            '</div>' +
                            '</div>'
                        );
                }
            }).catch(function() {
                // window.location.href = "index.php?module=ctrl_exceptions&op=503&type=503&lugar=News cars HOME";
            });
    })
}

function get_Books_car() {
    limit = 3;
    ajaxPromise('https://www.googleapis.com/books/v1/volumes?q=Cars',
            'GET', 'JSON')
        .then(function(data) {
            data.items.length = limit;
            $('<h2 class="cat">Books releted</h2>').appendTo('.books_content');
            $('<button class="load_more_button" id="load_more_books">LOAD MORE</button>').appendTo('.btn-more-books');
            for (i = 0; i < data.items.length; i++) {
                $('<div></div>').attr({ id: 'books_car', class: 'books_car' }).appendTo('.books_content')
                    .html(

                        '<div class="col-md-4 col-sm-4 col-xs-12">' +
                        '<div class="panel panel-danger adjust-border-radius">' +
                        '<div class="title_book panel-heading adjust-border">' +
                        '<h4>' + data.items[i].volumeInfo.title + '</h4>' +
                        '</div>' +
                        '<div class="panel-body">' +
                        '<ul class="plan">' +
                        '<li class="Img_new"><img src="' + data.items[i].volumeInfo.imageLinks.thumbnail + '"</li>' +
                        '<li><i id="col-ico" class="fa-solid fa-user-large fa-sm"></i>&nbsp;&nbsp;' + data.items[i].volumeInfo.authors[0] + '</li>' +
                        '<li><i id="col-ico" class="fa-solid fa-calendar-days fa-sm"></i>&nbsp;&nbsp;' + data.items[i].volumeInfo.publishedDate + '</li>' +
                        '</ul>' +
                        '</div>' +
                        '<div class="panel-footer">' +
                        '<a href=' + data.items[i].volumeInfo.infoLink + ' target="_blank" class="btn btn-danger btn-block btn-lg adjust-border-radius">MORE INFO</a>' +
                        '</div>' +
                        '</div>' +
                        '</div>'

                    );
            }
        }).catch(function() {
            // window.location.href = "index.php?module=ctrl_exceptions&op=503&type=503&lugar=News cars HOME";
        });
    load_more_Books_car();
}

function clicks() {

    $(document).on("click", '.carousel__elements', function() {
        var brand_filter = [];
        brand_filter.push({ "name_brand": [this.getAttribute('id')] });
        localStorage.removeItem('filters');
        localStorage.removeItem('category_home');
        localStorage.removeItem('type_motor_filter');

        localStorage.setItem('brand_filter', JSON.stringify(brand_filter));

        setTimeout(function() {
            window.location.href = '?module=shop&op=list';
        }, 300);
    });
    $(document).on("click", '.div_cate', function() {
        var category_filter = [];
        category_filter.push({ "category_home": [this.getAttribute('id')] });
        localStorage.removeItem('filters');
        localStorage.removeItem('brand_filter');
        localStorage.removeItem('type_motor_filter');
        localStorage.setItem('category_filter', JSON.stringify(category_filter));

        setTimeout(function() {
            window.location.href = '?module=shop&op=list';
        }, 300);
    });
    $(document).on("click", '.div_motor', function() {
        var type_motor_filter = [];
        type_motor_filter.push({ "name_tmotor": [this.getAttribute('id')] });
        localStorage.removeItem('filters');
        localStorage.removeItem('brand_filter');
        localStorage.removeItem('category_filter');
        localStorage.setItem('type_motor_filter', JSON.stringify(type_motor_filter));

        setTimeout(function() {
            window.location.href = '?module=shop&op=list';
        }, 300);
    });
}

$(document).ready(function() {
    var books = [];
    carousel_Brands();
    loadCategories();
    loadCatTypes();
    get_Books_car();
    clicks();
});