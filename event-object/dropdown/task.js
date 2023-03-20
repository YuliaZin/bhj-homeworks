const list = document.querySelector(".dropdown__list");
const valueActive = document.querySelector(".dropdown__value");
const arrItemsOfMenu = Array.from(document.querySelectorAll(".dropdown__item"));

function dropdown() {
    if (list.className === "dropdown__list dropdown__list_active") {
        list.className = "dropdown__list"
    } else {
        list.className = "dropdown__list dropdown__list_active"
    }
}

valueActive.addEventListener("click", dropdown);

for (let item of arrItemsOfMenu) {
    item.addEventListener("click", function(event) {
        event.preventDefault();
        valueActive.textContent = arrItemsOfMenu[arrItemsOfMenu.indexOf(item)].querySelector(".dropdown__link").textContent;
        list.className = "dropdown__list";
    
    })
}

