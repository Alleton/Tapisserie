<!-- <script type="text/javascript" -->

	// global vars
	const parentDOM = document.getElementById("box_tapis");
	
	const myImages = document.images;
	let text = "";
	for (let i = 0; i < myImages.length; i++) {
	  text += myImages[i].src + "<br>";
	}