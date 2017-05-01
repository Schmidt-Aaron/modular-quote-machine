/* /src/js/background.js */

var Background = (function() {

//placeholder for cached DOM elements
var DOM = {};

/* PRIVATE METHODS */ 

//cache DOM elements
function cacheDOM(){
    DOM.$background = $('#background');
}

//coordinate asych assembly of image element and rendering
function loadImage() {
    var baseURL = 'https://source.unsplash.com/category',
        cat     = 'nature',
        size    = '1920x1080';

    buildElement(`${baseURL}/${cat}/${size}`)
        .then(render);
}

//assemble the image element
function buildElement(source){

    var deferred = $.Deferred(function (task) {

        var image = new Image();

        image.onload = function() {
            task.resolve(image);
        }

        image.onerror = function() {
            task.reject();
        }

        image.src = source;
    });

    return deferred.promise();
}

//render DOM
function render(image) {

    DOM.$background
        .append(image)
        .css('opacity', 1);
}

/* PUBLIC METHODS */

//main init
function init() {
    cacheDOM();
    loadImage();
}

/** EXPORT PUBLIC METHODS */
return {
    init: init
};

})();