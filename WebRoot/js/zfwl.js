// JavaScript Document

String.prototype.Trim=function() {return this.replace(/(^\s*)|(\s*$)/g,"");}
String.prototype.Ltrim = function(){return this.replace(/(^\s*)/g, "");}
String.prototype.Rtrim = function(){return this.replace(/(\s*$)/g, "");}

//用于隐藏包含style:display属性的element
//参数"name"为element的ID string;
function click_HideSearch( name ){
   var tmp=document.all(name);
   if(tmp.style.display=="none"){
       tmp.style.display="";
   }else{
       tmp.style.display="none";
   }
   return;
}

//用于隐藏包含style:display属性的element
//参数"name"为element的ID string;
function HideSearch( name,value ){
   var tmp=document.all(name);
  tmp.style.display=value;
   return;
}
//用于选择table某行时,改变该行颜色,以示选择该行记录
//参数：row:row object；
//tablename:被选中行的父tablename，string；
//oldrowindex:用于保存原来行的row index的input 控件的id名称 string；
//需要在页面上定义 <input type="hidden" id="rowindex" value="">
//oldrowcolor:用于保存原来行的row color的input 控件的id名称 string；
//需要在页面上定义 <input type="hidden" id="rowcolor" value="">
//keyvalue:用于保存原来行记录关键字段值的input 控件的id名称 string；
//需要在页面上定义 <input type="hidden" id="keyvalue" value="">
function row_selected(row,tablename,oldrowindex,oldrowcolor,keyvalue)
{
	var i=0;
        //alert("ok");
	var rowindex=document.all(oldrowindex).value;
	var rowcolor=document.all(oldrowcolor).value;
	if (parseInt(oldrowindex)!=row.rowIndex)
	{
		if (rowindex!='')
		{
			for(i=0;i<document.all(tablename).rows(parseInt(rowindex)).cells.length;i++)
			{
				 document.all(tablename).rows(parseInt(rowindex)).cells(i).bgColor=rowcolor;
			}
		}
		document.all(oldrowindex).value=row.rowIndex;
		document.all(oldrowcolor).value=row.cells(0).bgColor;
		if (keyvalue!='' && row.cells(0).all('rowkeyvalue')!=null)
                //alert(row.cells(0).all('rowkeyvalue').value);
    		document.all(keyvalue).value=row.cells(0).all('rowkeyvalue').value;
		for(i=0;i<row.cells.length;i++)
		  row.cells(i).bgColor="#99CCCC";
	}
	return;
}
//选择某一行之后，设定值
//USEED BY LINJM
function row_selected1(row,tablename,oldrowindex,oldrowcolor,key,keyvalue,num)
{
	var i=0;
	var rowindex=document.all(oldrowindex).value;
	var rowcolor=document.all(oldrowcolor).value;

	if (parseInt(oldrowindex)!=row.rowIndex)
	{
		if (rowindex!='')
		{
			for(i=0;i<document.all(tablename).rows(parseInt(rowindex)).cells.length;i++)
			{
				 document.all(tablename).rows(parseInt(rowindex)).cells(i).bgColor=rowcolor;
			}
		}
		document.all(oldrowindex).value=row.rowIndex;
		document.all(oldrowcolor).value=row.cells(0).bgColor;
		if (key!='')
		   //document.all(key).value=row.cells(0).innerText;
		   document.all(key).value = row.cells(0).all('rowkeyvalue').value;
    		if(keyvalue != "")
      document.all(keyvalue).value = row.cells(num).innerText;
     		for(i=0;i<row.cells.length;i++)
		  row.cells(i).bgColor="#99CCCC";
	}
	return;
}
function row_selected2(row,tablename,oldrowindex,oldrowcolor,key,value1,num1,value2,num2)
{
	var i=0;
	var rowindex=document.all(oldrowindex).value;
	var rowcolor=document.all(oldrowcolor).value;

	if (parseInt(oldrowindex)!=row.rowIndex)
	{
		if (rowindex!='')
		{
			for(i=0;i<document.all(tablename).rows(parseInt(rowindex)).cells.length;i++)
			{
				 document.all(tablename).rows(parseInt(rowindex)).cells(i).bgColor=rowcolor;
			}
		}
		document.all(oldrowindex).value=row.rowIndex;
		document.all(oldrowcolor).value=row.cells(0).bgColor;
		if (key!='')
		   //document.all(key).value=row.cells(0).innerText;
		   document.all(key).value = row.cells(0).all('rowkeyvalue').value;
    if(value1 != "")
       document.all(value1).value = row.cells(num1).innerText;
    if(value2 != "")
       document.all(value2).value = row.cells(num2).innerText;
    for(i=0;i<row.cells.length;i++)
		  row.cells(i).bgColor="#99CCCC";
	}
	return;
}

