<%@page language="java" contentType="text/html; charset=utf-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
<script language="javascript" type="text/javascript">
var formName="roleManagerActionForm";
var inputAction ="roleManagerAction";
var suffix = ".action";
//取得form的值
function getForm(){
  var form=document.all(formName);
  return form;
}

//添加
function click_add(){
  var form=getForm();
  form.action = inputAction + "!add" + suffix + "?action=0";
  form.submit( );
}

//修改
function click_mod(){
  if(document.all("keyvalue").value==""){
    alert ("请选择一条记录进行修改！");
    return;
  }
  var form=getForm();
  var roleId = document.all("keyvalue").value;
  form.action = inputAction + "!mod" + suffix + "?action=0&roleId="+roleId;
  form.submit( );
}

function click_role_module(){
  if(document.all("keyvalue").value==""){
    alert ("请选择一个角色！");
    return;
  }
  var form=getForm();
  var role_id = document.all("keyvalue").value;
  form.action = inputAction + "!authorization" + suffix + "?action=0&roleId=" + role_id;
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


</script>
<title>角色信息</title>
<script src="js/cssjs.js" type="text/javascript"></script>
<script src="js/zfwl.js" type="text/javascript"></script>
<link href="css/zfwl.css" type=text/css rel=STYLESHEET>
</HEAD>
<body vlink=#000000 alink=#000000 link=#000000 bgColor=#ffffff>
<form action="roleManagerAction!list.action" method="post" name="roleManagerActionForm">
    <input type="hidden" name="action" value="1">
  <input type="hidden" name="gotopage"  id="gotopage">
  <div class=SectionTabTopBorder style="DISPLAY: block">  </div>
  <div class=SectionTabBackground id=idSectionTabBackground style="DISPLAY: block">
    <table style="HEIGHT: 2em" border=0>
      <tbody>
        <tr>
          <td class=TabCell>
            <font class="beta" size="2">              &nbsp;
              <b>综合管理</b>
              &nbsp;&nbsp;
              <span class="bg-neg-alert">&raquo;</span>
              &nbsp;&nbsp;
              <b>角色管理</b>
              &nbsp;&nbsp;
              <span class="bg-neg-alert">&raquo;</span>
              &nbsp;&nbsp;
              角色信息
              &nbsp;
            </font>
          </td>
          <td>
            <input type="hidden" id="rowindex">
            <input type="hidden" id="rowcolor">
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
 角色名称:<input type="text" name="roleName" value="${roleName}">
 &nbsp; &nbsp;<%-- 
 <s:textfield  name="loginName"  label="登录名"></s:textfield>
--%>
 
 <input type="submit"  value="查询">
</td>
<tr><td>&nbsp;</td></tr>
                <table  class=Toolbartable cellSpacing=0 cellPadding=0>
                  <tbody>
                    <tr>
                    </tr>
                  </tbody>
                </table>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
  
  <!-- 列表部分开始 -->
  <table id="LodgeInfo" cellspacing=0 bordercolordark=#ffffff cellpadding=3 width="100%" align=center bordercolorlight=#000000 border=1>
    <!-- 字段名称部分开始 -->
    <tr class="beta" style="font-weight:bold">
      <td width="15%">角色名称</td>
      <td width="20%">角色说明</td>
      <td width="20%">状态</td>
    </tr>
    <!-- 字段名称部分结束 -->
    <!-- 字段内容部分开始 -->
     <c:forEach items="${requestScope.pageData}" var="role">
 	<tr class="bg" onClick="row_selected(this,'LodgeInfo','rowindex','rowcolor','keyvalue')">
 		<td width="5%">
 		${role.roleName}
 		<input type="hidden" id="rowkeyvalue" name="rowkeyvalue" value="${role.roleId}">
 		</td>
 		<td width="5%">${role.roleDesc} &nbsp;</td>
	    <td width="5%">${role.status}</td>
	 </tr>
 	</c:forEach>
    <!-- 翻页部分开始 -->
     <tr class="beta">
      <td colSpan=21 vAlign="middle" align="right">
         <jsp:include  page="/public/pubpage.jsp"></jsp:include>
      </td>
    </tr>
    <!-- 翻页部分结束 -->
    <!-- 字段内容部分结束 -->
  </table>
  <br>
  <!-- 列表部分结束 -->
</form>
  <!-- 列表内容部分结束 -->
</body>
</html>
