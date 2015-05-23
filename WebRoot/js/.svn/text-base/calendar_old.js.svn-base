//1: yyyy-mm-dd
//2: yyyy-mm-dd hh24:mi
//3: yyyy-mm-dd hh24:mi:ss
//4: hh24:mi:ss
//5: hh24:mi
//6: yymmddhhmi
//7: yymmddhhmiss
//10:yyyy-mm
function Calendar(type,toObj,title) {
//构造参数
	this._type = type;
	this._toObj = toObj;
	this._title = title;
//私有参数
	this._theDate = new Date();
	this._weekStr = new Array("日", "一", "二", "三", "四", "五", "六");
	this._bgColor = new Array("#0099CC","green","skyblue","#6699CC","#6699CC"); //(TD当日颜色,TD同日不同月/年颜色,TD鼠标移过颜色,title颜色，时钟条颜色)
	this._width = 250;
	this._year = 2000;
	this._month = 1;
	this._day = 1;
	this._week = 0;
	this._hasDate = false;
	this._hasClock = false;

//私有函数
	this._initial = Calendar_Initial;
	this._createPage = Calendar_CreatePage;
	this._createData = Calendar_CreateData;
	this._getDays = Calendar_GetDays;
	this._runClock = Calendar_RunClock;
	this._monthChange = Calendar_MonthChange;

//与外部接口
	this.run = Calendar_Run;
}

//------------------ 以下为Calendar内部函数实现 ------------------
function Calendar_CreatePage() {
	var strHTML = "<title>" + this._title + "</title>";
	strHTML += "<link rel='stylesheet' href='../../css/zfwl.css' type='text/css'>";
	strHTML += "<body leftmargin=12px onkeypress='cancel()'>";

	strHTML += "<TABLE border=0 cellspacing=0 cellpadding=1 width='" + this._width + "px'>";
	strHTML += "<TR bgcolor='" + this._bgColor[3] + "'><TD><BUTTON onclick='theCalendar._monthChange(-1)' class='button'><span lang=EN-US style='font-family:Arial'>&#9668;</span></BUTTON></TD>";
	strHTML += "<TD align='center'><SPAN style='color:white'><B><label id='idTitle'></label></B></SPAN></TD>"
	strHTML += "<TD align='right'><BUTTON onclick='theCalendar._monthChange(1)' class='button'><span lang=EN-US style='font-family:Arial'>&#9658;</span></BUTTON></TD></TR>";
	strHTML += "<TR><TD colspan=3>";
	strHTML += "<TABLE border=0 cellspacing=0 cellpadding=0 width='100%'><TR class='tablebody_center'>";
	for(var i=0; i<this._weekStr.length; i++) {
		strHTML += "<TD>" + this._weekStr[i] + "</TD>";
	}
	strHTML += "</TR><TR><TD colspan=7><HR size=1 color='blank' width='90%'></TD></TR>";

	for(var i=1; i<=6; i++) {
		strHTML += "<tr align='right'>";
		for(var j=1; j<=7; j++) {
			strHTML += "<td id='idDay" + i + "" + j + "' onmousemove='TDMove()' onmouseout='TDOut()' onclick='TDClick()'></td>";
		}
		strHTML += "</tr>";
	}
/*
	strHTML += "<TR><TD colspan=7 align='center'><font color='red'>今天是 "+this._theDate.getYear()+"年"+(this._theDate.getMonth()+1)+"月"+this._theDate.getDate()+"日 星期"+this._weekStr[this._theDate.getDay()]+"</font></TD></TR>";
*/
	strHTML += "</TABLE>";
	strHTML += "</TD></TR>";

	if(this._hasClock) {
/*
		strHTML += "<TR bgcolor='" + this._bgColor[4] + "'><TD colspan=3><font color='white'><input type='checkbox' id='idAutoRun' onclick='Calendar_RunClock()'><font color='blue'>运行</font>&nbsp;&nbsp;<label id='idTimeTag'></label><select class='listbox' id='idHour'>";
*/
        strHTML += "<TR><TD colspan=3><label id='idTimeTag'>时间:</label><select class='listbox' id='idHour'>";
		for(var i=0; i<24; i++) {
			var tmpStr = i + "";
			if(i<10) tmpStr = "0" + tmpStr;
			strHTML += "<option value='" + i + "'>" + tmpStr + "</option>";
		}

		strHTML += "</select>时<select class='listbox' id='idMinute'>";
		for(var i=0; i<60; i++) {
			var tmpStr = i + "";
			if(i<10) tmpStr = "0" + tmpStr;
			strHTML += "<option value='" + i + "'>" + tmpStr + "</option>";
		}
		strHTML += "</select>分<select class='listbox' id='idSecond'>";
		for(var i=0; i<60; i++) {
			var tmpStr = i + "";
			if(i<10) tmpStr = "0" + tmpStr;
			strHTML += "<option value='" + i + "'>" + tmpStr + "</option>";
		}
		strHTML += "</select>秒";
		strHTML += "</TD></TR>";
	}
	strHTML += "</TABLE>";
	strHTML += "</body>";

	document.write(strHTML);
}

