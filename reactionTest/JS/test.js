let countdownTimer;
let randomCountdown;
let isCountingDown = true;
let elapsedTime = 0;
let totalRounds = 0;

function startGame() {
    document.body.classList.add("wait");
    document.getElementById("timer").innerHTML = 'Wait for green!';
    document.getElementById("explanation").style.display = "none";
    randomCountdown = 0;
    isCountingDown = true;
    elapsedTime = 0;

    document.getElementById("stopbutton").disabled = true;
    randomCountdown = Math.floor(Math.random() * 4000) + 1000; // count down between 2 and 8 seconds
    countdownTimer = setInterval(updateTimer, 1);
    document.getElementById("start").style.display = "none";
    document.getElementById("stopbutton").style.display = "block";
    totalRounds++

    if (totalRounds === 4) {
        document.getElementById("bestScore").innerHTML = 'Tries:  4/5';
    } else if (totalRounds === 3) {
        document.getElementById("bestScore").innerHTML = 'Tries:  3/5';
    } else if (totalRounds === 2) {
        document.getElementById("bestScore").innerHTML = 'Tries:  2/5';
    } else if (totalRounds === 1) {
        document.getElementById("bestScore").innerHTML = 'Tries:  1/5';
    }
}

function updateTimer() {
    if (isCountingDown) {
        randomCountdown--;
        if (randomCountdown < 0) {
            isCountingDown = false;
            randomCountdown = 0;
            startTime = performance.now(); // start counting milliseconds
            document.getElementById("stopbutton").disabled = false;
        }
    } else {
        elapsedTime = performance.now() - startTime;
    }
    if (randomCountdown === 0) {
        document.body.classList.remove("wait");
        document.body.classList.add("tap");
    }
}

let reactionTimes = {};

function stopTimer() {
    if (totalRounds === 5) {
        document.getElementById("timer").innerHTML = 'Congratulations, round over!';
        document.getElementById("start").style.display = "none";
        document.getElementById("stopbutton").style.display = "none";
        document.getElementById("average").style.display = "block";
        document.body.classList.remove("tap");
        document.body.classList.remove("wait");
        if (average < bestRound) {
            bestRound = average;
            document.getElementById("bestScore").innerHTML = 'Best average:  ' + bestRound + ' ms';
            document.getElementById("timer").innerHTML = 'CONGRATULATIONS! NEW HIGH SCORE';
        }

    } else {
        document.getElementById("timer").innerHTML = `Reaction time: ${elapsedTime.toFixed(0)}ms`;
        clearInterval(countdownTimer);
        document.getElementById("start").style.display = "block";

        document.getElementById("stopbutton").style.display = "none";
        document.getElementById("average").style.display = "block";
        document.body.classList.remove("tap");
        document.body.classList.remove("wait");
        let date = new Date();
        let dateString = date.toUTCString();
        reactionTimes[dateString] = randomCountdown;
        localStorage.setItem("reactionTimes", JSON.stringify(reactionTimes));
    }
    setAverageReactionTime();
}

let sum = 0;
let round = 0;
function setAverageReactionTime() {
    sum += elapsedTime;
    round++;
    let average = sum / round;
    document.getElementById("average").innerHTML = 'Average: ' + average.toFixed(0) + 'ms';
}


function resetGame() {
    clearInterval(countdownTimer); // stop the timer
    averageReactionTime = 0;
    totalRounds = 0;
    randomCountdown = 0;
    document.getElementById("timer").innerHTML = "";
    document.getElementById("bestScore").innerHTML = bestRoundTime;
    document.getElementById("average").innerHTML = "";
    reactionTimes = {};
    localStorage.removeItem("reactionTimes");
    document.getElementById("start").style.display = "block";
    document.getElementById("average").style.display = "none";
    document.getElementById("explanation").style.display = "block";
}