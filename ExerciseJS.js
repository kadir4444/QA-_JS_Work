// JavaScript Document
var x;

function calcVal1(){
	try{
		x = document.getElementsById("Val");
		
		var y = x.sqrt();
		
		document.getElementById("output1").innerHTML = y;
	}catch(Error){
		document.alert = Error;
	}
}