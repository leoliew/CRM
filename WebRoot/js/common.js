String.prototype.Trim=function() {return this.replace(/(^\s*)|(\s*$)/g,"");}
String.prototype.Ltrim = function(){return this.replace(/(^\s*)/g, "");}
String.prototype.Rtrim = function(){return this.replace(/(\s*$)/g, "");}

//格式化字符串
function formatStr(str,len) {
	str = trim(str);
	var chinese = countChinese(str);
	for(var i=str.length; i<len-chinese; i++) {
		str += " ";
	}
	return str;
}
//复制option
function copy(from,to,i){
for(i;i<from.options.length;i++){
to.options.add(new Option(from.options[i].text,from.options[i].value));
}
}

//窗口居中
function displayWindowCenter(theURL,winName,width,height,features) {
    var window_width = width;
    var window_height = height;
    var newfeatures= features;
    var window_top = (screen.height-window_height)/2;
    var window_left = (screen.width-window_width)/2;
    newWindow=window.open(''+ theURL + '',''+ winName + '','width=' + window_width + ',height=' + window_height + ',top=' + window_top + ',left=' + window_left + ',features=' + newfeatures + '');
    newWindow.focus();
}

//检查电话
function fucCheckTEL(TEL){
 var i,j,strTemp;
 strTemp="0123456789-()#";
 if (TEL.length == 0) return 1;
 for (i=0;i<TEL.length;i++){
 j=strTemp.indexOf(TEL.charAt(i));
 if (j==-1){
 return 0;
 }
 }
 return 1;
}
//检查email
function chkemail(a){
 if ( a.length == 0) return 1;
 var i=a.length;
 var temp = a.indexOf('@');
 var tempd = a.indexOf('.');
 if (temp > 1){
 if ((i-temp) > 3){
 if (tempd!=-1){
 return 1;
 }
 }
 }
 return 0;
}
//去掉前后空格
function trim(param) {
    param += " ";
    var result = param;
    for(var i = param.length;i>0;i--) {
        if(param.substring(i-1,i) == " ")
            result = result.substring(0,i -1);
        else break;
    }
    for(var i = 0;i<result.length;i++) {
        if(result.substring(i,i+1) == " ") {}
        else {
            result = result.substring(i,result.length);
            break;
        }
    }
    return result;
}
//四舍五入 参数:值 小数点后几位 标志是否四舍五入
function round(param,indexAfterDot,flag) {
    if(isNaN(param) || isNaN(indexAfterDot)) return 0;
    if(indexAfterDot<0) return 0;

    if(indexAfterDot == 0) return Math.round(param);

    param = Math.round(param*Math.pow(10,indexAfterDot))/(Math.pow(10,indexAfterDot));

    if(flag) {
        param += "";
        var dot = param.indexOf(".");
        if(dot == -1) {
            param += ".";
            var zero = "";
            for(var i=0;i<indexAfterDot;i++) zero += "0";
            param += zero;
        }
        else {
            var zero = "";
            for(var i=param.length-dot-1;i<indexAfterDot;i++) zero += "0";
            param += zero;
        }
    }

    return param;
}
//是否整数
function isInt(param) {
    param = trim(param);
    if(isNaN(param) || (param.indexOf(".") != -1)) return false;
    return true;
}
//检查是否>0的数
function isPositiveInt(param) {
    param = trim(param);
    if(!isInt(param)) return false;
    if(param.indexOf("-") != -1) return false;
    if(param == "0") return false;
    return true;
}
//是否闰年
function isLeapYear(year) {
    if(!isPositiveInt(year)) return false;

    var intYear = parseInt(year);

    if((intYear % 4) == 0) {
        if((intYear % 100) == 0) {
            if((intYear % 400) ==0) {
                return true;
            }
        }
        else {
            return true;
        }
    }
    return false;
}

