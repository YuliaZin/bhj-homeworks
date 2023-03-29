let interest = Array.from(document.querySelectorAll(".interest__check"));

interest.forEach((item) => {
    item.onclick = (event) => {
        event.preventDefault;
      
        let child = Array.from(item.closest(".interest").querySelectorAll(".interest__check"));

        if(!item.closest(".interests_active")) {
        	if(item.checked === true) {
        		child.forEach((elem) => {elem.checked = true})
        	} else {
        		child.forEach((elem) => {elem.checked = false})
        	}
        }
    }
})