function row_selected3(row,tablename,oldrowindex,oldrowcolor,value1,name1,value2,name2)
{
	var i=0;
	var rowindex=document.all(oldrowindex).value;
	var rowcolor=document.all(oldrowcolor).value;

	if (parseInt(oldrowindex)!=row.rowIndex)
	{
		if (rowindex!='')
		{
			for(i=0;i<document.all(tablename).rows(parseInt(rowindex)).cells.length;i++)
			{
				 document.all(tablename).rows(parseInt(rowindex)).cells(i).bgColor=rowcolor;
			}
		}
		document.all(oldrowindex).value=row.rowIndex;
		document.all(oldrowcolor).value=row.cells(0).bgColor;

    		if(value1 != "")
                   document.all(value1).value = row.cells(0).all(name1).value;

                if(value2 != "")
                   document.all(value2).value = row.cells(0).all(name2).value;
     		for(i=0;i<row.cells.length;i++)
		  row.cells(i).bgColor="#99CCCC";
	}
	return;
}
function row_selected4(row,tablename,oldrowindex,oldrowcolor,keyvalue,keyvalue2,keyvalue3)
{
	var i=0;
        //alert("ok");
	var rowindex=document.all(oldrowindex).value;
	var rowcolor=document.all(oldrowcolor).value;
	if (parseInt(oldrowindex)!=row.rowIndex)
	{
		if (rowindex!='')
		{
			for(i=0;i<document.all(tablename).rows(parseInt(rowindex)).cells.length;i++)
			{
				 document.all(tablename).rows(parseInt(rowindex)).cells(i).bgColor=rowcolor;
			}
		}
		document.all(oldrowindex).value=row.rowIndex;
		document.all(oldrowcolor).value=row.cells(0).bgColor;
		if (keyvalue!='' && row.cells(0).all('rowkeyvalue')!=null)
                //alert(row.cells(0).all('rowkeyvalue').value);
    		document.all(keyvalue).value=row.cells(0).all('rowkeyvalue').value;
    		document.all(keyvalue2).value=row.cells(0).all('rowkeyvalue2').value;
    		document.all(keyvalue3).value=row.cells(0).all('rowkeyvalue3').value;
		for(i=0;i<row.cells.length;i++)
		  row.cells(i).bgColor="#99CCCC";
	}
	return;
}
//用于增加table中的一行
//参数：tablename：所要增加行的table name，string
//colname：所增加的行中每一列的ID名字，array
//cellobject 所增加行中每一列中包含的控件，array
//selectoption 如果包含的控件是select,则为每一个option值，array必须填
//optionvalue 每一个option值对应的value值，array
//eventarray 每一个object 所触发的事件 ,array
//initvalue 每一个object 的初始值,array，如果没有对应的value值，则必须填为option的值
//例子:InsertRow('TestTable',['Test1','Test2','Test3'],['checkbox','text','select1','select2'],['option1,option2,option3','option4,option5,option6'],['option1value,option2value,option3value','option4value,option5,option6value'],['onchange=checkbox_change()','','',''],['checked','hello','option3value','option4value'])