//checkbox全选
function checkAll(checkbox) {
    var clickObj = event.srcElement;
    if(clickObj.type != "checkbox") return;

	if(checkbox == null) return;
	if(checkbox.length == null) {
		checkbox.checked = clickObj.checked;
		return;
	}
    for(var i=0; i<checkbox.length; i++) {
        var obj = checkbox[i];
        obj.checked = clickObj.checked;
    }
}
//聚焦
function setFocus(theObj) {
    var charCode=(navigator.appName=="Netscape")?event.which:event.keyCode;
    if (charCode==13) {
        try {
            theObj.focus();
        }
        catch(e) {
            theObj[0].focus();
        }
    }
}
//回车转TAB
function enterToTab() {
    var charCode = (navigator.appName=="Netscape")? event.which:event.keyCode;
    if (charCode==13) {
          if(navigator.appName=="Netscape") event.which = 9;
          else event.keyCode = 9;
        event.returnValue = true;
    }
}
//开窗口,参数:URL 窗口名字 宽度 高度
function openWindow(theURL,winName,width,height) {
    try {
        var top = (screen.height - height)/3;
        var left = (screen.width - width)/2;

        var newWin = window.open(theURL,winName,"width=" + width + ",height=" + height + ",top=" + top + ",left=" + left + ",scrollbars");
        newWin.focus();
    }
    catch(e) {}
}
//开窗口,大小为350,300
function openDefaultWindow(theURL) {
    var winName = "NewWindow";
    var width = 350;
    var height = 300;
    openWindow(theURL,winName,width,height);
}
//检查checkboxName是否选中
function hasChecked(formName,checkboxName) {
    var result = 0;
    var theForm = window.document.forms[formName];
    for(var i=0; i<theForm.elements.length; i++) {
          var obj =  theForm.elements[i];
          if(obj.type == "checkbox" && obj.name == checkboxName && obj.checked) result++;
      }
  if(result == 0) return false;
  return true;
}
//取当前时间
function getSysTime() {
    var date = new Date();
    var year = date.getYear();
    var month = date.getMonth()+1;
    if(month < 10) month = "0" + month;
    var day = date.getDate();
    if(day < 10) day = "0" + day;
    var hour = date.getHours();
    if(hour < 10) hour = "0" + hour;
    var minute = date.getMinutes();
    if(minute < 10) minute = "0" + minute;

    return year + "-" + month + "-" + day + " " + hour + ":" + minute;
}
//是否为空 参数 object名字 提示语
function isEmpty(field,alertStr) {
    if(trim(field.value) == "") {
        if(trim(alertStr) != "") alert(alertStr);
        field.focus();
        return true;
    }
    return false;
}

function checkAddressApplet(appletName,userName) {
    var applet = eval("document." + appletName);

    if (applet.discountry == "请选择" || applet.discountry == "" || applet.discountry == "undefined" || applet.discountry == 0) {
        alert("请选择" + userName + "国家!") ;
        applet.Focus(0);
        return false;
    }

    if (applet.disprovince == "请选择" || applet.disprovince == "" || applet.disprovince == "undefined" || applet.disprovince == 0) {
        alert("请选择" + userName + "省份!") ;
        applet.Focus(1);
        return false;
    }

    if (applet.discity == "请选择" || applet.discity == "" || applet.discity == "undefined" || applet.discity == 0) {
        alert("请选择" + userName + "城市!") ;
        applet.Focus(2);
        return false;
    }

    if (applet.dissection == "请选择" || applet.dissection == "" || applet.dissection == "undefined" || applet.dissection == 0) {
        alert("请选择" + userName + "区、县!") ;
        applet.Focus(3);
        return false;
    }

    return true;
}

function checkAddressApplet1(appletName,userName) {
    var applet = eval("document." + appletName);

    if (applet.discountry == "请选择" || applet.discountry == "" || applet.discountry == "undefined" || applet.discountry == 0) {
        alert("请选择" + userName + "国家!") ;
        applet.Focus(0);
        return false;
    }

    if (applet.disprovince == "请选择" || applet.disprovince == "" || applet.disprovince == "undefined" || applet.disprovince == 0) {
        alert("请选择" + userName + "省份!") ;
        applet.Focus(1);
        return false;
    }

    if (applet.discity == "请选择" || applet.discity == "" || applet.discity == "undefined" || applet.discity == 0) {
        alert("请选择" + userName + "城市!") ;
        applet.Focus(2);
        return false;
    }

    return true;
}
//是否按了回车
function isPressEnter() {
    var charCode = (navigator.appName=="Netscape")? event.which:event.keyCode;
    if (charCode==13) return true;
    return false;
}
//检测是否有汉字
function hasChinese(param) {
	return (/[^\x00-\xff]/g.test(param));
}
//转为大写
function barlowtoup(obj){
  
  var code =  obj.value; 
  code = code.toUpperCase();
 	obj.value = code;    
 }
