const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let number = 0;

function switchRotator(ind) {
    let rotatorItem = rotatorCase.findIndex(item => item.className === "rotator__case rotator__case_active");
    
    rotatorCase[rotatorItem].className = "rotator__case";

    if(ind > rotatorCase.length - 1) {
        ind = 0;
    }
    number = ind;
    rotatorCase[number].className = "rotator__case rotator__case_active";
}

rotatorCase[number].className = "rotator__case rotator__case_active";

setInterval(() => {
    switchRotator(++number);
}, 1000);