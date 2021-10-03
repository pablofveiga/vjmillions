
 window.addEventListener("load", function load (event) {
 	window.removeEventListener("load", load, false);

// Old stuff

	var betTicket = '<div class="bet cart-bet"> <div class="bet-header"> <span class="bet-logo"> </span> <div class="bet-date"> 28th of may </div> </div> <h3 class="bet-title">F1 Grand Prix - Monaco</h3> <h4 class="ticket-date">2017-05-27</h4> <div class="bet-content"> <ul> <li>S. Vettel</li> <li>K. Raikkonen</li> <li>D. Ricciardo</li> <li>V. Bottas</li> <li>M. Verstappen</li> <li>C. Sainz Jr.</li> <li>L. Hamilton</li> <li>R. Grosjean</li> <li>F. Massa</li> <li>K. Magnussen</li> </ul> </div> <div class="bet-buttons"> <button class="edit-bet">Edit</button> <span class="delete-bet"></span> </div> </div>';		
	var participant2  = '<li class="participant"> <span class="profile-pic"> <img src="pics/participant-pic.png" alt="participant"> </span> <span class="participant-name">Kimi Raikonen</span> </li>';

	for (var i = 0; i <5; i++) {
		$(".cart-display-content").append(betTicket);
	}

	// for (var i = 0; i<=30; i++) {
	// 	$( ".participants-list" ).append(participant2);
	// }
	var participantGroup = '<div class="participant-group">'+participant2+participant2+participant2+participant2+participant2+participant2+participant2+participant2+participant2+'</div>'
	var participant2  = '<li class="participant"> <span class="profile-pic"> <img src="pics/participant-pic.png" alt="participant"> </span> <span class="participant-name">Kimi Raikonen</span> </li>';
	

for (var i = 0; i<=8; i++) {
	$( ".participants-list" ).append(participantGroup);
}

// if ($(window).width()<767) {
//    $(".participants-list").mousewheel(function(event, delta) {
//       this.scrollLeft -= (delta * 40);
//       event.preventDefault();
//    });	
// }

//New stuff

	//Create the paginator for the slide
	var paginator = new Paginator(25, function () {
		return document.getElementById('participants_container').getElementsByClassName("single-participant");
	});

	//Set the events for the pagination arrows	
	$(".participants-arrows .left-arrow").click(function() {paginator.prev();});
	$(".participants-arrows .right-arrow").click(function() {paginator.next();});

	window.addEventListener('resize', setPaginatorSize);

	function setPaginatorSize() {
		var viewports = [
			{min:null, max: 499, quantity: 6},
			{min:500, max: 660, quantity: 9},
			{min:661, max: 768, quantity: 12},
			{min:769, max: 900, quantity: 20},
			{min:901, max: null, quantity: 25}
		];

		var viewport = viewports.find(function (viewport){
			return (viewport.min <= window.innerWidth || !viewport.min) && (viewport.max >= window.innerWidth || !viewport.max);
		});

		paginator.render(viewport.quantity);
	}

	setPaginatorSize();

	//Declare global functions for events & helpers
	declareFunctionsWithDependencies(paginator);

	//API call
	getPossibleBetsFromServer(function (bets) {

		bets.forEach(function(bet, index) {
			var id = bet.id;
			var previous = index - 1;
			if(previous < 0) previous = 0;

			$( ".participants-container" ).append('<div class="single-participant draggable" id="player_' + id + '" data-compid="dow" data-id="' + id + '" data-previous="' + previous + '" data-priority="' + bet.priority + '"><div class="image"></div><div class="text-area"><h3>' + bet.name + '</h3><h4>' + bet.teamName + '</h4></div><span class="info-icon" onclick="deleteDrag(this, event)">i</span></div>');
		});

		paginator.render();

		$('.single-participant').click(function(event){
			if(!checkIfParentClassIsPresent(this, 'participants-container'))
				return;

			var freeSpaces = getFreeSpaces();
			if(freeSpaces[0]){
				freeSpaces[0].append(this);
				freeSpaces[0].classList.add('contains-element');
			}

			paginator.render();
		});
	});

	//Declare the drag&drop
	interact('.draggable').draggable({
		// keep the element within the area of it's parent if not dropped correctly
		restrict: {
		  restriction: "parent",
		  endOnly: true,
		  elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
		},
		// enable autoScroll
		autoScroll: true,

		// call this function on every dragmove event
		onmove: function (event) {
			var target = event.target;

			// keep the dragged position in the data-x/data-y attributes
			var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
			var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

			// translate the element
			target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

			// update the posiion attributes
			target.setAttribute('data-x', x);
			target.setAttribute('data-y', y);

		},
		//call this function when the drag starts
		onstart: function (event) {
			var target = event.target;
			var source = 'participants_container';

			var zone = checkIfParentClassIsPresent(target, 'dropzone');
			if(zone){
				zone.classList.remove('contains-element');
				source = 'dropzone';
			}

			target.setAttribute('initial-data-x', event.dx);
			target.setAttribute('initial-data-y', event.dy);
			target.setAttribute('data-source', source);
			target.classList.add('dragging');

			var targetBounds = target.getBoundingClientRect();
			target.setAttribute('data-y', event.pageY - targetBounds.top + 2 - window.pageYOffset);
		},
		// call this function on every dragend event
		onend: function (event) {
			var target = event.target;

			//we get if the element was reeased in the correct drag zone
			var dropzoneElement = getDropZone(event.interaction._eventTarget);

			//if not released in a correct drag zone, move as normal, reset stats & finish
			if(!dropzoneElement) {
				var x = parseFloat(target.getAttribute('initial-data-x')) || 0;
				var y = parseFloat(target.getAttribute('initial-data-y')) || 0;

				target.setAttribute('data-x', 0);
				target.setAttribute('data-y', 0);

				target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

				return;
			}

			//Selects the previous zone for swapping elements
			var prevSelectedInZone = dropzoneElement.getElementsByClassName("single-participant");
			if(prevSelectedInZone.length >= 1){ //There is an element before
				var source = target.getAttribute('data-source');
				if(source === 'participants_container'){
					Array.prototype.slice.call(prevSelectedInZone).forEach(function (selected) {
						deleteDrag(selected);
					});
				} else if(source === 'dropzone') {
					var prevZone = checkIfParentClassIsPresent(target, 'dropzone');
					prevZone.append(prevSelectedInZone[0]);
					prevZone.classList.add('contains-element');
				}
			}

			//If was released in a correct drag zone, add a class to the drop zone and move the bet. Then render the slide again
			dropzoneElement.classList.add('contains-element');
			dropzoneElement.append(event.target);

			paginator.render();

			//resetting move status
			target.style.webkitTransform = target.style.transform = 'translate(0px, 0px)';
			target.setAttribute('initial-data-x', 0);
			target.setAttribute('initial-data-y', 0);
			target.setAttribute('data-x', 0);
			target.setAttribute('data-y', 0);

			target.classList.remove('dragging');
			target.style.display = 'block';
		}
	});

	function mixAllBets(){
		var bets = document.getElementsByClassName("single-participant");

		bets = Array.prototype.slice.call(bets);
		//Suffle the bets and inject it again. We update the "data-previous" attribute for seeting the new order
		bets = shuffle(bets).map(function (bet, index) {
			var previousIndex = index - 1;
			if(previousIndex <= 0) previousIndex = 0;

			bet.setAttribute('data-previous', bets[previousIndex].getAttribute('data-id'));

			$( ".participants-container" ).append(bet);

			return bet;
		});

		paginator.render();
	}

	$(".pick-buttons .shuffle-icon").click(mixAllBets);

	//select all non selected bets, randomize the array and put the the randon ones in the free spaces. For doing compeply random, call removeAllSelected before. 
	function autopick() {
		removeAllSelected();

		var bets = document.getElementById('participants_container').getElementsByClassName("single-participant");
		bets = Array.prototype.slice.call(bets);
		bets = shuffle(bets);

		var freeSpaces = document.getElementsByClassName("selected-bet-place");
		freeSpaces = Array.prototype.slice.call(freeSpaces).filter(function (place) {
			return !place.getElementsByClassName("single-participant").length;
		});

		freeSpaces.forEach(function (space, index) {
			if(!bets[index]) return;

			bets[index].classList.add('contains-element');
			bets[index].style.display = "block";
			space.append(bets[index]);
		});

		paginator.render();
	}

	$(".pick-buttons .autopipck").click(autopick);

	
	function autopick10Best() {
		removeAllSelected();

		var bets = document.getElementById('participants_container').getElementsByClassName("single-participant");
		bets = Array.prototype.slice.call(bets);
		bets = bets.sort(function (betA, betB) {
			return parseFloat(betB.getAttribute('data-priority')) - parseFloat(betA.getAttribute('data-priority'));
		});

		var freeSpaces = document.getElementsByClassName("selected-bet-place");
		freeSpaces = Array.prototype.slice.call(freeSpaces).filter(function (place) {
			return !place.getElementsByClassName("single-participant").length;
		});

		freeSpaces.forEach(function (space, index) {
			if(!bets[index]) return;

			bets[index].classList.add('contains-element');
			bets[index].style.display = "block";
			space.append(bets[index]);
		});

		paginator.render();
	}

	$(".pick-buttons .company-selection").click(autopick10Best);


	function removeAllSelected() {
		var selected = document.getElementById("selection-container").getElementsByClassName("single-participant");

		Array.prototype.slice.call(selected).forEach(function(selected) {
			var id = selected.getAttribute('data-id');
			deleteDrag(selected);
		});

		paginator.render();
	}

	$(".selection .selection-buttons .delete-icon").click(removeAllSelected);


	function suffleAllSelected() {
		var selected = document.getElementById("selection-container").getElementsByClassName("single-participant");
		selected = Array.prototype.slice.call(selected);
		selected = shuffle(selected);

		var spaces = document.getElementsByClassName("selected-bet-place");
		spaces = Array.prototype.slice.call(spaces);
		//spaces = shuffle(spaces); //Uncomment for suffle in all spaces and not the first ones only.

		spaces.forEach(function(space, index) {
			if(selected[index]){
				space.append(selected[index]);
			}
		});
	}

	$(".selection .selection-buttons .shuffle-icon").click(suffleAllSelected);
 });
