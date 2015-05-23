<!--


/**
LogicalValue:用于判断对象的值是否符合条件，现已提供的选择有：
integer：整型，还可判断正整型和负整型
number ：数值型，同样可判断正负
date ：日期型，可支持以自定义分隔符的日期格式，缺省是以'-'为分隔符
string ：判断一个字符串包括或不包括某些字符
返回值：
true或false

参数：
ObjStr ：对象标识符——对象名；
ObjType：对象类型('integer','number','date','string','2dnumber','yearmonth'之一)

其他说明：
当对象值为空时，则返回错误。


例子：
example 1:要求检验输入框text1的输入数据是否是“整型”数据，若不是，则提示
if (!LogicalValue('text1','integer')) alert('Error: Your must input a integer number');
example 2:要求检验输入框text1的输入数据是否是“正整型”数据，若不是，则提示
if (!LogicalValue('text1','integer','+')) alert('Error: Your must input a positive integer number');
example 3:要求检验输入框text1的输入数据是否是“负整型”数据，若不是，则提示
if (!LogicalValue('text1','integer','-')) alert('Error: Your must input a negative integer number');
exmaple 4:要求检验输入框text1的输入数据是否是数值，若不是，则提示
if (!LogicalValue('text1','number')) alert('Error: Your must input a number');
exmaple 5:要求检验输入框text1的输入数据是否是“正”数值，若不是，则提示
if (!LogicalValue('text1','number','+')) alert('Error: Your must input a number');
exmaple 6:要求检验输入框text1的输入数据是否是“负”数值，若不是，则提示
if (!LogicalValue('text1','number','-')) alert('Error: Your must input a number');
example 7:要求检验输入框text1的输入数据是否是日期型，若不是，则提示
*/
function LogicalValue(ObjStr,ObjType)
{
var str='';
if ((ObjStr==null) || (ObjStr=='') || ObjType==null)
{
alert('函数LogicalValue缺少参数');
return false;
}
var obj = document.all(ObjStr);
//obj.focus();
if (obj.value=='') return false;
for (var i=2;i<arguments.length;i++)
{
if (str!='')
str += ',';
str += 'arguments['+i+']';
}
str=(str==''?'obj.value':'obj.value,'+str);
var temp=ObjType.toLowerCase();
if (temp=='integer')
{
return eval('IsInteger('+str+')');
}
else if (temp=='number')
{
return eval('IsNumber('+str+')');
}
else if (temp=='string')
{
return eval('SpecialString('+str+')');
}
else if (temp=='date')
{
return eval('IsDate('+str+')');
}
else if (temp=='2dnumber')
{
return eval('Is2dNumber('+str+')');
}
else if (temp=='yearmonth')
{
return eval('IsYearMonth('+str+')');
}
else
{
alert('"'+temp+'"类型在现在版本中未提供');
return false;
}
}

/**
IsInteger: 用于判断一个数字型字符串是否为整形，
还可判断是否是正整数或负整数，返回值为true或false
string: 需要判断的字符串
sign: 若要判断是正负数是使用，是正用'+'，负'-'，不用则表示不作判断
Author: PPDJ
sample:
var a = '123';
if (IsInteger(a))
{
alert('a is a integer');
}
if (IsInteger(a,'+'))
{
alert(a is a positive integer);
}
if (IsInteger(a,'-'))
{
alert('a is a negative integer');
}
*/

function IsInteger(string ,sign)
{
var integer;
if ((sign!=null) && (sign!='-') && (sign!='+'))
{
alert('IsInter(string,sign)的参数出错：\nsign为null或"-"或"+"');
return false;
}
integer = parseInt(string);
if (isNaN(integer))
{
return false;
}
else if (integer.toString().length==string.length)
{
if ((sign==null) || (sign=='-' && integer<0) || (sign=='+' && integer>0))
{
return true;
}
else
return false;
}
else
return false;
}

/**
IsDate: 用于判断一个字符串是否是日期格式的字符串

返回值：
true或false

参数：
DateString： 需要判断的字符串
Dilimeter ： 日期的分隔符，缺省值为'-'

Author: PPDJ
sample:
var date = '1999-1-2';
if (IsDate(date))
{
alert('You see, the default separator is "-");
}
date = '1999/1/2";
if (IsDate(date,'/'))
{
alert('The date\'s separator is "/");
}
*/

