var ButtonDB = document.getElementById("ButtonDB");	  var PressedDB = false;
var ButtonHB = document.getElementById("ButtonHB");   var PressedHB = false;
var ButtonZB = document.getElementById("ButtonZB");   var PressedZB = false;
var ButtonHD = document.getElementById("ButtonHD");   var PressedHD = false;
var ButtonHN = document.getElementById("ButtonHN");   var PressedHN = false;
var PressedAbroad = false;

ButtonDB.onmouseenter = function(){ 
	if(PressedDB == false){
		ButtonDB.style.backgroundColor = "#A6937C";
		$('img#ImgHLJ').animate({opacity : "+=0.6"},150);
		$('img#ImgLN').animate({opacity : "+=0.6"},150);
	}
}
ButtonDB.onmouseleave = function(){ 
	if(PressedDB == false){
		ButtonDB.style.backgroundColor = "#2b2b2b";
		$('img#ImgHLJ').animate({opacity : "-=0.6"},150);
		$('img#ImgLN').animate({opacity : "-=0.6"},150);
	}
}
ButtonHB.onmouseenter = function(){ 
	if(PressedHB == false){
		ButtonHB.style.backgroundColor = "#A6937C";
		$('img#ImgBJ').animate({opacity : "+=0.6"},150);
		$('img#ImgTJ').animate({opacity : "+=0.6"},150);
		$('img#ImgSX1').animate({opacity : "+=0.6"},150);
	}
}
ButtonHB.onmouseleave = function(){ 
	if(PressedHB == false){
		ButtonHB.style.backgroundColor = "#2b2b2b";
		$('img#ImgBJ').animate({opacity : "-=0.6"},150);
		$('img#ImgTJ').animate({opacity : "-=0.6"},150);
		$('img#ImgSX1').animate({opacity : "-=0.6"},150);
	}
}
ButtonZB.onmouseenter = function(){ 
	if(PressedZB == false){
		ButtonZB.style.backgroundColor = "#A6937C";
		$('img#ImgSX2').animate({opacity : "+=0.6"},150);
		$('img#ImgHN').animate({opacity : "+=0.6"},150);
		$('img#ImgHB').animate({opacity : "+=0.6"},150);
		$('img#ImgSC').animate({opacity : "+=0.6"},150);
		$('img#ImgCQ').animate({opacity : "+=0.6"},150);
	}
}
ButtonZB.onmouseleave = function(){ 
	if(PressedZB == false){
		ButtonZB.style.backgroundColor = "#2b2b2b";
		$('img#ImgSX2').animate({opacity : "-=0.6"},150);
		$('img#ImgHN').animate({opacity : "-=0.6"},150);
		$('img#ImgHB').animate({opacity : "-=0.6"},150);
		$('img#ImgSC').animate({opacity : "-=0.6"},150);
		$('img#ImgCQ').animate({opacity : "-=0.6"},150);
	}
}
ButtonHD.onmouseenter = function(){ 
	if(PressedHD == false){
		ButtonHD.style.backgroundColor = "#A6937C";
		$('img#ImgSD').animate({opacity : "+=0.6"},150);
		$('img#ImgJS').animate({opacity : "+=0.6"},150);
		$('img#ImgSH').animate({opacity : "+=0.6"},150);
		$('img#ImgZJ').animate({opacity : "+=0.6"},150);
		$('img#ImgFJ').animate({opacity : "+=0.6"},150);
	}
}
ButtonHD.onmouseleave = function(){ 
	if(PressedHD == false){
		ButtonHD.style.backgroundColor = "#2b2b2b";
		$('img#ImgSD').animate({opacity : "-=0.6"},150);
		$('img#ImgJS').animate({opacity : "-=0.6"},150);
		$('img#ImgSH').animate({opacity : "-=0.6"},150);
		$('img#ImgZJ').animate({opacity : "-=0.6"},150);
		$('img#ImgFJ').animate({opacity : "-=0.6"},150);
	}
}
ButtonHN.onmouseenter = function(){ 
	if(PressedHN == false){
		ButtonHN.style.backgroundColor = "#A6937C";
		$('img#ImgGD').animate({opacity : "+=0.6"},150);
	}
}
ButtonHN.onmouseleave = function(){ 
	if(PressedHN == false){
		ButtonHN.style.backgroundColor = "#2b2b2b";
		$('img#ImgGD').animate({opacity : "-=0.6"},150);
	}
}

