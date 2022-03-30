const refs = {
    validationInput: document.querySelector('#validation-input'),
    validNumberOfDigits: document.querySelector('input').dataset.length,
}

refs.validationInput.addEventListener('blur', onInputValidation);

function onInputValidation(event) {
    if (event.currentTarget.value.length !== Number(refs.validNumberOfDigits)) {
        refs.validationInput.classList.add('invalid');
        refs.validationInput.classList.remove('valid');
    } else {
        refs.validationInput.classList.add('valid');
        refs.validationInput.classList.remove('invalid');
    }
}