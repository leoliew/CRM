var Buffalo = Class.create();
Buffalo.BOCLASS="_BUFFALO_OBJECT_CLASS_";
Buffalo.VERSION="1.2.2";
Buffalo.getElementById = function(elementId) {return $(elementId);} /* deprecated */

Buffalo.prototype = {
	initialize: function(gateway, async, events) {
		this.gateway = gateway;
		this.transport = null;
		if (typeof(async) == 'undefined') {
			this.async = true;
		} else {
			this.async = async;
		}
		this.currentCallback = new Function();
		this.setEvents(events);
	},
	
	getGateway : function() { return this.gateway;},

	setEvents: function(events) {
		this.events = {
			onLoading: Buffalo.Default.showLoading,
			onFinish: new Function(),
			onException: new Function(),
			onError: Buffalo.Default.showError
		};
		Object.extend(this.events, events || {});
	},

	_remoteCall: function(url, burlapCall, callback) {
		this.transport = XmlHttp.create();
		this.transport.open("POST", url, this.async);
		this.transport.send(burlapCall.xml());
		this.currentCallback = callback;
		if (this.async) {
			this.transport.onreadystatechange = this.onStateChange.bind(this);
			this.events["onLoading"](true);
		} else { 
			this.response();
		}
	},

	remoteCall: function(service, params, callback) {	
		var idx = service.indexOf(".");
		
		var serviceId = service.substring(0,idx);
		var method = service.substring(idx+1,service.length);
		var newUrl = this.gateway+"/buffalo/"+serviceId;
		
		var call = new Buffalo.Call(method);
		for (var i = 0; i < params.length; i++) {
			call.addParameter(params[i]);
		}

		this._remoteCall(newUrl, call, callback);
	},
	
	onStateChange: function(){
		if (this.transport.readyState == 4) {
			this.response();
		}
	},
	
	response : function() {
		if (this.transport.status == '200') {
			var data = this.transport.responseText;
			if (data.indexOf("xmlns:burlap") == -1) {
				data.replace("<burlap:reply>", "<burlap:reply xmlns:burlap=\"http://www.amowa.net/buffalo/\">")
			}
			
			this.events["onLoading"](false);
			var reply = new Buffalo.Reply(data);
			this.currentCallback(reply);
			this.events["onFinish"](reply);

		} else {
			this.events["onError"](this.transport.responseText);
		}
	}

}


Buffalo.Default = {
	loadingPane:null,
	errorPane:null,
	
	showLoading : function(state) {
		this.loadingPane = $("buffalo_loading");
		if (this.loadingPane == null) {
			var el = document.createElement('DIV');
			el.setAttribute("id","buffalo_loading");
			el.style.cssText="display:none;font-family:Verdana;font-size:11px;border:1px solid #00CC00;background-color:#A4FFA4;padding:1px;position:absolute; right:1px; top:1px; width:110px; height:14px; z-index:10000";
			el.innerHTML="loading... ";
			document.body.appendChild(el);
			this.loadingPane = el;
		}
		if (state) {
			this.loadingPane.style.display="block";
			this.loadingPane.style.top = document.body.scrollTop+1;
		} else {
			this.loadingPane.style.display="none";
		}
	},
	
	showError: function(errorStr) {
		this.errorPane = $("buffalo_error");
		if (this.errorPane == null) {
			var el = document.createElement('DIV');
			el.setAttribute("id","buffalo_error");
			el.style.cssText="font-family:Verdana;font-size:11px;border:1px solid #00CC00;background-color:#fff;padding:1px;position:absolute;overflow:auto; right:1px; top:1px; width:500px; height:300px; z-index:1";
			el.innerHTML=errorStr;
			document.body.appendChild(el);
			this.errorPane = el;
		}
	},
	
	showException: function(ex) { /*TODO*/ }
}

