function declareFunctionsWithDependencies(paginator){

	window.checkIfParentClassIsPresent = function(element, className) {
		if(!element)
			return null;

		if(!element.parentNode || element === element.parentNode)
			return null;

		if(element.classList.contains(className))
			return element;

		return checkIfParentClassIsPresent(element.parentNode, className);
	};

	window.deleteDrag = function(element, event) {
		if(event)
			event.stopPropagation();

		element.classList.remove('dragging');

		if(!element.classList.contains('single-participant'))
			element = checkIfParentClassIsPresent(element, 'single-participant');

		var counter = 0;
		var container = document.getElementById('participants_container');
		var itemToInsertNextTo = document.getElementById('player_' + element.getAttribute('data-previous'));

		while(!checkIfParentClassIsPresent(itemToInsertNextTo, 'participants-container') && counter < 1000){
			counter++;

			if(itemToInsertNextTo.getAttribute('data-id') === itemToInsertNextTo.getAttribute('data-previous')){
				itemToInsertNextTo = null;
				break;
			}

			var subId = itemToInsertNextTo.getAttribute('data-previous');
			itemToInsertNextTo = document.getElementById('player_' + subId);
		}

		if(!element || counter >= 1000){
			container.prepend(element);
			return;
		}

		element.parentNode.classList.remove('contains-element');

		if(itemToInsertNextTo)
			container.insertBefore(element, itemToInsertNextTo.nextSibling);
		else
			container.insertBefore(element, container.firstChild);

		paginator.render();
	};

	window.getDropZone = function(element) {
		return checkIfParentClassIsPresent(element, 'dropzone');
	};

	window.shuffle = function (array) {
	    var counter = array.length;

	    // While there are elements in the array
	    while (counter > 0) {
	        // Pick a random index
	        var index = Math.floor(Math.random() * counter);

	        // Decrease counter by 1
	        counter--;

	        // And swap the last element with it
	        var temp = array[counter];
	        array[counter] = array[index];
	        array[index] = temp;
	    }

	    return array;
	};

	window.getFreeSpaces = function () {
		var freeSpaces = document.getElementsByClassName("selected-bet-place");
		freeSpaces = Array.prototype.slice.call(freeSpaces).filter(function (place) {
			return !place.getElementsByClassName("single-participant").length;
		});

		return freeSpaces;
	};
}
