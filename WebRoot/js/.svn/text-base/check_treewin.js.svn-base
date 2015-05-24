if (typeof ZebuVWTLocation == "undefined") 
	var ZebuVWTLocation = "";

TreeWindow.idCounter=0;
TreeWindow.normalBgColor = "#ffffff";
TreeWindow.highlightBgColor ="#8080FF";

TreeWindow.spaceImage = new Image();
TreeWindow.spaceImage.src = ZebuVWTLocation+"space.gif";
TreeWindow.plusImage = new Image();
TreeWindow.plusImage.src = ZebuVWTLocation+"plus.gif";
TreeWindow.minusImage = new Image();
TreeWindow.minusImage.src = ZebuVWTLocation+"minus.gif";


function TreeNode(html, x_name, x_value,x_checked){
  this.html   = html;
  this.x_name = x_name;
	this.x_value     = x_value;
	this.x_checked= x_checked;

	this.parentNode = null;
    this.childNodes = new Array();

    this.expand = true;
    this.treeNodeWin = null;

    this.addNode  = TreeNode_addNode;

    return this;
}

function TreeNode_addNode(child){
	child.parentNode = this;
    this.childNodes[this.childNodes.length] = child;

    return child;
}


function TreeNodeWindow(x, y, treeNode, treeWindow, id){
    this.id = (id ? id : this.type + TreeWindow.idCounter++);
    this.treeWindow = treeWindow;
    this.treeNode = treeNode;

    var data="";
   
    if(treeNode.x_name!=null){
    	data="<input type='checkbox' "+treeNode.x_checked+" name='"+treeNode.x_name+"' value='"+treeNode.x_value+"'/>"
    }	
	  var cSize = document.zbComputeSize(treeNode.html+data);
    
    this.mainWindow = document.zbAppendLayer(this.id, cSize.width+18, cSize.height, this.treeWindow.mainWindow);
    this.mainWindow.zbSetLocation(x, y);
	this.mainWindow.zbSetBackgroundColor(TreeWindow.normalBgColor);

    this.expandWindow = document.zbAppendLayer(this.id+"expand", 18, 16, this.mainWindow);
	this.expandWindow.zbSetLocation(0, (cSize.height-18)/2);
	this.expandWindow.zbSetBackgroundColor(TreeWindow.normalBgColor);
    this.expandWindow.zbSetContent("<IMG name='"+this.id+"expand"+"' width='18' height='16' src='"+TreeWindow.spaceImage.src+"space.gif"+"'>");


    this.itemWindow = document.zbAppendLayer(this.id+"item", cSize.width, cSize.height, this.mainWindow);
    this.itemWindow.zbSetLocation(18, 0);
	  this.itemWindow.zbSetBackgroundColor(TreeWindow.normalBgColor);
    //this.itemWindow.zbSetContent("<input type='checkbox' name='11'/>"+treeNode.html);
    this.itemWindow.zbSetContent(data+treeNode.html);

	this.selectNode = TreeNodeWindow_selectNode;

	this.expandWindow.zbAddEventListener("mousedown", TreeNodeWindow_doExpand, false);
	this.expandWindow.owner = this;

	this.itemWindow.zbAddEventListener("mouseup", TreeNodeWindow_doSelect, false);
	this.itemWindow.owner   = this;

	return this;
}

TreeNodeWindow.prototype.type = "TreeNodeWindow";

function TreeNodeWindow_selectNode(){
	if (this.treeWindow.selectedNode)
		this.treeWindow.selectedNode.treeNodeWin.itemWindow.zbSetBackgroundColor(TreeWindow.normalBgColor);
	this.itemWindow.zbSetBackgroundColor(TreeWindow.highlightBgColor);

	this.treeWindow.selectedNode = this.treeNode;

	if (this.treeNode.action)
		this.treeNode.action();
}

function TreeNodeWindow_doSelect(mouseEvent){
	this.owner.selectNode();
}

