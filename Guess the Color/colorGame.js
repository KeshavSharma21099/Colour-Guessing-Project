var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var toGuess = document.querySelector("#picked");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	toGuess.textContent = pickedColor;
	for(var i=0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	toGuess.textContent = pickedColor;
	for(var i=0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}
});
toGuess.textContent = pickedColor;

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	this.textContent ="New Colors";
	messageDisplay.textContent = "";
	toGuess.textContent = pickedColor;
	for(var i=0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!!!";
			h1.style.background = clickedColor;
			colorChange(clickedColor);
			resetButton.textContent = "Play Again?";
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function colorChange(color){
	for(var i=0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i=0; i < num; i++){
		arr[i] = randomColor();
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}