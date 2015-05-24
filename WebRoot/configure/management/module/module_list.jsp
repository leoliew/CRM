<%@page language="java" contentType="text/html; charset=UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<script language="javascript" type="text/javascript">
var formName="moduleManagerActionForm";
var inputAction ="moduleManagerAction";
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
  form.submit();
}

//修改
 function click_mod(name){
  if(document.all("keyvalue").value==""){
    alert ("请选择一条记录进行修改！");
    return;
  }
  var form=getForm();
  var moduleId = document.all("keyvalue").value;
  form.action = inputAction + "!mod" + suffix + "?action=0&moduleId=" + moduleId;
  form.submit();
 }
 
 //删除
 function click_del(){
  if(document.all("keyvalue").value==""){
    alert ("请选择一条记录进行修改！");
    return;
  }
  var form=getForm();
  var moduleId = document.all("keyvalue").value;
  form.action = inputAction + "!del" + suffix + "?moduleId=" + moduleId;
  form.submit();
 }
 
 function gotoPage(p){
	var form=getForm();
	form.action = inputAction + "!list" + suffix + "?gotopage="+p;
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

</script>
<title>模块信息</title>
<script src="js/cssjs.js" type="text/javascript"></script>
<script src="js/zfwl.js" type="text/javascript"></script>
<link href="css/zfwl.css" type=text/css rel=STYLESHEET>
</HEAD>
<body vlink=#000000 alink=#000000 link=#000000 bgColor=#ffffff>
<form action="moduleManageAction.do" method="post" name="moduleManagerActionForm">
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
              <b>模块管理</b>
              &nbsp;&nbsp;
              <span class="bg-neg-alert">&raquo;</span>
              &nbsp;&nbsp;
              模块信息
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
  <div class=TaskTab style="DISPLAY: none; Z-INDEX: -1; OVERFLOW: hidden; WIDTH: 100%; HEIGHT: 130px">
    <div style="MARGIN-TOP: 10px; DISPLAY: none; MARGIN-LEFT: 12px">
      <table class=DisplayTable style="DISPLAY: block; MARGIN-BOTTOM: 12px" cellSpacing=0 cellPadding=0>
        <tbody>        </tbody>
      </table>
    </div>
  </div>
  <div class=ToolbarBackground>
    <table class=Displaytable cellSpacing=0 cellPadding=0 width="100%">
      <tbody>
        <tr>
          <td width="10%">
            <button class=Hyperlinkbutton accessKey=A onClick="javascript:click_add()">
              <table class=Toolbartable cellSpacing=0 cellPadding=0>
                <tbody>
                  <tr>
                    <td vAlign="middle">
                      <img src="images/new.gif">
                    </td>
                    <td style="WIDTH: 0.3em">                    </td>
                    <td vAlign="middle" noWrap>增加模块信息</td>
                  </tr>
                </tbody>
              </table>
            </button>
          </td>
          <td width="1%">|</td>
          <td width="10%">
            <button class=Hyperlinkbutton accessKey=D onclick="javascript:click_mod()">
              <table class=Toolbartable cellSpacing=0 cellPadding=0>
                <tbody>
                  <tr>
                    <td vAlign="middle">
                      <img src="images/modify.gif">
                    </td>
                    <td style="WIDTH: 0.3em">                    </td>
                    <td vAlign="middle" noWrap>修改模块信息</td>
                  </tr>
                </tbody>
              </table>
            </button>
          </td>
          <td width="1%">|</td>
          <td width="10%">
            <button class=Hyperlinkbutton accessKey=D onClick="javascript:click_del()">
              <table class=Toolbartable cellSpacing=0 cellPadding=0>
                <tbody>
                  <tr>
                    <td vAlign="middle">
                      <img src="images/del.gif">
                    </td>
                    <td style="WIDTH: 0.3em">                    </td>
                    <td vAlign="middle" noWrap>删除模块信息</td>
                  </tr>
                </tbody>
              </table>
            </button>
          </td>
          <td width="1%">|</td>
          <td width="10%">
            <button class=Hyperlinkbutton accessKey=D onClick="javascript:click_search()">
              <table class=Toolbartable cellSpacing=0 cellPadding=0>
                <tbody>
                  <tr>
                    
                    <td style="WIDTH: 0.3em">                    </td>
                  
                  </tr>
                </tbody>
              </table>
            </button>
          </td>
          <td width="30%">          </td>
          <td width="15%">          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- 列表部分开始 -->
  <table id="LodgeInfo" cellspacing=0 bordercolordark=#ffffff cellpadding=3 width="100%" align=center bordercolorlight=#000000 border=1>
    <!-- 字段名称部分开始 -->
    <tr class="beta" style="font-weight:bold">
      <td width="9%">模块编号</td>
      <td width="9%">模块名称</td>
      <td width="29%">上级模块</td>
      <td width="8%">备注</td>
    </tr>
    <!-- 字段名称部分结束 -->
    <!-- 字段内容部分开始 -->
    <c:forEach items="${requestScope.pageData}" var="module">
 	<tr class="bg" onClick="row_selected(this,'LodgeInfo','rowindex','rowcolor','keyvalue')">
 		<td width="5%">${module.moduleCode}
 		<input type="hidden" id="rowkeyvalue" name="rowkeyvalue" value="${module.moduleId}">
 		</td>
	      <td width="5%">${module.moduleName}  &nbsp;</td>
	      <td width="5%">${module.upperModuleId}  &nbsp;</td>
	      <td width="5%">${module.remark}  &nbsp;</td>
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
