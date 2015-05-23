//构造函数 @str 初始化的显示文字
function Loading(str) {
	var t_id = 0;
	var pos = 0;
	var dir = 2;
	var len = 0;
	var s_id = 0;
	if (!$("loader_container")) {
		document.body.innerHTML += "<div id=\"loader_container\" style=\"display:none\"><div id=\"loader\"><div id=loadingmessage align=\"center\">" + str + "</div><div id=\"loader_bg\"><div id=\"progress\"> </div></div></div></div>";
	}
	this.backs = new BackImg();
	this.animate = function () {
		var elem = $("progress");
		if (elem != null) {
			if (pos == 0) {
				len += dir;
			}
			if (len > 32 || pos > 179) {
				pos += dir;
			}
			if (pos > 179) {
				len -= dir;
			}
			if (pos > 179 && len == 0) {
				pos = 0;
			}
			elem.style.left = pos;
			elem.style.width = len;
		}
	};
//显示loading
	this.show_loading = function () {
		if (this.t_id != 0) {
			t_id = setInterval(this.animate, 20);
		}
		s_id = setInterval(this.screenline, 20);
		$("loader_container").style.display = "inline";
		this.backs.show();
	};
	this.chengstr = function (newstr) {
		if ($("loadingmessage")) {
			$("loadingmessage").innerHTML = newstr;
		}
	};
//释放loading
	this.remove_loading = function () {
		clearInterval(t_id);
		clearInterval(s_id);
		var targelem = $("loader_container");
		targelem.style.display = "none";
   //targelem.style.visibility='hidden';
		this.backs.closeed();
	};
	this.screenline = function () {
		if ($("loader_container")) {
			if (document.documentElement) {
				document.documentElement.scrollLeft = 0;
				document.documentElement.scrollTop = 0;
			} else {
				document.body.scrollLeft = 0;
				document.body.scrollTop = 0;
			}
		}
	};
	if ($("loadingmessage")) {
		this.chengstr(str);
	}
	this.backs.show();
}
function BackImg() {
	var ietw = getPageSize();
	if (!$("backimg")) {
		document.body.innerHTML += "<div id=\"backimg\"></div>";
	}
	$("backimg").style.height = ietw.pageHeight + "px";
	$("backimg").style.width = ietw.pageWidth + "px";
  //恢复loading
	this.show = function () {
		$("backimg").style.display = "inline";
	};
//隐藏loading
	this.closeed = function () {
		$("backimg").style.display = "none";
	};
}
function getPageSize() {
	var isIe = window.ActiveXObject ? true : false;
	var isGecko = (navigator.userAgent.toLowerCase().indexOf("gecko") > -1);
	var isStrict = (document.documentElement && document.documentElement.clientHeight);
	var oDocBody = document.body;
	var iScrollWidth, iScrollHeight;
	if (isGecko) {
		iScrollWidth = oDocBody.scrollWidth;
		iScrollHeight = window.innerHeight + window.scrollMaxY;
	} else {
		iScrollWidth = (oDocBody.scrollWidth > oDocBody.offsetWidth) ? oDocBody.scrollWidth : oDocBody.offsetWidth;
		iScrollHeight = (oDocBody.scrollHeight > oDocBody.offsetHeight) ? oDocBody.scrollHeight : oDocBody.offsetHeight;
	}
	if (!isIe) {
		this.windowWidth = window.innerWidth;
		this.windowHeight = window.innerHeight;
	} else {
		var oDocObj = (isStrict) ? document.documentElement : oDocBody;
		this.windowWidth = oDocObj.clientWidth;
		this.windowHeight = oDocObj.clientHeight;
	}
	this.pageHeight = (iScrollHeight < this.windowHeight) ? this.windowHeight : iScrollHeight;
	this.pageWidth = (iScrollWidth < this.windowWidth) ? this.windowWidth : iScrollWidth;
	return this;
}

