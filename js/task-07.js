const refs = {
    fontSizeInput: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.fontSizeInput.addEventListener('change', onTextSizeChange);

function onTextSizeChange(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}