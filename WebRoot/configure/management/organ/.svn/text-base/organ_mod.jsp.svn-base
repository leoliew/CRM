<%@page language="java" contentType="text/html; charset=UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<script language=javascript type="text/javascript">
var formName="organManagerActionForm";
var inputAction ="organManagerAction";
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
  if(!ChkText(form.deptCode,"部门编号不能为空")) {
    form.deptCode.focus();
    return;
  }

  if(!ChkText(form.deptName,"部门名称不能为空")) {
    form.deptName.focus();
    return;
  }

  if(!ChkText(form.chargeMan,"部门主管不能为空")) {
    form.chargeMan.focus();
    return;
  }

  if(!ChkText(form.linkPhone,"联系电话不能为空")) {
    form.linkPhone.focus();
    return;
  }

  if(!ChkText(form.email,"电子邮件不能为空")) {
    form.email.focus();
    return;
  }
  if(!ChkText(form.address,"地址不能为空")) {
    form.address.focus();
    return;
  }
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
  <title>修改部门信息</title>
  <script src="js/cssjs.js" type="text/javascript"></script>
  <script src="js/zfwl.js" type="text/javascript"></script>
  <link href="css/zfwl.css" type="text/css" rel="STYLESHEET">
  </head>
  <body vlink=#000000 alink=#000000 link=#000000 bgColor=#ffffff onLoad="document.organManagerActionForm.deptCode.focus()">
  <!-- 栏目添加部分开始 -->
  <form action="organManagerAction!mod.action" method="post" name="organManagerActionForm">
    <input type="hidden" name="action" value="1"/>
    <input type="hidden" name="deptId" value="${requestScope.dept.deptId }"/>
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
              <b>部门管理</b>
              &nbsp;&nbsp;
              <span class="bg-neg-alert">&raquo;</span>
              &nbsp;&nbsp;
              <b>部门信息</b>
              &nbsp;&nbsp;
              <span class="bg-neg-alert">&raquo;</span>
              &nbsp;&nbsp;
                修改部门信息
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
            <b >部门信息</b>
          </font>
        </td>
      </tr>
    </table>
    <table  id="LodgeInfo" style="display:" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td width="100%">
          <table border="0" cellspacing="0" cellpadding="0" background="images/di03.gif" width="100%">
            <tr>
              <td width="100%">
                <table border="0" cellspacing="1" cellpadding="2" bgcolor="#CADADF" width="100%">
                  <tr bgcolor="#F4F7FA">
                    <td align="right" width="20%">部门编号：</td>
                    <td width="30%">
                      <input type="text" onkeydown="enterToTab()" value="${requestScope.dept.deptCode}"  maxlength="20" name="deptCode" size="20"/><font color="#FF0000">(必填)</font><br>
                    </td>
                    <td align="right" width="20%">部门名称：</td>
                    <td width="30%">
                      <input type="text" onkeydown="enterToTab()" value="${requestScope.dept.deptName}"  maxlength="30" name="deptName" size="20"/><font color="#FF0000">(必填)</font>
                    </td>
                  </tr>
                  <tr bgcolor="#F4F7FA">
                   <td align="right">部门主管：</td>
                    <td>
                      <input type="text" onkeydown="enterToTab()" value="${requestScope.dept.chargeMan}"  maxlength="30" name="chargeMan" size="20"/><font color="#FF0000">(必填)</font>
                    </td>
                    <td align="right">联系电话：</td>
                    <td>
                      <input type="text" onkeydown="enterToTab()" value="${requestScope.dept.linkPhone}"  maxlength="20" name="linkPhone" size="20"/><font color="#FF0000">(必填)</font>
                    </td>
                  </tr>
                  <tr bgcolor="#F4F7FA">
                   <td align="right">电子邮件：</td>
                    <td>
                      <input type="text" onkeydown="enterToTab()" value="${requestScope.dept.email}"  maxlength="30" name="email" size="20"/><font color="#FF0000">(必填)</font>
                    </td>
                    <td align="right">地址：</td>
                    <td colspan=3>
                      <input type="text" onkeydown="enterToTab()" value="${requestScope.dept.address}"  maxlength="100" name="address" size="50"/><font color="#FF0000">(必填)</font>
                    </td>
                  </tr>
                  <tr bgcolor="#F4F7FA">
                    <td align="right">备注：</td>
                    <td colspan="3">
                      <textarea  cols="60" rows="4" style="width:90%" name="remark">${requestScope.dept.remark}</textarea>
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