function InsertInitRow(tablename,colname,cellobject,selectoption,optionvalue,eventarray,initvalue)
{
    var tobj = document.all(tablename);
	var i = 0;
	var j = 0;
	var m = 0;
	var str = "";
	var robj =tobj.insertRow(-1);
	var odate = new Date();
	robj.bgColor = "#F4F7FA";
	for(i=0;i<colname.length;i++)
	{
	    var cobj = robj.insertCell();
		cobj.align="center";
		switch (cellobject[i])
		{
		   case 'text':  str = "<input type='text' style='width:100%;font-size:14px' class='form-text'                                id='"+colname[i]+"' name='"+colname[i]+"' ";
		                  if (i<initvalue.length && initvalue[i]!="")
						     str = str + "value='"+initvalue[i] + "' ";
		                  if (i<eventarray.length && eventarray[i]!="")
						     str = str + eventarray[i];
						  str = str + ">";
		                  cobj.innerHTML = cobj.innerHTML = str;
		                  break;
           case 'checkbox': str = "<input type='checkbox' style='width:100%;font-size:14px'                                   class='form-text' id='"+colname[i]+"' name='"+colname[i]+"' ";
		                     if (i<initvalue.length && initvalue[i]!="")
						        str = str + initvalue[i] + " ";
		                     if (i<eventarray.length && eventarray[i]!="")
						        str = str + eventarray[i];
						     str = str + ">";
		                     cobj.innerHTML = cobj.innerHTML = str;
		                    break;
		   case 'select': str = "<select id='"+colname[i]+"' name='"+colname[i]+"' style='width:100%' ";
		                   if (i<eventarray.length && eventarray[i]!="")
						      str = str + eventarray[i];
						   str = str + ">";
		                   var optionarray = selectoption[m].split(",");
						   var optionvaluearray = optionvalue[m].split(",");
						   for(j=0;j<optionarray.length;j++)
						   {
						      str = str + "<option ";
							  if (i<initvalue.length && initvalue[i]==optionvaluearray[j])
							     str = str + "selected ";
							  if (optionvaluearray[j]!="")
							      str = str + "value='" + optionvaluearray[j] + "' ";
							  else
							      str = str + "value='" + optionarray[j]+ "' ";
							   str = str + ">"+ optionarray[j] + "</option>";
						   }
						   str = str + "</select>";
		                   cobj.innerHTML = str;
						   m++;
						   break;
		   case 'date':   str = odate.getYear()+"-"+(odate.getMonth()+1)+"-"+odate.getDate()+" ";
		                   str = str + "<input type='hidden' id='"+colname[i]+"' name='"+colname[i]+"' ";
						   if (i<initvalue.length && initvalue[i]!="")
						     str = str + "value='"+initvalue[i]+"'>";
						   else
						      str = str + "value='"+odate.getYear()+"-"+(odate.getMonth()+1)+"-"+odate.getDate()+"'>";
		                   cobj.innerHTML = str;
		                   break;
		   case 'datetime': str = odate.getYear()+"-"+(odate.getMonth()+1)+"-"+odate.getDate()+" "+odate.getHours()+":"+odate.getMinutes()+":"+odate.getSeconds();
		                    str = str + "<input type='hidden' id='"+colname[i]+"' name='"+colname[i]+"' ";
						   if (i<initvalue.length && initvalue[i]!="")
						     str = str + "value='"+initvalue[i]+"'>";
						   else
						      str = str + "value='"+odate.getYear()+"-"+(odate.getMonth()+1)+"-"+odate.getDate()+" "+odate.getHours()+":"+odate.getMinutes()+":"+odate.getSeconds()+"'>";
		                   cobj.innerHTML = str;
		                   break;
		   case 'blank': if (i<initvalue.length && initvalue[i]!="")
						      str =initvalue[i];
						  else
		                      str =" ";
		                  cobj.innerText = str;

						  break;
		}


	}
}


//用于增加table中的一行
//参数：tablename：所要增加行的table name，string
//colname：所增加的行中每一列的ID名字，array
//cellobject 所增加行中每一列中包含的控件，array
//selectvalue 如果包含的控件是select,则为每一个option值，array
//例子:InsertRow('TestTable',['Test1','Test2','Test3'],['checkbox','text','select1','select2'],['option1,option2,option3','option4,option5,option6'])

function InsertRow(tablename,colname,cellobject,selectvalue)
{
    var tobj = document.all(tablename);
	var i = 0;
	var j = 0;
	var m = 0;
	var str = "";
	var robj =tobj.insertRow(-1);
	var odate = new Date();
	robj.bgColor = "#F4F7FA";
	for(i=0;i<colname.length;i++)
	{
	    var cobj = robj.insertCell();
		cobj.align="center";
		switch (cellobject[i])
		{
		   case 'text':  str = "<input type='text' style='width:100%;font-size:14px' class='form-text'                                id="+colname[i]+" name="+colname[i]+">";
		                  cobj.innerHTML = cobj.innerHTML = str;
		                  break;
           case 'checkbox': str = "<input type='checkbox' style='width:100%;font-size:14px'                                   class='form-text' id="+colname[i]+" name="+colname[i]+">";
		                     cobj.innerHTML = cobj.innerHTML = str;
		                    break;
		   case 'select': str = "<select id="+colname[i]+" name="+colname[i]+" style='width:100%'>";
		                   var optionarray = selectvalue[m].split(",");
						   for(j=0;j<optionarray.length;j++)
						   {
						      str = str + "<option>"+optionarray[j]+"</option>";
						   }
						   str = str + "</select>";
		                   cobj.innerHTML = str;
						   m++;
						   break;
		   case 'date':   str = odate.getYear()+"-"+(odate.getMonth()+1)+"-"+odate.getDate();
		                   cobj.innerText = str;
		                   break;
		   case 'datetime':   str = odate.getYear()+"-"+(odate.getMonth()+1)+"-"+odate.getDate()+" "+odate.getHours()+":"+odate.getMinutes();
		                   cobj.innerText = str;
		                   break;
		   case 'blank': str =" ";
		                  cobj.innerText = str;
						  break;
		}


	}
}
//用于有选择删除表中的row，该表的第一列必须为checkbox控件，第一行第一列的checkbox用于全选控制
//参数：tablename：表名 string
//checkboxname：需要删除行的checkbox name

