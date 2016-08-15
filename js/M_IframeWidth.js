var SelectedProvince = document.getElementById("SelectedProvince");
var MapWidth = 0;var MapHeight =0;
var MyNameListTable = document.getElementById("MyNameListTable");
var NoteSwitch = [16];
var userAgent = navigator.userAgent;

var BottomChoice = document.getElementById("BottomChoice");
var BottomDisplay = document.getElementById("BottomDisplay");

var ZoomPercent = 0.6;
var IsChina = true;

var MyProvinceListSet=[17]; //省份代码;横坐标;纵坐标;简称;全称;高度
MyProvinceListSet[0]='黑龙江;8.5;张馨文;哈尔滨工业大学';
MyProvinceListSet[1]='福建;10.5;赖一夫;泉州师范学院;武奥军;福州大学';
MyProvinceListSet[2]='广东;8.5;李宗昊;广东工业大学';
MyProvinceListSet[3]='山西;32;袁约瑟 刘晨宇;山西医科大学;董泽龙;山西大学;任旭;山西师范大学;王昭华;山西医科大学<br/>汾阳学院;贺子婷;山西大学<br/>商务学院;原媛 常振 常婧<br/>杨眉 谷金晔;太原理工大学;闫宇 池晨光<br/>畅恂达 王雨坤<br/>辛瑞雯;回炉重造学院';
MyProvinceListSet[4]='天津;15.5;田梓青;天津大学;高亚琼 李浩然;天津理工大学;赵一勤;天津师范大学;陈昭文;天津外国语大学<br/>滨海学院';
MyProvinceListSet[5]='北京;25;梁辰 文宇;北邮宏福校区;张卓月 李孟頔;北京体育大学;王如歌;北京中医药大学;范文锋 贾凡;北京化工大学;李璇 刘冉;北京师范大学;杨一凡;北京交通大学;李丁;中央音乐学院;张轶弛;中国传媒大学';
MyProvinceListSet[6]='浙江;8.5;马乾程;宁波诺丁汉';
MyProvinceListSet[7]='四川;15;刘林 李文婧;四川大学;刘澍泽 乔治超;西南交通大学;张英博;西南财经大学;周秉锐;成都理工大学';
MyProvinceListSet[8]='江苏;12.5;沈珂羽;中国矿业大学;师瑞;江南大学;梁裕文;南京邮电大学';
MyProvinceListSet[9]='山东;10.5;史丁心;山东大学;张晨琪;中国海洋大学';
MyProvinceListSet[10]='辽宁;8.5;王锐;东北财经大学';
MyProvinceListSet[11]='陕西;14;高博煜;长安大学;任美蓉;西北农林科技大学;段亭宇;西安电子科技大学<br/>长安学院';
MyProvinceListSet[12]='澳门;8.5;张智超;澳门科技大学';
MyProvinceListSet[13]='湖北;8.5;王泽中;中国地质大学-武汉';
MyProvinceListSet[14]='湖南;8.5;闫蕗宇;湖南工业大学';
MyProvinceListSet[15]='上海;12.5;崔冠然;上海师范大学;张凯煜;上海对外经贸大学;宁一舟;东华大学';
MyProvinceListSet[16]='重庆;8.5;王婧妍;重庆师范大学<br/>涉外商贸学院';

var MapFrame = document.getElementById("MapFrame");

var MyPartChoice =1;
BottomDisplay.style.height = "0";
BottomChoice.style.height = "0";
//document.getElementById("MenuInfo").onclick = function(){
//	MapFrame.contentWindow.MyZoom(0.6);
//}

window.onload = function(){
	document.getElementById("MapEnterce").innerText= "进入地图";
	document.getElementById("MapEnterce").onclick = function(){
		document.getElementById("MyStartUpImg").style.display= "none";
		if (userAgent.indexOf('iPhone')>-1){
			$("div#FrameDiv").animate({scrollLeft: 0.38 * MapFrame.contentWindow.ReturenHeight(),scrollTop: 0.17 * MapFrame.contentWindow.ReturenWidth()},700,"easeOutQuart");
			MapFrame.contentWindow.ScrollPosition(2,0.25,0);
		}
		else{MapFrame.contentWindow.ScrollPosition(0.43,0.25,0);}
	}
}



document.getElementById("MyFloatBlack").onclick= function(){
	BottomDisplay.style.height = "0";
	BottomChoice.style.height = "0";
	document.getElementById("MoreMenu").innerText="更多";
	document.getElementById("MyFloatBlack").style.height ="0";
}
//
document.getElementById("MoreMenu").onclick = function(){
	if (this.innerText=="收起" && BottomDisplay.style.height!="0px") {
		document.getElementById("MyFloatBlack").style.height ="0";
		BottomDisplay.style.height ="0";
		this.innerText="更多";
		return false;
	}
	if (this.innerText=="收起" && BottomChoice.style.height!="0px") {
		BottomChoice.style.height ="0";
		document.getElementById("MyFloatBlack").style.height ="0";
		this.innerText="更多";
		return false;
	}
	if (BottomChoice.style.height == "0" || BottomChoice.style.height =="0px" || BottomChoice.style.height == "")
	{
		BottomChoice.style.height ="16em";
		document.getElementById("MyFloatBlack").style.height ="92%";
		this.innerText="收起";
	}
}