//统计汉字字数
function countChinese(param) {
	var count = 0;
	for(var i=0; i<param.length; i++) {
		var tmp = param.substring(i,i+1);
		if(hasChinese(tmp)) count++;
	}
	return count;
}

//把非数字值,负数值,转为num
function limitNumTo(obj,num) {
	if(trim(obj.value)=="" || isNaN(obj.value) || obj.value<0) obj.value = num;
}

//把非数字值,负数值,转为0
function limitNum(obj) {
	limitNumTo(obj,0);
}

/**
 *  快捷键支持,目前只支持(alt + 字符)来触发
 *      1. 注册快捷键 regKey(快捷键字符,触发函数)，如regKey("c","alert('test')")、regKey("c","myfunc()")
 *      2. 注意,由于未能屏蔽IE原有快捷键,建议不使用原已有快捷键键注册，如a、f、e、v、t、h、d等
 * @author  cobe
 * @version 1.0
 * @since 2003-06-09
 */
var keyList = new Array();
var funcList = new Array();

function regKey(ch, func) {
    keyList[keyList.length] = ch.toUpperCase();
    funcList[funcList.length] = func==null? "":func;
}

function getMatchFunc(ch) {
    if(window.event.altKey) {
        for(var i=0; i<keyList.length; i++) {
            if(ch == keyList[i])
                return funcList[i];
        }
    }
    return null;
}

function document.onkeydown() {
    var ch = String.fromCharCode(window.event.keyCode).toUpperCase();
    var func = getMatchFunc(ch);

    if(func !=null) eval(func);
}

//热键部分结束

//检测txtObj是否为空，如果为空则给出txtTips提示
function ChkText(txtObj,txtTips){
    if(txtObj.value==""||txtObj.value==0) {
        if(txtTips=="") {
            txtTips="请填写完整数据！";
        }
        alert(txtTips);
        txtObj.focus();
        return false;
    }
    else
    	return true;
}

//仅能输入数字及小数点
function NumericOnly(){
	if((window.event.keyCode >= 48) && (window.event.keyCode <= 57)
      || (window.event.keyCode >= 96) && (window.event.keyCode <= 105)
      || (window.event.keyCode == 110) || (window.event.keyCode == 190)
      || (window.event.keyCode == 8)
      || (window.event.keyCode >= 37) && (window.event.keyCode <= 40)
      || (window.event.keyCode == 46)
     )
		window.event.returnValue = true;
    else if (event.keyCode == 13) {
        event.keyCode = 9;
        event.returnValue = true;
    }
	else
		window.event.returnValue = false;
}

//仅能输入数字(不包括小数点)
function NumOnly(){
	if((window.event.keyCode >= 48) && (window.event.keyCode <= 57)
      || (window.event.keyCode >= 96) && (window.event.keyCode <= 105)
      || (window.event.keyCode == 8)
      || (window.event.keyCode >= 37) && (window.event.keyCode <= 40)
      || (window.event.keyCode == 46)
     )
		window.event.returnValue = true;
    else if (event.keyCode == 13) {
        event.keyCode = 9;
        event.returnValue = true;
    }
	else
		window.event.returnValue = false;
}

