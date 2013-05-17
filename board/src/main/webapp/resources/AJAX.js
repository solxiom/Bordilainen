
function ajaxFunction()
{
	var XMLHttpRequestObject = false;
	
	if (window.XMLHttpRequest)
  		{// code for IE7+, Firefox, Chrome, Opera, Safari
  			XMLHttpRequestObject= new XMLHttpRequest();
  		}
	else if (window.ActiveXObject)
 	   {// code for IE6, IE5
  			XMLHttpRequestObject= new ActiveXObject("Microsoft.XMLHTTP");
  	   }
	
	if (!XMLHttpRequestObject)

  {

              alert("Your browser does not support Ajax.");

              return false;

  }
	return XMLHttpRequestObject;
}

//var ajaxRequest = ajaxFunction();