function getDomDocumentPrefix() {
	if (getDomDocumentPrefix.prefix)
		return getDomDocumentPrefix.prefix;
	
	var prefixes = ["MSXML2", "Microsoft", "MSXML", "MSXML3"];
	var o;
	for (var i = 0; i < prefixes.length; i++) {
		try {
			// try to create the objects
			o = new ActiveXObject(prefixes[i] + ".DomDocument");
			return getDomDocumentPrefix.prefix = prefixes[i];
		}
		catch (ex) {};
	}
	
	throw new Error("Could not find an installed XML parser");
}

function getXmlHttpPrefix() {
	if (getXmlHttpPrefix.prefix)
		return getXmlHttpPrefix.prefix;
	
	var prefixes = ["MSXML2", "Microsoft", "MSXML", "MSXML3"];
	var o;
	for (var i = 0; i < prefixes.length; i++) {
		try {
			// try to create the objects
			o = new ActiveXObject(prefixes[i] + ".XmlHttp");
			return getXmlHttpPrefix.prefix = prefixes[i];
		}
		catch (ex) {};
	}
	
	throw new Error("Could not find an installed XMLHttp object");
}

function XmlHttp() {}

XmlHttp.create = function () {
	try {
		// NS & MOZ
		if (window.XMLHttpRequest) {
			var req = new XMLHttpRequest();
			if (req.readyState == null) {
				req.readyState = 1;
				req.addEventListener("load", function () {
					req.readyState = 4;
					if (typeof req.onreadystatechange == "function")
						req.onreadystatechange();
				}, false);
			}
			
			return req;
		}
		// IE
		if (window.ActiveXObject) {
			return new ActiveXObject(getXmlHttpPrefix() + ".XmlHttp");
		}
	}
	catch (ex) {}
	// Fail
	throw new Error("Your browser does not support XmlHttp objects");
};

function XmlDocument() {}
XmlDocument.create = function () {
	try {
		if (document.implementation && document.implementation.createDocument) {
			var doc = document.implementation.createDocument("", "", null);
			if (doc.readyState == null) {
				doc.readyState = 1;
				doc.addEventListener("load", function () {
					doc.readyState = 4;
					if (typeof doc.onreadystatechange == "function")
						doc.onreadystatechange();
				}, false);
			}
			
			return doc;
		}
		if (window.ActiveXObject)
			return new ActiveXObject(getDomDocumentPrefix() + ".DomDocument");
	}
	catch (ex) {}
	throw new Error("Your browser does not support XmlDocument objects");
};