function IsDate(DateString , Dilimeter)
{
if (DateString==null) return false;
if (Dilimeter=='' || Dilimeter==null)
Dilimeter = '-';
var tempy='';
var tempm='';
var tempd='';
var tempArray;
if (DateString.length!=10)
return false;
tempArray = DateString.split(Dilimeter);
if (tempArray.length!=3)
return false;
if (tempArray[0].length==4)
{
tempy = tempArray[0];
tempd = tempArray[2];
}
else
{
tempy = tempArray[2];
tempd = tempArray[1];
}
tempm = tempArray[1];

if (tempm.charAt(0)=="0"){
   tempm=tempm.charAt(1); 	
}	
if (tempd.charAt(0)=="0"){
   tempd=tempd.charAt(1); 	
}	

var tDateString = tempy + '/'+tempm + '/'+tempd+' 8:0:0';//加八小时是因为我们处于东八区
var tempDate = new Date(tDateString);
if (isNaN(tempDate))
return false;
if (((tempDate.getUTCFullYear()).toString()==tempy) && (tempDate.getMonth()==parseInt(tempm)-1) && (tempDate.getDate()==parseInt(tempd)))
{
return true;
}
else
{
return false;
}
}

/**
IsNumber: 用于判断一个数字型字符串是否为数值型，
还可判断是否是正数或负数，返回值为true或false
string: 需要判断的字符串
sign: 若要判断是正负数是使用，是正用'+'，负'-'，不用则表示不作判断
Author: PPDJ
sample:
var a = '123';
if (IsNumber(a))
{
alert('a is a number');
}
if (IsNumber(a,'+'))
{
alert(a is a positive number);
}
if (IsNumber(a,'-'))
{
alert('a is a negative number');
}
*/

function IsNumber(string,sign)
{
var number;
if (string==null) return false;
if ((sign!=null) && (sign!='-') && (sign!='+'))
{
alert('IsNumber(string,sign)的参数出错：\nsign为null或"-"或"+"');
return false;
}
number = new Number(string);
if (isNaN(number))
{
return false;
}
else if ((sign==null) || (sign=='-' && number<0) || (sign=='+' && number>0))
{
return true;
}
else
return false;
}

/**
Is2dNumber :判断数字类型的小数位数是否小于2
*/
function Is2dNumber(str)
{
  if (!IsNumber(str))
     return false;
  pinx=str.indexOf(".");
  
  if ((pinx>=0) && ((str.length-pinx)>3)){
     
          return false; 	 
  }	

  return true;     
   
}

/**
Isyearmonth :判断数字类型的小数位数是否小于2
*/
function IsYearMonth(str)
{
  if (!IsDate(str+"-01"))
     return false;

  return true;     
   
}

/**
SpecialString: 用于判断一个字符串是否含有或不含有某些字符

返回值：
true或false

参数：
string ： 需要判断的字符串
compare ： 比较的字符串(基准字符串)
BelongOrNot： true或false，“true”表示string的每一个字符都包含在compare中，
“false”表示string的每一个字符都不包含在compare中

Author: PPDJ
sample1:
var str = '123G';
if (SpecialString(str,'1234567890'))
{
alert('Yes, All the letter of the string in \'1234567890\'');
}
else
{
alert('No, one or more letters of the string not in \'1234567890\'');
}
结果执行的是else部分
sample2:
var password = '1234';
if (!SpecialString(password,'\'"@#$%',false))
{
alert('Yes, The password is correct.');
}
else
{
alert('No, The password is contain one or more letters of \'"@#$%\'');
}
结果执行的是else部分
*/
function SpecialString(string,compare,BelongOrNot)
{
if (compare==null){
	return true;
}
	
if ((string==null) || (compare==null) || ((BelongOrNot!=null) && (BelongOrNot!=true) && (BelongOrNot!=false)))
{
alert('function SpecialString(string,compare,BelongOrNot)参数错误');
return false;
}
if (BelongOrNot==null || BelongOrNot==true)
{
for (var i=0;i<string.length;i++)
{
if (compare.indexOf(string.charAt(i))==-1)
return false
}
return true;
}
else
{
for (var i=0;i<string.length;i++)
{
if (compare.indexOf(string.charAt(i))!=-1)
return false
}
return true;
}
}
/*
去掉空格
*/
function Trim(str){
 if(str.charAt(0) == " "){
  str = str.slice(1);
  str = Trim(str);
 }
 return str;
}


