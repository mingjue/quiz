var obj;
function Readata(){
	$.ajax({
		type:"POST",
		url:"data.json",
		dataType:"json",
		async:false,
		success:function(output){
			obj = output;
		}
	});
	
}

function onButtonClick(){
	for(var i=0; i<obj.length; i++){
		$("#col2").append("<div>" +"Question :"+ obj[i].Qa +"</div>");
		for (var j = 0;j <obj[i].Optation.length ; j++) {
			$("#col2").append("<ul><li><input type =\"checkbox\" id = \"myCheck\" name=\"answer"+i+"[]\" value =\""+i+"\">"+obj[i].Optation[j]+"</li></ul>");
		}
	}
}