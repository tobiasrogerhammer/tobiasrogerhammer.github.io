// Canvas setup
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// Game variables
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
let gameLoop;
let gameOver = false;

// Snake variables
let snake = [];
let snakeLength = 5;
let snakeSize = 20;
let snakeX = canvas.width / 2;
let snakeY = canvas.height / 2;
let snakeSpeed = snakeSize;
let snakeDirection = 'right';

// Food variables
let foodX;
let foodY;
let foodSize = 20;

// Leaderboard variables
let leaderboard = [];
let leaderboardMaxSize = 10;

// Initialize game
function init() {
	// Reset game variables
	score = 0;
	snakeLength = 5;
	snakeSize = 20;
	snakeX = canvas.width / 2;
	snakeY = canvas.height / 2;
	snakeSpeed = snakeSize;
	snakeDirection = 'right';
	snake = [];
	gameOver = false;

	// Reset canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Create snake
	for (let i = snakeLength - 1; i >= 0; i--) {
		snake.push({x: i * snakeSize, y: 0});
	}

	// Generate food
	generateFood();

	// Start game loop
	gameLoop = setInterval(update, 1000 / 10);
}

// Update game
function update() {
	// Move snake
	for (let i = snakeLength - 1; i > 0; i--) {
		snake[i].x = snake[i - 1].x;
		snake[i].y = snake[i - 1].y;
	}
	switch (snakeDirection) {
		case 'up':
			snakeY -= snakeSpeed;
			break;
		case 'down':
			snakeY += snakeSpeed;
			break;
		case 'left':
			snakeX -= snakeSpeed;
			break;
		case 'right':
			snakeX += snakeSpeed;
			break;
	}

	// Check for collision with food
	if (snakeX === foodX && snakeY === foodY) {
		score++;
		if (score > highScore) {
			highScore = score;
			localStorage.setItem('highScore', highScore);
			updateLeaderboard();
		}
		snakeLength++;
		generateFood();
	}

	// Check for collision with walls
	if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height) {
		gameOver = true;
		clearInterval(gameLoop);
		showGameOver();
	}

	// Check for collision with snake body
	for (let i = 1; i < snakeLength; i++) {
		if (snakeX === snake[i].x && snakeY === snake[i].y) {
			gameOver = true;
			clearInterval(gameLoop);
			showGameOver();
		}
	}

	// Update canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = '#fff';
	for (let i = 0; i < snakeLength; i++) {
		ctx.fillRect(snake[i].x, snake[i].y, snakeSize, snakeSize);
	}
	ctx.fillRect(foodX, foodY, foodSize, foodSize);

	// Update score
	document.getElementById('score').innerHTML = score;
	document.getElementById('high-score').innerHTML = highScore;
}

//
