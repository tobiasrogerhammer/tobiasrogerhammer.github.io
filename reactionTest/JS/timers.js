let x;
let randomNum;
let countDown = true;
let elapsedTime = 0;

function startGame() {
    document.getElementById("timer").innerHTML = '';
    document.body.classList.add("wait");
    document.getElementById("stopbutton").disabled = true;
    randomNum = Math.floor(Math.random() * 1000) + 1;
    x = setInterval(updateTimer, 1);
    document.getElementById("start").style.display = "none";
    document.getElementById("stopbutton").style.display = "block";
}

function updateTimer() {
    if (countDown) {
        randomNum--;
        if (randomNum < 0) {
            countDown = false;
            randomNum = 0;
        }
    } else {
        randomNum++;
    }

    if (randomNum === 0) {
        document.body.classList.add("background");
        document.getElementById("stopbutton").disabled = false;
    }
}

function countdown() {
    if (!countDown) {
        countDown = true;
        randomNum = Math.floor(Math.random() * 100) + 1;
        elapsedTime = 0;
    }
}

function stopTimer() {
    document.getElementById("timer").innerHTML = randomNum + 'milliseconds reaction time';
    clearInterval(x);
    document.getElementById("stopbutton").style.display = "none";
    document.body.classList.remove("background");
    document.body.classList.remove("wait");
}

function resetGame() {
    randomNum = 0;
    countDown = true;
    elapsedTime = 0;
    document.getElementById("timer").innerHTML = '';
    document.getElementById("start").style.display = "block";
}
