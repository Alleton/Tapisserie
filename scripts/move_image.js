	
	<!-- <script type="text/javascript" -->

	// global vars
	var imgObj;
	var moveTimer;
	var defaultDelay = 10; // in milliseconds
	var defaultIncrement = 1; // in pixels
	
	// process will use/alter these
	var moveIncrementTop = 1;
	var moveIncrementLeft = 1;
	var endTop = 0;
	var endLeft = 0;
	
	// prep/reset
	imageInit = function (x, y) {

		// sets this once so that we can reuse
		imgObj = document.getElementById("move_img");
		// let's run reset now just for fun
		resetImagePos();
	}

	// resets the image position
	resetImagePos = function () {

		// resets all the variables
		endTop = 0;
		endLeft = 0;
		moveIncrementTop = defaultIncrement;
		moveIncrementLeft = defaultIncrement;

		// moves the image back to the start
		imgObj.style.top = pxDim(endTop);
		imgObj.style.left = pxDim(endLeft);
		
		// clears the timer in case it's somehow still running
		window.clearTimeout(moveTimer);

		// just in case
		toggleButtons(false);		

		// DEBUG/LOG reset
		console.clear();
	}	

	// sets up the image move
	launchMoveImage = function (desiredEndTop, desiredEndLeft) {

		// reset it!
		resetImagePos();
		
		// where is it now?
		var curTop = parseInt(imgObj.style.top);
		var curLeft = parseInt(imgObj.style.left);
				
		// we want an even move, so adjust our move increments to best achieve that
		if ( (desiredEndTop - curTop) > (desiredEndLeft - curLeft) ) {
			// more vert movement than horiz movement
			var factor = (desiredEndTop / desiredEndLeft);
			moveIncrementTop = (moveIncrementTop * factor);
		} else {
			// more horiz movement than vert movement
			var factor = (desiredEndLeft / desiredEndTop);
			moveIncrementLeft = (moveIncrementLeft * factor);
		}

		// tell the global vars where we're ending up
		endTop = (desiredEndTop + moveIncrementTop);
		endLeft = (desiredEndLeft + moveIncrementLeft);

		// calculate our own first move here
		var nextTop = (curTop + moveIncrementTop);
		var nextLeft = (curLeft + moveIncrementLeft);

		// disable move buttons
		toggleButtons(true);		

		// get it started
		moveImage(nextTop, nextLeft);
	}
		
	// moves the image
	moveImage = function (top, left) {
		
		if (imgObj) {

			// move our image to the requested points
			imgObj.style.top = pxDim(top);
			imgObj.style.left = pxDim(left);

			// test our current next top and next left against where
			//	we ultimately want to go - if either is done, don't keep
			//	trying to move it
			var nextTop = ((top + moveIncrementTop) < endTop) ? (top + moveIncrementTop) : endTop;
			var nextLeft = ((left + moveIncrementLeft) < endLeft) ? (left + moveIncrementLeft) : endLeft;
				
			// DEBUG/LOG
			console.log("TOP now: " + imgObj.style.top + " / next: " + nextTop + " | LEFT now: " + imgObj.style.left + " / next: " + nextLeft);
		
			// calls self again if needed
			if ( (nextTop < endTop) && (nextLeft < endLeft) ) {
				moveTimer = window.setTimeout(function() { moveImage(nextTop, nextLeft); }, defaultDelay);
			} else {
				// enable move buttons
				toggleButtons(false);		

				// DEBUG/LOG
				console.log("DONE! top: " + imgObj.style.top + " / left: " + imgObj.style.left);
			}
		}
	}

	// toggle button state while a move is happening
	toggleButtons = function (disabled) {
		document.getElementById("move_fixed").disabled = disabled;
		document.getElementById("move_reset").disabled = disabled;
		document.getElementById("move_custom").disabled = disabled;
	}
					
	// total convenience function
	pxDim = function (dim) {
		return (dim + "px");
	}

	// init onload
	window.onload = function() { imageInit(); };
	
	//-->