function Calendar_CreateData() {
	idTitle.innerText = this._year + "年" + this._month + "月";

	var tmpStr = "" + this._month + "/1/" + this._year;
	var tmpDate = new Date(tmpStr);
	var tmpWeek = tmpDate.getDay();
	var tmpi = 1;
	var maxdays = this._getDays();

	for(var i=1; i<=6; i++) {
		for(var j=1; j<=7; j++) {
			var obj = eval("idDay" + i + "" + j);
			if((i==1 && j<=tmpWeek) || tmpi>maxdays) obj.innerText = " ";
			else obj.innerText = tmpi++;

			if((parseInt(obj.innerText)==theCalendar._theDate.getDate()) && (theCalendar._year==theCalendar._theDate.getYear()) && (theCalendar._month==(theCalendar._theDate.getMonth()+1)))
				obj.style.setAttribute("backgroundColor",this._bgColor[0]);
			else if(parseInt(obj.innerText) == theCalendar._day)
				obj.style.setAttribute("backgroundColor",this._bgColor[1]);
			else
				obj.style.setAttribute("backgroundColor","white");
		}
	}

}

function Calendar_MonthChange(iChange) {
	theCalendar._month += iChange;
	if(theCalendar._month == 0) {
		theCalendar._month = 12;
		theCalendar._year -= 1;
	}
	else if(theCalendar._month >12) {
		theCalendar._month = 1;
		theCalendar._year += 1;
	}
	theCalendar._createData();
}

function Calendar_Initial() {
	this._year 	= this._theDate.getYear();
	this._month	= this._theDate.getMonth() + 1;
	this._day 	= this._theDate.getDate();
	this._week 	= this._theDate.getDay();


	if(this._type != 1) this._hasClock = true;
	if(!(this._type==4 || this._type==5)) this._hasDate = true;
}

function Calendar_Run() {
	var tmpDate = new Date();
	this._initial();
	this._createPage();
	this._createData();
	if(this._hasClock)
	{
		//idAutoRun.checked = true;
		//this._runClock();
		//idAutoRun.checked = false

		idHour.value = tmpDate.getHours();
		idMinute.value = tmpDate.getMinutes();
		idSecond.value = tmpDate.getSeconds();

	}

}

function Calendar_GetDays() {
	switch(this._month) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			return 31;
			break;
		case 2:
		    if((this._year % 4) == 0) {
     			if((this._year % 100) == 0) {
            		if((this._year % 400) ==0) {
                		return 29;
            		}
        		}
	        	else {
	            	return 29;
	        	}
	    	}
	    	return 28;
			break;
		default:
			return 30;
			break;
	}
}

function Calendar_RunClock() {
	if(idAutoRun.checked) {
		var tmpDate = new Date();
		idHour.value = tmpDate.getHours();
		idMinute.value = tmpDate.getMinutes();
		idSecond.value = tmpDate.getSeconds();
		if(idHour.value<2 && idHour.value < 6) idTimeTag.innerText = "凌晨";
		else if(idHour.value < 12) idTimeTag.innerText = "上午";
		else if(idHour.value < 18) idTimeTag.innerText = "下午";
		else if(idHour.value < 23) idTimeTag.innerText = "晚上";
		else idTimeTag.innerText = "午夜";
		setTimeout("Calendar_RunClock()",1000);
	}
	else clearTimeout("Calendar_RunClock()");
}
//------------------ 以上为Calendar内部函数实现 ------------------


//------------------ 以下为辅助函数实现,对Calendar实例的调用 ------------------
function TDMove() {
	var obj = window.event.srcElement;

	if(obj.innerText == " ") return;

	obj.style.setAttribute("backgroundColor", theCalendar._bgColor[2]);
	obj.style.setAttribute("cursor", "hand");
}