function DelRow(tablename,checkboxname,rowindex)
{
	var bDelete;
	var oTable;
	var oDelete;
	var i=0;
	var selectnumber=0;
	var j=0;

	oTable=document.all(tablename);
	if (checkboxname!="")
	{
		for(i=1;i<oTable.rows.length;i++)
		{
			if (oTable.rows(i).cells(0).all(checkboxname).checked)
			   selectnumber++;
		}
		if (selectnumber==0 || !window.confirm("确认删除该记录信息？") )
		   return;
		for(i=0;i<selectnumber;i++)
		  for(j=1;j<oTable.rows.length;j++)
			if (oTable.rows(j).cells(0).all(checkboxname).checked)
			   oTable.deleteRow(j);
	}
	else
	if (rowindex!="")
	{
		if (!window.confirm("确认删除该记录信息？") )
		   return;
		oTable.deleteRow(parseInt(rowindex));

	}

}
//用于选择某个表中的所有记录,该表的第一列必须为checkbox控件，第一行第一列的checkbox用于全选控制
//参数:checkbox:用于全选控制的checkbox object
//tablename:表名 string
//checkboxname：非全选控制的其他checkbox 的ID名 string
function SelectAll(checkbox,tablename,checkboxname)
{
    var i=0;
    if (checkbox.checked)
	   for(i=1;i<document.all(tablename).rows.length;i++)
	     document.all(tablename).rows(i).cells(0).all(checkboxname).checked=true;
	else
	   for(i=1;i<document.all(tablename).rows.length;i++)
	     document.all(tablename).rows(i).cells(0).all(checkboxname).checked=false;
}
//用于从一个listbox选择多个option加到另一个listbox中
//参数：SouceSelectName:源ListBox Name string
//DestSelectName：目的ListBox Name string
function OptionsSelected(SourceSelectName,DestSelectName)
{
	var i = 0;
	var j = 0;
	var m = 0;
	var oOption;
    var oSourceSelect = document.all(SourceSelectName);
	var oDestSelect = document.all(DestSelectName);
	i = oSourceSelect.length-1;
	while (true)
	{
	    if (j>i)
		   break;
		else
		{
		   if (oSourceSelect.options(j).selected)
		   {
				oOption = document.createElement("OPTION");
				oDestSelect.options.add(oOption);
				oOption.innerText = oSourceSelect.options(j).innerText;
				oOption.value = oSourceSelect.options(j).value;
				oSourceSelect.options.remove(j);
				i--;
		   }
		   else
		       j++;
		}
	}

}

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

