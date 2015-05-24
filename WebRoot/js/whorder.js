//返回订单列表
function showCustAddr(custid){

  var form=this.getForm();
  var op=document.all.lbcustId.options;
  var text=op[op.selectedIndex].text;
  //document.all("custName").value=text;
  var req=new X_XMLHttpRequestt(getCustaddr);
  var url="./wh_getcustaddr.jsp?custId="+document.all("custId").value;
  req=req.get(url);
}

function getCustaddr(req){
     strvalue=req.responseText;
     tempArray = strvalue.Trim().split(";");
     document.all("custAddr").value=tempArray[0];
     document.all("custOperator").value=tempArray[1];
     document.all("conTel").value=tempArray[2];
     document.all("conMobile").value=tempArray[3];
     document.getElementById("lbcustAddress").innerHTML =tempArray[0];
}


function getGoodsUnit(req){
     strvalue=req.responseText;   
	cellid = "goods_unit";//单位	
        str = "<select class='form-text' disabled id="+cellid+" name="+cellid +" >";
        str=str+strvalue.Trim();
	str=str+"</select><input type='hidden' name='unit_id' id='unit_id' value=''>";
        currrow.cells(3).innerHTML = str; 
        currrow.cells(3).all('goods_unit').options.selectedIndex=0;        
        currrow.cells(3).all('unit_id').value=currrow.cells(3).all('goods_unit').value;
            
}

//取客服代表
function getCustagent(req){
     strvalue=req.responseText;   
        str = "<select name='kfId'>";
        str=str+strvalue.Trim();
	str=str+"</select>";
        document.all("custagent").innerHTML = str;     
}


function showselectcust(val){
    buffobj.remoteCall("OrderFacade.getCustbyID",[val], function(reply) {
        cust=reply.getResult();        
        $("lbcustId").value=cust.custName;
        $("custId").value=cust.custId;
        $("custOperator").value=cust.linkman;
        $("custAddr").value=cust.address;
        $("conTel").value=cust.workPhone;
        $("conMobile").value=cust.mobilePhone;
        var agentrep=new X_XMLHttpRequestt(getCustagent);   
        agentrep=agentrep.get("./wh_getcustagent.jsp?custId="+document.all("custId").value);       
       });
}

function DelCargo_Onclick()
{
	var bDelete;
	var oTable;
	var oDelete;
	var i=0;
	var selectnumber=0;
	var j=0;

	oTable=document.all("CargoDetail");
	for(i=1;i<oTable.rows.length;i++)
	{
	    if (oTable.rows(i).cells(0).all("DelID").checked)
		   selectnumber++;
	}
	if (selectnumber==0 || !window.confirm("确认删除所选货物信息？") )
	   return;
	for(i=0;i<selectnumber;i++)
	  for(j=1;j<oTable.rows.length;j++)
	    if (oTable.rows(j).cells(0).all("DelID").checked)
		   oTable.deleteRow(j);

}

function SelectAll_OnChange(checkbox)
{
    var i=0;
    if (checkbox.checked)
	   for(i=1;i<document.all("CargoDetail").rows.length;i++)
	     document.all("CargoDetail").rows(i).cells(0).all("DelID").checked=true;
	else
	   for(i=1;i<document.all("CargoDetail").rows.length;i++)
	     document.all("CargoDetail").rows(i).cells(0).all("DelID").checked=false;
}


function showselectgoods(val,txtbox){
    var rObj = txtbox.parentElement.parentElement;
    var goods_id;
    var unit_wt;
    var currrow=rObj;
    rObj.cells(1).all('goods_id').value=val; 
    rObj.cells(1).all('goods_name').innerHTML=val; 
    rObj.cells(2).all('goods_no').value=txtbox.value; 
    buffobj.remoteCall("OrderUtilFacade.getGoodsbyId",[val], function(reply) {
        var goods=reply.getResult();        
        rObj.cells(1).all('goods_name').innerHTML=goods.goodsName; 
        rObj.cells(2).all('goods_no').value=goods.goodsNo; 
        txtbox.value=goods.goodsNo; 
        var req=new X_XMLHttpRequestt(getGoodsUnit);
        var url="./wh_getgoodsunit.jsp?cust_Id="+document.all("custId").value+"&goods_id="+val;
        req=req.get(url);                     

       });
           

}

function cleargoodsno(edt){
   edt.value="";
   var rObj = edt.parentElement.parentElement;
   rObj.cells(2).all('goods_no').value="";
   return;   
}	   

function clearcust(edt){
   edt.value="";
   document.all("custId").value="";
}	   

// 名称:全替换函数
// 功能:把指定的文本中的所有的指定的旧字符替换成指定的新字符
// 返回:已经替换的文本
// 参数:text 指定的文本
//        replacement 指定的旧字符
//        target 指定的新字符

