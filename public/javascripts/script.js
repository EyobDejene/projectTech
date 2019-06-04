import filter from './modules/search.js';

// searchRequest
let elementsArray = document.querySelectorAll('.filtering');
elementsArray.forEach(function(elem) {
    elem.addEventListener("input", function() {
        placeData();
    });
});

let formHash = location.hash;
if(formHash === "#filters"){
        placeData();
}

//filter button
let filterButton = document.querySelector('.filter-button');
if(filterButton) {
    filterButton.addEventListener("click", function () {
        placeData();
    });
}



function countData() {
    return new Promise((resolve, reject) => {
        filter()
            .then(data => resolve(data))
            .catch(error => reject(error))
    });
    //      document.querySelector('.results-count').innerHTML = data.length;
}


async function placeData(){
    try {
        let data = await countData();
        // console.log(data.length);
        document.querySelector('.results-count').innerHTML = data.length;
    } catch(error) {
        console.error(error);
    }
}



