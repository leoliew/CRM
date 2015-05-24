/**＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 * 说明： 该类用于处理异步HttpXml请求
 * 注意： 该类未经全面测试
 *       zhangdongxiao@21cn.com 2006年3月
 ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝*/
        var x_common_doProcess;

        function X_XMLHttpRequestt(reqProcess){
             this.url="";
             this.http_request = false;

            this.init=x_init_http_request;

             x_common_doProcess=reqProcess;        //外部回调函数，该方法将回传XMLHttpRequest
             this.processRequest=x_processRequest; //内部过程方法
             this.get=x_send_request;              //GET方式请求调用
             this.post=x_post_request;             //POST方式请求调用
             this.close=x_http_request_close;

             this.inserInto=x_http_request_insertTo;
        }

	var http_request = false;
        function x_http_request_close(){
          if(this.http_request!=null){
            http_request.close();
           }
        }
        function x_init_http_request(){
		http_request = false;

		//开始初始化XMLHttpRequest对象
		if(window.XMLHttpRequest) { //Mozilla 浏览器
			this.http_request = new XMLHttpRequest();
			if (http_request.overrideMimeType) {//设置MiME类别
				http_request.overrideMimeType('text/xml');
			}
		}
		else if (window.ActiveXObject) { // IE浏览器

			try {
				http_request = new ActiveXObject("Msxml2.XMLHTTP");

                        } catch (e) {
                                alert("Error: "+e.getMessage);
				try {
					http_request = new ActiveXObject("Microsoft.XMLHTTP");
 				} catch (e) {
                                 alert(e.getMessage);
                                }
			}
		}else{
                   alert("不能识别的浏览器");
                }
		if (!http_request) { // 异常，创建对象实例失败
			window.alert("不能创建XMLHttpRequest对象实例.");
			return false;
		}
		http_request.onreadystatechange =this.processRequest;

        }

	function x_send_request(url) {//初始化、指定处理函数、发送请求的函数
                this.url=url;
                this.init();

		// 确定发送请求的方式和URL以及是否同步执行下段代码
		http_request.open("GET", url, true);
                http_request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		http_request.send(null);
	}

/**----------------------------------------------------------------------------
 *
 ----------------------------------------------------------------------------*/
      function x_post_request(url, parms,encoding){
                this.init();
                //var strPost="?";
                var i=0;
                for( i=0;i<parms.length;i++){
                  strPost=strPost+"&"+parms[i]+"="+document.all(parms[i]);
                }
                if(encoding!=null){
                  strPost=strPost+"&x_post_encoding="+encoding;
                }

		// 确定发送请求的方式和URL以及是否同步执行下段代码
                http_request.open("POST", url, true);
                http_request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		http_request.send(null);
      }

/**----------------------------------------------------------------------------
 *
 ----------------------------------------------------------------------------*/
    // 处理返回信息的函数
      function x_processRequest() {

         if (http_request.readyState == 4) { // 判断对象状态
            if (http_request.status == 200) { // 信息已经成功返回，开始处理信息]
                x_common_doProcess(http_request);
            } else { //页面不正常
                alert("您所请求的页面有错误！");
            }
        }
        else{
          // alert("Not ready!");
         }
      }

/**＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝*/
 function x_http_request(http_request){
         this.http_request=http_request;
         this.replaceAll=x_http_replaceAll;
         this.responseText=http_request.responseText;
         this.inserInto=x_http_request_insertTo;
 }
 function x_http_replaceAll(htmlTxt){
    var txt=htmlTxt;//this.http_request.responeText;
    var tmp=document.all("x_tmp_element");
    if(tmp==null){

      tmp=document.createElement("x_tmp_element");

      //document.appendChild(tmp);

    }
    tmp.innerHtml=txt;
    var items=tmp.all("ok");

    return alert(tmp.all.length);
    for(i=0;i<items.length;i++){
       var oldObj=document.all(items[i].tagNname) ;
       for(j=0;j<oldObj.length;j++){
          var tgObj=oldObj.items[i];
          if(tgObj.name==items[i].name){
             document.replaceChild(oldObj,items[i]);
          }

       }

    }
    tmp.innerHtml=null;
 }

function x_http_request_insertTo(name){
  var parent=document.all(name);
  if(parenr==null)alert("将结果数据插入页面失败：不存在的标识： "+name);
  parent.innerHTML=this.http_request.responseText;
}





