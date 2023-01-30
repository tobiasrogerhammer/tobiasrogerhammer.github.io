<script>
	let firstInput = null;
	let operator = null;
	let secondInput = null;
	let output = "";
	let history = [];

	function handleNumberClick(event) {
		if (operator === null) {
			firstInput =
				firstInput === null
					? event.target.textContent
					: firstInput + event.target.textContent;
			output = firstInput;
		} else {
			secondInput =
				secondInput === null
					? event.target.textContent
					: secondInput + event.target.textContent;
			output = firstInput + "   " + operator + "   " + secondInput;
		}
		document.getElementById("output").textContent = output;
	}

	function handleOperatorClick(event) {
		operator = event.target.textContent;
		output = firstInput + "    " + operator;
		document.getElementById("output").textContent = output;
	}

	function handleCommaClick() {
		if (operator === null) {
			firstInput = firstInput === null ? "0." : firstInput + ".";
			output = firstInput;
		} else {
			secondInput = secondInput === null ? "0." : secondInput + ".";
			output = secondInput;
		}
	}
	function handlePercentageClick() {
		if (firstInput !== null) {
			if (parseFloat(firstInput) === 0) {
				output = "Cannot divide by zero";
			} else {
				let decimal = /\./g.test(firstInput);
				firstInput = decimal
					? (parseFloat(firstInput) * 0.01).toString()
					: (parseFloat(firstInput) / 100).toString();
				output = firstInput;
			}
		} else {
			output = "0";
		}
	}
	function handleToggleSignClick() {
		let input = operator === null ? firstInput : secondInput;
		if (input === null) return;
		input = (-1 * parseFloat(input)).toString();
		if (operator === null) {
			firstInput = input;
		} else {
			secondInput = input;
		}
		output = input;
		document.getElementById('output').innerHTML = output;
	}

	function handleEqualClick() {
		if (firstInput !== null && operator !== null && secondInput !== null) {
			let result;
			let expression = `${firstInput} ${operator} ${secondInput}`;
			switch (operator) {
				case "+":
					result = parseFloat(firstInput) + parseFloat(secondInput);
					break;
				case "-":
					result = parseFloat(firstInput) - parseFloat(secondInput);
					break;
				case "X":
					result = parseFloat(firstInput) * parseFloat(secondInput);
					break;
				case "/":
					result = parseFloat(firstInput) / parseFloat(secondInput);
					break;
				default:
					result = "Invalid operator";
			}
			firstInput = result;
			secondInput = null;
			output = firstInput;
			history.push(`${expression} = ${result}`);
			document.getElementById("output").textContent = firstInput;
		}
	}

	function handleClearClick() {
		firstInput = null;
		operator = null;
		secondInput = null;
		output = "";
		document.getElementById("output").textContent = "";
	}

	let displayHistoryFlag = false;

	function displayHistory() {
		if (!displayHistoryFlag) {
			displayHistoryFlag = true;
			let historyList = document.getElementById("history-list");
			historyList.innerHTML = "History:";
			for (let item of history) {
				let listItem = document.createElement("li");
				listItem.textContent = item;
				historyList.appendChild(listItem);
			}
		} else {
			displayHistoryFlag = false;
			let historyList = document.getElementById("history-list");
			historyList.innerHTML = "History";
		}
	}
</script>

<div id="body">
	<div id="headline">
		<svg
			id="backButton"
			onclick="window.location='https://tobiasrogerhammer.github.io';"
			height="18px"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			direction="left"
		/>
		<h1>Svelte calculator</h1>
	</div>
	<div id="calculator">
		<button id="history-list" on:click={displayHistory}>History</button>
		<div id="output">{output}</div>
		<div class="row">
			<button class="topTools" on:click={handleClearClick}>AC</button>
			<button class="topTools" on:click={handleToggleSignClick}
				>+/-</button
			>
			<button class="topTools" on:click={handlePercentageClick}>%</button>
			<button class="tool" on:click={handleOperatorClick}>/</button>
		</div>
		<div class="row">
			<button on:click={handleNumberClick}>7</button>
			<button on:click={handleNumberClick}>8</button>
			<button on:click={handleNumberClick}>9</button>
			<button class="tool" on:click={handleOperatorClick}>X</button>
		</div>
		<div class="row">
			<button on:click={handleNumberClick}>4</button>
			<button on:click={handleNumberClick}>5</button>
			<button on:click={handleNumberClick}>6</button>
			<button class="tool" on:click={handleOperatorClick}>-</button>
		</div>
		<div class="row">
			<button on:click={handleNumberClick}>1</button>
			<button on:click={handleNumberClick}>2</button>
			<button on:click={handleNumberClick}>3</button>
			<button class="tool" on:click={handleOperatorClick}>+</button>
		</div>
		<div class="row">
			<button id="wide" on:click={handleNumberClick}>0</button>
			<button class="tool" on:click={handleCommaClick}>.</button>
			<button class="tool" on:click={handleEqualClick}>=</button>
		</div>
	</div>
</div>

<style>
	#body {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #6699cc;
	}
	#headline {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 10%;
		padding: 0 2%;
		background-color: #3473c7;
		color: #fff;
		font-weight: 700;
		font-size: 200%;
		font-family: Open Sans Bold;
	}

	#history-list {
		position: relative;
		right: 30%;
		cursor: pointer;
		background-color: #333;
		color: #f4f4f4;
		border-radius: 10px;
	}

	#output {
		width: 55%;
		height: 10%;
		font-size: 300%;
		padding: 1%;
		color: #f4f4f4;
		text-align: right;
		border-radius: 10px;
	}
	#calculator {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 70%;
		width: 30%;
		background-color: #333;
		border-radius: 50px;
	}
	#backButton {
		position: relative;
		right: 25%;
		height: 30%;
		cursor: pointer;
	}
	#wide {
		width: 160px;
	}
	.row button {
		height: 75px;
		width: 75px;
		border-radius: 100px;
		font-size: 200%;
		background-color: #555;
		color: white;
		border: none;
		cursor: pointer;
	}
	.topTools {
		background-color: grey !important;
	}
	.tool {
		background-color: #ff9500 !important;
	}
	@media only screen and (max-width: 600px) {
		.row button {
			width: 40px;
			height: 40px;
			border-radius: 100px;
			font-size: 18px;
		}
		h1 {
			font-size: 100%;
		}
	}
</style>
