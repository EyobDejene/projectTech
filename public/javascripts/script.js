
let skillSlider = document.querySelector("#skill");
let skillOutput = document.querySelector(".skill");

let ageSlider = document.querySelector("#age");
let ageOutput = document.querySelector(".age");

let distanceSlider = document.querySelector("#distance");
let distanceOutput = document.querySelector(".distance");


// Age filter
let AgeFilterState = function(){
    // slider values filter
    let ownAge = ageSlider.getAttribute('data-ownAge');
    ageOutput.innerHTML = ageSlider.value;
    ageOutput.innerHTML = ownAge+" - "+ageSlider.value;
    ageSlider.setAttribute("value", ageSlider.value);
};


// Distance filter
let DistanceFilterState = function(){
    // slider values filter
    distanceOutput.innerHTML = distanceSlider.value+" km";
    distanceSlider.setAttribute("value", distanceSlider.value);
};


// Skill
let SkillFilterState = function(){
    // slider values filter
    let skillState = skillSlider.value;
    skillOutput.innerHTML = skillSlider.value;
    if(this.value == 1 || skillState == 1){
        skillOutput.innerHTML = "Beginner";
        skillSlider.setAttribute("value", skillState);
    }else if(this.value == 2 || skillState == 2){
        skillOutput.innerHTML = "Intermediate";
        skillSlider.setAttribute("value", skillState);
    }else if(this.value == 3 || skillState == 3){
        skillOutput.innerHTML = "Advanced";
        skillSlider.setAttribute("value", skillState);
    }else if(this.value == 4 || skillState == 4){
        skillOutput.innerHTML = "Expert";
        skillSlider.setAttribute("value", skillState);
    }
    else {
        skillOutput.innerHTML = this.value;
        skillSlider.setAttribute("value", skillState);
    }
};

// Run FilterState
SkillFilterState();
AgeFilterState();
DistanceFilterState();
// Update the current slider value
skillSlider.oninput = SkillFilterState;
ageSlider.oninput = AgeFilterState;
distanceSlider.oninput = DistanceFilterState;


// open and close filter
//
// document.querySelector('.filter-button').onclick = function() {
//     let form = document.querySelector('#filter');
//     let main = document.querySelector('main');
//     let formIsOpen =  form.classList.contains('open');
//     filterState(form,formIsOpen,main);
// }
//
// function filterState (form,formIsOpen,main) {
//     if(!formIsOpen){
//         console.log(formIsOpen);
//         form.classList.add('open');
//         main.classList.add('not-visible');
//     }else{
//         console.log(formIsOpen);
//         form.classList.remove('open');
//         main.classList.remove('not-visible');
//     }
//
// }
