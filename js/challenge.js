document.addEventListener('DOMContentLoaded', () => {
    initializeCounter();
    adjustCounter();
})

let counterVar = document.getElementById('counter').innerText;
parsedCounter = parseInt(counterVar, 10)

function initializeCounter() {
    setInterval(() => {
        document.getElementById('counter').innerText = parsedCounter++
    }, 1000);
}

function adjustCounter() {
    let buttonMinus = document.querySelector('button#minus');
    buttonMinus.addEventListener('click', () => {
        document.getElementById('counter').innerText = parsedCounter--
    })

    let buttonPlus = document.querySelector('button#plus');
    buttonPlus.addEventListener('click', () => {
        document.getElementById('counter').innerText = parsedCounter++
    })
}