<%@ page language="java" import="java.util.*" 
contentType="text/html; charset=GBK" pageEncoding="gb2312"%>
<%@ taglib uri="/struts-tags"  prefix="s"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<title>登录</title>
<link href="css/ziti.css" rel="stylesheet" type="text/css">
</head>
<script type="text/javascript" src="js/zfwl.js"></script>
<script type="text/javascript">
function login()
{
  if(!ChkText(document.loginActionForm.loginName,"用户名不能为空")) {
    document.loginActionForm.loginname.focus()
    return;
  }
  if(!ChkText(document.loginActionForm.password,"密码不能为空")) {
    document.loginActionForm.password.focus()
    return;
  }
  if (document.loginActionForm.logining.value == "true") {
    document.all.tips.innerHTML="已经在登录,请稍候...";
    return;
  }
  else {
    document.loginActionForm.logining.value = "true";
    document.all.tips.innerHTML="正在登录,请稍候....";
  }
  document.loginActionForm.submit();
}
function keyenter()
{
    var charCode = (navigator.appName=="Netscape")? event.which:event.keyCode;
    if (charCode==13) {
      login();
    }
}
function myreset()
{
  document.loginActionForm.reset();
  document.loginActionForm.loginname.focus();
  return;
}
</script>

<body bgcolor="#E1E1E1" onLoad="document.loginActionForm.loginname.focus()">
<font color="red" >
   <s:actionerror/>
</font>
<form action="user_login.action" method="post" name="loginActionForm">
<input type="hidden" value="false" name="logining"/>
<table width="75%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td colspan="2">&nbsp;</td>
  </tr>
  <tr>
    <td colspan="2">&nbsp;</td>
  </tr>
  <tr>
    <td colspan="2">&nbsp;</td>
  </tr>
  <tr>
    <td colspan="2">&nbsp;</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>
<table width="400" height="250" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td colspan="3" valign="bottom" background="images/beijing.jpg">
<table border="0" align="center" cellpadding="0" cellspacing="0" class="a9">
        <tr>
          <td id="tips" colspan="2">
          </td>
        </tr>
        <tr align="center">
          <td height="15"><font color="#000000">用户名：</font></td>
          <td height="15">
            <input type="text" name="loginName" size="15" onkeydown="enterToTab()"/></td>
        </tr>
        <tr align="center">
          <td height="15"><img src="images/kongbai.gif" width="1" height="13"></td>
          <td><img src="images/kongbai.gif" width="1" height="13"></td>
        </tr>
        <tr align="center">
          <td height="15"><font color="#000000">密&nbsp;&nbsp;码：</font></td>
          <td height="15">
              <input type="password" name="password" onkeydown="keyenter()" size="15"/>
          </td>
        </tr>
        <tr>
          <td height="13"><img src="images/kongbai.gif" width="1" height="13"></td>
          <td height="13"><img src="images/kongbai.gif" width="1" height="13"></td>
        </tr>
        <tr align="center">
          <td><img src="images/anniu-denglu.gif" width="52" height="21" onclick="login()"></td>
          <td><img src="images/anniu-chongzhi.gif" width="52" height="21" onclick="myreset()"></td>
        </tr>
        <tr>
          <td height="18">&nbsp;</td>
          <td height="18">&nbsp;</td>
        </tr>
        <tr align="center">
          <td height="24" colspan="2"><font color="#C2C2C2" size="2"></font></td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</form>
</body>
</html>
