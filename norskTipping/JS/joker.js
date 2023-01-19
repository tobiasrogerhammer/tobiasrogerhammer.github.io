class Joker {
    constructor(name) {
        this.name = name;
        this.middle = []; //5 tall
        this.answers = []; //5 tall
        this.index = 0;
        this.score = 0;
    }



startGame() {
    for (let i = 0; i < 5; i++) {
        let randomMiddle = Math.floor(Math.random() * 10);
        let randomAnswer = Math.floor(Math.random() * 10);
        this.middle.push(randomMiddle);
        this.answers.push(randomAnswer);
        document.getElementById("btn" + i).innerHTML = randomMiddle;
        document.getElementById("replay").style.display = "none";
        let buttons = ["up", "down"];
        buttons.forEach(button => {
            for(let j=1; j<=4; j++) {
                document.getElementById(`${button}${j}`).disabled = true;
            }
        })
        document.getElementById("up" + this.index).disabled = false;
        document.getElementById("down" + this.index).disabled = false;
    }
}


playgame() {
    const allPrice = document.getElementsByClassName("priceText");
    const endPrice = document.getElementById("intro");
    const currentUP = document.getElementById("up" + this.index.toString());
    const currentDown = document.getElementById("down" + this.index.toString());

    for (let i = 0; i <= 5; i++) {
        allPrice[i].classList.remove("priceCurrent");
        if (this.score === 5) {
            if (allPrice[i].id === "priceFive") {
                allPrice[i].classList.add("priceCurrent");
            }
        } else if (this.score === 4) {
            if (allPrice[i].id === "priceFour") {
                allPrice[i].classList.add("priceCurrent");
            }
        } else if (this.score === 3) {
            if (allPrice[i].id === "priceThree") {
                allPrice[i].classList.add("priceCurrent");
            }
        } else if (this.score === 2) {
            if (allPrice[i].id === "priceTwo") {
                allPrice[i].classList.add("priceCurrent");
            }
        } else if (this.score === 1) {
            if (allPrice[i].id === "priceOne") {
                allPrice[i].classList.add("priceCurrent");
            }
        } else {
            if (allPrice[i].id === "priceZero") {
                allPrice[i].classList.add("priceCurrent");
            }
        }   
    }
    
    if (this.index >= 5) {
        if (this.score === 5) {
            endPrice.innerHTML = 'Du kunne ha vunnet 2 196 000 kr';
        } else if (this.score === 4) {
            endPrice.innerHTML = 'Du kunne ha vunnet 1 464 000 kr';
        } else if (this.score === 3) {
            endPrice.innerHTML = 'Du kunne ha vunnet 1 010 000 kr';
        } else if (this.score === 2) {
            endPrice.innerHTML = 'Du kunne ha vunnet 722 000 kr';
        } else if (this.score === 1) {
            endPrice.innerHTML = 'Du kunne ha vunnet 535 000 kr';
        } else {
            endPrice.innerHTML = 'Du kunne ha vunnet 412 000 kr';
        }
        
        document.getElementById("replay").style.display = "block";
    } else {
        
        for (let i = 0; i < 5; i++) {
            if (this.score < 0) {
                this.score++;
            }
        }
        
        currentUP.onclick = () => {
                if (this.answers[this.index] >= this.middle[this.index]) {
                    this.score++;
                    currentUP.classList.add("correct");
                    currentUP.innerHTML = this.answers[this.index];
                } else {
                    this.score--;
                    currentUP.classList.add("incorrect");
                    currentUP.innerHTML = this.answers[this.index];
                }

                currentUP.disabled = true;
                document.getElementById("down" + this.index).disabled = true;
                this.index++;
                this.playgame();
                for (let i = 0; i <= 5; i++) {
                    if (i === this.index) {
                        document.getElementById("up" + i).disabled = false;
                        document.getElementById("btn" + i).disabled = false;
                        document.getElementById("down" + i).disabled = false;
                    } else {
                        document.getElementById("up" + i).disabled = true;
                        document.getElementById("down" + i).disabled = true;
                    }
                }
                currentUP.innerHTML = this.answers;
            }
        }


        document.getElementById("down" + this.index).onclick = () => {

            if (this.answers[this.index] <= this.middle[this.index]) {
                this.score++;
                currentDown.classList.add("correct");
                currentDown.innerHTML = this.answers[this.index];
            } else {
                this.score--;
                currentDown.classList.add("incorrect");
                currentDown.innerHTML = this.answers[this.index];
            }

            currentUP.disabled = true;
            document.getElementById("down" + this.index).disabled = true;
            this.index++;
            this.playgame();
            for (let i = 0; i <= 5; i++) {
                if (i === this.index) {
                    document.getElementById("up" + i).disabled = false;
                    document.getElementById("btn" + i).disabled = false;
                    document.getElementById("down" + i).disabled = false;
                } else {
                    document.getElementById("up" + i).disabled = true;
                    document.getElementById("down" + i).disabled = true;
                }
            }
        }
    }
}

let jokerGame = new Joker('')
document.getElementById("replay").onclick = (e) => {
    window.location.reload();
}