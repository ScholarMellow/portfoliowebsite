var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var h1 = document.querySelector("#p1Display");
var h2 = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var resetButton = document.querySelector("#resetButton");
var WinningScoreDisplay =  document.querySelector("p span")

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function (){
  if(!gameOver){	
	p1Score++;
	console.log(p1Score, winningScore);
	if(p1Score === winningScore){
		h1.classList.add("winner");
		gameOver = true;
	}
		h1.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function (){
  if(!gameOver){	
	p2Score++;
	if(p2Score === winningScore){
		h2.classList.add("winner");
		gameOver = true;
	}
		h2.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function(){
	p1Score = 0;
	p2Score = 0;
	h1.textContent = 0;
	h2.textContent = 0;
	h1.classList.remove("winner");
	h2.classList.remove("winner");
	gameOver = false;
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	h1.textContent = 0;
	h2.textContent = 0;
	h1.classList.remove("winner");
	h2.classList.remove("winner");
	gameOver = false;
};


numInput.addEventListener("change", function(){
	WinningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
});