if (window.DOMParser &&
	window.XMLSerializer &&
	window.Node && Node.prototype && Node.prototype.__defineGetter__) {

	Document.prototype.loadXML = function (s) {
		
		var doc2 = (new DOMParser()).parseFromString(s, "text/xml");
		
		while (this.hasChildNodes())
			this.removeChild(this.lastChild);
		for (var i = 0; i < doc2.childNodes.length; i++) {
			this.appendChild(this.importNode(doc2.childNodes[i], true));
		}
	};
	
	Document.prototype.__defineGetter__("xml", function () {
		return (new XMLSerializer()).serializeToString(this);
	});
}
Buffalo.Call = Class.create();
Buffalo.Call.prototype = {
	initialize: function(methodname){
		this.method = methodname;
		this.params = [];
	},

	addParameter: function(data){
		if (arguments.length==0) return;
		this.params[this.params.length] = data;
	},

	xml: function(){
		var xmlstr = "";
		xmlstr += "<burlap:call>\n";
		xmlstr += "<method>" + this.method+ "</method>\n";

		for (var i = 0; i < this.params.length; i++) {
		  var data = this.params[i];
		  xmlstr += this.getParamXML(this.dataTypeOf(data),data) + "\n";
		}

		xmlstr += "</burlap:call>";

		return xmlstr; 
	},
	
	/* Guess the type of an javascript object */
	dataTypeOf: function (o){
		var type = typeof(o);
		type = type.toLowerCase();
		switch(type){
		  case "number":
			if (Math.round(o) == o) type = "int";
			else type = "double";
			break;
		  case "object":
			var con = o.constructor;
			if (con == Date) type = "date";
			else if (con == Array) type = "list";
			else type = "map";
			break;
		}
		return type;
	},
	
	doValueXML: function(type,data){
		var xml, str = data;
		if (typeof(data) == "string") {
			str = str.replace(/&/g,"&amp;");
			str = str.replace(/</g,"&lt;");
			str = str.replace(/>/g,"&gt;");
			xml = "<" + type + ">" + str + "</" + type + ">";
		} else {
			xml = "<" + type + ">" + data + "</" + type + ">";
		}
				
		return xml;
	},

	doBooleanXML:function(data){
		var value = (data==true)?1:0;
		var xml = "<boolean>" + value + "</boolean>";
		return xml;
	},
	
	doDateXML: function(data){
		var xml = "<date>";
		xml += dateToISO8609(data);
		xml += "</date>";
		return xml;
	},
	
	doArrayXML : function(data){
		var xml = "<list>\n";
		xml += "<type>" +""+ "</type>\n";
		xml += "<length>" +data.length+ "</length>\n";
		for (var i = 0; i < data.length; i++){
			xml += this.getParamXML(this.dataTypeOf(data[i]),data[i]) + "\n";
		}
		xml += "</list>\n";
		return xml;
	},
	
	doStructXML : function(data){
		var boClass = data[Buffalo.BOCLASS];
		var boType = boClass ? boClass : "java.util.HashMap";
		var xml = "<map>\n";
		xml += "<type>" +boType+ "</type>\n";

		for (var i in data){
			if (data[i] != boType) { 
				if (typeof(data[i]) == "function") continue; /* the function shouldn't transfered. */
				xml += this.getParamXML(this.dataTypeOf(i),i)+"\n";
				xml += this.getParamXML(this.dataTypeOf(data[i]),data[i]) + "\n";
			}
		}
		xml += "</map>\n";
		return xml;
	},
	
	getParamXML: function(type,data){
		var xml;
		switch (type){
			case "date": xml = this.doDateXML(data); break;
			case "list": xml = this.doArrayXML(data); break;
			case "map": xml = this.doStructXML(data); break;
			case "boolean": xml = this.doBooleanXML(data); break;
			default: xml = this.doValueXML(type,data); break;
		}
		return xml;
	}
}

function dateToISO8609(date){
	var year = date.getYear();
	/* Fix for Y2K */
	if (year < 2000) {
		year += 1900;
	}
	var month = leadingZero(new String(date.getMonth()+1));
	var day = leadingZero(new String(date.getDate()));
	var time = leadingZero(new String(date.getHours())) + leadingZero(new String(date.getMinutes())) + leadingZero(new String(date.getSeconds()));

	var converted = year+month+day+"T"+time+"Z";
	return converted;
} 

