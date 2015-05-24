<%@page language="java" contentType="text/html; charset=UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ page import="com.opensymphony.xwork2.util.ValueStack"%>
<html>
<head>
<script language="javascript" type="text/javascript">
var formName="userManagerActionForm";
var inputAction ="userManagerAction";
var suffix = ".action";
//取得form的值
function getForm(){
  var form=document.all(formName);
  return form;
}

//添加
function click_add(){
  var form =getForm();
  form.action = inputAction + "!add"+ suffix +"?action=0";
  form.submit( );
}

//修改
function click_mod(){
 var form =getForm();
  if(document.all("keyvalue").value==""){
    alert ("请选择一个用户进行修改！");
    return;
  }
  var user_id = document.all("keyvalue").value;
  form.action = inputAction + "!mod" + suffix + "?action=0&userId=" + user_id;
  form.submit();
}

//删除
function click_del(){
 var form =getForm();
  if(document.all("keyvalue").value==""){
    alert ("请选择一个用户进行修改！");
    return;
  }
  if(confirm("系统将删除所选记录,确实要删除吗？"))
  {
    var user_id = document.all("keyvalue").value;
  	form.action = inputAction + "!del" + suffix + "?userId=" + user_id;
  	form.submit();
  }
}



function user_role(){
  if(document.all("keyvalue").value==""){
    alert ("请选择一个用户进行授权！");
    return;
  }
  var form =getForm();
  var userId = document.all("keyvalue").value;
  form.action = inputAction + "!authorization" + suffix + "?action=0&userId="+userId;
  form.submit();
}

//分页所用的函数
function gotoPage(p){
	var form=getForm();
	form.action = inputAction + "!list" + suffix + "?gotopage="+p;
	form.submit();
}

//修改一页的大小
function changeRowsPress(pageSizeTag){
	var pageSize=pageSizeTag.value;
	var form=getForm();
	form.action = inputAction + "!list" + suffix + "?gotopage=1&pageSize="+pageSize;
	form.submit();
}


