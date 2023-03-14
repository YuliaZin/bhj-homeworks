const closePopup = Array.from(document.querySelectorAll('.modal__close'));
const modalMain = document.querySelector('#modal_main');
const modalSuccess = document.querySelector('#modal_success');
const showSuccess = document.querySelector('.show-success');

modalMain.className = 'modal modal_active';

closePopup.forEach(element => {
   element.onclick = () => {
      modalMain.className = 'modal';
      modalSuccess.className = 'modal';
   }
});

showSuccess.onclick = () => {
   modalSuccess.className = 'modal modal_active';
   modalMain.className = 'modal';
}