<%@page contentType="text/html; charset=GBK" import="com.crm.vo.*"%>
<%@ page isELIgnored="false"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
  <title>无标题文档</title>
</head>
<STYLE>A {
FONT-SIZE: 12px; COLOR: #FFFFFF; FONT-FAMILY: Tahoma, Verdana; TEXT-DECORATION: none
}
A:link {
FONT-SIZE: 12px; COLOR: #FFFFFF; FONT-FAMILY: Tahoma, Verdana; TEXT-DECORATION: none
}
A:visited {
FONT-SIZE: 12px; COLOR: #FFFFFF; FONT-FAMILY: Tahoma, Verdana; TEXT-DECORATION: none
}
A:active {
FONT-SIZE: 12px; COLOR: #0FFFFFF; FONT-FAMILY: Tahoma, Verdana; TEXT-DECORATION: none
}
A:hover {
FONT-SIZE: 12px; COLOR: #FFFFFF; FONT-FAMILY: Tahoma, Verdana; TEXT-DECORATION: none
}
</STYLE>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<table width="100%" height="108" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td width="80%" align="center" valign="bottom" background="images/top-bg02.gif">
      <table width="769" height="108" border="0" cellpadding="0" cellspacing="0" background="images/top-bg1024.jpg">
        <tr>
          <td valign="bottom">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="742" align="right"><font color="#FFFFFF" size="2">
                  &nbsp;&nbsp;</font></td>
              </tr>
              <tr>
                <td height="58">&nbsp;</td>
              </tr>
              <tr class="beta">
                <td height="20" align="left" style="FONT-SIZE: 12px; COLOR: #FFFFFF; FONT-FAMILY: Tahoma, Verdana;">欢迎[${sessionScope.user.name}]使用,您所属部门是[${sessionScope.user.tDept.deptName} ]</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
    <td width="20%" background="images/top-bg02.gif">
      <font color="#FFFFFF" size="2">
        <img src="images/home.gif" width="15" height="13">
          <a href="logout.jsp" style="font-size:16px">退出</a> &nbsp;&nbsp;
    </td>
  </tr>
</table>
</body>
</html>
