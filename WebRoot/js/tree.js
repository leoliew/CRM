//������ڵ�ĺ���
function loadtree(){
	//����dwr��ͬ���������Ͳ�������첽����������ˣ�
	dwr.engine.setAsync(false);
	BasicModel.getRootChilren(treecallback);	
}	

function treecallback(res){
	var bf = "<img src='images/tubiao02.gif'/><label>ͨ������ƽ̨</label><br>";
	for(var i = 0; i < res.length; i++){
		//alert(res[i].pid+"-"+res[i].ppid+"-"+res[i].content);
		//��������ͼƬ
		bf += "&nbsp;<img id='img"+res[i].module_id+"'  src='images/plus.gif' onclick='getsubtree("+res[i].module_id+")'/><label id='"+res[i].module_id+"'>"+res[i].module_name+"</label></br>";
		//alert(bf);
		//ע�⣺<img/>û��ID����ô�ͻ������⣨ֻ�е�һ��img
		//����������
	}
	document.getElementById("root").innerHTML = bf;
}

var result = null;
function getsubtree(pid){
	element = document.getElementById(""+pid);
	//alert(element.id);
	//����pid�ҵ���Ӧ���ӽڵ�,��pid���ݹ�ȥ����
	BasicModel.getChildNodes(pid,childcallback);	
	dealres(pid);
}

var childnode_bool;

function dealres(pid){
	var bf = "";
	//�õ�pid�µ��ӽڵ㣬���ӽڵ���ʾ����
	//�����ID�����ӽڵ㣬��ô�Ϳ��Լ���չ��
	for(var i = 0; i < result.length; i++){
		var node = result[i];
		//�жϸ�ID�Ƿ����ӽڵ�
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

//�õ����Է������ķ���ֵ
function childcallback(res){
	result = res;
	return;
}

function nodeHasChild(res){
	childnode_bool = res;
}

function showHide(pid){
	//�ı䵱ǰԪ�ص��¼�����
	var img = document.getElementById("img"+pid);
	img.src = "img/plus.gif";
	//�ı�
	img.onclick = function(){
								getsubtree(pid);
							}
	//------------------------------------
	var element = document.getElementById(""+pid);
	var subs = element.lastChild;
	subs.style.display="none";
}	