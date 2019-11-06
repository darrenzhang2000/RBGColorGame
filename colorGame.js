var numSquares = 6;
var colors = []
var pickedColor;
var squaresSize = 6;

var squares = document.querySelectorAll(".square");
var colorDisplay =  document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	//mode event listeners
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent == "Easy"){
				numSquares = 3;
			}
			else{
				numSquares = 6;
			}
			reset();
		});
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			if(this.style.background == pickedColor){
				message.textContent = "Correct!";
				//After winning, change all square colors to the winning color
				changeColors(this.style.background); 
				h1.style.background = pickedColor;
				resetButton.textContent = "Play Again";
			}
			else
			{
				//alert("WRONG!");
				this.style.background = "#232323";	
				message.textContent = "Try again";
			}
		});
	}
}

function reset(){
	//generate new colors array
	colors = generateRandomColors(numSquares);
	//pick new random color to play with
	pickedColor = pickColor();
	//change colorDisplay to match new color
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	resetButton.textContent = "New Game";
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.block = "block";
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";	
}

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	//easy made has 3 colors to choose from
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	//pick new color to play  with
// 	pickedColor = pickColor();
// 	//change colorDisplay to match new color
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){ // for the first 3 squares, color them
// 			squares[i].style.background = colors[i];
// 		}
// 		else{ //get rid of the other 3 squares for easy mode
// 			squares[i].style.display = "none";
// 		}
// 	}

// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	//easy made has 6 colors to choose from
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	//pick new color to play  with
// 	pickedColor = pickColor();
// 	//change colorDisplay to match new color
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click", function(){
	reset();
});




function changeColors(color){
	for(var i = 0; i < squaresSize; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor((Math.random() * 256));
	//console.log(r);
	var g = Math.floor((Math.random() * 256));
	//console.log(g);
	var b = Math.floor((Math.random() * 256));
	//console.log(b);
	return "rgb(" + r + ", " + g + ", " + b + ")";	
}

