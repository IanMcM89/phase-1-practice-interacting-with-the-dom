document.addEventListener('DOMContentLoaded', () => {
    clickMinusButton();
    clickPlusButton();
    clickHeartButton();
    clickPauseButton();
    submitComment();
    startCounter()
})

let counterVar = document.querySelector('#counter');
let buttonMinus = document.querySelector('button#minus');
let buttonPlus = document.querySelector('button#plus');
let buttonHeart = document.querySelector('button#heart');
let buttonPause = document.querySelector('#pause');
let buttonSubmit = document.querySelector('form#comment-form')[1];

parsedCounter = parseInt(counterVar.innerText, 10);

let i= 0, timer, n;

function startCounter() {
    counterVar.innerText = i;
    i = i + 1;
    n = 0;
    timer = setTimeout('startCounter()', 1000);
}

function stopCounter() {
    clearTimeout(timer);
}

function clickMinusButton() {
    buttonMinus.addEventListener('click', () => {
        counterVar.innerText = parsedCounter--
    })
}

function clickPlusButton() {
    buttonPlus.addEventListener('click', () => {
        counterVar.innerText = parsedCounter++
    })
}

function clickHeartButton() {
    buttonHeart.addEventListener('click', () => {
        let likeList = document.querySelector('ul.likes');
        let newLike = document.createElement('li');
        likeList.appendChild(newLike);
        n++;
        newLike.textContent = `${counterVar.innerText} has been liked ${n} times!`;
    })
}

function clickPauseButton() {
    buttonPause.addEventListener('click', () => {
        if (buttonPause.innerText === 'pause') {
            buttonMinus.disabled = true, buttonPlus.disabled = true, buttonHeart.disabled = true, buttonSubmit.disabled = true;
            buttonPause.textContent = 'resume';
            stopCounter();
        } else if (buttonPause.innerText === 'resume') {
            buttonMinus.disabled = false, buttonPlus.disabled = false, buttonHeart.disabled = false, buttonSubmit.disabled = false;
            buttonPause.textContent = 'pause';
            startCounter();
        }
    })
}

function submitComment() {
    buttonSubmit.addEventListener('click', (e) => {
        let formInput = document.querySelector('#comment-form')[0].value;
        let divList = document.querySelector('.comments')
        let p = document.createElement('p');
        divList.appendChild(p);
        p.innerText = formInput;
        e.preventDefault();
    })
}