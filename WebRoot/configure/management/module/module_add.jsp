<%@ page language="java" contentType="text/html; charset=utf-8" %>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script language=javascript type="text/javascript">
var formName="moduleManagerActionForm";
var inputAction ="moduleManagerAction";
var suffix = ".action";
//设置命令
function setCommand(cmd){
  var form=getForm();
  form.all("command").value=cmd;
  return form;
}
//查找消息
function getForm(){
  var form=document.all(formName);
  return form;
}

//保存
function click_save(){
  var form=getForm();
  if(!ChkText(form.moduleCode,"模块编号不能为空")) {
    form.moduleCode.focus()
    return;
  }
  if(!ChkText(form.moduleName,"模块名字不能为空")) {
    form.moduleName.focus()
    return;
  }
	form.action = inputAction + "!add" + suffix + "?action=1";
    form.submit( );

  }
  //下一步
  function click_cancel(){
    var form=setCommand("cancel");
    alert("操作已经取消！");
    history.back(-1);

  }
  //重置方法
  function click_reset(){
    var form=document.all(formName);
    form.reset();
  }
  </script><html>
  <head>
  <title>添加模块</title>
  <script src="js/cssjs.js" type="text/javascript"></script>
  <script src="js/zfwl.js" type="text/javascript"></script>
  <link href="css/zfwl.css" type="text/css" rel="STYLESHEET">

  </head>
  <body vlink=#000000 alink=#000000 link=#000000 bgColor=#ffffff onLoad="" onLoad="document.moduleManagerActionForm.moduleCode.focus()">
  <!-- 栏目添加部分开始 -->
  <form action="moduleManagerAction.action" method="post" name="moduleManagerActionForm">
    <div class=SectionTabTopBorder style="DISPLAY: block"></div>
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
              <b>模块管理</b>
              &nbsp;&nbsp;
              <span class="bg-neg-alert">&raquo;</span>
              &nbsp;&nbsp;
              <b>模块信息</b>
              &nbsp;&nbsp;
              <span class="bg-neg-alert">&raquo;</span>
              &nbsp;&nbsp;
              添加模块
              &nbsp;
              </font>
            </td>
            <td class=TabSpacer></td>
            <td class=TabCell>&nbsp;</td>
            <td class=TabSpacer></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class=TaskTab style="DISPLAY: none; Z-INDEX: -1; OVERFLOW: hidden; WIDTH: 100%; HEIGHT: 130px">
      <div style="MARGIN-TOP: 10px; DISPLAY: none; MARGIN-LEFT: 12px">
        <table class=DisplayTable style="DISPLAY: block; MARGIN-BOTTOM: 12px" cellSpacing=0 cellPadding=0>
          <tbody></tbody>
        </table>
      </div>
    </div>
    
    <table class=SectionBlcokBackground>
      <tr>
        <td >
          <font class="beta" size="2">
            <b >模块信息</b>
          </font>
        </td>
      </tr>
    </table>
    <table  id="LodgeInfo" style="display:" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td width="100%">
          <table border="0" cellspacing="0" cellpadding="0" background="/images/di03.gif" width="100%">
            <tr>
              <td width="100%">
                <table border="0" cellspacing="1" cellpadding="2" bgcolor="#CADADF" width="100%">
                  <tr bgcolor="#F4F7FA">
                    <td align="right" width="20%">模块编号：</td>
                    <td width="30%">
                      <input type="text" onkeydown="enterToTab()"   maxlength="20"  name="moduleCode" size="20"/><font color="#FF0000">(必填)</font><br>（模块按照编号排序）
                    </td>
                    <td align="right" width="20%">模块名称：</td>
                    <td width="30%">
                      <input type="text" onkeydown="enterToTab()"   maxlength="30"  name="moduleName" size="20"/>
                      <font color="#FF0000">(必填)</font>
                    </td>
                  </tr>
                  <tr bgcolor="#F4F7FA">           
                    <td align="right">上级模块：</td>
                    <td>
                    <select name="upperModuleId">
                    <option value="0">顶层</option>
                    	<c:forEach items="${requestScope.module_list}" var="module">
                    		<option value="${module.moduleId}">${module.moduleName}</option>
                    	</c:forEach>
                    </select>
                      </td>
                    <td></td><td></td>
                  </tr>
                  <tr bgcolor="#F4F7FA">
                    <td align="right">页面地址：</td>
                    <td colspan="3">
                     <input type="text" onkeydown="enterToTab()"   maxlength="255" name="url" size="100"/>
                  </tr>
                  <tr bgcolor="#F4F7FA">
                    <td align="right">备注：</td>
                    <td colspan="3">
                      <textarea name="remark" cols="60" rows="4" style="width:90%" ></textarea>
                    </td>
                  </tr>
                </table>
</td>
            </tr>
            <tr class="bg">
              <td>
                <img src="images/common/spacer.gif" height="1" width="1" border="0" hspace="0" vspace="0">
              </td>
            </tr>
          </table>
</td>
      </tr>
    </table>
    <br>
    <table border="0" cellspace="0" cellpadding="0" width="100%">
      <tr>
        <td align="center">
          <table border="0" cellspace="0" cellpadding="0" width="40%">
            <tr>
              <td align="center" width="50%">
                <button style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; BORDER-LEFT: 0px; CURSOR: default; BORDER-BOTTOM: 0px; BACKGROUND-COLOR: transparent" accessKey=A onClick="javascript:click_save()">
                  <img src="images/save.gif" style="cursor:hand">
                </button>
              </td>
              <td align="center" width="50%">
                <button style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; BORDER-LEFT: 0px; CURSOR: default; BORDER-BOTTOM: 0px; BACKGROUND-COLOR: transparent" accessKey=A onClick="javascript:window.history.back()">
                  <img src="images/return.gif" style="cursor:hand">
                </button>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </form>
  </body>
</html>
