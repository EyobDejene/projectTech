

// export function search () {
//
//     var xhr = new XMLHttpRequest();
//     // console.log(skillLevel);
//     xhr.open('GET', '/overview?skilLevel='+skillLevel+'&ageRange='+ageRange+'&maxDistance='+maxDistance+'&runningScheme='+runningScheme+'&practiceTime='+practiceTime, true);
//     xhr.setRequestHeader('Content-type', 'application/json');
//     xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//     xhr.send();
//
//     xhr.onload = function(){
//         if(this.status === 200){
//             // console.log('status 200');
//             var data =  JSON.parse(this.responseText);
//             // console.log(data.length);
//             return data;
//         }else {
//             return 'something went wrong...';
//         }
//     }
//     return xhr.onload();
//
//
//
//
//
//
//
// }




// export function search() {
//     let skillLevel = document.querySelector("#skill").value;
//     let ageRange = document.querySelector("#age").value;
//     let maxDistance = document.querySelector("#distance").value;
//     let runningScheme = document.querySelector(".runningScheme:checked").value;
//     let practiceTime = document.querySelector(".practiceTime:checked").value;
//
//     var resultData = null;
//
//     fetch('/overview?skilLevel='+skillLevel+'&ageRange='+ageRange+'&maxDistance='+maxDistance+'&runningScheme='+runningScheme+'&practiceTime='+practiceTime,{
//         method: 'get', // *GET, POST, PUT, DELETE, etc.
//             mode: 'cors', // no-cors, cors, *same-origin
//             cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//             credentials: 'same-origin', // include, *same-origin, omit
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-Requested-With': 'XMLHttpRequest',
//         }})
//         .then(result => result.json())
//         .then(data => {
//             resultData = data;
//
//             // console.log("binData", resultData);
//         }).catch(function(error) {
//         console.log(error);
//     });
//     console.log(data);
    // return resultData

// let resultData = null;
//
//     fetch('/overview?skilLevel='+skillLevel+'&ageRange='+ageRange+'&maxDistance='+maxDistance+'&runningScheme='+runningScheme+'&practiceTime='+practiceTime,{
//         method: 'GET', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, cors, *same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Requested-With': 'XMLHttpRequest',
//         }})
//         .then(function(response) {
//             if (!response.ok) {
//                 throw Error(response.statusText);
//             }
//             return response;
//         }).then(data => {
//         resultData = data;
//         console.log("binData", resultData);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
//
//     return resultData;


    // postData('/overview?skilLevel='+skillLevel+'&ageRange='+ageRange+'&maxDistance='+maxDistance+'&runningScheme='+runningScheme+'&practiceTime='+practiceTime)
    //     .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
    //     .catch(error => console.error(error));
    //
    // function postData(url = '', data = {}) {
    //
    //     // Default options are marked with *
    //     return fetch(url, {
    //         method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //         // mode: 'cors', // no-cors, cors, *same-origin
    //         // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //         // credentials: 'same-origin', // include, *same-origin, omit
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-Requested-With': 'XMLHttpRequest',
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         // redirect: 'follow', // manual, *follow, error
    //         // referrer: 'no-referrer', // no-referrer, *client
    //     }).then(response => response.json()); // parses JSON response into native Javascript objects
    // }


// }



const search = function () {
    let skillLevel = document.querySelector("#skill").value;
    let ageRange = document.querySelector("#age").value;
    let maxDistance = document.querySelector("#distance").value;
    let runningScheme = document.querySelector(".runningScheme:checked").value;
    let practiceTime = document.querySelector(".practiceTime:checked").value;

    const status = response => {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        }
        return Promise.reject(new Error(response.statusText))
    }

    const json = response => response.json()

    const searchResponse =  fetch('/overview?skilLevel='+skillLevel+'&ageRange='+ageRange+'&maxDistance='+maxDistance+'&runningScheme='+runningScheme+'&practiceTime='+practiceTime,
        {
            method: 'get', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }})
        .then(status)
        .then(json)
        .then(data => {
           // console.log('Request succeeded with JSON response', data)
                console.log(data.length);
                document.querySelector('.results-count').innerHTML = data.length;
        })
        .catch(error => {
            console.log('Request failed', error)
        })

    return searchResponse;


};



export default search;



