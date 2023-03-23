const fontSize = Array.from(document.querySelectorAll(".font-size"));
const divBook = document.querySelector(".book");

for (let item of fontSize) {
    item.addEventListener("click", function(event) {
        event.preventDefault()

        fontSize.map(elem => elem.classList.remove('font-size_active'));

        item.classList.add('font-size_active');   

        if (item.classList.contains('font-size_small')) {
            divBook.classList.remove('book_fs-big')
            divBook.classList.add('book_fs-small')
        } else if (item.classList.contains('font-size_big')) {
            divBook.classList.remove('book_fs-small')
            divBook.classList.add('book_fs-big')
        } else 
            divBook.classList.remove('book_fs-small', 'book_fs-big')
    })
}