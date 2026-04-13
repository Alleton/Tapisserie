
  const button = document.getElementById("machine_buttons");
  const paragraph = document.querySelector("p");
  
  const button2 =  document.getElementById("next_buttons");
  const buttonanimate  =  document.getElementById("animate");
  
  button.addEventListener("click", updateButton);
  button2.addEventListener("click", updateButtonNext);
  buttonanimate.addEventListener("click", updateButtonAnim);

   
  function updateButtonAnim() {
      if (buttonanimate.value === "Animate") {
		let bouger = false ;
        buttonanimate.value = "Stop anim";
        paragraph.textContent = "The Anim has started!";
		//moveImage =  (); 
		 const myImages = document.images;
		 let text = "";
		 for (let i = 0; i < myImages.length; i++) {
		   text += myImages[i].src + "<br>";
		   deplac = myImages[i].getAttribute("deplace")    ;
		   if (deplac == 'linear' ) {
			//moveImage( myImages[i]) ;
			bouger = true;
		   }
		   titre = myImages[i].title    ;
		   console.log (deplac + " " + titre); 
		}
			paragraph.textContent = text ;
			if (bouger ) {
				launchMoveImage (myImages) ;
			}
      } else {
        buttonanimate.value = "Animate";
        paragraph.textContent = "The machine is stpped.";
      }
    }
	// launchMoveImage = function (desiredEndTop, desiredEndLeft) {
	

 function launchMoveImage ( lesImage) {
		console.log ("fctlaunchMoveImagee  == ");
		fini = false;
		while (fini == false) {
			for (let i = 0; i < lesImage.length; i++) {
				  
				  deplac = lesImage[i].getAttribute("deplace")    ;
				  if (deplac == 'linear' ) {
					imgObj = lesImage[i] ;
					console.log ("fct_moveImage  == " + imgObj.title);
					curLeft = parseInt(imgObj.style.left);
					console.log ( curLeft + " " + imgObj.getAttribute("final_x") );
				}

		  	}	
			fini = true ;	
		}
    }
	  
  
  
  function updateButton() {
    if (button.value === "Start machine") {
      button.value = "Stop machine";
      paragraph.textContent = "The machine has started!";
	  
    } else {
      button.value = "Start machine";
      paragraph.textContent = "The machine is stpped.";
    }
  }
 
  function updateButtonNext() {
      
		var myURL = document.location ;
		//myURL = updateUrl(myURL,'scene','2');
		myURLa = myURL.protocol + myURL.pathname  ; // Returns:'http:localhost/tapestry/tap.php
		
		var scene = document.getElementById("scene").value  ; 
		//maVariable = $maVariable + 1 :
		scene = parseInt(scene,10);
		scene = scene + 1 ;
		myURLa = myURLa +"?scene=" + scene ;
		//paragraph.textContent = myURLa ;
		window.open(myURLa,"_self");
		//window.open("https://www.mozilla.org/", "mozillaTab");
	 
    }
	
	
	