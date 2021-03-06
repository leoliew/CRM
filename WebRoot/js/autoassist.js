Object.extend(Event, {
  KEY_PAGE_UP:		33,
  KEY_PAGE_DOWN:	34,
  KEY_END:			35, 
  KEY_HOME:			36, 
  KEY_INSERT:		45,
  KEY_SHIFT:		16,
  KEY_CTRL:			17,
  KEY_ALT:			18
});

var AutoAssistConstant = new Object();

Object.extend(AutoAssistConstant, {
	version:		"0.7",	
	selectEvent: "onSelect",	
	typingTimeout: 500,	
	highlightHandler: function() {
		this.highlight(Event.element(arguments[0]).getAttribute("aa_index"));
	},	
	ie: ((navigator.userAgent.toLowerCase().indexOf("msie") != -1) 
	  && (navigator.userAgent.toLowerCase().indexOf("opera") == -1)),
	containerStyle: "aa",	
	highlightStyle: "aa_highlight",	
	waitingStyle: "aa_wait"
});

var AutoAssist = Class.create();

AutoAssist.prototype = {
	requestNo: 0,
	responseNo: 0,
	visible: false,
	maxHeight: 250,
	defaultproc: true,
	rootelem:"",
	selectedID:"",
	selectedValue:"",
	
	initialize: function(txtBox, getURL, options) {
		this.txtBox = $(txtBox);		
		if (this.txtBox == null) {
			return;
		}
		this.txtBox.setAttribute("autocomplete", "off");
		this.txtBox.onkeydown = this.onkeydown.bindAsEventListener(this);

		this.constant = AutoAssistConstant;		
		this.timeoutId = 0;
		this.getURL = getURL;
		
		if (this.constant.ie) {
			this.iframe = document.createElement("iframe");
			this.iframe.style.position = "absolute";
			this.iframe.style.margin = "1px 0 0 0";
			this.iframe.style.padding = "0";
			Element.hide(this.iframe);
			document.body.appendChild(this.iframe);	
		}

		this.bufferDiv = document.createElement("div");
		
		this.floatDiv = document.createElement("div");
		this.floatDiv.style.position = "absolute";

		Element.addClassName(this.floatDiv, this.constant.containerStyle);
		Element.hide(this.floatDiv);
		document.body.appendChild(this.floatDiv);

		this.currentNodeIndex = -1;
		this.size = -1;
		this.setOptions(options);		

		Event.observe(document, "click", this.hide.bindAsEventListener(this));
		Event.observe(this.floatDiv, "click", this.show.bindAsEventListener(this));
		Event.observe(this.txtBox, "dblclick", this.doRequest.bindAsEventListener(this));
	},	
	
	setOptions: function(options) {
	    this.options = {};
    	Object.extend(this.options, options || {});
	},
	
	onkeydown: function(evt) {
		switch (evt.keyCode) {
			case Event.KEY_TAB:
			case Event.KEY_LEFT:
			case Event.KEY_RIGHT:
			case Event.KEY_PAGE_UP:
			case Event.KEY_PAGE_DOWN:
			case Event.KEY_END:
			case Event.KEY_HOME:
			case Event.KEY_INSERT:
			case Event.KEY_SHIFT:
			case Event.KEY_CTRL:
			case Event.KEY_ALT:
				return;			
			case Event.KEY_ESC:
				this.hide();
				return;
			case Event.KEY_UP:
				this.up();
				this.show();
				return;
			case Event.KEY_DOWN:
				this.down();
				this.show();
				return;	
			case Event.KEY_RETURN:
				if (this.visible) {
					this.select();
					return;
				}
			default:
				this.log("evt.keyCode:" + evt.keyCode);
				if (this.timeoutId != 0) {
					clearTimeout(this.timeoutId);
				}
				this.timeoutId = setTimeout(this.doRequest.bind(this), this.constant.typingTimeout);
				this.hide();
		}		
	},
		
	select: function() {
		if (this.currentNode()) {
			var stat = this.currentNode().getAttribute(this.constant.selectEvent);			
			this.selectedID=stat;
			this.selectedValue=this.currentNode().innerHTML;
			if (this.defaultproc){
		           try { eval(stat); } catch (e) {};
		        }else{		           
		           this.custproc(stat,this.txtBox,this);			   
		        }			 
			this.hide();
		}
	},
	
	currentNode: function() {
		if (this.children) {
			return this.children[this.currentNodeIndex];
		} else {
			return undefined;
		}
	},
	
	highlight: function(h) {
		if (this.currentNode()) {
			Element.removeClassName(this.currentNode(), this.constant.highlightStyle);
		}
		this.currentNodeIndex = h;
		if (this.currentNode()) {
			Element.addClassName(this.currentNode(), this.constant.highlightStyle);
		}
	},
	
	up: function() {		
		if (this.currentNodeIndex > -1) this.highlight(this.currentNodeIndex - 1);
	},
	
	down: function() {		
		if (this.currentNodeIndex < this.size - 1) this.highlight(this.currentNodeIndex + 1);
	},
		
	cleanup: function() {
		this.size = 0;
		this.currentNodeIndex = -1;
		this.floatDiv.innerHTML = "";
		this.bufferDiv.innerHTML = "";		
	},
			
	isValidNode:function(n) {
		return (n.nodeType == 1) && (n.getAttribute(this.constant.selectEvent));
	},
		
	preRequest: function() {
		if (this.txtBox.value.length == 0) return false;
		return true;
	},
		
	getURL: function() {
	},
		
	custproc:function(val,edt,assistobj){
        },
        
	doRequest: function() {
		if (this.preRequest()) {
			this.onLoading();
			var updaterOptions = {
				method: "get",
				onComplete: this.onComplete.bindAsEventListener(this),
				onFailure: this.onFailure.bindAsEventListener(this)
			}
			//alert(updaterOptions.method);
			//var URL = encodeURI(this.getURL());
			var URL = this.getURL();
			//alert(URL);
			this.currentRequest = new Ajax.Updater(this.bufferDiv, URL, updaterOptions);
			this.requestNo++;
			this.log(URL);
		}
	},
		
	onException: function() {
		this.log("onException");
	},
		
	onFailure: function() {
		this.log("onFailure");	
	},
		
	onLoading: function() {
		this.cleanup();
		this.hide();
		Element.addClassName(this.txtBox, this.constant.waitingStyle);
	},
		
	onComplete: function() {
		setTimeout(this.updateContent.bind(this, arguments[0]), 10);
	},
		
	updateContent: function() {
		this.responseNo++;		
		this.log(this.requestNo + "/" + this.responseNo);		
		var tx = ((this.currentRequest == null) || (this.currentRequest.transport == arguments[0]));
		if (tx) {	
			this.floatDiv.innerHTML = this.bufferDiv.innerHTML;
			this.size = 0;
			this.currentNodeIndex = -1;	
			var children = this.floatDiv.childNodes;
			this.children = new Array();			
			for (var i = 0; i < children.length; i++) {
				var item = children[i];
				if (this.isValidNode(item)) {
					item.setAttribute("aa_index", this.size);
					Event.observe(item, "mouseover", this.constant.highlightHandler.bindAsEventListener(this));		
					Event.observe(item, "click", this.select.bindAsEventListener(this));
					this.children.push(item);
					this.size++;					
				}
			}		
			this.down();
			this.show();			
			Element.removeClassName(this.txtBox, this.constant.waitingStyle);
		}
	},
		
	show: function() {
		this.floatDiv.style.width = this.txtBox.offsetWidth - 4 + "px";
		var position = Position.cumulativeOffset(this.txtBox);
		this.floatDiv.style.top = position[1] + this.txtBox.offsetHeight + "px";
		this.floatDiv.style.left = position[0]+ "px";
		if (this.constant.ie) {
			this.iframe.style.width = this.floatDiv.style.width;
			this.iframe.style.top = this.floatDiv.style.top;
			this.iframe.style.left = this.floatDiv.style.left;
		}
		Element.show(this.floatDiv);
		if (Element.getHeight(this.floatDiv)>this.maxHeight){
		    this.floatDiv.style.height=this.maxHeight+"px";	 
		    this.floatDiv.style.overflowY="auto";
	        }
		if (this.constant.ie) {
			this.iframe.style.height = Element.getHeight(this.floatDiv) + "px";
			Element.show(this.iframe);
		}
		this.visible = true;
	},
		
	hide: function() {
		this.visible = false;
		Element.hide(this.floatDiv);
		if (this.constant.ie) {
			Element.hide(this.iframe);
		}
	},
		
	log: function(msg) {
	}
}