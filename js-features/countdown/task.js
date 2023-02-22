'use strict';

let timerId = setTimeout(function request() {
    var n = (+timer.textContent--);
    n = timer.textContent;

    if (n <= 0) {
        timer.textContent = 0;
        alert("Вы победили в конкурсе!");
                
        clearTimeout(timerId);
    }
    
    timerId = setTimeout(request, 1000);
    
}, 1000);


