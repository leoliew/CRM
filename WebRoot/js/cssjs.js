
function PJRedirect (sURL)
{
  window.location.href = AddUIStringToURL(sURL);
}

function AddUIStringToURL(sURL)
{
  var sUIStr = "";
  if (sUIStr !="")
  {
    if (sURL.lastIndexOf("?")+1 == sURL.length || sURL.lastIndexOf("&")+1 == sURL.length)
      sURL += sUIStr;
    else if (sURL.indexOf("?") == -1)
      sURL += "?" +unescape(sUIStr);
    else
      sURL += "&" +unescape(sUIStr);
  }
  return sURL;
}


var _returnValue_PJDLG;  





function PJShowModalDialog(sURL, oArg, sFeatures, fnOnSessionTimeout)
{
  if (typeof(oArg) != 'object' || oArg == null)
  {
    oArg = new Object();
  }

  oArg.fSessionExpire = false;

  
  _returnValue_PJDLG = window.showModalDialog(sURL, oArg, sFeatures);

  if (oArg.fSessionExpire)
  {
    if (typeof(fnOnSessionTimeout) != 'string' || fnOnSessionTimeout == '')
      window.location.reload(true);
    else
      eval(fnOnSessionTimeout);

    return false;
  }

  return true;
}

var g_bIsFarEastLCID          = true;
var g_bIsHebrewLCID           = false;
var g_bIsFarEastOrHebrewLCID  = true;


var c_nTEXT_SIZE_LARGEST      = 16;
var c_nTEXT_SIZE_LARGER       = 14;
var c_nTEXT_SIZE_MEDIUM       = 12;
var c_nTEXT_SIZE_SMALLER      = 10;
var c_nTEXT_SIZE_SMALLEST     =  9;


var c_nTEXT_SIZE_LARGEST_HC   = 46;
var c_nTEXT_SIZE_LARGER_HC    = 39;
var c_nTEXT_SIZE_MEDIUM_HC    = 29;
var c_nTEXT_SIZE_SMALLER_HC   = 21;
var c_nTEXT_SIZE_SMALLEST_HC  = 16;


var c_nTAB_SIZE_LARGEST       = 145;
var c_nTAB_SIZE_LARGER        = 137;
var c_nTAB_SIZE_MEDIUM        = 132;
var c_nTAB_SIZE_SMALLER       = 130;
var c_nTAB_SIZE_SMALLEST      = 128;
var c_nTAB_SIZE_LARGEST_HC    = 300;
var c_nTAB_SIZE_LARGER_HC     = 250;
var c_nTAB_SIZE_MEDIUM_HC     = 200;
var c_nTAB_SIZE_SMALLER_HC    = 170;
var c_nTAB_SIZE_SMALLEST_HC   = 145; 


var g_nCurrentFontSize = 12;
var g_oTabHeightMap = new TabHeightMap();


function TabHeightMap()
{
  this.Map                = InitDefaultTabHeightMap();
  this.GetHeight          = Internal_GetHeight;
  this.SetCustomTabHeight = Internal_SetCustomTabHeight;
  
  function InitDefaultTabHeightMap()
  {  
    var aMap  = new Array (
      new Array(c_nTEXT_SIZE_LARGEST, 
                c_nTEXT_SIZE_LARGER,
                c_nTEXT_SIZE_MEDIUM,
                c_nTEXT_SIZE_SMALLER,
                c_nTEXT_SIZE_SMALLEST,
                c_nTEXT_SIZE_LARGEST_HC,  
                c_nTEXT_SIZE_LARGER_HC,
                c_nTEXT_SIZE_MEDIUM_HC,
                c_nTEXT_SIZE_SMALLER_HC,
                c_nTEXT_SIZE_SMALLEST_HC),
      new Array(c_nTAB_SIZE_LARGEST,
                c_nTAB_SIZE_LARGER,
                c_nTAB_SIZE_MEDIUM,
                c_nTAB_SIZE_SMALLER,
                c_nTAB_SIZE_SMALLEST,
                c_nTAB_SIZE_LARGEST_HC,
                c_nTAB_SIZE_LARGER_HC,
                c_nTAB_SIZE_MEDIUM_HC,
                c_nTAB_SIZE_SMALLER_HC,
                c_nTAB_SIZE_SMALLEST_HC)
    );
    return aMap;
  } 
  
  function Internal_GetHeight(nTextSize)
  {
    for (var i = 0; i < this.Map[0].length; i++)
    {
      if (this.Map[0][i] == nTextSize)
      {
        return this.Map[1][i];
      }
    }  
    return c_nTAB_SIZE_MEDIUM;

  } 
      
  function Internal_SetCustomTabHeight(aCustomHeight)
  {
    if ((typeof(aCustomHeight) != "object") ||
        (aCustomHeight.length != this.Map[0].length))
    {
      return;
    }
    
    for (var i = 0; i < aCustomHeight.length; i++)
    {
      if (!isNaN(aCustomHeight[i]))
      {
        this.Map[1][i] = Math.abs(aCustomHeight[i]);
      }
    }
  } 
} 
  

