$(document).ready(function(){

function prize(){
	var door=prompt ("Select either door 1, 2 or 3.");
	if (door==1) {
		alert("You chose DOOR ONE. Congratulations! You win a trip to Hawaii.");
	} else if (door==2) {
		alert("You selected DOOR TWO. You win a free lunch.");
	} else if (door==3) {
		alert("You chose DOOR THREE. Sorry, there is no prize for door three. Better luck next time.");
	}	else {
		alert(door + " is not a valid number. Refresh the page and try again.");
	};

};

prize();

});
