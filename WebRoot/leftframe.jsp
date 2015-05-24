<%@ page language="java" import="java.util.*,com.crm.vo.*" pageEncoding="gb2312"%>
<%@ page isELIgnored="false"%>

<html>
	<head>
		<title>menu</title>
		<!--引入自定义js-->
		<script language="javascript" src="js/tree.js"></script>
		<link rel="StyleSheet" href="js/dtree.css" type="text/css" />   
	<script type="text/javascript" src="js/dtree.js"></script>   
	
	<script type="text/javascript">
		function navigate(url){
			if(url!=null && url!='null' && url!=''){
			//按传进来的url提交
				document.actionform.action=url;
				document.actionform.submit();
			}else{
				alert("请求路径不合法!");
			}
		}
	</script>
	</head>
	<body bgcolor="#CCCCFF">
	
	 <form action="userManagerAction!list.action" name="actionform" method="post" target="fraRightFrame"></form>
		<script language="javascript" src="data/${sessionScope.user.userId}.js"></script>
	</body>
</html>