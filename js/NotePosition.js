var MyProvinceListSet=[16]; //省份代码;横坐标;纵坐标;简称;全称;高度
var j =30; 					//顶层层叠计数器
MyProvinceListSet[0]='HLJ;0.82;0.215;黑;黑龙江;100;';
MyProvinceListSet[1]='FJ;0.73;0.76;闽;福建;160';
MyProvinceListSet[2]='GD;0.695;0.81;粤;广东;100';
MyProvinceListSet[3]='SX1;0.625;0.483;晋;山西;310';
MyProvinceListSet[4]='TJ;0.7;0.44;津;天津;140';
MyProvinceListSet[5]='BJ;0.67;0.40;京;北京;240';
MyProvinceListSet[6]='ZJ;0.75;0.69;浙;浙江;100';
MyProvinceListSet[7]='SC;0.491;0.653;川;四川;140';
MyProvinceListSet[8]='JS;0.738;0.572;苏;江苏;140';
MyProvinceListSet[9]='SD;0.7;0.52;鲁;山东;160';
MyProvinceListSet[10]='LN;0.775;0.365;辽;辽宁;100';
MyProvinceListSet[11]='SX2;0.58;0.54;陕;陕西;140';
MyProvinceListSet[12]='AM;0.65;0.845;澳;澳门;100';
MyProvinceListSet[13]='HB;0.63;0.64;鄂;湖北;100';
MyProvinceListSet[14]='HN;0.63;0.741;湘;湖南;100';
MyProvinceListSet[15]='SH;0.773;0.627;沪;上海;140';
MyProvinceListSet[16]='CQ;0.56;0.653;渝;重庆;100';

var MyPartListSet=[1]; //区域列表
MyPartListSet[0]='DB;0.76;0.20;';
MyPartListSet[1]='HB;0.64;0.28;';
MyPartListSet[2]='HD;0.74;0.45;';
MyPartListSet[3]='HN;0.63;0.58;';
MyPartListSet[4]='ZB;0.55;0.42;';

var MapHeigh;
var MapWidth;

function MPIFun(MyProvinceIndex) //地图位置定位函数
{
	//解码指定省份
	var MyProvinceListData = MyProvinceListSet[MyProvinceIndex].split(';');
	//获取页面省份标记对象
	var MPI = document.getElementById(MyProvinceIndex);
	//设置省份标记位置
	MPI.style.left = MapWidth * MyProvinceListData[1] - 20 + "px";
	MPI.style.top = MapHeigh * MyProvinceListData[2] - 65 + "px";
}

function MPFun(MyPartIndex){
	//解码指定地区
	var MyPartData = MyPartListSet[MyPartIndex].split(';');
	//获取页面地区标记对象
	var MP = document.getElementById('Part' + MyPartData[0]);
	//设置地区标记位置
	MP.style.left = MapWidth * MyPartData[1] - 20 + "px";
	MP.style.top = MapWidth * MyPartData[2] - 65 + "px";
}

