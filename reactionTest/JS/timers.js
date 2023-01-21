let x;
let randomNum;
let countDown = true;
let elapsedTime = 0;

function startGame() {
    document.getElementById("backGround").classList.add("wait");
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
        document.getElementById("backGround").classList.add("background");
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
    document.getElementById("start").style.display = "block";
}