function SizingCell_OnResize()
{
  SetBodyFontSize()
}


function SetBodyFontSize()
{
  var nCurrentFontSize = GetCurrentFontSize();
  
  if (nCurrentFontSize != g_nCurrentFontSize)
  {  
    g_nCurrentFontSize = nCurrentFontSize;
  
    if (IsBrowserInHighContrastMode())
    {
      AdjustBodyForHighContrast();
    }

    
    if (typeof(SetTabControlHeight) != "undefined")
    {
      SetTabControlHeight();
    }
    
    
    
    if (typeof(idSidepaneLinks) != "undefined")
    {
      idSidepaneLinks.innerHTML = idSidepaneLinks.innerHTML;
    }

    
    if (typeof(Page_TextSizeChange) != "undefined")
    {
      Page_TextSizeChange();
    }
  }
}


function IsBrowserInHighContrastMode()
{
  var bRetVal = false;

  switch (g_nCurrentFontSize)
  {
    
    case c_nTEXT_SIZE_LARGEST_HC:
    case c_nTEXT_SIZE_LARGER_HC:
    case c_nTEXT_SIZE_MEDIUM_HC:
    case c_nTEXT_SIZE_SMALLER_HC:
      bRetVal = true;
      break;
      
    default:
      bRetVal = false;
      break;
  }
  return bRetVal; 
}


function AdjustBodyForHighContrast()
{
  var nMultiplier = 1;
  
  if ((typeof(g_bIsDialogPage) != "undefined") && (g_bIsDialogPage == true))
  {
    nMultiplier = 0.65;
  }
  else
  {
    nMultiplier = 0.37;
  }
  
  var oStyle = document.styleSheets[0];
  
  var nDefaultBodySize = parseInt(oStyle.rules.item(1).style.fontSize);
  var nHighContrastBodySize = parseInt(nDefaultBodySize * nMultiplier);
  
  oStyle.rules.item(0).style.fontSize = nHighContrastBodySize.toString() + "%";
}


function GetCurrentFontSize()
{
  
  var nCurrFS = parseFloat(idSizingCell.currentStyle.fontSize);
  var nBodyFS = parseFloat(document.body.currentStyle.fontSize);
  var nRetVal = Math.round(nCurrFS / (nBodyFS / 100));
  return nRetVal;
}

function IsRSDirty( rs )
{
  if ((rs != null) && (rs.RecordCount > 0))
  {
    for(rs.MoveFirst(); !rs.EOF; rs.MoveNext())
    {
       if ((rs.Status == 2) || (rs.Status == 1) || (rs.Status == 4) )
         return true;
    }
  }
  return false;
}

var sHexLetters = "0123456789ABCDEF";
function Int2Hex(number)
{
	number = parseInt(number);	
	if(number<0)
		return '-' + Int2Hex(-number);
	var str = "";
	do
	{
		str = sHexLetters.charAt(number%16) + str;
		number= (number-number%16)/16;
	} while(number>0);
	return str;
}

