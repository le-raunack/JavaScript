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
	debugger;
	var hex=document.getElementById("hexadec").value;
	var dec=0; 
	var rem=0; 
	var dic=0; 
	var count=0; 
	var temp=0;
	var sum=0;
	var i=hex.length-1;
	while(i>=0){
		switch(hex.charAt(i)){
			case "A": 
				temp=10; 
				break;
			case "B": 
				temp=11; 
				break;
			case "C": 
				temp=12; 
				break;
			case "D": 
				temp=13; 
				break;
			case "E": 
				temp=14; 
				break;
			case "F": 
				temp=15; 
				break;
			default: 
                temp=parseInt(hex.charAt(i)) ; 
                break;
		}
		temp=temp*Math.pow(16, count);
		sum=sum+temp;
		count=count+1;
		i--;
	}
	
	document.getElementById("decim").value=sum;
}