function GoBack()
{
  window.event.returnValue  = false;
  window.event.cancelBubble = true;
  
  var aTopLevel = [ 'w0atoc.htm', 'w0dtoc.htm', 'w0htoc.htm',
                    'w0itoc.htm', 'w0ptoc.htm', 'w0rtoc.htm', 'w0stoc.htm',
                    'w0ttoc.htm', 'w0utoc.htm', 'w1ktoc.htm', 'goingoffline.htm' ];
                    
  var sPathname = window.location.pathname.toLowerCase();
  
  for (var i = 0; i < aTopLevel.length; i++)
  {
    if (sPathname.indexOf(aTopLevel[i]) != -1)
    {
      return;
    }
  }

  window.history.back();
}
