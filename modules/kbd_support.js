/* eslint-disable linebreak-style */
const addBtn = document.querySelector('#addBtn');

window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addBtn.click();
  }
});