//declare variables: each die from our set of 2 dice
//what number will we win at? target number is 7
//track number of times we roll dice
//track how many times we win/lose
//use jquery

var dieA = 1;
var dieB =1;

var target = 7;
var numberOfRolls = 0;
var wins = 0;
var losses = 0;
var sum = 0;

$('#roll-dice').on('click', rollDice)
$('#magic').on('click', magic)

function sumOfRolls () {
console.log (sum);
}



function rollDice () {
	dieA=randomNumber();
	dieB=randomNumber();

	//use the number the set the class of the die (see css file)
	$('#dieA').attr("class", "dice-"+dieA);
	$('#dieB').attr("class", "dice-"+dieB);

	//increment the total number of rolls by 1
	//	numberOfRolls++ is the same as numberOfRolls+1
	numberOfRolls ++;
	sum=sum+parseInt(dieA)+parseInt(dieB);
	//console.log(numberOfRolls);

	//invoke checkIsRollIsWinner function to see if you win
    var isWinner = checkIfRollIsWinner(dieA, dieB);
	//redundant to use 	if(isWinner==true), the part in the () is taken to be true
	if(isWinner){
		wins++;
	}else{
		losses++;
	}
	console.log (wins,losses);
}


function magic () {
	console.log (wins,losses);
	dieA=4;
	dieB=3;
	$('#dieA').attr("class", "dice-4");
	$('#dieB').attr("class", "dice-3");
	numberOfRolls ++;
	wins++;
	sum=sum+parseInt(dieA)+parseInt(dieB);

}


function randomNumber () {
//we need to get a random number between 1 and 6
//we need whole numbers - use math.floor to round down to whole number
return Math.floor((Math.random()*6)+1)
// can't use return Math.floor((Math.random()*7) becaue that could return 0 
}

function checkIfRollIsWinner (dieA, dieB){
//see if the total of dieA and dieB equals the target
	if (dieA+dieB===target){
		console.log("It is true they equal the target")
        return true;
	}else{
		console.log("It is false, they do not equal the target")
		return false;
	}
}