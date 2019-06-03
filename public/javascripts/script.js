import search from './modules/search.js';

// searchRequest
let elementsArray = document.querySelectorAll('.filtering');
elementsArray.forEach(function(elem) {
    elem.addEventListener("input", function() {
        search();
    });
});





