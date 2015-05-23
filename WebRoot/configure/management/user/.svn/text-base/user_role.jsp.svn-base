<%@page language="java" contentType="text/html; charset=UTF-8"%>
<%@ page isELIgnored="false"%>
<%@page import="com.crm.vo.TUser"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="/struts-tags"  prefix="s"%>
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
  //判断checkbox里面是否有选中
  var roles = document.getElementsByName("roles");
  var flag = false;
  for(var i = 0;i < roles.length;i++){
  	if(roles[i].checked == true){
  		flag = true;
  		break;
  	}
  }
  if(flag == true){
  	form.action = inputAction + "!authorization"+ suffix +"?action=1";
    form.submit( );
  }else{
  	alert("你还没有选择权限!");
  }	
 }
 
 
  </script><html>
  <head>
  <title>用户授权</title>
  <script src="js/cssjs.js" type="text/javascript"></script>
  <script src="js/zfwl.js" type="text/javascript"></script>
  <link href="css/zfwl.css" type="text/css" rel="STYLESHEET">

  </head>
  <body vlink=#000000 alink=#000000 link=#000000 bgColor=#ffffff>
  <!-- 栏目添加部分开始 -->
  <form action="userManagerAction.do" method="post" name="userManagerActionForm">
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
              <b>用户管理</b>
              &nbsp;&nbsp;
              <span class="bg-neg-alert">&raquo;</span>
              &nbsp;&nbsp;
              <b>用户信息</b>
              &nbsp;&nbsp;
              <span class="bg-neg-alert">&raquo;</span>
              &nbsp;&nbsp;
              用户授权
              </font>
            </td>
            <td class=TabSpacer></td>
            <td class=TabCell>&nbsp;</td>
            <td class=TabSpacer>=</td>
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
            <b >用户信息</b>
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
                        <td align="right" width="20%">所在部门：</td>
                        <td width="30%">
                        	${requestScope.authorization_user.tDept.deptName}
                        </td>
                        <td align="right" width="20%">用户工号：</td>
                        <td width="30%">
                        ${requestScope.authorization_user.workNo}
                        <input type="hidden"  name="userId" value="${requestScope.authorization_user.userId}">
                        </td>
                      </tr>
                      <tr bgcolor="#F4F7FA">
                        <td align="right">登录名：</td>
                        <td>
                        ${requestScope.authorization_user.loginName}
                        </td>
                        <td align="right">用户姓名：</td>
                        <td>
                        ${requestScope.authorization_user.name}
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
    <table class=SectionBlcokBackground>
      <tr>
        <td >
          <font class="beta" size="2">
            <b >授权角色</b>
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
                    <td>
                    	<!-- 如果用户已经赋予权限，进来的时候权限要勾上 -->
                    	<c:forEach items="${requestScope.allRoleList}" var="role">
                    		<c:choose>
                    			<c:when test="${role.isCheck==1}">
                    				<input  type="checkbox" name="roles" value="${role.roleId}" checked="checked">${role.roleName}
                    			</c:when>
                    			<c:otherwise>
                    				<input  type="checkbox" name="roles" value="${role.roleId}">${role.roleName}
                    			</c:otherwise>
                    		</c:choose>
                    	</c:forEach>
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
                    	