function isPositiveInt1(param) {
    param = trim(param);
    if(!isInt(param)) return false;
    if(param.indexOf("-") != -1) return false;
    //if(param == "0") return false;
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

function ChkText1(txtObj,txtTips){
    if(txtObj.value=="") {
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
      || (window.event.keyCode == 46)&&(window.event.keyCode <= 229)
     )
		window.event.returnValue = true;
    else if ((event.keyCode == 13)||(event.keyCode == 9)) {
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
      || (window.event.keyCode == 46)&& (window.event.keyCode <= 229)
     )
		window.event.returnValue = true;
    else if ((event.keyCode == 13)||(event.keyCode == 9)) {
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
//是否正确的邮政编码
function isPostalCode(obj){
    var param = obj.value;
    if(trim(param) == "" || param == null){
      return true;
    }else{
		if(isPositiveInt(param)){
			if(param.length != 6)
			{
				obj.focus();
				return false;
			}else{
				return true;
			}
		}else{
			obj.focus();
			return false;
		}
    }
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
//是否整数或2位以内的小数,如果小数超过2位，四舍五入到2位
function isFloat(obj){
    var dot;
    var param = obj.value;
    //alert(param);
    if(trim(param) == "" || param == null){
      return true;
    }else if(isPositiveInt1(param)){
      return true;
    }else{
      dot = round(param,2,true);
      //if(dot == 0){
        //return false;
      //}
      // else{
        obj.value = dot;
        return true;
      //}
    }
}
//点击table的某一行使table行变成另外一种颜色
//param tname 表明 row被选中的表的名称 row 被选中的那一列
//需要在页面上定义 <input type="hidden" name="oldindex" value=""><input type="hidden" name="oldcolor" value=""> 2个变量


function checkTime(checkedStr) {
    checkedStr = trim(checkedStr);

    if(checkedStr.length != 16) return false;

    var year = checkedStr.substring(0,4);
    if(!isPositiveInt(year)) return false;

    var sign1 = checkedStr.substring(4,5);
    if(sign1 != "-") return false;

    var month = checkedStr.substring(5,7);
    if(!isPositiveInt(month)) {return false;}
    if (month.substring(0,1)=="0") month=month.substring(1,2);
    var intMonth = parseInt(month);

    if(intMonth>12 || intMonth<1) {return false;}

    var sign2 = checkedStr.substring(7,8);
    if(sign2 != "-") return false;

    var day = checkedStr.substring(8,10);
    if(!isPositiveInt(day)) return false;
    var intDay = parseInt(day);
	if(day=="08" || day=="09") intDay = parseInt(day.substring(1));
    if(intDay>31 || intDay<1 || (intMonth==2 && intDay>29)) return false;
    if((intMonth==4 || intMonth==6 || intMonth==9 || intMonth==11) && (intDay ==31)) return false;
    if(!isLeapYear(year) && intMonth==2 && intDay>28) return false;

    var sign3 = checkedStr.substring(10,11);
    if(sign3 != " ") return false;

    var hour = checkedStr.substring(11,13);
    if(!isPositiveInt(hour) || parseInt(hour)>23 || parseInt(hour)<0) return false;

    var sign4 = checkedStr.substring(13,14);
    if(sign4 != ":") return false;

    var minute = checkedStr.substring(14);
    if(!isPositiveInt(minute) || parseInt(minute)>59 || parseInt(minute)<0) return false;

    return true;
}

function checkDate(checkedStr) {
    checkedStr = trim(checkedStr);

    if(checkedStr.length != 10) return false;

    var year = checkedStr.substring(0,4);
    if(!isPositiveInt(year)) return false;

    var sign1 = checkedStr.substring(4,5);
    if(sign1 != "-") return false;

    var month = checkedStr.substring(5,7);
    if(!isPositiveInt(month)) {return false;}
    if (month.substring(0,1)=="0") month=month.substring(1,2);
    var intMonth = parseInt(month);

    if(intMonth>12 || intMonth<1) {return false;}

    var sign2 = checkedStr.substring(7,8);
    if(sign2 != "-") return false;

    var day = checkedStr.substring(8,10);
    if(!isPositiveInt(day)) return false;
    var intDay = parseInt(day);
	if(day=="08" || day=="09") intDay = parseInt(day.substring(1));
    if(intDay>31 || intDay<1 || (intMonth==2 && intDay>29)) return false;
    if((intMonth==4 || intMonth==6 || intMonth==9 || intMonth==11) && (intDay ==31)) return false;
    if(!isLeapYear(year) && intMonth==2 && intDay>28) return false;

    return true;
}

//获取当前系统日期yyyy-mm-dd
function getSystemDate(){
  var tmpDate = new Date();
  _year = tmpDate.getYear();
  _month = tmpDate.getMonth()+1;
  _day = tmpDate.getDate();
  //this._week = tmpDate.getDay();
  tmpDate = _year+"-"+_month+"-"+_day;
  return tmpDate;
}

function barlowtoup(field){
  var code =  field.value;
  code = code.toUpperCase();
  field.value = code;
 }

 function viewTaskInfo(taskId){

	var con = "?taskId="+ taskId;
	var url = "/zhifawuliu/transportmanager/task/transtask_report_temp.jsp"
         var width=  window.screen.width ;

          window.open(url+con,"","width=800,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,top=0,left=0");


 }

function viewOrderInfo(orderId){


	var url = "/zhifawuliu/ordermanager/orderAction.do?command=CMD_ORDER_VIEW&transportOrderNo="+orderId;

        window.location = url;

 }

 function click_view_goods(trans_plan_detail_id)
 {

var url = "/zhifawuliu/transportmanager/plan/planAction.do?command=CMD_PLANDETAIL_GOODS_VIEW&forward_name=plan_goods_detail&transPlanDetailId="+trans_plan_detail_id;
     var width=  window.screen.width ;

          window.open(url,"","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,top=0,left=0,width=200,height=150");


 }


