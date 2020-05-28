var imageGenerator = function() {

	var randomNumber = Math.floor(Math.random() * 7) + 1; 

	var randomImage = "m"+ randomNumber + ".jpg";

	var randomImageSource = "images/" + randomImage;


	document.getElementById("pic").src=randomImageSource;

}

window.onload = imageGenerator;





