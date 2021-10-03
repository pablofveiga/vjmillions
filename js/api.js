/*
	This function is returning now mocked data. Update with the call to the server.
	The output MUST be an array of objects equal to "obj" variable.
*/
function getPossibleBetsFromServer(callback) {
	
	var obj = {
		id: 2, //id of the bet
		name: "Bet name", //name of the bet
		teamName: "Team name", //team name of the bet
		priority: 0 //priority: Used for selecting the best 10. When the button is pressed it selects the 10 highest
	};

	setTimeout(function () {
		callback(Array(100).fill(0).map(function(bet, index) {
			bet = Object.assign({}, obj);
			bet.id = bet.priority = index;
			bet.name += bet.id;
			return bet;
		}));
	}, 200);
}

/*
	This function should be updated with the code to send the bets to the server.
*/
function sendSelectedBetsToServer(bets) {
	/*
	var bets = [
		{
			id: 2,
			name: "Bet name",
			teamName: "Team name",
			priority: 0
		},{
			id: 6,
			name: "Bet name",
			teamName: "Team name",
			priority: 8
		}
	];

	*/

	console.log(selectedBets);
}
