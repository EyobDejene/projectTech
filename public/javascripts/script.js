import filter from './modules/search.js';

// searchRequest
let elementsArray = document.querySelectorAll('.filtering');
elementsArray.forEach(function(elem) {
    elem.addEventListener("input", function() {
        filter();
    });
});

let formHash = location.hash;
if(formHash === "#filters"){
    filter();
}

//filter button
let filterButton = document.querySelector('.filter-button');
if(filterButton) {
    filterButton.addEventListener("click", function () {
        filter();
    });
}






