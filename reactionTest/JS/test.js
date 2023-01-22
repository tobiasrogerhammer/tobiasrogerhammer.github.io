let x;
let randomNum;
let countDown = true;
let elapsedTime = 0;
let rounds = 0;

function startGame() {
    document.body.classList.add("wait");
    document.getElementById("timer").innerHTML = 'Wait for green!';
    document.getElementById("explanation").style.display = "none";

    randomNum = 0;
    countDown = true;
    elapsedTime = 0;

    document.getElementById("stopbutton").disabled = true;
    randomNum = Math.floor(Math.random() * 500) + 100;
    x = setInterval(updateTimer, 1);
    document.getElementById("start").style.display = "none";
    document.getElementById("stopbutton").style.display = "block";
    rounds++

    if (rounds === 4) {
        document.getElementById("bestScore").innerHTML = 'Tries:  4/5';
    } else if (rounds === 3){
        document.getElementById("bestScore").innerHTML = 'Tries:  3/5';
    } else if (rounds === 2){
        document.getElementById("bestScore").innerHTML = 'Tries:  2/5';
    } else if (rounds === 1){
        document.getElementById("bestScore").innerHTML = 'Tries:  1/5';
    }
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
        document.body.classList.remove("wait");
        document.body.classList.add("tap");
        document.getElementById("stopbutton").disabled = false;
    }
    document.getElementById("timer").innerHTML = randomNum + 'ms reaction time';
}



let reactionTimes = {};

function stopTimer() {
    if (rounds === 5) {
        document.getElementById("timer").innerHTML = 'Congratulations, round over!';
        document.getElementById("start").style.display = "none";
        document.getElementById("stopbutton").style.display = "none";
        document.getElementById("average").style.display = "block";
        document.getElementById("bestScore").innerHTML = 'Best average:  ' + bestRound + ' ms';
        document.body.classList.remove("tap");
        document.body.classList.remove("wait");

        if (average < bestRound) {
            bestRound = average;
            document.getElementById("bestScore").innerHTML = 'Best average:  ' + bestRound + ' ms';
            document.getElementById("timer").innerHTML = 'CONGRATULATIONS! NEW HIGH SCORE';
        }

    } else {
        document.getElementById("timer").innerHTML = randomNum + 'ms reaction time';
        clearInterval(x);
        document.getElementById("start").style.display = "block";
        document.getElementById("stopbutton").style.display = "none";
        document.getElementById("average").style.display = "block";
        document.body.classList.remove("tap");
        document.body.classList.remove("wait");

        let date = new Date();
        let dateString = date.toUTCString();
        reactionTimes[dateString] = randomNum;
        localStorage.setItem("reactionTimes", JSON.stringify(reactionTimes));
    }
}


let average = 0;
let bestRound = 10000;
function setAverageReactionTime() {
    let values = Object.values(reactionTimes);
    let sum = values.reduce((accumulator, currentValue) => accumulator + currentValue);
    average = sum / values.length;
    average = average.toFixed(0);
    document.getElementById("average").innerHTML = 'Average:  ' + average + 'ms';
}




function resetGame() {
    clearInterval(x); // stop the timer
    average = 0;
    rounds = 0;
    randomNum = 0;
    countDown = true;
    elapsedTime = 0;
    reactionTimes = [];
    document.getElementById("average").innerHTML = 'Average of 5:';
    document.getElementById("start").style.display = "block";
    document.getElementById("timer").innerHTML = '';
    document.getElementById("stopbutton").style.display = "none";
    document.getElementById("explanation").style.display = "block";
    document.getElementById("bestScore").innerHTML = 'Best average:  ' + bestRound + 'ms';
    document.body.classList.remove("tap");
    document.body.classList.remove("wait");
}

