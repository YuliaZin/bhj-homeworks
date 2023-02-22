'use strict'

const cookieElem = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter');

cookieElem.onclick = () => {
    let n = (+clicker.textContent++);
    n = clicker.textContent;

    cookieElem.width = n % 2 ? 250 : 200
};
  