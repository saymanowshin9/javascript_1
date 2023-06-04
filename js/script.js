//text change
function textChange(){
document.getElementById('h2').innerHTML ="javascript is front end's light weight functional object oriented scripting language-which helps to build a interactive website.";
}

//date & time
function dateAndTime(){
	document.getElementById('date').innerHTML = Date();
}
//bulb on/off
function bulbOn(){
	document.getElementById('img').src = "images/bulbon.gif";

}
function bulbOff(){
	document.getElementById('img').src = "images/bulboff.gif";
}
function bigFont(){
	document.getElementById('font').style.fontSize = "50px";
}
//hide and show content
function hide(){
	document.getElementById('hide&show').style.display = "none"
}
function show(){
	document.getElementById('hide&show').style.display = "block"
}
//data aditional
	let num1 = 8;
    let num2 = 2;
    let result = num1 + num2;
function plus(){
	document.getElementById('data').innerHTML = result;
}
//class use
function bigFont1(){
	document.getElementsByClassName('p')[2].style.fontSize = "50px";
}
function bigFont2(){
	var info = document.getElementsByTagName('p');
	alert (info.length)
}