function bin2dec(){
	var bin=document.getElementById("binary").value;
	var dec=0, rem=0, dic=0, count=0;
	while(bin>0){
		rem=bin%10;
		dic=rem*Math.pow(2,count);
		dec=dec+dic;
		count++;
		bin=bin/10;
		bin=parseInt(bin);
	}
	dec=parseInt(dec);
	document.getElementById("decimal").value=dec;
}

function Comment(){
	var comment=document.getElementById("comment").value;
	document.getElementById("show").innerHTML= "<li>" + comment + "</li>" ;
	document.getElementById("comment").value="";
	if(comment===""){
		document.getElementById("show").innerHTML="<i>No comments.</i>";
	}
}