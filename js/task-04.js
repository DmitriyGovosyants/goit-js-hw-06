const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    currentValue: document.querySelector('#value'),
}

let counterValue = 0; 

refs.decrementBtn.addEventListener('click', onDecrementCounter);
refs.incrementBtn.addEventListener('click', onIncrementCounter);

function onDecrementCounter() {
    counterValue -= 1;
    refs.currentValue.textContent = counterValue;
}

function onIncrementCounter() {
    counterValue += 1;
    refs.currentValue.textContent = counterValue;
}

