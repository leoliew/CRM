//载入根节点的孩子
function loadtree(){
	//设置dwr的同步操作，就不会出现异步发生的情况了！
	dwr.engine.setAsync(false);
	BasicModel.getRootChilren(treecallback);	
}	

function treecallback(res){
	var bf = "<img src='images/tubiao02.gif'/><label>通用配置平台</label><br>";
	for(var i = 0; i < res.length; i++){
		//alert(res[i].pid+"-"+res[i].ppid+"-"+res[i].content);
		//创建几个图片
		bf += "&nbsp;<img id='img"+res[i].module_id+"'  src='images/plus.gif' onclick='getsubtree("+res[i].module_id+")'/><label id='"+res[i].module_id+"'>"+res[i].module_name+"</label></br>";
		//alert(bf);
		//注意：<img/>没有ID，这么就会有问题（只有第一个img
		//可以伸缩）
	}
	document.getElementById("root").innerHTML = bf;
}

var result = null;
function getsubtree(pid){
	element = document.getElementById(""+pid);
	//alert(element.id);
	//根据pid找到对应的子节点,把pid传递过去即可
	BasicModel.getChildNodes(pid,childcallback);	
	dealres(pid);
}

var childnode_bool;

function dealres(pid){
	var bf = "";
	//得到pid下的子节点，把子节点显示出来
	//如果该ID还有子节点，那么就可以继续展开
	for(var i = 0; i < result.length; i++){
		var node = result[i];
		//判断该ID是否还有子节点
		BasicModel.hasChildNodes(node.pid,nodeHasChild);
		if(childnode_bool){
			var my_ul = document.createElement("ul");
			bf += "<label id='"+node.pid+"'>"+node.content+"</label><img id='img"+node.pid+"' src='img/plus.gif' onclick='getsubtree("+node.pid+")'/><img src='img/folder.gif'/></br>";
			my_ul.innerHTML = bf;
		}else{
			var my_ul = document.createElement("ul");
			bf += "<label id='"+node.pid+"'>"+node.content+"</label></br>";
			my_ul.innerHTML = bf;
		}
	}
	var element = document.getElementById(""+pid);
	element.appendChild(my_ul);
	var img = document.getElementById("img"+pid);
	img.src = "img/minus.gif";
	img.onclick = function () {
								showHide(pid);
							  }; 
}

//得到来自服务器的返回值
function childcallback(res){
	result = res;
	return;
}

function nodeHasChild(res){
	childnode_bool = res;
}

function showHide(pid){
	//改变当前元素的事件属性
	var img = document.getElementById("img"+pid);
	img.src = "img/plus.gif";
	//改变
	img.onclick = function(){
								getsubtree(pid);
							}
	//------------------------------------
	var element = document.getElementById(""+pid);
	var subs = element.lastChild;
	subs.style.display="none";
}	