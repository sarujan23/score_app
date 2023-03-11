var runs = 0;
var wickets = 0;
var balls = 0;
var overs = 0;

function addRun(run) {
	runs += run;
	balls++;
	if (balls % 6 === 0) {
		overs++;
	}
	updateScore();
}

function addOut() {
	wickets++;
	balls++;
	if (balls % 6 === 0) {
		overs++;
	}
	updateScore();
}

function updateScore() {
	document.getElementById("score").innerHTML = runs + "/" + wickets;
	document.getElementById("ballcount").innerHTML = balls + " Balls, " + overs + " Overs";
}
