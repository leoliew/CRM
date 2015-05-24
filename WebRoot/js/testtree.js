 d = new dTree('d');    
   //id:当前节点标识, pid:父节点标识, name:当前节点名字, 
   //url:当菜单被点击时响应的超链接, title:提示语,     
	//target:在目标窗口打开链接
        d.add(0,-1,'通用配置平台');    
        d.add(1,0,'综合管理','result.jsp');       
        d.add(2,1,'模块管理','result.jsp');  
        d.add(3,1,'岗位管理','result.jsp');    
        d.add(4,1,'角色管理','result.jsp');    
        d.add(5,1,'部门管理','result.jsp');       
        d.add(5,1,'用户管理','result.jsp');      
   
        document.write(d); 