//检测日期
function chkDate(datestr) {
 if ( datestr.length == 0) return true;
 var lthdatestr
 if (datestr != "")
 lthdatestr= datestr.length ;
 else
 lthdatestr=0;
 var tmpy="";
 var tmpm="";
 var tmpd="";
 //var datestr;
 var status;
 status=0;
 if ( lthdatestr== 0)
 return false;
 for (i=0;i<lthdatestr;i++) {
 if (datestr.charAt(i)== '-') {
 status++;
 }
 if (status>2) {
 return false;
 }
 if ((status==0) && (datestr.charAt(i)!='-')) {
 tmpy=tmpy+datestr.charAt(i)
 }
 if ((status==1) && (datestr.charAt(i)!='-')) {
 tmpm=tmpm+datestr.charAt(i)
 }
 if ((status==2) && (datestr.charAt(i)!='-')) {
 tmpd=tmpd+datestr.charAt(i)
 }
 }
 year=new String (tmpy);
 month=new String (tmpm);
 day=new String (tmpd)
 if ((tmpy.length!=4) || (tmpm.length>2) || (tmpd.length>2)) {
 return false;
 }
 if (!((1<=month) && (12>=month) && (31>=day) && (1<=day)) ) {
 return false;
 }
 if (!((year % 4)==0) && (month==2) && (day==29)) {
 return false;
 }
 if ((month<=7) && ((month % 2)==0) && (day>=31)) {
 return false;
 }
 if ((month>=8) && ((month % 2)==1) && (day>=31)) {
 return false;
 }
 if ((month==2) && (day==30)) {
 return false;
 }
 return true;
}

//检测时间
function chkTime(datestr) {
 if ( datestr.length == 0) return true;
 var lthdatestr
 if (datestr != "")
 lthdatestr= datestr.length ;
 else
 lthdatestr=0;
 var tmpy="";
 var tmpm="";
 var tmpd="";
 //var datestr;
 var status;
 status=0;
 if ( lthdatestr== 0)
 return false;
 for (i=0;i<lthdatestr;i++) {
 if (datestr.charAt(i)== ':') {
 status++;
 }
 if (status>=2) {
 return false;
 }
 if ((status==0) && (datestr.charAt(i)!=':')) {
 tmpy=tmpy+datestr.charAt(i)
 }
 if ((status==1) && (datestr.charAt(i)!=':')) {
 tmpm=tmpm+datestr.charAt(i)
 }
 }
 year=new String (tmpy);
 month=new String (tmpm);
 if ((tmpy.length>2) || (tmpm.length>2) ||(tmpy.length<1) || (tmpm.length<1)) {
 return false;
 }
 if (!((0<=year) && (23>=year) && (0<=month) && (59>=month))) {
 return false;
 }
 return true;
}

//检测日期及时间
function chkDateTime(datestr) {
 var subTime,subDate,startStr,endStr; 
 startStr = 0;endStr = 0 ;
 
 endStr = datestr.length; 
 startStr = datestr.indexOf(' '); 
 subTime = datestr.substring(startStr+1,endStr) ;
 subDate = datestr.substring(0,startStr) ;
 if(subDate.length>0&&subTime.length==0||subDate.length==0&&subTime.length>0) return false;
 if ((chkDate(subDate)) == false || chkTime(subTime) == false) {
 return false;
 }
 
 return true;
}

//点击table的某一行使table行变成另外一种颜色
//param tname 表明 row被选中的表的名称 row 被选中的那一列
//需要在页面上定义 <input type="hidden" name="oldindex" value=""><input type="hidden" name="oldcolor" value=""> 2个变量
function row_selected(row,tname){ 
var i=0;
var oldrowindex=document.all("oldindex").value;
var oldrowcolor=document.all("oldcolor").value;
if (parseInt(oldrowindex)!=row.rowIndex)
{
    if (oldrowindex!='')
	    {
	    for(i=0;i<document.all(tname).rows(parseInt(oldrowindex)).cells.length;i++)
		    {	
			    document.all(tname).rows(parseInt(oldrowindex)).cells(i).bgColor=oldrowcolor;
		    }
    	}
	oldrowindex=row.rowIndex;
	document.all("oldindex").value = oldrowindex;	
	oldrowcolor=row.cells(0).bgColor;
	document.all("oldcolor").value = oldrowcolor;	
	for(i=0;i<row.cells.length;i++)
	  row.cells(i).bgColor="#99CCCC";
} 
 return; 
}