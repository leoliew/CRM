<%@page language="java" contentType="text/html; charset=UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<script language=javascript type="text/javascript">
var formName="userManagerActionForm";
var inputAction ="userManagerAction";
var suffix = ".action";

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
   form.action = inputAction + "!add" + suffix + "?action=1";
  form.submit( );
}

//检测用户名是否存在
function check_loginname(){
   var loginName=	document.getElementById("loginName").value;
   userBiz.check_loginname(loginName,function back(val){
	   alert(val);
   });
}

</script>
<html>
<head>
<title>增加用户</title>
<script src="js/cssjs.js" type="text/javascript"></script>
<script src="js/zfwl.js" type="text/javascript"></script>
<link href="css/zfwl.css" type="text/css" rel="STYLESHEET">
<script src="js/calendar.js" type="text/javascript"></script>
 <script type='text/javascript' src='/crm/dwr/interface/userBiz.js'></script>
  <script type='text/javascript' src='/crm/dwr/engine.js'></script>
  <script type='text/javascript' src='/crm/dwr/util.js'></script>


</head>
<body vlink=#000000 alink=#000000 link=#000000 bgColor=#ffffff onLoad="document.userManagerActionForm.workNo.focus()">
  <!-- 栏目添加部分开始 -->
<form action="userManagerAction.action" name="userManagerActionForm" method="post">
  <div class=SectionTabTopBorder style="DISPLAY: block">  </div>
  <div class=SectionTabBackground id=idSectionTabBackground style="DISPLAY: block">
    <table style="HEIGHT: 2em" border=0>
      <tbody>
        <tr>
          <td class=TabCell>
            <font class="beta" size="2">&nbsp;
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
              增加用户
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
                  	<option value="${organ.deptId}">${organ.deptName}</option>
                  </c:forEach>
                  </select>
                    <font color="#FF0000">(必选)</font>
                  </td>
                  <td align="right">工号：</td>
                  <td>
                    <input type="text" onkeydown="enterToTab()"   maxlength="50" name="workNo" size="20"/>
                    <font color="#FF0000">(*)</font>
                  </td>
                </tr>
                <tr bgcolor="#F4F7FA">
                  <td align="right">登录名：</td>
                  <td>
                    <input type="text" style="ime-mode:disabled" onkeydown="enterToTab()"  
                     id="loginName"  maxlength="30" name="loginName" size="20"/>
                    <font color="#FF0000">(*)</font>
                    <a href="#" onclick="check_loginname()">检测用户名是否可用</a>
                  </td>
                  <td align="right">用户姓名：</td>
                  <td>
                    <input type="text" onkeydown="enterToTab()"   maxlength="20" name="name" size="20"/>
                    <font color="#FF0000">(*)</font>
                  </td>
                </tr>
                <tr bgcolor="#F4F7FA">
                  <td align="right">密码：</td>
                  <td>
                    <input type="password" onkeydown="enterToTab()"   value="" maxlength="40" name="password" size="20"/>
                    <font color="#FF0000">(*)</font>
                  </td>
                  <td align="right">密码确认：</td>
                  <td>
                    <input type="password" onkeydown="enterToTab()"   value="" maxlength="40" name="password2" size="20"/>
                    <font color="#FF0000">(*)</font>
                  </td>
                </tr>
                <tr bgcolor="#F4F7FA">
                  <td align="right">办公电话：</td>
                  <td>
                    <input type="text" style="ime-mode:disabled" onkeydown="enterToTab()"   maxlength="20" name="workPhone" size="20"/>
                  </td>
                  <td align="right">移动电话：</td>
                  <td>
                    <input type="text" style="ime-mode:disabled" onkeydown="enterToTab()"   maxlength="20" name="mobilePhone" size="20"/>
                  </td>
                </tr>
                <tr bgcolor="#F4F7FA">
                  <td align="right">电子邮件：</td>
                  <td>
                    <input type="text" style="ime-mode:disabled" onkeydown="enterToTab()"   maxlength="30" name="email" size="20"/>
                  </td>
                  <td align="right">性别：</td>
                  <td>
                  <select name="sex">
                  	<option value="1">男</option>
                  	<option value="0">女</option>
                  </select>
                  </td>
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
              <button style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; BORDER-LEFT: 0px; CURSOR: default; BORDER-BOTTOM: 0px; BACKGROUND-COLOR: transparent"  onClick="javascript:click_save()">
                <img src="images/save.gif" style="cursor:hand">
              </button>
            </td>
            <td align="center" width="50%">
              <button style="BORDER-RIGHT: 0px; BORDER-TOP: 0px; BORDER-LEFT: 0px; CURSOR: default; BORDER-BOTTOM: 0px; BACKGROUND-COLOR: transparent"  onClick="javascript:window.history.back()">
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