function TDOut() {
	var obj = event.srcElement;

	if(obj.innerText == " ") return;

	if((parseInt(obj.innerText)==theCalendar._theDate.getDate()) && (theCalendar._year==theCalendar._theDate.getYear()) && (theCalendar._month==(theCalendar._theDate.getMonth()+1)))
		obj.style.setAttribute("backgroundColor",theCalendar._bgColor[0]);
	else if(parseInt(obj.innerText) == theCalendar._day)
		obj.style.setAttribute("backgroundColor",theCalendar._bgColor[1]);
	else
		obj.style.setAttribute("backgroundColor","white");
}

function TDClick() {
	var obj = event.srcElement;

	if(obj.innerText == " ") return;

	theCalendar._day = parseInt(obj.innerText);

	var tmpYear = theCalendar._year<10? ("0"+theCalendar._year):(theCalendar._year+"");
	var tmpMonth = theCalendar._month<10? ("0"+theCalendar._month):(theCalendar._month+"");
	var tmpDay = theCalendar._day<10? ("0"+theCalendar._day):(theCalendar._day+"");

	var tmpHour, tmpMin, tmpSec;

	if(theCalendar._hasClock) {
		tmpHour = idHour.value<10? ("0"+idHour.value):(idHour.value+"");
		tmpMin = idMinute.value<10? ("0"+idMinute.value):(idMinute.value+"");
		tmpSec = idSecond.value<10? ("0"+idSecond.value):(idSecond.value+"");
	}
/*
    if (theCalendar._type!=1)
	{
		tmpHour = idHour.value;
		tmpMin = idMinute.value;
		tmpSec = idSecond.value;
	}
*/
	var returnVal = "";
	switch(theCalendar._type) {
		case 2:
			returnVal = tmpYear+"-"+tmpMonth+"-"+tmpDay+" "+tmpHour+":"+tmpMin;
			break;
		case 3:
			returnVal = tmpYear+"-"+tmpMonth+"-"+tmpDay+" "+tmpHour+":"+tmpMin+":"+tmpSec;
			break;
		case 4:
			returnVal = tmpHour+":"+tmpMin+":"+tmpSec;
			break;
		case 5:
			returnVal = tmpHour+":"+tmpMin;
			break;
		case 6:
			returnVal = tmpYear.substring(2) + tmpMonth + tmpDay + tmpHour + tmpMin;
			break;
		case 7:
			returnVal = tmpYear.substring(2) + tmpMonth + tmpDay + tmpHour + tmpMin + tmpSec;
			break;
		case 8:
		    returnVal = tmpYear+"-"+tmpMonth+"-"+tmpDay +" "+ tmpHour +":"+ tmpMin;
			break;
		case 9:
		    returnVal = tmpYear+"-"+tmpMonth+"-"+tmpDay +" "+ tmpHour +":"+ tmpMin+ ":"+ tmpSec;;
			break;
                case 10:
		    returnVal = tmpYear+"-"+tmpMonth;
			break;
                case 11:
		    returnVal = tmpYear+"-"+tmpMonth+"-"+tmpDay +" "+ tmpHour +":00";
			break;
		case 1:
		default:
			returnVal = tmpYear+"-"+tmpMonth+"-"+tmpDay;
			break;
	}

  	window.returnValue = returnVal;
  	window.close()
}

function showCalendar(type, toObj, title) {
	var openURL = "../../js/calendar.htm";
	var dialogWidth = 300;
	var dialogHeight = 250;

	if(type == 1) dialogHeight = 200;

	var top = event.screenY + 10;
	var left = event.screenX;
	if((left + dialogWidth) > screen.availWidth) left -= dialogWidth;
	if((top + dialogHeight) > screen.availHeight) top -= dialogHeight;

	title = title||"日历表";
	title += " -- 致发物流";
	var paramArray = new Array(type, toObj, title);
	if(window.showModalDialog) {
		var returnVal = showModalDialog(openURL,paramArray,"dialogWidth:" + dialogWidth + "px;dialogHeight:" + dialogHeight + "px;dialogTop:" + top +"px;dialogLeft:" + left + "px;help:no;center:no;status:no");
		if(returnVal) toObj.value = returnVal;
		toObj.focus();
		toObj.select();
	}
	else {
		alert("你的浏览器版本不支持该脚本!");
	}
}

function cancel() {
	var code = event.keyCode;
	if(code==27 || code==32) window.close();
}