ButtonDB.onclick = function(){
	if (PressedDB == false)
	{document.getElementById("PartDB").onclick();ButtonDB.style.backgroundColor = "#A6937C";PressedDB=true;
	}else
	{
		ButtonDB.style.backgroundColor = "#2b2b2b";
		$("div#0").animate({opacity : "-=1"},150);
		$("div#10").animate({opacity : "-=1"},150,"linear",function(){$("div#PartDB").animate({opacity: "+=1"},150);});
		PressedDB = false;ButtonDB.style.backgroundColor = "#A6937C";
	}
}
ButtonHB.onclick = function(){
	if (PressedHB == false)
	{document.getElementById("PartHB").onclick();ButtonHB.style.backgroundColor = "#A6937C";PressedHB=true;}
	else
	{
		ButtonHB.style.backgroundColor = "#2b2b2b";
		$("div#3").animate({opacity : "-=1"},150);
		$("div#4").animate({opacity : "-=1"},150);
		$("div#5").animate({opacity : "-=1"},150,function(){$("div#PartHB").animate({opacity: "+=1"},150)});
		PressedHB = false;ButtonHB.style.backgroundColor = "#A6937C";
	}
}
ButtonZB.onclick = function(){
	if (PressedZB == false)
	{document.getElementById("PartZB").onclick();ButtonZB.style.backgroundColor = "#A6937C";PressedZB=true;}
	else
	{
		ButtonZB.style.backgroundColor = "#2b2b2b";
		$("div#16").animate({opacity : "-=1"},150);
		$("div#13").animate({opacity : "-=1"},150);
		$("div#13").animate({opacity : "-=1"},150);
		$("div#11").animate({opacity : "-=1"},150);
		$("div#7").animate({opacity : "-=1"},150);
		$("div#14").animate({opacity : "-=1"},150,function(){$("div#PartZB").animate({opacity: "+=1"},150)});
		PressedZB = false;ButtonZB.style.backgroundColor = "#A6937C";
	}
}
ButtonHD.onclick = function(){
	if (PressedHD == false)
	{document.getElementById("PartHD").onclick();ButtonHD.style.backgroundColor = "#A6937C";PressedHD=true;}
	else
	{
		ButtonHD.style.backgroundColor = "#2b2b2b";
		$("div#1").animate({opacity : "-=1"},150);
		$("div#6").animate({opacity : "-=1"},150);
		$("div#8").animate({opacity : "-=1"},150);
		$("div#9").animate({opacity : "-=1"},150);
		$("div#15").animate({opacity : "-=1"},150,function(){$("div#PartHD").animate({opacity: "+=1"},150)});
		PressedHD = false;ButtonHD.style.backgroundColor = "#A6937C";
	}
}
ButtonHN.onclick = function(){
	if (PressedHN == false)
	{document.getElementById("PartHN").onclick();ButtonHN.style.backgroundColor = "#A6937C";PressedHN=true;}
	else
	{
		ButtonHN.style.backgroundColor = "#2b2b2b";
		$("div#2").animate({opacity : "-=1"},150);
		$("div#12").animate({opacity : "-=1"},150,function(){$("div#PartHN").animate({opacity: "+=1"},150)});
		PressedHN = false;ButtonHN.style.backgroundColor = "#A6937C";
	}
}

document.getElementById("ButtonAbroad").onclick = function(){
	if (PressedAbroad){document.getElementById("IMapFrame").style.top="1000px";PressedAbroad=false;}
	else{document.getElementById("IMapFrame").style.top="0px";PressedAbroad=true;}
}
