function bin2dec(){
	var bin=document.getElementById("binary").value;
	var dec=0, rem=0, dic=0, count=0;
	while(bin>0){
		rem=bin%10;
		dic=rem*Math.pow(2,count);
		dec=dec+dic;
		count++;
		bin=Math.floor(bin/10);
	}
	document.getElementById("decimal").value=dec;
}

/*function Comment(){
	var comment=document.getElementById("comment").value;
	document.getElementById("show").innerHTML= "<li>" + comment + "</li>" ;
	document.getElementById("comment").value="";
	if(comment===""){
		document.getElementById("show").innerHTML="<i>No comments.</i>";
	}
}*/

function oct2dec(){
	var oct=document.getElementById("octal").value;
	var dec=0, rem=0, dic=0, count=0;
	while(oct>0){
		rem=oct%10;
		dic=rem*Math.pow(8,count);
		dec=dec+dic;
		count++;
		oct=Math.floor(oct/10);
	}
	document.getElementById("decima").value=dec;
}

function hex2dec(){
	var hex=document.getElementById("hexadec").value;
	var dec=0, rem=0, dic=0, count=0;
	while(hex>0){
		rem=hex%10;
		if(rem==='A'||rem==='a'){ rem=10; }
		else if(rem==='B'||rem==='b'){ rem=11; }
		else if(rem==='C'||rem==='c'){ rem=12; }
		else if(rem==='D'||rem==='d'){ rem=13; }
		else if(rem==='E'||rem==='e'){ rem=14; }
		else if(rem==='F'||rem==='f'){ rem=15; }
		dic=rem*Math.pow(16,count);
		dec=dec+dic;
		count++;
		hex=Math.floor(hex/10);
	}
	document.getElementById("decim").value=dec;
}