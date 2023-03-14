const menu__link = Array.from(document.querySelectorAll(".menu__link"));

menu__link.forEach(elem => {
    elem.onclick = () => {
        if (elem.closest(".menu__item").querySelector(".menu_sub.menu_active")) {
            elem.closest(".menu__item").querySelector(".menu_sub.menu_active").className = "menu menu_sub";
            return false;
        } else if (elem.closest(".menu__item").querySelector(".menu_sub")) {
            Array.from(document.querySelectorAll(".menu_sub.menu_active")).map((elem) => elem.className = "menu menu_sub");
            elem.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub menu_active";
            return false;
        }
    }
})