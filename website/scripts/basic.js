
//On page load, this function checks for an HTML element 'nav01' and replaces it with this innerHTML
window.onload = function loadNav() {
	document.getElementById("nav01").innerHTML =
	"<ul id='menu'>" +
	"<li><a href='index.html'>Home</a></li>" +
	"<li><a href='about.html'>About</a></li>" +
	"<li><a href='maps.html'>Maps</a></li>" +
	"</ul>";
	//Post to the log that the Nav was successfully fetched
	console.log("Fetched Nav");
}
 