function replaceAll(text,replacement,target){
        if(text==null || text=="") return text;
        if(replacement==null || replacement=="") return text;
        if(target==null) target="";
        var returnString="";
        var index=text.indexOf(replacement);
        while(index!=-1){
                if(index!=0) returnString+=text.substring(0,index)+target;
                text=text.substring(index+replacement.length);
                index=text.indexOf(replacement);
        }
        if(text!="") returnString+=text;
        return returnString;
}


function createCargoRow(values)
{
	var tblProductBody;
	var str;
	
	tblProductBody = document.all("CargoDetail");
	myrow = tblProductBody.insertRow(-1);
	myrow.bgColor="#F4F7FA";
	currrow=myrow;

 	cellid = "SelectCell";
	mycol = myrow.insertCell();
	mycol.align="center";
	str = "<input name='DelID' type='checkbox' value='1'>";
	mycol.innerHTML = str;

	var edtid="goods_no"+detailid;
	cellid = "goods_id";//商品
	mycol = myrow.insertCell();
	mycol.align = "center";
	if (values[13]!=""){
          str="<a id='goods_name'>"+values[13]+" </a>";		  
        }else{	
	  str="<a id='goods_name'> </a>";
        }
	str = str+"<input type='hidden'  class='form-text' size='15' id='"+cellid+"' name="+cellid+" value='"+values[2]+"'  >";
	
	mycol.innerHTML = str;
	if (values[1]!=""){
	   mycol.all(cellid).value=values[1];
	}

	cellid = "goods_no";//料号
	
	mycol = myrow.insertCell();
	mycol.align = "center";
	str = "<input type='text'  class='form-text' size='15' id='"+edtid+"' name="+edtid+" value='"+values[2]+"' onChange='cleargoodsno(this)'  >";
	str =str+ "<input type='hidden'  size='15' id='"+cellid+"' name="+cellid+" value='"+values[2]+"' >";
	mycol.innerHTML = str;
        
        

	cellid = "goods_unit";//单位
	mycol = myrow.insertCell();
	mycol.align = "center";
	//str = "<input type='text' style='width:100%;font-size:11px' maxlength='3' class='form-text' id="+cellid+" name="+cellid+" value="+values[3]+">";
        str = "<select  class='form-text'  disabled id='"+cellid+"' name='"+cellid+"' value='"+values[3]+"' >";
        str=str+strGoodsUnitOption;
	str=str+"</select><input type='hidden' name='unit_id' id='unit_id' value="+values[3]+" >";
	mycol.innerHTML = str;
	if (values[3]!=""){
	   mycol.all(cellid).value=values[3];
	   mycol.all("unit_id").value=values[3];
	}
	
	cellid = "unit_price";//单价
	mycol = myrow.insertCell();
	mycol.align = "center";
	str = "<input type='text' style='width:100%;font-size:11px;ime-mode:disabled' maxlength='10' onkeydown='NumericOnly()'  style='ime-mode:disabled' class='form-text' id="+cellid+" name="+cellid+" value="+values[4]+">";
	mycol.innerHTML = str;

	cellid = "length";//长
	mycol = myrow.insertCell();
	mycol.align="center";
	str = "<input type='text' style='width:100%;font-size:11px;ime-mode:disabled' maxlength='10' onkeydown='NumericOnly()'  onBlur='sumV(this);' style='ime-mode:disabled' class='form-text' id="+cellid+" name="+cellid+"   value="+values[5]+" >";
	mycol.innerHTML = str;

	cellid = "width";//宽
	mycol = myrow.insertCell();
	mycol.align="center";
	str = "<input type='text' style='width:100%;font-size:11px;ime-mode:disabled' maxlength='10' onkeydown='NumericOnly()'   onBlur='sumV(this);' style='ime-mode:disabled' class='form-text' id="+cellid+" name="+cellid+" value="+values[6]+">";
	mycol.innerHTML = str;

	cellid = "height";//高
	mycol = myrow.insertCell();
	mycol.align="center";
	str = "<input type='text' style='width:100%;font-size:11px;ime-mode:disabled' maxlength='10' onkeydown='NumericOnly()'   onBlur='sumV(this);' style='ime-mode:disabled' class='form-text' id="+cellid+" name="+cellid+"  value="+values[7]+">";
	mycol.innerHTML = str;


        cellid = "unit_wt";//单位重量
        mycol = myrow.insertCell();
        mycol.align="center";
        str = "<input type='text'  style='width:100%;font-size:11px;ime-mode:disabled' maxlength='10' onkeydown='NumericOnly()'  onBlur='sumWeight(this);' class='form-text' id="+cellid+" name="+cellid+"  value="+values[9]+">";
	mycol.innerHTML = str;

        cellid = "num";//数量
        mycol = myrow.insertCell();
        mycol.align="center";
        str = "<input type='text' style='width:100%;font-size:11px;ime-mode:disabled' maxlength='10' onkeydown='NumOnly()'   onBlur='sumWeight(this);sumV(this);' style='ime-mode:disabled' class='form-text' id="+cellid+" name="+cellid+"  value="+values[10]+">";
	mycol.innerHTML = str;

	cellid = "vol_num";//体积
	mycol = myrow.insertCell();
	mycol.align = "center";
	str = "<input type='text' style='width:100%;font-size:11px;ime-mode:disabled' maxlength='10' onkeydown='NumericOnly()'  style='ime-mode:disabled' class='form-text' id="+cellid+" name="+cellid+" value="+values[8]+">";
	mycol.innerHTML = str;

	cellid = "total_wt";//总重量
	mycol = myrow.insertCell();
	mycol.align = "center";
	str = "<input type='text' style='width:100%;font-size:11px;ime-mode:disabled' maxlength='10' onkeydown='NumOnly()' style='ime-mode:disabled' class='form-text' id="+cellid+" name="+cellid+"  value="+values[11]+">";
	mycol.innerHTML = str;

	cellid = "remark2";//备注
	mycol = myrow.insertCell();
	mycol.align = "center";
	str = "<input type='text' style='width:100%;font-size:11px' maxlength='199' class='form-text' id="+cellid+" name="+cellid+" value="+values[12]+">";
	mycol.innerHTML = str;
	
//根据输入的代码显示对应的料号、商品
	var aa = new AutoAssist("goods_no"+detailid, function() {
	    var  url= "./wh_goods_sel_list.jsp?goodsNo=%25"+this.txtBox.value+"%25&custId="+$("custId").value;
		return url;
	});
	aa.defaultproc=false;
	aa.custproc=showselectgoods;
	detailid=detailid+1;
}


