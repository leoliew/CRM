<%@page language="java" contentType="text/html; charset=UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
<title>修改用户</title>
<script language=javascript type="text/javascript">
var formName="userManagerActionForm";
var inputAction ="user_list.jsp";
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
  if(!ChkText(form.workNo,"工号不能为空")) {
    form.workNo.focus()
    return;
  }
  if(!ChkText(form.loginName,"登录名不能为空")) {
    form.loginName.focus()
    return;
  }
  if(!ChkText(form.name,"用户名不能为空")) {
    form.name.focus()
    return;
  }
  if(!ChkText(form.password,"密码不能为空")) {
    form.password.focus();
    return;
  }
  if(!ChkText(form.password2,"请填写确认密码")) {
    form.password2.focus();
    return;
  }
  if(form.password.value!=form.password2.value) {
    alert("密码与确认密码不一致,请重新填写");
    form.password.focus();
    return;
  }
  //if(check()){
    alert("数据保存!");
    form.submit( );
    //location.href=inputAction;
    //}
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
  </script>
<script src="js/cssjs.js" type="text/javascript"></script>
<script src="js/zfwl.js" type="text/javascript"></script>
<link href="css/zfwl.css" type="text/css" rel="STYLESHEET">
<script src="js/calendar.js" type="text/javascript"></script>
</head>
<body vlink=#000000 alink=#000000 link=#000000 bgColor=#ffffff>
  <!-- 栏目添加部分开始 -->
<form action="userManagerAction!mod.action" method="post" name="userManagerActionForm">
  <input type="hidden" name="userId" value="${requestScope.user.userId }"/>
  <input type="hidden" name="action" value="1"/>
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
              <b>用户管理</b>
              &nbsp;&nbsp;
              <span class="bg-neg-alert">&raquo;</span>
              &nbsp;&nbsp;
                <b>用户信息</b>
              &nbsp;&nbsp;
              <span class="bg-neg-alert">&raquo;</span>
              &nbsp;&nbsp;
              修改用户
            </font>
          </td>
          <td class=TabSpacer>          </td>
          <td class=TabCell>&nbsp;</td>
          <td class=TabSpacer>          </td>
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
  <table class=SectionBlcokBackground>
    <tr>
      <td>
        <font class="beta" size="2">
          <b>用户信息</b>
        </font>
      </td>
    </tr>
  </table>
  <table id="LodgeInfo" style="display:" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td width="100%">
        <table border="0" cellspacing="0" cellpadding="0" background="/images/di03.gif" width="100%">
          <tr>
            <td width="100%">
              <table border="0" cellspacing="1" cellpadding="2" bgcolor="#CADADF" width="100%">
                <tr bgcolor="#F4F7FA">
                  <td align="right" width="20%">所在部门：</td>
                  <td width="30%">
                  <select name="deptId">
                  	  <c:forEach items="${requestScope.dept_list}" var="organ">
                  	<option value="${organ.deptId}"  <c:if test="${requestScope.user.tDept.deptId eq organ.deptId}">selected</c:if>>
                  	${organ.deptName}</option>
                  </c:forEach>
                  </select>
                    <font color="#FF0000">(必选)</font>
                  </td>
                   <td align="right">工号：</td>
                  <td>
                    <input type="text" onkeydown="enterToTab()"   maxlength="50" name="workNo" size="20" readonly="readonly" value="${requestScope.user.workNo }"/>
                    <font color="#FF0000">(*)</font>
                  </td>
                </tr>
                <tr bgcolor="#F4F7FA">
                  <td align="right">登录名：</td>
                  <td>
                  <input type="text" onkeydown="enterToTab()"   maxlength="50" name="loginName" size="20" value="${requestScope.user.loginName }"/>
                  </td>
                  <td align="right">用户姓名：</td>
                  <td>
                    <input type="text" onkeydown="enterToTab()"   maxlength="20" name="name" size="20" value="${requestScope.user.name }"/>
                    <font color="#FF0000">(*)</font>
                  </td>
                </tr>
                <tr bgcolor="#F4F7FA">
                  <td align="right">密码：</td>
                  <td>
                    <input type="password" onkeydown="enterToTab()"   maxlength="40" name="password" size="20" value="${requestScope.user.password }"/>
                    <font color="#FF0000">(*)</font>
                  </td>
                  <td align="right">密码确认：</td>
                  <td>
                    <input type="password" onkeydown="enterToTab()"   maxlength="40" name="password2" size="20" value="${requestScope.user.password }"/>
                    <font color="#FF0000">(*)</font>
                  </td>
                </tr>
                <tr bgcolor="#F4F7FA">
                  <td align="right">办公电话：</td>
                  <td>
                    <input type="text" onkeydown="enterToTab()"   maxlength="20" name="workPhone" size="20" value="${requestScope.user.workPhone }"/>
                  </td>
                  <td align="right">移动电话：</td>
                  <td>
                    <input type="text" onkeydown="enterToTab()"   maxlength="20" name="mobilePhone" size="20" value="${requestScope.user.mobilePhone }"/>
                  </td>
                </tr>
                <tr bgcolor="#F4F7FA">
                  <td align="right">电子邮件：</td>
                  <td>
                    <input type="text" onkeydown="enterToTab()"   maxlength="30" name="email" size="20" value="${requestScope.user.email }"/>
                  </td>
                  <td align="right">性别：</td>
                  <td>
                    <select onkeydown="enterToTab()" name="sex">
                      <option value="1" <c:if test="${requestScope.user.sex eq 1}">selected</c:if> >男</option>
                      <option value="0" <c:if test="${requestScope.user.sex eq 0}">selected</c:if>>女</option>
                    </select>
                  </td>
                </tr>
                <tr bgcolor="#F4F7FA">
                  <td align="right">备注：</td>
                  <td colspan="3"><br>
                  <textarea name="remark" cols="60" rows="4" style="width:90%" >${requestScope.user.remark }</textarea></td>
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
