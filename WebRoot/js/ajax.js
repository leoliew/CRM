/**������������������������������������������������������������������������������������������������������������
 * ˵���� �������ڴ����첽HttpXml����
 * ע�⣺ ����δ��ȫ�����
 *       zhangdongxiao@21cn.com 2006��3��
 ������������������������������������������������������������������������������������������������������������*/
        var x_common_doProcess;

        function X_XMLHttpRequestt(reqProcess){
             this.url="";
             this.http_request = false;

            this.init=x_init_http_request;

             x_common_doProcess=reqProcess;        //�ⲿ�ص��������÷������ش�XMLHttpRequest
             this.processRequest=x_processRequest; //�ڲ����̷���
             this.get=x_send_request;              //GET��ʽ�������
             this.post=x_post_request;             //POST��ʽ�������
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

		//��ʼ��ʼ��XMLHttpRequest����
		if(window.XMLHttpRequest) { //Mozilla �����
			this.http_request = new XMLHttpRequest();
			if (http_request.overrideMimeType) {//����MiME���
				http_request.overrideMimeType('text/xml');
			}
		}
		else if (window.ActiveXObject) { // IE�����

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
                   alert("����ʶ��������");
                }
		if (!http_request) { // �쳣����������ʵ��ʧ��
			window.alert("���ܴ���XMLHttpRequest����ʵ��.");
			return false;
		}
		http_request.onreadystatechange =this.processRequest;

        }

	function x_send_request(url) {//��ʼ����ָ������������������ĺ���
                this.url=url;
                this.init();

		// ȷ����������ķ�ʽ��URL�Լ��Ƿ�ͬ��ִ���¶δ���
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

		// ȷ����������ķ�ʽ��URL�Լ��Ƿ�ͬ��ִ���¶δ���
                http_request.open("POST", url, true);
                http_request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		http_request.send(null);
      }

/**----------------------------------------------------------------------------
 *
 ----------------------------------------------------------------------------*/
    // ��������Ϣ�ĺ���
      function x_processRequest() {

         if (http_request.readyState == 4) { // �ж϶���״̬
            if (http_request.status == 200) { // ��Ϣ�Ѿ��ɹ����أ���ʼ������Ϣ]
                x_common_doProcess(http_request);
            } else { //ҳ�治����
                alert("���������ҳ���д���");
            }
        }
        else{
          // alert("Not ready!");
         }
      }

/**������������������������������������������������������������������������������������������������������������
 ������������������������������������������������������������������������������������������������������������*/
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
  if(parenr==null)alert("��������ݲ���ҳ��ʧ�ܣ������ڵı�ʶ�� "+name);
  parent.innerHTML=this.http_request.responseText;
}





