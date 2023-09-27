//  Popup modal box start 

var popup = document.getElementById("popup");
var clsoebtn = document.getElementById("closebtn");
var singupbtn = document.getElementById("get");

// signup button open popup box
singupbtn.onclick=function(){
	popup.style.display = "block";
}
// form close button start code
clsoebtn.onclick=function(){
	popup.style.display = "none";
}
// when click outside the popup form box code start
window.onclick=function(event){
	if(event.target == popup){
		popup.style.display = "none";
	}
}