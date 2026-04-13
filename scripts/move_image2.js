	
	<!-- <script type="text/javascript" -->

	// global vars
	var imgObj;
	var moveTimer;
	var defaultDelay = 10; // in milliseconds
	var defaultIncrement = 1; // in pixels
	
	// process will use/alter these
	var moveIncrementTop = 1;
	var moveIncrementLeft = 1;
	var endTop = 150;
	var endLeft = 0;
	
	// prep/reset
	imageInit = function (x, y) {

		// sets this once so that we can reuse
		imgObj = document.getElementById("move_img");
		// let's run reset now just for fun
		// resetImagePos();
	}

	// resets the image position
	resetImagePos = function (img_id) {
		imgObject = document.getElementById(img_id);

		// resets all the variables
		endTop = 0;
		endLeft = 0;
		moveIncrementTop = defaultIncrement;
		moveIncrementLeft = defaultIncrement;

		// moves the image back to the start
		imgObject.style.top = pxDim(endTop);
		imgObject.style.left = pxDim(endLeft);
		
		// clears the timer in case it's somehow still running
		window.clearTimeout(moveTimer);

		// just in case
		toggleButtons(false);		

		// DEBUG/LOG reset
		console.clear();
	}	

	// sets up the image move
	launchMoveImage = function (img_id,desiredEndTop, desiredEndLeft) {
		imgObject = document.getElementById(img_id);

		// reset it!
		resetImagePos(imgObject);
		
		// where is it now?
		var curTop = parseInt(imgObject.style.top);
		var curLeft = parseInt(imgObject.style.left);
				
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
		moveImage(imgObject,nextTop, nextLeft);
	}
		
	// moves the image
	moveImage = function (img_id,top, left) {
		imgObject = document.getElementById(img_id);
		
		if (imgObject) {

			// move our image to the requested points
			imgObject.style.top = pxDim(top);
			imgObject.style.left = pxDim(left);

			// test our current next top and next left against where
			//	we ultimately want to go - if either is done, don't keep
			//	trying to move it
			var nextTop = ((top + moveIncrementTop) < endTop) ? (top + moveIncrementTop) : endTop;
			var nextLeft = ((left + moveIncrementLeft) < endLeft) ? (left + moveIncrementLeft) : endLeft;
				
			// DEBUG/LOG
			console.log("TOP now: " + imgObject.style.top + " / next: " + nextTop + " | LEFT now: " + imgObject.style.left + " / next: " + nextLeft);
		
			// calls self again if needed
			if ( (nextTop < endTop) && (nextLeft < endLeft) ) {
				moveTimer = window.setTimeout(function() { moveImage(imgObject,nextTop, nextLeft); }, defaultDelay);
			} else {
				// enable move buttons
				toggleButtons(false);		

				// DEBUG/LOG
				console.log("DONE! top: " + imgObject.style.top + " / left: " + imgObject.style.left);
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