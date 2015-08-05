console.log("ready2!")
window.onload = function() {

	var $image = document.querySelectorAll(".artworks img");
	console.log($image);

	for (var i = 0; i < $image.length; i++) {
		$image[i].onclick = makeLightbox;
	};
}
// ///////////////////////////////////////////////////////////
	var makeLightbox = function() {
		console.log("artwork was clicked.")
		// create overlay
		var $overlay = document.createElement("div");

		$overlay.setAttribute("id","overlay")
		$overlay.style.zIndex 				=1000;
		$overlay.style.position 			= "fixed";
		$overlay.style.top  				=0;
		$overlay.style.left					=0;
		$overlay.style.width				="100%";
		$overlay.style.height				="100%"	;
		$overlay.style.backgroundColor		="black";
		$overlay.style.opacity				= 0.9;

		document.body.appendChild($overlay);
		$overlay.onclick = endLightbox;

		// ///////////////////////////////////////////////////////
		var $image = document.createElement("img");

		$image.setAttribute("src", this.getAttribute("src") );
		$image.setAttribute("id","lightbox_image");
		$image.style.zIndex 				=1001;
		$image.style.position 				= "fixed";
		$image.style.top  					="5%";
		$image.style.left					="24%";
		$image.style.width					="auto";
		$image.style.height					="90%";
		
		document.body.appendChild($image);
		$image.onclick = endLightbox;
		// //////////////////////////////////////////////////
		// var $closeButton = document.createElement("img");

	// 	$closeButton.setAttribute("src","http://www.clker.com/cliparts/t/f/J/i/7/C/amazon-style-close-button-hi.png");
	// 	$closeButton.setAttribute("id","close_button");

	// 	$closeButton.style.zIndex 					=1002;
	// 	$closeButton.style.position 				= "fixed";
	// 	$closeButton.style.top  					="15px";
	// 	$closeButton.style.right					="40px";
	// 	$closeButton.style.width					="20px";
	// 	$closeButton.style.height					="20px";

	// 	document.body.appendChild($closeButton);

	// 	$closeButton.onclick = endLightbox;
	}
// ///////////////////////////////////////////////////////////

	var endLightbox = function() {
		console.log("destroy");
		var $overlay = document.querySelector("#overlay");
		var $image = document.querySelector("#lightbox_image");
		// var $closeButton = document.querySelector("#close_button");

		document.body.removeChild($overlay);
		document.body.removeChild($image);
		// document.body.removeChild($closeButton);

	}