function leadingZero(n){
	if (n.length==1) n = "0" + n;
	return n;
}
Buffalo.Reply = Class.create();
Buffalo.Reply.prototype = {
	initialize: function(sourceXML) {
		this._source = sourceXML;
		this._isFault = false;
		this._type = "null";
		this._objects = [];
		this._objectNodes = [];
		
		var xmldoc = XmlDocument.create();
		xmldoc.async=false;
		xmldoc.loadXML(sourceXML);
		var root = xmldoc.documentElement;
		this.dataNode = root.firstChild;
		this._type = this._getType(this.dataNode);
	},
	
	getType: function() { return this._type; },
	
	getResult : function() { return this.deserialize(this.dataNode); },
	
	isFault : function() { return (this._type == "fault"); },
	
	isNull: function() { return (this._type == "null"); },
	
	getSource : function() { return this._source; },
	
	deserialize: function(dataNode) {
		var ret;
		var type = this._getType(dataNode);
		switch (type) {
			case "boolean": ret = this.doBoolean(dataNode); break;
			case "date": ret = this.doDate(dataNode); break;
			case "double": ret = this.doDouble(dataNode); break;
			case "int": 
			case "long": 
				ret = this.doInt(dataNode);
				break;
			case "list": ret = this.doList(dataNode); break;
			case "map": ret = this.doMap(dataNode); break;
			case "null": ret = this.doNull(dataNode); break;
			case "ref": ret = this.doRef(dataNode); break;
			case "string": ret = this.doString(dataNode);break;
			case "xml": ret = this.doXML(dataNode); break;
			case "fault": ret = this.doFault(dataNode); break;
			default: ;
		}

		return ret;
	},
	
	_getType : function(dataNode) {
		return dataNode.tagName.toLowerCase();
	},
	
	getNodeText :function(dataNode) {
		if (dataNode.childNodes.length == 0) {
			return null;
		} else 
			return dataNode.firstChild.nodeValue;
	},

	doBoolean : function (dataNode) {
		var value = this.getNodeText(dataNode);
		return (value == "1");
	},
	
	doDate : function (dataNode) {

		var dateStr = this.getNodeText(dataNode);
		var year = parseInt(dateStr.substring(0,4),"10");
		var month = parseInt(dateStr.substring(4,6),"10") - 1;
		var day = parseInt(dateStr.substring(6,8),"10");
		var hour = parseInt(dateStr.substring(9,11),"10");
		var minute = parseInt(dateStr.substring(11,13),"10");
		var second = parseInt(dateStr.substring(13,15),"10");
		
		var d = new Date(year, month, day, hour, minute, second);
		return d;
	},
	
	doDouble : function (dataNode) {
		var value = this.getNodeText(dataNode);
		return parseFloat(value);
	},
	
	doInt: function (dataNode) {
		var value = this.getNodeText(dataNode);
		return parseInt(value);
	},
	
	doList: function (dataNode) {
		var arr = new Array();
		this._objects[this._objects.length] = arr;
		var children = dataNode.childNodes;
		for (var i=2; i < children.length; i++) {
			arr[arr.length] = this.deserialize(children[i]);
		}

		return arr;
	},

	doMap: function (dataNode) {
	
		var obj = new Object();
		this._objects[this._objects.length] = obj;

		var attrs = dataNode.childNodes;
		for (var i = 1; i < attrs.length; i+=2) {
			if (attrs[i+1].hasChildNodes() ) {
				obj[this.getNodeText(attrs[i])] = this.deserialize(attrs[i+1]);
			} else {
				obj[this.getNodeText(attrs[i])] = attrs[i+1].text;
			}
		}
		
		return obj;
	},
	
	doNull: function (dataNode) { return null;	},
	
	doRef: function (dataNode) {
		var value = this.getNodeText(dataNode);
		alert(value);
		var idx = parseInt(value);
		
		return this._objects[idx];
	},
	
	doString: function (dataNode) {
		var value = this.getNodeText(dataNode);
		if (value == null) {
			return "";
		}
		return (value);
	},
	
	doXML : function (dataNode) {
		var value = this.getNodeText(dataNode);
		return unescape(value);
	},
	
	doFault : function (dataNode) {
		var code = this.getNodeText(dataNode.childNodes[1]);
		var msg = this.getNodeText(dataNode.childNodes[3]);
		var detail = this.deserialize(dataNode.childNodes[5]);
		return new Buffalo.Fault(code, msg, detail);
	}
}

Buffalo.Fault = Class.create();
Buffalo.Fault.prototype = {
	initialize: function(code, message, detail) {
		this.code = code;
		this.message = message;
		this.detail = detail;
	},
	toString: function() {
		return "Buffalo.Fault:[code=" + this.code + ", message=" + this.message + ", detail=" + this.detail+"]";
	}
}
Object.extend(Buffalo.prototype, {
	bindReply : function(service, params, bindElemId) {
		this.remoteCall(service, params, function(reply) {
			Buffalo.Bind.bind(bindElemId, reply.getResult());
		})
	}
});

