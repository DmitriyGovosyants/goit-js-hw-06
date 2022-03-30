const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}

refs.nameInput.addEventListener('input', onOutputNameChange);
// refs.nameInput.removeEventListener('input', on);

// function onOutputNameChange(event) {
//     refs.nameOutput.textContent = event.currentTarget.value;
// }

function onOutputNameChange(event) {
    if (event.currentTarget.value === '') {
        refs.nameOutput.textContent = "fdfasdf"
    }
    refs.nameOutput.textContent = event.currentTarget.value;
}

// function on(event) {
//     // refs.nameOutput.textContent = event.currentTarget.value;
//     if () {
//         refs.nameOutput.textContent = "fdfasdf"
//     }
// }