function sumV(obj)  //根据长宽高计算体积
{
    var rObj = window.event.srcElement.parentElement.parentElement;
    var length;
    var width;
    var height;
    var num;
    length=rObj.cells(5).all('length').value;
    width=rObj.cells(6).all('width').value;
    height=rObj.cells(7).all('height').value;
    num=rObj.cells(9).all('num').value;

    if (length==null||length=="") {length=0;}
    if (width==null||width=="") {width=0;}
    if (height==null||height=="") {height=0;}
    if (num==null||num=="") {num=0;}
    var v=length*width*height*num;
    rObj.cells(10).all('vol_num').value=v;
}

function  sumWeight(obj)  //计算总重量
{
    var rObj = window.event.srcElement.parentElement.parentElement;
    var num;
    var unit_wt;
    num=rObj.cells(9).all('num').value;
    unit_wt=rObj.cells(8).all('unit_wt').value;

    if (num==null||num=="") {num=0;}
    if (unit_wt==null||unit_wt=="") {unit_wt=0;}
    var v=num*unit_wt;
    rObj.cells(11).all('total_wt').value=v;
}

function checkForm(form){
  var checked=true;
  var id;
  var msg="";

  if (document.all("custId").value==""||document.all("custId").value==null){
    alert("请选择客户.");
    return false;
  }
  if (document.all("custPlanNo").value==""||document.all("custPlanNo").value==null){
    alert("请输入客户运单号.");
    return false;
  }
  if (document.all("arriveDate").value==""||document.all("arriveDate").value==null){
    alert("请输入到货时间.");
    return false;
  }
  if (document.all("orderTime").value==""||document.all("orderTime").value==null){
    alert("请输入下单时间.");
    return false;
  }
  for(var i=1;i<document.all("CargoDetail").rows.length;i++){
    var tmp=document.all("CargoDetail").rows(i).cells(1).all("goods_id").value;
      if(tmp=="" || tmp==null) {
        checked=false;
        msg="请指定该客户相应的货物信息";
      }
    var num=document.all("CargoDetail").rows(i).cells(9).all('num').value;   
      if(num=="" || num==null) {
        checked=false;
        msg="请输入货物数量";
      }else if (num<=0){
        checked=false;
        msg="货物数量应该大于零";      	  
      }	
   /*   
    var volnum=document.all("CargoDetail").rows(i).cells(10).all('vol_num').value;   
    var wtnum=document.all("CargoDetail").rows(i).cells(11).all('total_wt').value;   
      if ((volnum=="" || volnum==null)&&(wtnum=="" || wtnum==null)) {
        checked=false;
        msg="请输入货物重量或体积";
      }else if ((volnum<=0)&&(wtnum<=0)){
        checked=false;
        msg="货物重量或体积应该大于零";      	  
      }	
      */
    //tmp=document.all("CargoDetail").rows(i).cells(2).all("goods_no").value;
    //  if(tmp=="" || tmp==null) {
    //    checked=false;
    //    msg="请输入货物的料号";
    //  }
  }
  if(checked==false) {
    alert(msg);
    return false;
  }
 if (document.all("kfId").value==null || document.all("kfId").value==""){
     alert("客户还没有指定'下单客服',请指定");
     document.all("kfId").focus;
     return false;
  }
  return true;

}