function escapeProperly(str)
{
  var UTF8_1ST_OF_2         = 0xc0     
  var UTF8_1ST_OF_3         = 0xe0     
  var UTF8_1ST_OF_4         = 0xf0     
  var UTF8_TRAIL            = 0x80     
  var HIGH_SURROGATE_BITS   = 0xD800
  var LOW_SURROGATE_BITS    = 0xDC00
  var SURROGATE_6_BIT       = 0xFC00
  var SURROGATE_ID_BITS     = 0xF800
  var SURROGATE_OFFSET      = 0x10000

  var strOut = "";
  var strByte = ""
  var ix = 0;

  for (ix = 0; ix < str.length; ix++)
  {
	  var charCode = str.charCodeAt(ix);
	  if((charCode >= 97 && charCode <= 122) ||
		   (charCode >= 65 && charCode <= 90)  ||
		   (charCode >= 48 && charCode <= 57))
	  {
		  strOut += str.charAt(ix);
	  }
	  else if(charCode <= 0x0f)
	  {
		  strOut += "%0" + charCode.toString(16);
	  }
	  else if(charCode <= 0x7f)
	  {
		  strOut += "%" + charCode.toString(16);
	  }
	  else if(charCode <= 0x07ff)
	  {
		  strByte = UTF8_1ST_OF_2 | (charCode >> 6);
		  strOut += "%" + strByte.toString(16) 
		  strByte = UTF8_TRAIL | (charCode & 0x003f);
		  strOut += "%" + strByte.toString(16);
	  }
	  else if((charCode & SURROGATE_6_BIT) != HIGH_SURROGATE_BITS)
	  {
		  strByte = UTF8_1ST_OF_3 | (charCode >> 12);
		  strOut += "%" + strByte.toString(16);
		  strByte = UTF8_TRAIL | ((charCode & 0x0fc0) >> 6);  
		  strOut += "%" + strByte.toString(16);
		  strByte = UTF8_TRAIL | (charCode & 0x003f);         
		  strOut += "%" + strByte.toString(16);
	  }
    else if(ix < str.length - 1)
	  {
		  var charCode = (charCode & 0x03FF) << 10;           
		  ix ++; 
		  var nextCharCode = str.charCodeAt(ix);

		  charCode |= nextCharCode & 0x03FF;                  
		  charCode += SURROGATE_OFFSET;

		  strByte =UTF8_1ST_OF_4 | (charCode >> 18);
		  strOut += "%" + strByte.toString(16);
		  strByte =UTF8_TRAIL | ((charCode & 0x3f000) >> 12); 
		  strOut += "%" + strByte.toString(16);
		  strByte =UTF8_TRAIL | ((charCode & 0x0fc0) >> 6);   
		  strOut += "%" + strByte.toString(16);
		  strByte =UTF8_TRAIL | (charCode & 0x003f);          
		  strOut += "%" + strByte.toString(16);
	  }
  }
  return strOut;

} 







function TrimSpaces(str) 
{
  return str.replace(/^\s*/, "").replace(/(\s*)$/, "");
} 

var bHelpExpanded = false;
var g_SkipBeforeUnload = false;


function Body_OnResize()
{
  if (typeof(Workspace_OnResize) != "undefined") {
    Workspace_OnResize();
    return;
  }

  if (typeof(Grid_OnResize) != "undefined") 
    Grid_OnResize();
}


function ActionsPaneCollapse_OnClick()
{
  var e = new Error();
  
  window.event.cancelBubble = true;
  window.event.returnValue = false;
  
  if (event.keyCode == 0 || event.keyCode == 13)
  {
    idActionsPane.style.display = "none";
    idActionsTable.style.display = "none";
    idActionsPaneCollapsed.style.display = "";
    idActPaneExpandArrow.style.display = "";
    idShellSidePane.disabled = true;
    RepaintSelectElementsForRTL();
    try
    {
      idActPaneExpandArrow.focus();
    }
    catch (e)
    {
      
    }
  }
}


function ActionsPaneExpand_OnClick()
{
  var e = new Error();
  
  window.event.cancelBubble = true;
  window.event.returnValue = false;

  if (event.keyCode == 0 || event.keyCode == 13)
  {  
    idActionsPane.style.display = "";
    idActionsTable.style.display = "";
    idActionsPaneCollapsed.style.display = "none";
    idActPaneExpandArrow.style.display = "none";
    idShellSidePane.disabled = false;
    RepaintSelectElementsForRTL();
    try
    {
      idActPaneCollapseArrow.focus();
    }
    catch (e)
    {
      
    }    
  }
}


function Help_OnClick()
{
  event.cancelBubble = true;
  event.returnValue  = false;

  if (event.keyCode == 0 || event.keyCode == 13)
  {    
    if (idHelpPane.style.display == "none")
    {
      g_bHelpPaneExpanded = true;
      idHelpPane.style.display = "";
      idPageHeaderHelpPaneBuffer.style.display = "";
      idHelpFrameDiv.style.display = "";
      
      
      idCloseHelpLink.tabIndex = 0;
      document.all.idHelpFrame.tabIndex = 0;
      
      RepaintSelectElementsForRTL();
      
      with (document.body)
      {
        scrollTo(scrollWidth, scrollTop);
      }

    }
    else
    {
      CloseHelp();
    }
  }
}


