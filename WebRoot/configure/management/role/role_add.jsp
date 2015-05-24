<%@page language="java" contentType="text/html; charset=UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<script language=javascript type="text/javascript">
var formName="roleManagerActionForm";
var inputAction ="roleManagerAction";
var suffix = ".action";

//查找消息
function getForm(){
  var form=document.all(formName);
  return form;
}

//保存
function click_save(){
  var form=getForm();
  if(!ChkText(form.roleName,"角色名字不能为空")) {
    form.roleName.focus()
    return;
  }
  form.action = inputAction + "!add" + suffix + "?action=1";
  form.submit( );

}

</script><html>
<head>
<title>增加角色</title>
<script src="js/cssjs.js" type="text/javascript"></script>
<script src="js/zfwl.js" type="text/javascript"></script>
  <link href="css/zfwl.css" type="text/css" rel="STYLESHEET">
 
</head>
<body vlink=#000000 alink=#000000 link=#000000 bgColor=#ffffff onLoad="document.roleManagerActionForm.roleName.focus()">
  <!-- 栏目添加部分开始 -->
  <form action="roleManagerAction.do" method="post" name="roleManagerActionForm">
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
                <b>角色管理</b>
                &nbsp;&nbsp;
                <span class="bg-neg-alert">&raquo;</span>
                &nbsp;&nbsp;
                <b>角色信息</b>
                &nbsp;&nbsp;
                <span class="bg-neg-alert">&raquo;</span>
                &nbsp;&nbsp;
                增加角色
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
			     <b>角色信息</b>
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
					  <td align="right" width="20%">角色名称：</td>
					  <td width="30%">
					 <input type="text"  maxlength="20" name="roleName" onkeydown="enterToTab()" size="20"/><font color="#FF0000">(必填)</font>
					  </td>
					  </tr>
					  <tr bgcolor="#F4F7FA">
					  <td align="right" width="20%">角色说明：</td>
					  <td width="30%">
					  <input type="text" maxlength="100" name="roleDesc" size="50"/>
					  </td>
					</tr>	
					<tr bgcolor="#F4F7FA">
                    <td align="right">状态：</td>
                    <td>
	                    <select name="status">
	                    	<option value="1">正常</option>
	                    	<option value="0">挂起</option>
	                    </select>
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
