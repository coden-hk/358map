var MyProvinceListSet=[17]; //省份代码;横坐标;纵坐标;简称;全称;高度
MyProvinceListSet[0]='HLJ;0.82;0.215;黑;黑龙江;100;';
MyProvinceListSet[1]='FJ;0.73;0.76;闽;福建;100';
MyProvinceListSet[2]='GD;0.695;0.81;粤;广东;100';
MyProvinceListSet[3]='SX1;0.625;0.483;晋;山西;260';
MyProvinceListSet[4]='TJ;0.695;0.435;津;天津;140';
MyProvinceListSet[5]='BJ;0.675;0.40;京;北京;240';
MyProvinceListSet[6]='ZJ;0.75;0.69;浙;浙江;100';
MyProvinceListSet[7]='SC;0.491;0.653;川;四川;140';
MyProvinceListSet[8]='JS;0.738;0.572;苏;江苏;140';
MyProvinceListSet[9]='SD;0.7;0.52;鲁;山东;100';
MyProvinceListSet[10]='LN;0.775;0.365;辽;辽宁;100';
MyProvinceListSet[11]='SX2;0.58;0.54;陕;陕西;140';
MyProvinceListSet[12]='AM;0.65;0.845;澳;澳门;100';
MyProvinceListSet[13]='HB;0.63;0.64;鄂;湖北;100';
MyProvinceListSet[14]='HN;0.63;0.741;湘;湖南;100';
MyProvinceListSet[15]='SH;0.765;0.627;沪;上海;140';
MyProvinceListSet[16]='CQ;0.56;0.653;渝;重庆;140';

var MapWidth=0;
var MapHeigh=0;

var Booted =false;

var MyPartListSet=[5]; //区域列表
MyPartListSet[0]='DB;0.82;0.01;';
MyPartListSet[1]='HB;0.55;0.15;';
MyPartListSet[2]='HD;0.78;0.45;';
MyPartListSet[3]='HN;0.72;0.83;';
MyPartListSet[4]='ZB;0.47;0.68;';
MyPartListSet[5]='ZG;-0.11;-0.1;';

window.onload = function(){
	var MyMap = document.getElementById("MyMap");
	MyMap.style.width = window.parent.document.body.offsetWidth * 4.5 + "px";
	
	MapWidth = MyMap.width;
	MapHeigh = MyMap.height;
	
	var MPIListSet;var MPIObject;
	for (var i=0;i<17;i++){
		//解码指定省份
		MPIListSet = MyProvinceListSet[i].split(';');
		//获取省份对象
		MPIObject = document.getElementById(i);
		//定位函数
		MPIObject.style.left = MapWidth * MPIListSet[1] + 185 + "px";
		MPIObject.style.top = MapHeigh * MPIListSet[2] + 125 + "px";
		document.getElementById(i).onclick=function(){window.parent.MyNoteClick(this.id);}
	}
	var MyPartPropertyList;
	for (var j=0;j<6;j++){
		MyPartPropertyList = MyPartListSet[j].split(';');
		var MP = document.getElementById("Part" + MyPartPropertyList[0]);
		MP.style.left = MapWidth * MyPartPropertyList[1] + 200 + "px";
		MP.style.top = MapHeigh * MyPartPropertyList[2] + 200 + "px";
	}
}

function ScrollPosition(Px,Py,AnimationIndex){
	//document.body.scrollTop = 200;
	//document.body.scrollTop = Py*MapHeigh;
	//document.body.scrollLeft = Px * MapWidth;
	//alert(window.parent.document.body.scrollLeft);
//	alert(document.body.offsetHeight+";"+document.body.offsetWidth);
//	DisplayNote(AnimationIndex);
	if (Px==2){return false;}
	$("body,html").animate({scrollLeft: Px * MapWidth,scrollTop: Py * MapHeigh},700,"easeOutQuart");
	
}

function ReturenWidth(){return document.body.offsetWidth;}
function ReturenHeight(){return document.body.offsetHeight;}
function MyZoom(ZoomPercent){document.body.style.zoom = ZoomPercent;}

//function DisplayNote(NoteMode){
//	switch (NoteMode)
//	{
//		case 0:
//			for (i=0;i<17;i++){document.getElementById(i).style.opacity=1;}
//			for (i=0;i<5;i++){
//				var MyPartName =MyPartListSet[i].split(";");
//				document.getElementById("Part" + MyPartName[0]).style.opacity=1;
//			}
//			break;
//		case 1:
//			for (i=0;i<17;i++){document.getElementById(i).style.opacity=0;}
//			for (i=0;i<5;i++){
//				var MyPartName =MyPartListSet[i].split(";");
//				document.getElementById("Part" + MyPartName[0]).style.opacity=0;
//			}
//			document.getElementById("3").style.opacity=1;
//			document.getElementById("4").style.opacity=1;
//			document.getElementById("5").style.opacity=1;
//			document.getElementById("PartHB").style.opacity=1;
//			break;
//		case 2:
//			for (i=0;i<17;i++){document.getElementById(i).style.opacity=0;}
//			for (i=0;i<5;i++){
//				var MyPartName =MyPartListSet[i].split(";");
//				document.getElementById("Part" + MyPartName[0]).style.opacity=0;
//			}
//			document.getElementById("8").style.opacity=1;
//			document.getElementById("9").style.opacity=1;
//			document.getElementById("1").style.opacity=1;
//			document.getElementById("6").style.opacity=1;
//			document.getElementById("15").style.opacity=1;
//			document.getElementById("PartHD").style.opacity=1;
//			break;
//		case 3:
//			for (i=0;i<17;i++){document.getElementById(i).style.opacity=0;}
//			for (i=0;i<5;i++){
//				var MyPartName =MyPartListSet[i].split(";");
//				document.getElementById("Part" + MyPartName[0]).style.opacity=0;
//			}
//			document.getElementById("2").style.opacity=1;
//			document.getElementById("12").style.opacity=1;
//			document.getElementById("PartHN").style.opacity=1;
//			break;
//		case 4:
//			for (i=0;i<17;i++){document.getElementById(i).style.opacity=0;}
//			for (i=0;i<5;i++){
//				var MyPartName =MyPartListSet[i].split(";");
//				document.getElementById("Part" + MyPartName[0]).style.opacity=0;
//			}
//			document.getElementById("7").style.opacity=1;
//			document.getElementById("11").style.opacity=1;
//			document.getElementById("13").style.opacity=1;
//			document.getElementById("14").style.opacity=1;
//			document.getElementById("PartZB").style.opacity=1;
//			break;
//		case 5:
//			for (i=0;i<17;i++){document.getElementById(i).style.opacity=0;}
//			for (i=0;i<5;i++){
//				var MyPartName =MyPartListSet[i].split(";");
//				document.getElementById("Part" + MyPartName[0]).style.opacity=0;
//			}
//			document.getElementById("0").style.opacity=1;
//			document.getElementById("10").style.opacity=1;
//			document.getElementById("PartDB").style.opacity=1;
//			break;
//	}
//}
