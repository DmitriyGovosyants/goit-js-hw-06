const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}

refs.nameInput.addEventListener('input', onOutputNameChange);

function onOutputNameChange(event) {
    if (event.currentTarget.value.length === 0) {
        refs.nameOutput.textContent = "Anonymous";
    } else {
        refs.nameOutput.textContent = event.currentTarget.value;
    }
}
