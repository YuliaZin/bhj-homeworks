const arrOfTabs = Array.from(document.querySelectorAll(".tab"));
const arrOfContents = Array.from(document.querySelectorAll(".tab__content"));

function tabActive() {
    arrOfTabs.map(item => item.className = "tab");
    arrOfContents.map(item => item.className = "tab__content");
    this.className = "tab tab_active";
    arrOfContents[arrOfTabs.indexOf(this)].className = "tab__content tab__content_active";
}

for (let item of arrOfTabs) {
    item.addEventListener("click", tabActive);     
}