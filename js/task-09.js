const refs = {
    changeColorBtn: document.querySelector('.change-color'),
    hexColorName: document.querySelector('.color'),
}

refs.changeColorBtn.addEventListener('click', onRandomColorChange);

function onRandomColorChange() {
    const currentColor = getRandomHexColor();
    document.body.style.backgroundColor = currentColor;
    refs.hexColorName.textContent = currentColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}