/*
检查是否是空
*/
function CheckEmpty(ObjStr,fieldname){
 var obj = document.all(ObjStr);
 if( obj == null || Trim(obj.value) == ""){
  if (fieldname == null || fieldname =="")
   alert("输入为空!");
  else
   alert(fieldname+"输入为空!");
  obj.focus();
  return false;
 }
 return true;
}

/*
//设置下拉框的值
*/
function setSelections(sel,val) {
  var i;   var str = "";
  for (i = 0; i < sel.length; i++)
       if (sel.options[i].value==val){
               sel.options[i].selected=true ;
                }

}
//清除form的输入框
function clearForm(form){
  for(var i=0;i<form.length;i++){
    if(form.elements(i).type=="text"){
      form.elements(i).value="";
    }
    if(form.elements(i).type=="select-one"){
      form.elements(i).options[0].selected=true;
    }
  }
}
//检查最大长度
function checklength(ObjStr,fieldname,maxlen){
 var obj = document.all(ObjStr);
 var ilen=s_strlen(obj.value);
 if (ilen>maxlen){
    alert(fieldname+"超出最大长度!"); 	 
    obj.focus();
    return false;
 }
 return true;

}

/****************************************************************/
/* 功  能：基于自定义属性的统一检测用Javascript函数库           */
/* 1、chname：表示该数据的中文名称，用于校验出错时显示用。      */
/* 2、maxsize：表示允许输入的最大长度，这个长度是以节字计算的。 */ 
/* 3、nullable：表示输入值是否允许为空。为yes时允许为空。       */
/* 4、datatype：表示输入值的数据类型。                          */
/****************************************************************/
/* 取得字符串的字节长度 */
function s_strlen(str)
{var i;
var len;
len = 0;
for (i=0;i<str.length;i++)
{
if (str.charCodeAt(i)>255) len+=2; else len++;
}
return len;
}
/* 检测字符串是否为空 */
function s_isnull(str)
{
var i;
 for (i=0;i<str.length;i++)
{
  if (str.charAt(i)!=' ') return false;
}
 return true;
}
/* 检测字符串是否全为数字 */
function s_isnumber(str)
{
var number_chars = "1234567890";
var i;
for (i=0;i<str.length;i++)
{
if (number_chars.indexOf(str.charAt(i))==-1) return false;
}
return true;
}
/* 检测指定文本框输入是否合法 */
function verifyInput(input)
{
var image;
var i;
var error = false;

/* 长度校验 */
if (s_strlen(input.value)>parseInt(input.maxsize))
{
alert(input.chname+"超出最大长度"+input.maxsize);
error = true;
}
else
/* 非空校验 */
if (input.nullable=="no"&&s_isnull(input.value))
{
alert(input.chname+"不能为空");
error = true;
}
else
{
/* 数据类型校验 */
 if ((input.datatype!=null)&&(!LogicalValue(input.name,input.datatype))){
    error=true;
    alert(input.chname+"输入错误");
 } 


}

/* 根据有无错误设置或取消警示标志 */

if (error)
{
return false;
}
else
{
return true;
}

}
/* 检测指定FORM表单所有应被检测的元素
（那些具有自定义属性的元素）是否合法，此函数用于表单的onsubmit事件 */
function verifyAll(myform)
{
  var i;
  for (i=0;i<myform.all.length;i++)
  {
     /* 非自定义属性的元素不予理睬 */
    if (myform.all[i].chname+""=="undefined") continue;
    /* 校验当前元素 */
    if (verifyInput(myform.all[i])==false)
    {
      if (!myform.all[i].disabled){    	 
      	 if (myform.all[i].type.toLowerCase() !="hidden"){
          myform.all[i].focus();
        }
      } 
       return false;
    }
   }
  return true;
}

function disableform(form){
  var elements = form.elements;		
  for (var i = 0; i < elements.length;i++) {
       var element = elements[i];
       element.disabled="true";
  }   	
}	

var _st = window.setTimeout; 
window.setTimeout = function(fRef, mDelay) { 
 if(typeof fRef == 'function'){ 
  var argu = Array.prototype.slice.call(arguments,2); 
  var f = (function(){ fRef.apply(null, argu); }); 
  return _st(f, mDelay); 
 } 
 return _st(fRef,mDelay); 
} 