//模糊查询
function click_search(){
	var form=getForm();
	form.action = inputAction + "!toSelect" + suffix ;
	form.submit();
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
//this,'LodgeInfo','rowindex','rowcolor','keyvalue'
function row_selected(row,tablename,oldrowindex,oldrowcolor,keyvalue)
{
	//alert("row_selected --> " );		
	var i=0;
	var rowindex=document.all(oldrowindex).value;
	alert("rowindex --> " + rowindex);
	var rowcolor=document.all(oldrowcolor).value;
	alert("rowcolor -->" + rowcolor);
	alert("oldrowindex -->" + parseInt(oldrowindex));
	alert("row.rowIndex -->" + row.rowIndex);
	if (parseInt(oldrowindex)!=row.rowIndex)
	{
		if (rowindex!='')
		{
			alert("rowindex is not null -->" );
			for(i=0;i<document.all(tablename).rows(parseInt(rowindex)).cells.length;i++)
			{
				 document.all(tablename).rows(parseInt(rowindex)).cells(i).bgColor=rowcolor;
			}
		}
		//行号赋值
		alert("new oldrowindex -->" + row.rowIndex);
		document.all(oldrowindex).value=row.rowIndex;
		//颜色赋值
		alert("bgColor -->" + row.cells(0).bgColor);
		document.all(oldrowcolor).value=row.cells(0).bgColor;
		alert("keyvalue -->" + keyvalue);
		alert("rowkeyvalue -->" + row.cells(0).all('rowkeyvalue'));
		if (keyvalue!='' && row.cells(0).all('rowkeyvalue')!=null)
                //alert(row.cells(0).all('rowkeyvalue').value);
        alert("rowkeyvalue.value -->" + row.cells(0).all('rowkeyvalue').value);
        
        //对隐藏表单用户的id进行赋值
    		document.all(keyvalue).value=row.cells(0).all('rowkeyvalue').value;
    		//把当前行的每一列赋予颜色
		for(i=0;i<row.cells.length;i++)
		  row.cells(i).bgColor="#99CCCC";
	}
	return;
}
		



</script>
<title>用户信息_查询</title>
<script src="js/cssjs.js" type="text/javascript"></script>
<script src="js/zfwl.js" type="text/javascript"></script>
<link href="css/zfwl.css" type=text/css rel=STYLESHEET>
</HEAD>
<body vlink=#000000 alink=#000000 link=#000000 bgColor=#ffffff>
<form action="userManagerAction!list.action" name="userManagerActionForm" method="post">

<input type="hidden" name="action" value="1">
<input type="hidden" name="gotopage"  id="gotopage">

  <div class=SectionTabTopBorder style="DISPLAY: block">  </div>
  <div class=SectionTabBackground id=idSectionTabBackground style="DISPLAY: block">
    <table style="HEIGHT: 2em" border=0>
      <tbody>
        <tr>
          <td class=TabCell>
            <font class="beta" size="2">
            &nbsp;
            <b>综合管理</b>
            &nbsp;&nbsp;
            <span class="bg-neg-alert">&raquo;</span>
            &nbsp;&nbsp;
            <b>用户管理</b>
            &nbsp;&nbsp;
            <span class="bg-neg-alert">&raquo;</span>
            &nbsp;&nbsp;
            查询用户信息
            &nbsp;
            </font>
          </td>
          <td>
          <%--点中的行 --%>
	          <input type="hidden" id="rowindex">
	          
	          <%--行的背景颜色 --%>
	          <input type="hidden" id="rowcolor">
	          
	          <%--隐藏表单，用户的id --%>
	          <input type="hidden" id="keyvalue">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
 <div class=ToolbarBackground>
    <table class=Displaytable cellSpacing=0 cellPadding=0 width="100%">
      <tbody>
        <tr style="width: 100%">
<td width="10%">
 工号:<input type="text" name="workNo" value="${workNo}">
 &nbsp; &nbsp;<%-- 
 <s:textfield  name="loginName"  label="登录名"></s:textfield>
--%>
 登录名: <input type="text" name="loginName"   value="${loginName}"> &nbsp; &nbsp;
 <input type="submit"  value="查询">
 
</td>
<tr><td>&nbsp;</td></tr>

  <!-- 列表部分开始 -->
  <table id="LodgeInfo" cellspacing=0 bordercolordark=#ffffff cellpadding=3 width="100%" align=center bordercolorlight=#000000 border=1>
    <!-- 字段名称部分开始 -->
    <tr class="beta" style="font-weight:bold">
    <td width="5%">工号</td>
      <td width="5%">登录名</td>
      <td width="5%">用户姓名</td>
      <td width="5%">性别</td>
      <td width="5%">部门名称</td>
      <td width="5%">移动电话</td>
      <td width="5%">办公电话</td>
      <td width="5%">电子邮箱</td>
    </tr>
    <%-- 直接获取Action的pageDate显示数据 
    	单击每一行调用row_selected函数,
    	在第一行有个隐藏表单保存当前行的UserId
    --%>
    <c:forEach items="${requestScope.pageData}" var="user">
    	
    	<tr align="center" class="bg" 
    		onClick="row_selected(this,'LodgeInfo','rowindex','rowcolor','keyvalue')">
    		
    		<td>${user.workNo } &nbsp;
    		
    		 <input type="hidden" id="rowkeyvalue" name="rowkeyvalue" 
    		 value="${user.userId }">
    		</td>
    		
    		<td>${user.loginName } &nbsp;</td>
    		<td>${user.name } &nbsp;</td>
    		<td>
    		<c:if test="${user.sex==0}">女</c:if>
    		<c:if test="${user.sex==1}">男</c:if>
    		
    		&nbsp;
    		</td>
    		<td>${user.tDept.deptName } &nbsp;</td>
    		<td>${user.mobilePhone } &nbsp;</td>
    		<td>${user.workPhone } &nbsp;</td>
    		<td>${user.email } &nbsp;</td>
    	</tr>
    </c:forEach>

  <!-- 列表部分结束 -->
  <!-- 翻页部分开始 -->
    <tr class="beta">
      <td colSpan=21 vAlign="middle" align="right">
         <jsp:include  page="/public/pubpage.jsp"></jsp:include>
      </td>
    </tr>
   <!-- 翻页部分结束 -->
    </table>
<form>
<!-- 列表内容部分结束 -->
</body>
</html>
