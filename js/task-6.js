function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnRef = document.querySelector('button[data-create]');
createBtnRef.classList.add('create');

const destroyBtnRef = document.querySelector('button[data-destroy]');
destroyBtnRef.classList.add('destroy');

const inputRef = document.querySelector('input[type="number"]');
inputRef.classList.add('input-boxes');

const boxForBoxes = document.querySelector('#boxes');

function createBoxes(amount) {

  destroyBoxes();

  const boxesContainer = document.querySelector('#boxes');
  let boxesMarkup = '';
   let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    boxesMarkup += `<div style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px;"></div>`;
    boxSize += 10;
  }
  boxesContainer.innerHTML = boxesMarkup;
}
function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}

createBtnRef.addEventListener('click', () => {
  const amount = Number(inputRef.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});

destroyBtnRef.addEventListener('click', destroyBoxes);