Buffalo.Bind = {
	bind : function(elementId, bindValue,keepcurrent) {
		var elem = Buffalo.getElementById(elementId);
		switch(elem.tagName) {
			case "INPUT": 
				switch (elem.type.toLowerCase()) {
					
					case "text": ;
					case "hidden": ;
					case "password": Buffalo.BindFactory.bindText(elem, bindValue); break;

					case "checkbox": ;
					case "radio": Buffalo.BindFactory.bindRadioOrCheckbox(elem, bindValue); break;
				}
				break;
			case "TEXTAREA":
				Buffalo.BindFactory.bindText(elem, bindValue);
				break; 
			case "TABLE": 
				Buffalo.BindFactory.bindTable(elem, bindValue);
				break; 
			case "SELECT": 
				Buffalo.BindFactory.bindSelect(elem, bindValue,keepcurrent);
				break; 
			case "DIV":
			case "SPAN":
				alert(bindValue);
				elem.innerHTML = bindValue;
				break;
			//TODO: add more bindings here for 
		}
	}
}

Buffalo.BindFactory = {
	reportError: function(elem, value, msg) { 
		throw "Data bind failed: "+msg;
	},
	
	bindText: function(elem, value) { 
		elem.value = value;
	},
	
	bindRadioOrCheckbox: function(elem, value) {
		var ret = false;
		switch (typeof(value)) {
			case 'boolean': ret = value; break;
			case 'string': ret = (value == "1" || value == "true" || value == "yes"); break;
			case 'number': ret = (parseInt(value) == 1); break;
			default: ret = false;
		}
		elem.checked = ret;
	},

	bindSelect : function(elem, value,keepcurrent) {
		//TODO: Check the data type
		if (typeof(value) != "object" || value.constructor != Array) {
			this.reportError(elem,value,"Array Type Needed for binding select!");
		}
		// delete all the nodes.
		if ((keepcurrent!=null)&&(!keepcurrent)){
		while (elem.childNodes.length > 0) {
			elem.removeChild(elem.childNodes[0]);
		}
	        }
		
		// bind data
		for (var i = 0; i < value.length; i++) {
			
			var option = document.createElement("OPTION");
			
			var data = value[i];
			if (data == null || typeof(data) == "undefined") {
				option.value = "";
				option.text = "";
			}
			if (typeof(data) != 'object') {
				option.value = data;
				option.text = data;
			} else {
				option.value = data[elem.getAttribute("jvalue")];
				option.text = data[elem.getAttribute("jtext")];	
			}
			elem.options.add(option);
		}
	},

	bindTable: function(elem, value) {
		var jHeight = parseInt(elem.getAttribute("jheight"));
		var dataHeader = [];
		var tBody = elem.getElementsByTagName("TBODY")[0];
		
		// clear the generated rows
		if (elem.getElementsByTagName("TBODY").length > 0) {
			while (tBody.rows.length > jHeight) {
					tBody.deleteRow(jHeight);
			}
		}

		if (jHeight == 0) { // if table is null, push the data to the tables.

			for (x in value[0] ) {
				dataHeader[dataHeader.length] = x;
			}

			var hTr = elem.insertRow(elem.rows.length);
			for (var i = 0; i < dataHeader.length; i++) {
				var td = hTr.insertCell(hTr.cells.length);
				td.innerHTML = dataHeader[i];
			}
			
			for (var i = 0; i < value.length; i++) {
				var tr = elem.insertRow(elem.rows.length);
				var data = value[i];
				for (x in data ) {
					var td = tr.insertCell(tr.cells.length);
					td.innerHTML = data[x];
				}
			}	
		}
		
		if (jHeight == 1) { // if there is only one line, first line is header(every td indicate by a jtext property)
			var headerTR = tBody.rows[0];

			for (var i = 0; i < headerTR.cells.length ; i++ ) {
				dataHeader[dataHeader.length] = headerTR.cells[i].getAttribute("jtext");
			}
			
			for (var i = 0; i < value.length; i++) {
				var tr = tBody.insertRow(tBody.rows.length);
				var data = value[i];
				for (var j = 0; j < dataHeader.length; j++ ) {
					var td = tr.insertCell(tr.cells.length);
					td.innerHTML = data[dataHeader[j]];
				}
			}	
		}

		if (jHeight == 2) { // two lines, first line is header, the second is style

			var headerTR = tBody.rows[0];

			for (var i = 0; i < headerTR.cells.length ; i++ ) {
				dataHeader[dataHeader.length] = headerTR.cells[i].getAttribute("jtext");
			}

			for (var i = 0; i < value.length; i++) {
				
				var tr;
				
				if (i == 0) { // if the first row
					tr = elem.rows[1];
				} else { // else copy the first row
					tr = elem.rows[1].cloneNode(true);
				}

				if (i > 0) 	{
					tBody.appendChild(tr);
				}

				var data = value[i];
				for (var j = 0; j < tr.cells.length; j++ ) {
					var td = tr.cells[j];
					
					td.innerHTML = data[dataHeader[j]];
				}
				
			}	
		}

		if (jHeight >= 3) { // more than 3 rows, first header, second and third is odd/even style, other lines ommited.
			var headerTR = tBody.rows[0];
			for (var i = 0; i < headerTR.cells.length ; i++ ) {
				dataHeader[dataHeader.length] = headerTR.cells[i].getAttribute("jtext");
			}
			for (var i = 0; i < value.length; i++) {
				var tr;
				
				if (i == 0) { // 1st row
					tr = tBody.rows[1];
				} else if (i == 1) 	{ // 2nd row
					tr = tBody.rows[2];
				} else if ( i % 2 == 0) { // get the 1st row
					tr = tBody.rows[1].cloneNode(true);
				} else if (i % 2 == 1) { // the 2nd row
					tr = tBody.rows[2].cloneNode(true);
				}

				
				if (i > 1) 	{
					tBody.appendChild(tr);
				}

				var data = value[i];
				
				for (var j = 0; j < tr.cells.length; j++ ) {
					var td = tr.cells[j];	
					td.innerHTML = data[dataHeader[j]];
				}
			}	
		}
		
	},
	
	bindRepeater:function(elem, value) {
		//TODO: implementation will be added.
	}

}
Buffalo.bind = Buffalo.Bind.bind; /*capable with the old version, deprecated*/
Buffalo.View = Class.create();