function TreeNodeWindow_doExpand(mouseEvent){
	if (this.owner.treeNode.childNodes.length <= 0)
		return;

	if (this.owner.treeNode.expand)
		this.owner.treeNode.expand = false;
	else
		this.owner.treeNode.expand = true;

	this.owner.treeWindow.displayTree();
}



function TreeWindow(x, y, width, height, root, parentLayer, id) {
    this.id = (id ? id : this.type + TreeWindow.idCounter++);

    this.mainWindow = document.zbAppendLayer(this.id, width, height, parentLayer);
    this.mainWindow.zbSetLocation(x, y);
	this.mainWindow.zbSetBackgroundColor(TreeWindow.normalBgColor);

    this.root			= root;
	this.bottom  		= 0;
	this.selectedNode	= null;
	this.closed			= false;

    this.setLocation = TreeWindow_setLocation;
    this.setSize	 = TreeWindow_setSize;
    this.displayTree = TreeWindow_displayTree;
    this.displayNode = TreeWindow_displayNode;
    this.show		 = TreeWindow_show;
    this.hide		 = TreeWindow_hide;
    this.close		 = TreeWindow_close;

    this.displayTree();

    return this;
}

TreeWindow.prototype.type = "TreeWindow";

function TreeWindow_setLocation(x, y){
	if (this.closed) return;
	this.mainWindow.zbSetLocation(x, y);
}

function TreeWindow_setSize(width, height){
	if (this.closed) return;
	this.mainWindow.zbSetSize(width, height);
}

function TreeWindow_displayTree(){
	this.bottom = 0;
	this.displayNode(this.root, 0);

	// Find the selected node, if the original one was hidden
	var node = this.selectedNode;
	while(node && node.treeNodeWin.mainWindow.zbGetVisibility()=="hidden")
		node = node.parentNode;

	if (node == null)
		node = this.root;
	if (node != this.selectedNode)
		node.treeNodeWin.selectNode();
}

function TreeWindow_displayNode(treeNode, depth){
	var parentNode = treeNode.parentNode;
	// Create a node window if it was not created.
	if (!treeNode.treeNodeWin)
		treeNode.treeNodeWin = new TreeNodeWindow(depth*18, this.bottom, treeNode, this);

	if (parentNode && (!parentNode.expand || parentNode.treeNodeWin.mainWindow.zbGetVisibility() == "hidden"))
		treeNode.treeNodeWin.mainWindow.zbSetVisibility("hidden");
	else{
		treeNode.treeNodeWin.mainWindow.zbSetLocation(depth*18, this.bottom);
		treeNode.treeNodeWin.mainWindow.zbSetVisibility("visible");

  		var imgCollect = document.zbGetImages(treeNode.treeNodeWin.expandWindow);
		if (treeNode.childNodes.length > 0 && treeNode.expand)
	  		imgCollect[treeNode.treeNodeWin.id+"expand"].src = TreeWindow.minusImage.src;
		else if (treeNode.childNodes.length > 0 && !treeNode.expand)
	  		imgCollect[treeNode.treeNodeWin.id+"expand"].src = TreeWindow.plusImage.src;
		else
	  		imgCollect[treeNode.treeNodeWin.id+"expand"].src = TreeWindow.spaceImage.src;

		var size = treeNode.treeNodeWin.mainWindow.zbGetSize();
		this.bottom += size.height;
	}

    for (var i = 0; i < treeNode.childNodes.length; i++)
		this.displayNode(treeNode.childNodes[i], depth+1);
}

function TreeWindow_show(){
	if (this.closed) return;
    this.mainWindow.zbSetVisibility("visible");
}

function TreeWindow_hide(){
	if (this.closed) return;
    this.mainWindow.zbSetVisibility("hidden");
}

function TreeWindow_close() {
	if (this.closed) return;
    document.zbRemoveLayer(this.mainWindow);
    this.closed = true;
}
