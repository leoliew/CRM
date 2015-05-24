<style MEDIA=SCREEN>
    BODY{
	BACKGROUND: #808080;
	CURSOR: default;
	MARGIN: 0px;
	PADDING: 0px;
	TEXT-ALIGN: center
	}
    .RptPage{
	BACKGROUND-COLOR: white;
	BORDER: black 1px solid;
	FONT-FAMILY: 宋体;
	FONT-SIZE: 9pt;
	HEIGHT: 530pt;
	WIDTH: 684pt;
	TEXT-ALIGN: center;
	}
    .RptPageMin{
	BACKGROUND-COLOR: white;
	BORDER: black 1px solid;
    	FONT-FAMILY: 宋体;
	FONT-SIZE: 4pt;
	HEIGHT: 265pt;
	WIDTH: 342pt;
	TEXT-ALIGN: center;
	}
    .Hide{
	DISPLAY: none
	}
    .RptPage .RptBody{
	FONT-FAMILY: 宋体;
	FONT-SIZE: 9pt;
	HEIGHT: 18px
	}
   .RptPage .RptCondition{
	FONT-FAMILY: 宋体;
	FONT-SIZE: 7pt;
	HEIGHT: 16px
	}
    .RptPage .RptFields{
	FONT-FAMILY: 宋体;
	FONT-SIZE: 9pt;
	FONT-WEIGHT: bold;
	HEIGHT: 18px;
	TEXT-ALIGN: center;
	}
    .RptPage .RptHead{
	FONT-FAMILY: 宋体;
	FONT-SIZE: 9pt;
	HEIGHT: 20px
	}
    .RptPage .RptHr{
	COLOR: black;
	HEIGHT: 1px
	}
    .RptPage .RptName{
	FONT-FAMILY: 宋体;
	FONT-SIZE: 12pt;
	FONT-WEIGHT: bold;
	HEIGHT: 20px
	}
    .RptPage .RptTotal{
	FONT-FAMILY: 宋体;
	FONT-SIZE: 9pt;
	FONT-WEIGHT: bold;
	HEIGHT: 18px
	}
	.RptPage .RptCompany {
	FONT-FAMILY: 宋体;
	FONT-SIZE: 10pt;
	HEIGHT: 18px;
	FONT-WEIGHT: bold;
	}
	.RptPage .RptCompanyBig {
	FONT-FAMILY: 宋体;
	FONT-SIZE: 10pt;
	HEIGHT: 18px;
	FONT-WEIGHT: bold;
	}
	.RptPage .RptAddress{
	FONT-FAMILY: 宋体;
	FONT-SIZE: 9pt;
	HEIGHT: 20px
	}
    .RptPageMin .RptHead{
	FONT-FAMILY: 宋体;
	FONT-SIZE: 4pt;
	HEIGHT: 10px
	}
    .RptPageMin .RptCondition{
	FONT-FAMILY: 宋体;
	FONT-SIZE: 3pt;
	HEIGHT: 8px
	}
    .RptPageMin .RptHr{
	COLOR: black;
	HEIGHT: 1px
	}
    .RptPageMin .RptName{
	FONT-FAMILY: 宋体;
	FONT-SIZE: 5pt;
	FONT-WEIGHT: bold;
	HEIGHT: 10px
	}
    .RptPageMin .RptFields{
	FONT-FAMILY: 宋体;
	FONT-SIZE: 4pt;
	FONT-WEIGHT: bold;
	HEIGHT: 9px;
	TEXT-ALIGN: center;
	}
    .RptPageMin .RptBody{
	FONT-FAMILY: 宋体;
	FONT-SIZE: 4pt;
	HEIGHT: 9px
	}
    .RptPageMin .RptTotal{
	FONT-FAMILY: 宋体;
	FONT-SIZE: 4pt;
	FONT-WEIGHT: bold;
	HEIGHT: 9px
	}
	.RptPageMin .RptCompany {
	FONT-FAMILY: 宋体;
	FONT-SIZE: 4pt;
	HEIGHT: 9px;
	FONT-WEIGHT: bold;
	}
	.RptPageMin .RptCompanyBig {
	FONT-FAMILY: 宋体;
	FONT-SIZE: 5pt;
	HEIGHT: 9px;
	FONT-WEIGHT: bold;
	}
	.RptPageMin .RptAddress{
	FONT-FAMILY: 宋体;
	FONT-SIZE: 5pt;
	HEIGHT: 10px
	}
	.RptBorderL{
	border-left: solid 1 black;
	}
	.RptBorderT{
	border-top: solid 1 black;
	}
	.RptBorderB{
	border-bottom: solid 1 black;
	}
	.RptBorderR{
	border-right: solid 1 black;
	}
</style>
<script language=javascript>
<!--
var pgLandscape = 1;
document.oncontextmenu = Function("return false;");

var m_showreport_timer = null;
function showReport()
{
	if (m_showreport_timer != null) window.clearTimeout(m_showreport_timer);
	try
	{
		top.menu.getReportPage();
		window.onscroll = top.menu.window_onscroll;
		//top.menu.divContain.style.visibility = "hidden";
		replaceTitle();
		return;
	}
	catch(e)
	{
		m_showreport_timer = window.setTimeout("showReport()",500);
	}
}

function replaceTitle()
{
	var aPageIndex = document.getElementsByTagName("SPAN") ;									
	var iBeforeTitle = 0 ;
	
	for (var iIndex=0;iIndex<aPageIndex.length; iIndex++)
	{
		iBeforeTitle ++ ;
		aPageIndex[iIndex].innerHTML = "第" + iBeforeTitle + "页 共" + aPageIndex.length + "页";
	}
}
//-->
</script>