function CloseHelp_OnClick()
{
  event.cancelBubble = true;
  event.returnValue  = false;

  if (event.keyCode == 0 || event.keyCode == 13)
  {    
    CloseHelp();
  }
}


function CloseHelp()
{
  g_bHelpPaneExpanded = false;
  idHelpPane.style.display = "none";
  idPageHeaderHelpPaneBuffer.style.display = "none";
  idHelpFrameDiv.style.display = "none";
  
  
  
  idCloseHelpLink.tabIndex = -1;
  document.all.idHelpFrame.tabIndex = -1;
  
  RepaintSelectElementsForRTL();
      
  with (document.body)
  {
    scrollTo(0, scrollTop);
  }
}


function SubMenuExpander_OnClick(sSubMenuID)
{
  event.cancelBubble = true;
  event.returnValue  = false;
  if (event.keyCode == 0 || event.keyCode == 13) {
    if (document.all(sSubMenuID + "Leaves").style.display == "none") {
      document.all(sSubMenuID + "Expander").src = "../images/minus.gif";
      document.all(sSubMenuID + "Leaves").style.display = "block";
    }
    else {
      document.all(sSubMenuID + "Expander").src = "../images/plus.gif";
      document.all(sSubMenuID + "Leaves").style.display = "none";
    }
  }
}


function Body_Onload()
{
  WaitCursor.SetWaitCursor();  

  
  
  if (typeof(MSPJGrid_PreProcess) != "undefined")
    MSPJGrid_PreProcess();

  if (typeof(Shell_OnLoad) != "undefined")
    Shell_OnLoad();

  if (typeof(Workspace_OnLoad) != "undefined")
    Workspace_OnLoad();

  if (typeof(MSPJGrid_PostProcess) != "undefined")
    MSPJGrid_PostProcess();
    
  SetBodyFontSize();

  if (typeof(SetTabControlHeight) != "undefined")
    SetTabControlHeight();
    
  if (typeof(Shell_EnableTitleButtons) != "undefined")
    Shell_EnableTitleButtons();
    
  if (typeof(Shell_EnablePageButtons) != "undefined")
    Shell_EnablePageButtons();    

  
  
  WaitCursor.RestoreCursor();

  if (typeof(Ultimate_OnLoad) != 'undefined')
    Ultimate_OnLoad();
}


function Body_OnBeforeUnload()
{
  if (g_SkipBeforeUnload)
    return;

  if (typeof(Shell_OnBeforeUnload) != "undefined")
    Shell_OnBeforeUnload();

  if (typeof(Workspace_OnBeforeUnload) != "undefined")
    Workspace_OnBeforeUnload();

  if (typeof(oXMLDataSpace) != "undefined" && oXMLDataSpace != null)
    oXMLDataSpace.Save();
}


function Body_OnUnload()
{
  if (typeof(Workspace_OnUnload) != "undefined")
    Workspace_OnUnload();

  if (typeof (Shell_OnUnload) != "undefined")
    Shell_OnUnload();
}


function GetCustomCSSValue(sSelector, sAttribute)
{
  var bIsHighColor = (screen.colorDepth > 8);
  
  switch (sSelector.toLowerCase())
  {
    case "sectiontabtopborder":
      return bIsHighColor ? "#2955BD" : "#336699";
      break;
      
    case "sectiontabbackground":
      switch (sAttribute.toLowerCase())
      {
        case "background-color":
          return bIsHighColor ? "#CBDEFB" : "#D4D0C8";
          break;
        
        case "border":
          return bIsHighColor ? "1px solid #9CBAF7" : "1px solid #B2B2B2";
          break;
      }
      break;
      
    case "shellbannerframe":
      return bIsHighColor ? "#2752B1" : "#336699";
      break;

    case "toolbarbackground":
      switch (sAttribute.toLowerCase())
      {
        case "background-color":
          return bIsHighColor ? "#CBDEFB" : "#F1F1F1";
          break;
        
        case "border":
          return bIsHighColor ? "1px solid #95B7F3" : "1px solid #D7D7D7";
          break;
          
        case "margin-top":
          return "8px";
          break;
      }
      break;
  }
}

function SetGradientFilter(sStartColorHex, sEndColorHex)
{
  if ( (screen.colorDepth > 8) && !IsBrowserInHighContrastMode() )
  {
    return "progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr=" + sStartColorHex + ", endColorstr=" + sEndColorHex + ")";
  }
}