function MyNoteClick(NoteIndex){
	MyNameListTable.innerHTML = "";
	var MPIProperty = MyProvinceListSet[NoteIndex].split(";");
	document.getElementById("MyFloatBlack").style.height ="92%";
	document.getElementById("BottomDisplay").style.height = MPIProperty[1] + "em";
	var MNL="";
	document.getElementById("MoreMenu").innerText= "收起";
	document.getElementById("MyProvinceTitle").innerText = MPIProperty[0];
	for (j=2;j<MPIProperty.length;j++){
		if (j % 2 == 0){
			if (j == MPIProperty.length -2){MNL = MNL + '<tr><td class=\"MyNameListTextLeft\" style=\"border-bottom: 0;\">' + MPIProperty[j] +'</td>';}
			else{MNL = MNL + '<tr><td class=\"MyNameListTextLeft\">' + MPIProperty[j] +'</td>';}
		}else{
			if (j == 3){
				if(j == MPIProperty.length - 1){MNL = MNL + '<td class=\"MyNameListTextRight\" style=\"border-bottom-right-radius: 5px;border-bottom: 0;\">' + MPIProperty[j] +'</td></tr>';}
				else{MNL = MNL + '<td class=\"MyNameListTextRight\" style=\"border-top-right-radius: 5px;\">' + MPIProperty[j] +'</td></tr>';}
			}
			else if(j == MPIProperty.length - 1){MNL = MNL + '<td class=\"MyNameListTextRight\" style=\"border-bottom-right-radius: 5px;border-bottom: 0;\">' + MPIProperty[j] +'</td></tr>';}
			else{MNL = MNL + '<td class=\"MyNameListTextRight\">' + MPIProperty[j] +'</td></tr>';}
		}
	}
	MyNameListTable.innerHTML = MNL;
}

SelectedProvince.onclick = function() {
	var BottomZoom = document.getElementById("BottomZoom");
	if (BottomZoom.style.height != "4em"){
		BottomZoom.style.height = "4em";
		document.getElementById("SelectedProvince").style.backgroundColor ="#404040";
	}
	else{BottomZoom.style.height = "0";
		document.getElementById("SelectedProvince").style.backgroundColor ="#222222";
	}
}

var ZoomDisplay = document.getElementById("ZoomDisplay");

document.getElementById("ZoomSmall").onclick =function(){
	ZoomPercent -=0.1;
	MapFrame.contentWindow.MyZoom(ZoomPercent);
	ZoomDisplay.innerText = parseInt(ZoomPercent * 100) +"%";
	if (userAgent.indexOf('iPhone')>-1){
		document.getElementById("FrameDiv").scrollLeft=0.4* MapFrame.contentWindow.ReturenWidth();
		document.getElementById("FrameDiv").scrollTop=0.3* MapFrame.contentWindow.ReturenHeight();
	}
}

document.getElementById("ZoomLarge").onclick =function(){
	ZoomPercent +=0.1;
	MapFrame.contentWindow.MyZoom(ZoomPercent);
	ZoomDisplay.innerText = parseInt(ZoomPercent * 100)  +"%";
	if (userAgent.indexOf('iPhone')>-1){
		document.getElementById("FrameDiv").scrollLeft=0.4* MapFrame.contentWindow.ReturenWidth();
		document.getElementById("FrameDiv").scrollTop=0.3* MapFrame.contentWindow.ReturenHeight();
	}
}

document.getElementById("PartChina").onclick = function(){
	if (!IsChina){
		MapFrame.src = "IFrameHTML.html";
		document.getElementById("PartChina").style.backgroundColor="#A6937C";
		document.getElementById("PartAbroad").style.backgroundColor="#363636";
		IsChina=true;
		document.getElementById("MoreMenu").click();
	}
}

