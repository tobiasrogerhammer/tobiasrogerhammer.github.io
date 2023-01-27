<script>
	let firstOperand = null;
	let operator = null;
	let secondOperand = null;
	let output = "0";

	function handleNumberClick(event) {
		if (operator === null) {
			firstOperand =
				firstOperand === null
					? event.target.textContent
					: firstOperand + event.target.textContent;
			output = firstOperand;
		} else {
			secondOperand =
				secondOperand === null
					? event.target.textContent
					: secondOperand + event.target.textContent;
			output = secondOperand;
		}
	}

	function handleOperatorClick(event) {
		operator = event.target.textContent;
		output = operator;
	}

	function handleEqualClick() {
		if (
			firstOperand !== null &&
			operator !== null &&
			secondOperand !== null
		) {
			let result;
			switch (operator) {
				case "+":
					result =
						parseFloat(firstOperand) + parseFloat(secondOperand);
					break;
				case "-":
					result =
						parseFloat(firstOperand) - parseFloat(secondOperand);
					break;
				case "*":
					result =
						parseFloat(firstOperand) * parseFloat(secondOperand);
					break;
				case "/":
					result =
						parseFloat(firstOperand) / parseFloat(secondOperand);
					break;
				default:
					result = "Invalid operator";
			}
			output = result;
		}
	}

	function handleClearClick() {
		firstOperand = null;
		operator = null;
		secondOperand = null;
		output = "0";
	}
</script>

<div id="body">
	<div id="headline">
		<svg id="backButton" onclick="window.location='https://tobiasrogerhammer.github.io';" height="18px" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" direction="left"/>
		<h1>Svelte calculator</h1>
	</div>
	<div id="calculator">
		<div id="output">{output}</div>
		<div />
		<div>
			<button on:click={handleNumberClick}>7</button>
			<button on:click={handleNumberClick}>8</button>
			<button on:click={handleNumberClick}>9</button>
			<button on:click={handleClearClick}>C</button>
			<div />
			<button on:click={handleNumberClick}>4</button>
			<button on:click={handleNumberClick}>5</button>
			<button on:click={handleNumberClick}>6</button>
			<button on:click={handleEqualClick}>=</button>
		</div>
		<div>
			<button on:click={handleNumberClick}>1</button>
			<button on:click={handleNumberClick}>2</button>
			<button on:click={handleNumberClick}>3</button>
			<button on:click={handleOperatorClick}>-</button>
		</div>
		<div>
			<button on:click={handleNumberClick}>0</button>
			<button on:click={handleOperatorClick}>/</button>
			<button on:click={handleOperatorClick}>+</button>
			<button on:click={handleOperatorClick}>*</button>
		</div>
		<div />
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
	#calculator {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	#backButton {
		position: relative;
		right: 25%;
		height: 30%;
		cursor: pointer;
	}
</style>
