/* /src/js/greeting.js */

// This module needs to 
//     1. cache DOM Elements
//     2. determine the time of day
//     3. craft a greeting based on the time of day
//     4. render the greeting to the view
//     5. provide a way to init it

var Greeting = (function(){

    var DOM = {},
        names = [
            'handsome',
            'smarty-pants',
            'good looking',
            'classy',
            'sport',
            'Mr Roboto'
        ],
        placeHolder = selectName();

    /** private methods */

    //cache DOM elements
    function cacheDOM(){
        DOM.$greeting = $('#greeting');
    }

    //pick a name from names array
    function selectName(){
        var ind = Math.floor(Math.random() * names.length);

        return names[ind];
    }

    //time based greeting message
    function makeMessage() {
        var timeOfDay,
            theDate = new Date(),
            theHour = theDate.getHours();

        if(theHour < 12) {
            timeOfDay = "morning";
        } else if(theHour >= 12 && theHour < 17) {
            timeOfDay = "afternoon";
        } else {
            timeOfDay = "evening";
        }

        return `Good ${timeOfDay}, ${placeHolder}.`;
    }

    //render DOM
    function displayMessage() {
        DOM.$greeting
            .text(makeMessage());
    }


    /** public methods */

    //main init
    function init(){
        cacheDOM();
    }

    /** export public methods */

    return {
        init: init,
        displayMessage: displayMessage
    }

})();