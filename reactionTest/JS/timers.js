let x;
let randomNum;
let countDown = true;
let elapsedTime = 0;

function startGame() {
    randomNum = Math.floor(Math.random() * 10) + 1;
    x = setInterval(updateTimer, 1000);
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
        document.getElementById("backGround").classList.add("background");
    }
}

function countdown() {
    if (!countDown) {
        countDown = true;
        randomNum = Math.floor(Math.random() * 10) + 1;
        elapsedTime = 0;
    }
}

function stopTimer() {
    document.getElementById("timer").innerHTML = randomNum + ' sekunder reaksjonstid';
    clearInterval(x);
}