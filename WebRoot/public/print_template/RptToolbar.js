function ReportTools_initialize()
{
	trTools.onmouseover	= Tools_onmouseover;
	trTools.onmouseout	= Tools_onmouseout;
	trTools.onmousedown	= Tools_onmousedown;
	trTools.onmouseup	= Tools_onmouseup;
	trTools.onmousemove	= Tools_onmousemove;
}

function Tools_onmouseover()
{
	var src = event.srcElement;
	while(src.tagName != "TD")
	{
		if (src.tagName == "TABLE")return false;
		src = src.parentElement;
	}
	if (src.innerHTML == "")return false;
	src.className = "checkRT";
	return true;
}

function Tools_onmousemove()
{
	if (event.button > 0)return false;
	Tools_onmouseover();
}

function Tools_onmouseout()
{
	var src = event.srcElement;
	while(src.tagName != "TD")
	{
		if (src.tagName == "TABLE")return false;
		src = src.parentElement;
	}
	if (src.innerHTML == "")return false;
	src.className = "uncheckRT";
	return true;
}

function Tools_onmousedown()
{
	var src = event.srcElement;
	while(src.tagName != "TD")
	{
		if (src.tagName == "TABLE")return false;
		src = src.parentElement;
	}
	if (src.innerHTML == "")return false;
	src.className = "clickRT";
	return true;
}

function Tools_onmouseup()
{
	var src = event.srcElement;
	while(src.tagName != "TD")
	{
		if (src.tagName == "TABLE")return false;
		src = src.parentElement;
	}
	if (src.innerHTML == "")return false;
	src.className = "uncheckRT";
	return true;
}

var m_iPageNo = 0;
var m_aPage = new Array();
function getReportPage()		//获得页面对象数组
{
	var aElement = top.main.document.getElementsByTagName("DIV");
	var iPageIndex = 0;
	for (var i=0; i<aElement.length; i++)
	{
		if (aElement[i].className.toUpperCase() == "RPTPAGE")
		{
			m_aPage[iPageIndex] = aElement[i];
			iPageIndex += 1;
		}
	}
}

var m_iPageHeight = 684;
function window_onscroll()
{
	m_iPageNo = Math.floor(((top.main.document.body.scrollTop + top.main.screen.height/2-150)*3/4)/m_iPageHeight);
	top.status = "第" + (m_iPageNo+1)+"页";
}

function toMax()
{
	for (var i=0; i<m_aPage.length; i++)
		m_aPage[i].className = "RptPage";
	m_iPageHeight = 684;
}

function toMin()
{
	for (var i=0; i<m_aPage.length; i++)
		m_aPage[i].className = "RptPageMin";
	m_iPageHeight = 342;
}

function previouspage()
{
    if (m_iPageNo > 0)
	{
	    m_iPageNo -= 1;
        try
		{
			m_aPage[m_iPageNo].scrollIntoView();
		}
		catch(e)
		{}
	}
	return true;
}

function nextpage()
{
	if (m_iPageNo < m_aPage.length-1)
	{
		m_iPageNo += 1;
		try
		{
			m_aPage[m_iPageNo].scrollIntoView();
		}
		catch(e)
		{}
	}
	return true;
}

function setpage()
{
    mswebbrowser.execWB(8,1);
	return true;
}

function printpage()
{
	try
	{
		if (top.main.pgLandscape == 1)
			alert("请将页面设置中的纸型设为横向。");
		top.main.focus();
		mswebbrowser.execWB(6,1);
	}
	catch(e)
	{
		top.returnValue = false;
		return false;
	}
	top.returnValue = true;
}

function exitprint()
{
	top.returnValue = false;
	top.close();
}