window.onload = function(){//页面加载函数
	//获取地区高度、宽度
	MapHeigh = document.getElementById("MyMap").height;
	MapWidth = document.getElementById("MyMap").width;
	//获取被设置对象
	var MyMapWidth = document.getElementById("MyMapWidth");
	//设置宽度	
	MyMapWidth.style.width = MapWidth + "px";	
	for (var i=0;i<5;i++){
		MPFun(i);
		
	}
	for (var i=0;i<17;i++){
		//解码指定省份
		var MPIListSet = MyProvinceListSet[i].split(';');
		//获取省份对象
		var MPIObject = document.getElementById(i);
		//定位函数
		MPIFun(i);
		//点击事件
		MPIObject.onclick = function()
		{
			//根据被点击对象获取索引值
			var ClickIndex = parseInt(this.id);
			//根据索引值解码省份信息
			MPIListSet = MyProvinceListSet[ClickIndex].split(';');
			//获取省份代码
			var MyProvinceItem = MPIListSet[0];
			//设置被点击后的位置 计数器j 逐层叠加
			document.getElementById(ClickIndex).style.zIndex=j; j++;
			//获取 Text 和 NoteList 对象
			var MPIText = document.getElementById(MyProvinceItem + "Text");
			var ThisObject = document.getElementById(MyProvinceItem + "NoteList");
			//判断NoteList是否收回
			if (ThisObject.style.height == '0px' || ThisObject.style.height == 0){
				//显示被隐藏的Text对象
				document.getElementById(MyProvinceItem + "NoteListText").style.display="block";
				//*******动画**********
				//NoteList 和 NoteListBorder 动画
				$("div#"+ MyProvinceItem +"NoteList").animate({height:'+=' + MPIListSet[5] + 'px',top:'+=10px'},700,'easeOutExpo');
				$("div#"+ MyProvinceItem +"NoteListBorder").animate({height:'40px'},300,'easeOutExpo');
				//圆形--圆角矩形渐变
				$("div#"+ MyProvinceItem +"CircleListBorder").animate({width:'+=80px',left:'-=40px',height:'+=5px',top:'-=2px'},300,'easeOutExpo');
				$("div#"+ MyProvinceItem +"ListBorder").animate({width:'+=80px',height:'+=5px'},300,'easeOutExpo');
				$("p#"+ MyProvinceItem +"Text").animate({opacity:'0'},150,'easeOutExpo',function(){
					MPIText.innerText= MPIListSet[4];
					MPIText.style.fontSize='23px';
					MPIText.style.lineHeight="40px";
					MPIText.style.letterSpacing="4px";
				});
				$("p#"+ MyProvinceItem +"Text").animate({opacity:'1'},150,'easeOutExpo');
				//*******************
			}
			else{
				//隐藏被现实的Text对象
				document.getElementById(MyProvinceItem + "NoteListText").style.display="none";
				//*******动画**********
				//NoteList 和 NoteListBorder 动画
				$("div#"+ MyProvinceItem +"NoteList").animate({height:'0',top:'-=10px'},300,'easeOutExpo');
				$("div#"+ MyProvinceItem +"NoteListBorder").animate({height:'0px'},300,'easeOutExpo',function(){
					//$("div#"+ MyProvinceItem +"NoteList").animate({height:'0',top:'-=4px',width:'-=300px',left:"+=60px"},300,'easeOutExpo');
					//$("div#"+ MyProvinceItem +"NoteListBorder").animate({height:'0',width:'-=300px',left:"+=60px"},300,'easeOutExpo');
				});
				//NoteList 和 NoteListBorder 动画
				$("div#"+ MyProvinceItem +"CircleListBorder").animate({width:'-=80px',left:'+=40px',height:'-=5px',top:'+=2px'},300,'easeOutExpo');
				$("div#"+ MyProvinceItem +"ListBorder").animate({width:'-=80px',height:'-=5px'},300,'easeOutExpo');
				//圆角矩形--圆形渐变
				$("p#"+ MyProvinceItem +"Text").animate({opacity:'0'},150,'easeOutExpo',function(){
					MPIText.innerText= MPIListSet[3];
					MPIText.style.fontSize='20px';
					MPIText.style.lineHeight="36px";
					MPIText.style.letterSpacing="0px";
				});
				$("p#"+ MyProvinceItem +"Text").animate({opacity:'1'},150,'easeOutExpo');
				//*******************
				//层数归位
				document.getElementById(ClickIndex).style.zIndex=21;
			}
			
		}
	}
	document.getElementById("MyMapWidth").style.opacity = 1;
	document.getElementById("MyPicLaylot").style.opacity = 1;
	$("div#MyWaitingNote").animate({opacity : "-=1"},150,function(){document.getElementById("MyWaitingNote").style.display = "none"}).delay(1000);
}