Buffalo.View.LAST_VIEWNAME = null;
Buffalo.View.CURRENT_VIEW = null;
Buffalo.View.HOME_VIEW = null;
Buffalo.View.HISTORY_IFRAME_ID = "buffalo-view-history-iframe";

Buffalo.View.iframeLoaded = function(loc) {
	var url = loc.href;
	
	var idx = url.indexOf("?");
	var viewName = "";
	if (idx > -1) {
		viewName = url.substring(idx+1);
	}
	
	if (viewName == "") {
		viewName = Buffalo.View.HOME_VIEW;
	}

	if (Buffalo.View.CURRENT_VIEW != null) {
		Buffalo.View.CURRENT_VIEW.doSwitchPart(viewName);
	}
	
}

Buffalo.View.prototype = {

	initialize:function(buffaloObj) {
		this.buffalo = buffaloObj;
	},

	switchPart: function(partId, viewName, addToHistory) {
		this.partId = partId;
		this.viewName = viewName;
		if (typeof(addToHistory) == "undefined" || addToHistory == true) {
			this.addToHistory = true;
		} else {
			this.addToHistory = false;
		}
		
		if (Buffalo.View.LAST_VIEWNAME == null) {
			/* the first visit view is home view */
			Buffalo.View.HOME_VIEW = viewName;
			/* The first view, don't add to history */
			this.doSwitchPart(viewName);
			Buffalo.View.LAST_VIEWNAME = viewName;
			return;
		}

		Buffalo.View.CURRENT_VIEW = this;

		if (this.addToHistory) {
			if ($(Buffalo.View.HISTORY_IFRAME_ID)) {
				var iframesrc=$(Buffalo.View.HISTORY_IFRAME_ID).src;
				var newUrl = iframesrc;
				var idx = iframesrc.indexOf("?");
				if (idx > -1) {
					newUrl = iframesrc.substr(0,idx);
				}
				newUrl += "?" + viewName;
				$(Buffalo.View.HISTORY_IFRAME_ID).src = newUrl;
			} else {
				var msg = "It seems that you havent add the buffalo-blank.html as an Iframe for browser history.";
				msg += "\nSo this view cannot add to browser history.";
				msg += "\n\nTo prevent this dialog, use buffalo.switchPart(partId, viewName, false) or ";
				msg += "add the buffalo-blank.html to your main page with id 'buffalo-view-history-iframe'.";

				alert(msg);
			}
		} 

		this.doSwitchPart(viewName);
		
		Buffalo.View.LAST_VIEWNAME = viewName;
		
	},
	
	doSwitchPart: function(viewName) {

		if (Buffalo.View.LAST_VIEWNAME == viewName) {
			return ;
		}

		this.buffalo.transport = XmlHttp.create();
		var nonCachedViewName = viewName;
		try {
			/*Fix for the IE cache*/
			if (/MSIE/.test(navigator.userAgent)) {
				var bfViewHackKey = "_bfviewhackkey_=" + (new Date()).getTime();
				if (viewName.indexOf('?') > -1)	{
					nonCachedViewName += "&" + bfViewHackKey;
				} else {
					nonCachedViewName += "?" + bfViewHackKey;
				}
			}
			this.buffalo.transport.open("GET", nonCachedViewName, this.buffalo.async);/*use get for static page*/
		} catch (e) {
			var msg = "Buffalo View Error: \n\n Cannot find view with name: " + "[" + viewName + "]";
			alert(msg);	
		}
		
		this.buffalo.transport.send(null);
		if (this.buffalo.async) {
			this.buffalo.transport.onreadystatechange = this._viewHandle.bind(this);
			this.buffalo.events["onLoading"](true);
		} else { 
			this._processView();
		}

		Buffalo.View.LAST_VIEWNAME = viewName;

	},

	_viewHandle : function(){
		this._processView();
	},

	_processView : function() {
		if (this.buffalo.transport.readyState == 4) {
			if (this.buffalo.transport.status == '200') {
				var data = this.buffalo.transport.responseText;
				this.buffalo.events["onLoading"](false);
				this._showView(this.partId, this.viewName, data);
			} else {
				this.buffalo.events["onError"](this.buffalo.transport.responseText);
			}
		}
	},

	_showView: function(partId, viewPath, viewData) {
		
		var regexp1 = /<script(.|\n)*?>(.|\n|\r\n)*?<\/script>/ig;
		var regexp2 = /<script(.|\n)*?>((.|\n|\r\n)*)?<\/script>/im;
		
		/* draw the html first */
		$(partId).innerHTML = viewData.replace(regexp1, "");
		
		var result = viewData.match(regexp1);
		if (result) {
			for (var i = 0; i < result.length; i++) {
				var realScript = result[i].match(regexp2);
				this._executeScript(realScript[2], partId);
				/* Note: do not try to write more than one <script> in your view.*/
				/* break;  process only one script element */
			}
		}
		
	},
	
	_executeScript : function(scriptFrag, partId) {
		var scriptContainerId = partId + "_SCRIPT_CONTAINER";
		var obj = $(scriptContainerId);
		var ss = document.getElementsByTagName("SCRIPT");
		if (obj != null) {
			document.body.removeChild(obj);
		}
		var scriptContainer = document.createElement('SCRIPT');
		scriptContainer.setAttribute("id", scriptContainerId);
		scriptContainer.text = scriptFrag;
		document.body.appendChild(scriptContainer);
	} 

}

