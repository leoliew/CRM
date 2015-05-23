 /**
 *objNmae: Select 对象的名称
 ×url    : cust_sel.jsp的路径，可以为空
 */
function showSelCust(objName,type,custId,title,url) {

       var toObj=document.all(objName);

	var openURL = "/zhifawuliu/management/cust_sel.jsp";
        if(url!=null){
          openURL=url;
        }
	var dialogWidth = 250;
	var dialogHeight = 300;



	var top = event.screenY + 10;
	var left = event.screenX;
	if((left + dialogWidth) > screen.availWidth) left -= dialogWidth;
	if((top + dialogHeight) > screen.availHeight) top -= dialogHeight;


	var paramArray = new Array( toObj, type,custId,title);

	if(window.showModalDialog) {
		var returnVal = showModalDialog(openURL,paramArray,"dialogWidth:" + dialogWidth + "px;dialogHeight:" + dialogHeight + "px;dialogTop:" + top +"px;dialogLeft:" + left + "px;help:no;center:no;status:no;");
	}
	else {
		alert("你的浏览器版本不支持该脚本!");
	}
}
