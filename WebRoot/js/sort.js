/**
 * 无限级联动选择菜单类
 * _storeValueObjName:存放选择项值的页面元素名称
 * _showSelectObjName:显示该菜单的页面元素名称
 * _sortArr:显示菜单所需的数组，格式如下
 * arrSorts[0] = ["类别ID1", "类别一", "父类ID1", "深度1"];
 * arrSorts[1] = ["类别ID2", "类别二", "父类ID2", "深度2"];
 *
 * @author zxub 2005-8-23
 */
function sortMenu(_storeValueObjName, _sortArr, _selectArr,_firstLevel,_initValue)
{
    this.storeValueObj=document.getElementById(_storeValueObjName);
    this.sortArr=_sortArr;
    this.selectArr=_selectArr;
    this.maxDepth=_selectArr.length;
	this.firstLevel = _firstLevel;
	this.initValue = _initValue;


 /**
  * 获取第一层分类，并显示在showSelectObj中
  * _sortMenuObj:sortMenu的实例对象，指向自己
  */
 this.initSorts=function(_sortMenuObj)
 {
	    /*
        for (i=1;i<this.maxDepth;i++)
        {
            document.getElementById(this.selectArr[i]).style.display="none";
        }
		*/
      
		for (i=0;i<this.maxDepth;i++)
        {
			if ((i>this.firstLevel-1 && this.initValue==0) || i<this.firstLevel-1)
			    document.getElementById(this.selectArr[i]).style.display="none";
			else
			   document.getElementById(this.selectArr[i]).style.display="";
        }
		
        this.storeValueObj.value=0;
        //_select=document.getElementById(this.selectArr[0]);
		_select=document.getElementById(this.selectArr[this.firstLevel-1]);
        _select.sortMenuObj=_sortMenuObj;
        _select.onchange=function()
        {
            this.sortMenuObj.setSorts(this,this.sortMenuObj);
        }
        _select.add(new Option("请选择...",""));
        for (var i = 0; i < this.sortArr.length; i++)
	    {
		   //if (this.sortArr[i][2] == 0)
		   if (this.sortArr[i][2] == this.firstLevel-1)
		   {
			   var op = new Option(this.sortArr[i][1],this.sortArr[i][0]);			   
				_select.add(op);
				if (this.firstLevel<this.initValue.length && this.sortArr[i][0]==_sortMenuObj.initValue[this.firstLevel-1])
			       op.selected = true; 				   
		   }
        }
        //_select.depth=1;
		_select.depth = this.firstLevel;
		if (this.initValue.length!=0)
			for(var i = this.firstLevel-1;i<this.maxDepth;i++)
			{
				var tmp = document.getElementById(this.selectArr[i]);
				tmp.onchange();
			}

 }

    this.getSelectIndex=function(_selectName)
    {

        _index=null;
        for (i=0;i<this.maxDepth;i++)
        {
            if (this.selectArr[i]==_selectName)
            {
                _index=i;
                break;
            }
        }
        return _index;

    }

 /**
  * 下拉框联动
  * _curSelect:当前选择的下拉框
     * _sortMenuObj:sortMenu的实例对象，指向自己
  */
 this.setSorts=function(_curSelect,_sortMenuObj)
 {
        //若当前下拉框后面还有下拉框，即有下级下拉框时，清除下级下拉框，在后面会重新生成下级部分
      for (i=_curSelect.depth;i<this.maxDepth;i++)
      {
		  _select=document.getElementById(this.selectArr[i]);
		  if (_sortMenuObj.initValue.length==0)
		  {			  
			  _select.style.display="none";
		  }
		  
		  while(_select.length>0)
		  _select.remove(0);
      }

		
        //获取当前选项的值
	  
	  _iValue = _curSelect.options[_curSelect.selectedIndex].value;
	  
	  //如果选择的是下拉框第一项(第一项的值为"")
	  if (_iValue == "")
	  {            
	   //若存在上级下拉框
		   if (_curSelect.depth>1)
		   {
				_parent=document.getElementById(this.selectArr[_curSelect.depth-2]);
			//取值为上级下拉框选中值
				this.storeValueObj.value = _parent.options[_parent.selectedIndex].value;
		   }
		   else
		   {
				//没上级则取值为0
				this.storeValueObj.value = 0;
		   }            
		   //选择第一项(请选择...),没有下级选项,所以要返回            
		   return false;
	  }

	  //选择的不是第一项
	  this.storeValueObj.value = _iValue;
	  if (_curSelect.depth==_sortMenuObj.maxDepth)
	  {
		  return false;
	  }
	  //去掉当前下拉框原来的选择状态
      //将选中的选项对应代码更改为 selected
	  for (i=0;i<_curSelect.options.length;i++)
	  {
		   if (_curSelect.options[i].selected=="selected")
		   {
				_curSelect.options[i].removeAttribute("selected");
		   }
		   if (_curSelect.options[i].value==_iValue)
		   {
				_curSelect.options[i].selected="selected";
		   }
	  }
        //新生成的下级下拉列表
        _hasChild=false;
        for (var i = 0; i < this.sortArr.length; i++)
  {
            if (this.sortArr[i][2] == _iValue)
            {
                if (_hasChild==false)
                {
                    _siblingSelect=document.getElementById(this.selectArr[_curSelect.depth]);
                    _siblingSelect.sortMenuObj=_sortMenuObj;
                    _siblingSelect.style.display="";
                    _siblingSelect.depth=parseInt(_curSelect.depth)+1;
                    _siblingSelect.onchange=function()
                    {
                        this.sortMenuObj.setSorts(this,this.sortMenuObj);
                    }
                    _siblingSelect.add(new Option("请选择...",""));
					//_siblingSelect.add(new Option(this.sortArr[i][1],this.sortArr[i][0]));
					var op = new Option(this.sortArr[i][1],this.sortArr[i][0]);
					_siblingSelect.add(op);
					if (_curSelect.depth<_sortMenuObj.initValue.length && this.sortArr[i][0]==_sortMenuObj.initValue[_curSelect.depth])
					   op.selected = true;
                    _hasChild=true;
                }
                else
                { 
				    var op = new Option(this.sortArr[i][1],this.sortArr[i][0]);
					_siblingSelect.add(op);
					if (_curSelect.depth<_sortMenuObj.initValue.length && this.sortArr[i][0]==_sortMenuObj.initValue[_curSelect.depth])
					   op.selected = true;
                }
            }
        }
 }

 /**
  * 根据最小类选取值生成整个联动菜单,由后往前递归完成
  * _minCataValue:最小类的取值
     * _sortMenuObj:sortMenu的实例对象，指向自己
  */
    this.hideChildInNewInit=false;
 this.newInit=function(_minCataValue,_sortMenuObj)
 {
        if (this.storeValueObj.value=="undefined" || this.storeValueObj.value=="")
        {
            this.storeValueObj.value=_minCataValue;
        }
  if (_minCataValue == 0)
  {
   //minCataValue为0，也就是初始化了
   this.initSorts(_sortMenuObj);
   //初始化完成后，退出函数
   return false;
  }
        //父级ID
  _parentID=null;
        _depth=null;
        for (var i = 0; i < this.sortArr.length; i++)
  {
   if (_minCataValue == this.sortArr[i][0])
   {
                _depth=this.sortArr[i][3];
    _parentID = this.sortArr[i][2];
    break;
   }
  }
        if (!this.hideChildInNewInit)
        {
            for (i=_depth;i<this.maxDepth;i++)
            {
                document.getElementById(this.selectArr[i]).style.display="none";
            }
            this.hideChildInNewInit=true;
        }        
        if (_depth>this.maxDepth)
        {
            alert("下拉框只能构成"+this.maxDepth+"级关系，而当前值处于第"+_depth+"级关系中!");
            alert("初始化下拉框为原始状态");
            this.initSorts(_sortMenuObj);
            return false;
        }
  _select=document.getElementById(this.selectArr[_depth-1]);
        _select.depth=_depth;
        _select.sortMenuObj=_sortMenuObj;
        _select.onchange=function()
        {
            this.sortMenuObj.setSorts(this,this.sortMenuObj);
        }
        _select.add(new Option("请选择...","")); 
  
  for (var i = 0; i < this.sortArr.length; i++)
  {
   if (this.sortArr[i][2] == _parentID)
   {
    if (this.sortArr[i][0] == _minCataValue)
    {
                    _opt=new Option(this.sortArr[i][1],this.sortArr[i][0]); 
                    _select.add(_opt);
                    _opt.selected="selected";
    }
    else     
    {
                    _select.add(new Option(this.sortArr[i][1],this.sortArr[i][0]));
                }
   }
  }  
  if (_parentID > 0)
  {
   this.newInit(_parentID,_sortMenuObj);
  }
 }
}




