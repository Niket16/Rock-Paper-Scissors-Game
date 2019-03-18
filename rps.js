var userScore=0;
var computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
const wl_span=document.getElementById("WL");

function ComputerChoice(){
	const choices=['r','p','s'];
	const randomNumber=Math.floor((Math.random()*3));
	return choices[randomNumber];
}

function changeName(letter){
	if(letter == 'r') return "Rock";
	if(letter == 'p') return "Paper";
	if(letter == 's') return "scissor"; 
}
function win(userChoice,computerChoice){
	userScore++;
	userScore_span.innerHTML =userScore;
	computerScore_span.innerHTML=computerScore;
	const subUser="user".fontsize(3).sub();
	const subComp="comp".fontsize(3).sub();
	result_div.innerHTML=changeName(userChoice) + subUser + " beats " + changeName(computerChoice) + subComp;
	wl_span.innerHTML="YOU WIN!!💥🔥";
}

function lose(userChoice,computerChoice){
	computerScore++;
	userScore_span.innerHTML =userScore;
	computerScore_span.innerHTML=computerScore;
	const subUser="user".fontsize(3).sub();
	const subComp="comp".fontsize(3).sub();
	result_div.innerHTML=changeName(computerChoice) + subComp + " beats " + changeName(userChoice) + subUser;
	wl_span.innerHTML="YOU   LOSE 💩";
}

function draw(userChoice,computerChoice){
	userScore_span.innerHTML =userScore;
	computerScore_span.innerHTML=computerScore;
	const subUser="user".fontsize(3).sub();
	const subComp="comp".fontsize(3).sub();
	result_div.innerHTML=changeName(userChoice) + subUser + " equals " + changeName(computerChoice) + subComp;
	wl_span.innerHTML="DRAW 😐 ";
}


function game(userChoice){
	const computerChoice=ComputerChoice();
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,computerChoice);
			break;

		case "rp":
		case "ps":
		case "sr":
			lose(userChoice,computerChoice);
			break;

		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,computerChoice);
			break;
	}
}

function main(){
	rock_div.addEventListener('click',function() {
		game("r");
	})
	
	paper_div.addEventListener('click',function() {
		game("p");	
	})
	
	scissor_div.addEventListener('click',function() {
		game("s");
	})
}

main();