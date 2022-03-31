const refs = {
    numberOfBoxes: document.querySelector('#controls input'),
    createBoxesBtn: document.querySelector('[data-create]'),
    destroyBoxesBtn: document.querySelector('[data-destroy]'),
    boxesForMarkup: document.querySelector('#boxes'),
}

refs.createBoxesBtn.addEventListener('click', onMarkupCreate);
refs.destroyBoxesBtn.addEventListener('click', destroyBoxes);


function onMarkupCreate() {
    createBoxes(refs.numberOfBoxes.value);
}

function createBoxes(amount) {
    let sizeIncrease = 0;
    const boxSize = [];

    for (let i = 0; i < amount; i += 1) {
        boxSize.push(30 + sizeIncrease);
        sizeIncrease += 10;
    }

    const markup = boxSize
    .map((size) => `<div style="width:${size}px; height:${size}px; background-color: ${getRandomHexColor()};"></div>`)
    .join("");

    refs.boxesForMarkup.insertAdjacentHTML("beforeend", markup);
}   

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

function destroyBoxes() {
    refs.boxesForMarkup.innerHTML = "";
}