document.getElementById("PartAbroad").onclick = function(){
	if (IsChina){
		MapFrame.src = "IFrameAborad.html";
		document.getElementById("PartAbroad").style.backgroundColor="#A6937C";
		document.getElementById("PartChina").style.backgroundColor="#363636";
		IsChina= false;
		document.getElementById("MoreMenu").click();
	}
	
}
//document.getElementById("ChoiceDB").onclick = function(){
//	document.getElementById("MyFloatBlack").style.height ="0";
//	BottomChoice.style.height ="0";
//	if (userAgent.indexOf('iPhone')>-1){
//		$("div#FrameDiv").animate({scrollLeft: 0.77 * MapFrame.contentWindow.ReturenHeight(),scrollTop: 0.11 * MapFrame.contentWindow.ReturenWidth()},700,"easeOutQuart");
//		MapFrame.contentWindow.ScrollPosition(2,0.25,5);
//	}
//	else {MapFrame.contentWindow.ScrollPosition(0.85,0.12,5)}
//	SelectedProvince.innerText= "东北";
//	SelectedProvince.onclick = function(){document.getElementById("ChoiceDB").click()}
//	document.getElementById("MoreMenu").innerText="更多";
//}
//
//document.getElementById("ChoiceHB").onclick = function(){
//	document.getElementById("MyFloatBlack").style.height ="0";
//	BottomChoice.style.height ="0";
//	if (userAgent.indexOf('iPhone')>-1){
//		$("div#FrameDiv").animate({scrollLeft: 0.58 * MapFrame.contentWindow.ReturenHeight(),scrollTop: 0.17 * MapFrame.contentWindow.ReturenWidth()},700,"easeOutQuart");
//		MapFrame.contentWindow.ScrollPosition(2,0.25,1);
//	}
//	else 
//	{
//		MapFrame.contentWindow.ScrollPosition(0.63,0.25,1);
//	}
//	SelectedProvince.innerText= "华北";
//	SelectedProvince.onclick = function(){document.getElementById("ChoiceHB").click()}
//	document.getElementById("MoreMenu").innerText="更多";
//}
//
//document.getElementById("ChoiceHD").onclick = function(){
//	document.getElementById("MyFloatBlack").style.height ="0";
//	BottomChoice.style.height ="0";
//	if (userAgent.indexOf('iPhone')>-1){
//		$("div#FrameDiv").animate({scrollLeft: 0.73 * MapFrame.contentWindow.ReturenHeight(),scrollTop: 0.32 * MapFrame.contentWindow.ReturenWidth()},700,"easeOutQuart");
//		MapFrame.contentWindow.ScrollPosition(2,0.25,2);
//	}
//	else {MapFrame.contentWindow.ScrollPosition(0.8,0.50,2)}
//	SelectedProvince.innerText= "华东";
//	SelectedProvince.onclick = function(){document.getElementById("ChoiceHD").click()}
//	document.getElementById("MoreMenu").innerText="更多";
//}
//
//document.getElementById("ChoiceHN").onclick = function(){
//	document.getElementById("MyFloatBlack").style.height ="0";
//	BottomChoice.style.height ="0";
//	if (userAgent.indexOf('iPhone')>-1){
//		$("div#FrameDiv").animate({scrollLeft: 0.68 * MapFrame.contentWindow.ReturenHeight(),scrollTop: 0.5 * MapFrame.contentWindow.ReturenWidth()},700,"easeOutQuart");
//		MapFrame.contentWindow.ScrollPosition(2,0.25,3);
//	}
//	else {MapFrame.contentWindow.ScrollPosition(0.73,1,3)}
//	SelectedProvince.innerText= "华南";
//	SelectedProvince.onclick = function(){document.getElementById("ChoiceHN").click()}
//	document.getElementById("MoreMenu").innerText="更多";
//}
//
//document.getElementById("ChoiceZB").onclick = function(){
//	document.getElementById("MyFloatBlack").style.height ="0";
//	BottomChoice.style.height ="0";
//	if (userAgent.indexOf('iPhone')>-1){
//		$("div#FrameDiv").animate({scrollLeft: 0.53 * MapFrame.contentWindow.ReturenHeight(),scrollTop: 0.34 * MapFrame.contentWindow.ReturenWidth()},700,"easeOutQuart");
//		MapFrame.contentWindow.ScrollPosition(2,0.25,4);
//	}
//	else {MapFrame.contentWindow.ScrollPosition(0.58,0.52,4)}
//	SelectedProvince.innerText= "中部";
//	SelectedProvince.onclick = function(){document.getElementById("ChoiceZB").click()}
//	document.getElementById("MoreMenu").innerText="更多";
//}
//
//document.getElementById("ChoiceAll").onclick = function(){
//	document.getElementById("MyFloatBlack").style.height ="0";
//	BottomChoice.style.height ="0";
//	if (userAgent.indexOf('iPhone')>-1){
//		$("div#FrameDiv").animate({scrollLeft: 0.58 * MapFrame.contentWindow.ReturenHeight(),scrollTop: 0.17 * MapFrame.contentWindow.ReturenWidth()},700,"easeOutQuart");
//	}
//	MapFrame.contentWindow.ScrollPosition(2,2,0);
//	SelectedProvince.innerText= "全部省份";
//	SelectedProvince.onclick = function(){}
//	document.getElementById("MoreMenu").innerText="更多";
//}