Object.extend(Buffalo.prototype, {

	switchView: function(viewName) {
		this.switchPart("body", viewName, true);
	},
	
	switchPart : function(partId, viewName, addToHistory) {		
		new Buffalo.View(this).switchPart(partId, viewName, addToHistory);
	}, 
	
	changeLayout : function(newLayout) {
		/* // TODO */
	}
});
Buffalo.Form = {
	formToBean : function(form, boClass, ignoreButton) {
		var object = {};
		if (boClass) { object[Buffalo.BOCLASS] = boClass; } else{
			object[Buffalo.BOCLASS] = "java.util.Map";
		}
		if (typeof(ignoreButton) == "undefined" || ignoreButton == true) {
			ignoreButton = true;
		} else {
			ignoreButton = false;
		}
		
		form = $(form);
		var elements = form.elements;		
		for (var i = 0; i < elements.length;i++) {
			var element = elements[i];
			switch (element.type) {
				case "radio" : 
					if (element.checked) { 
						object[element.name]=element.value
					} 
					break;
				case "checkbox" : 
					if (!object[element.name]) {object[element.name] = new Array()};
					if (element.checked) {
						object[element.name].push(element.value);
					}
					break;
				case "select-one" : 
					var value = '', opt, index = element.selectedIndex;
					if (index >= 0) {
						opt = element.options[index];
						value = opt.value;
						if (!value && !('value' in opt)) value = opt.text;
					}
					object[element.name] = value;
				    break;
				case "select-multiple" :
					if (!object[element.name]) {object[element.name] = new Array()};
					for (var j = 0; j < element.options.length; j++) {
						var opt = element.options[j];
						if (opt.selected) {
							var optValue = opt.value;
							if (!optValue && !('value' in opt)) optValue = opt.text;
							object[element.name].push(optValue);
				      	}
				    }
				    break;
				default : 
					if (ignoreButton) {
						if (element.type != "submit" && element.type != "button" 
							&& element.type != "reset") {
							object[element.name] = element.value;
						}
					} else {
						object[element.name] = element.value;
					}
					break;
			}
		}
		
		return object;
	},
	BeanToform : function(form, object, ignoreButton) {
		if (typeof(ignoreButton) == "undefined" || ignoreButton == true) {
			ignoreButton = true;
		} else {
			ignoreButton = false;
		}		
		form = $(form);
		var valobjec=object;
		var objectname="valobjec";
		var elements = form.elements;
		for (var i = 0; i < elements.length;i++) {
			var element = elements[i];						
			var valuestr=null;
			var objproperty=objectname+"."+element.name;
			try{
			  valuestr=eval(objproperty);
			}  
			catch(ex){};
			if (valuestr!=null){			    	
			     switch (element.type) {
			     	case "radio" :
			     		if (element.value==valuestr) { 
			     			element.checked=true;
			     		}else{
			     		   element.checked=false;
			     	        } 
			     		break;
			     	case "checkbox" : 					
			     		if (element.value==valuestr) { 
			     			element.checked=true;
			     		}else{ 
			     		   element.checked=false;
			     	        }
			     		break;
			     	case "select-one" : 
		     			element.value=valuestr ;
			     	        break;
			     	case "select-multiple" :					
			     		for (var j = 0; j < element.options.length; j++) {
			     			var opt = element.options[j];
			     			var optValue = opt.value;
			     			if (!optValue && !('value' in opt)) optValue = opt.text;
			     			if (optValue==valuestr) opt.selected=true; 
			     	      	}
			     	        break;
			     	default : 
			     		if (ignoreButton) {
			     			if (element.type != "submit" && element.type != "button" 
			     				&& element.type != "reset") {
 		     					element.value=valuestr ;						        							
			     			}
			     		} else {
			     			element.value=valuestr ;

			     		}
			     		break;
			     }
			}		
		}
		
		return objectname;
	},
	
	validate : function(formId) {
		
	}
	
}
