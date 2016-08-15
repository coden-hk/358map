var PartDB = document.getElementById('PartDB');
var PartHB = document.getElementById("PartHB");
var PartHD = document.getElementById("PartHD");
var PartHN = document.getElementById("PartHN");
var PartZB = document.getElementById("PartZB");

PartDB.onclick = function() {
	$("div#PartDB").animate({opacity: "-=1"},150,"linear",function(){
		$("div#0").animate({opacity: "+=1"},150,'linear',function(){
			$("div#10").animate({opacity: "+=1"},150,'linear');
		});});
	PressedDB = true;
	ButtonDB.style.backgroundColor = "#A6937C";
	$('img#ImgHLJ').animate({opacity : "+=0.6"},150);
	$('img#ImgLN').animate({opacity : "+=0.6"},150);
}

PartHD.onclick = function() {
	$("div#PartHD").animate({opacity: "-=1"},150,"linear",function(){
		$("div#9").animate({opacity: "+=1"},150,'linear',function(){
			$("div#8").animate({opacity: "+=1"},150,'linear',function(){
				$("div#15").animate({opacity: "+=1"},150,'linear',function(){
					$("div#6").animate({opacity: "+=1"},150,'linear',function(){
						$("div#1").animate({opacity: "+=1"},150,'linear');
					});});});});});
	PressedHD = true;
	ButtonHD.style.backgroundColor = "#A6937C";
	$('img#ImgSD').animate({opacity : "+=0.6"},150);
	$('img#ImgJS').animate({opacity : "+=0.6"},150);
	$('img#ImgSH').animate({opacity : "+=0.6"},150);
	$('img#ImgZJ').animate({opacity : "+=0.6"},150);
	$('img#ImgFJ').animate({opacity : "+=0.6"},150);
}

PartHN.onclick = function() {
	$("div#PartHN").animate({opacity: "-=1"},150,"linear",function(){
		$("div#2").animate({opacity: "+=1"},150,'linear',function(){
			$("div#12").animate({opacity: "+=1"},150,'linear');
		});});
	PressedHN = true;
	ButtonHN.style.backgroundColor = "#A6937C";
	$('img#ImgGD').animate({opacity : "+=0.6"},150);
}


PartHB.onclick = function() {
	$("div#PartHB").animate({opacity: "-=1"},150,"linear",function(){
		$("div#5").animate({opacity: "+=1"},150,'linear',function(){
			$("div#4").animate({opacity: "+=1"},150,'linear',function(){
				$("div#3").animate({opacity: "+=1"},150,'linear');
			});});});
	PressedHB = true;
	ButtonHB.style.backgroundColor = "#A6937C";
	$('img#ImgBJ').animate({opacity : "+=0.6"},150);
	$('img#ImgTJ').animate({opacity : "+=0.6"},150);
	$('img#ImgSX1').animate({opacity : "+=0.6"},150);
}


PartZB.onclick = function() {
	$("div#PartZB").animate({opacity: "-=1"},150,"linear",function(){
		$("div#11").animate({opacity: "+=1"},150,'linear',function(){
			$("div#7").animate({opacity: "+=1"},150,'linear',function(){
				$("div#16").animate({opacity: "+=1"},150,'linear',function(){
					$("div#13").animate({opacity: "+=1"},150,'linear',function(){
						$("div#14").animate({opacity: "+=1"},150,'linear');
					})});});});});
	PressedZB = true;
	ButtonZB.style.backgroundColor = "#A6937C";
	$('img#ImgCQ').animate({opacity : "+=0.6"},150);
	$('img#ImgSX2').animate({opacity : "+=0.6"},150);
	$('img#ImgHN').animate({opacity : "+=0.6"},150);
	$('img#ImgHB').animate({opacity : "+=0.6"},150);
	$('img#ImgSC').animate({opacity : "+=0.6"},150);
}
