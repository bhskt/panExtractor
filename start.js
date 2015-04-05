var exec=require("child_process").exec,
	moment=require("moment"),
	year=new Date().getFullYear()-process.argv[4],
	range=[],
	results=[],
	running,
	captcha=process.argv[5];
if(process.argv[6]!=undefined){
	for(var loopYear=(year-10);loopYear<=(year+10);loopYear++){
		range.push(process.argv[6]+"/"+loopYear);
	}
} else{
	for(var month=1;month<=12;month++){
		for(var day=1;day<=31;day++){
			if(day<10){
				var strDay="0"+day.toString();
			} else{
				var strDay=day.toString();
			}
			if(month<10){
				var strMonth="0"+month.toString();
			} else{
				var strMonth=month.toString();
			}
			range.push(strDay+"/"+strMonth+"/"+year);
		}
	}
}
function submit(){
	this.date=range.pop();
	if(this.date && moment(this.date,"DD/MM/YYYY").isValid()){
		console.log(range.length);
		exec("php submit.php "+process.argv[2]+" "+process.argv[3]+" "+this.date+" "+captcha,function(e,data){
			if(data){
				console.log(data);
				results.push(data);
			}
			return submit();
		}.bind(this));
	} else if(range.length) {
		return submit();
	} else {
		console.log(results);
		process.exit();
	}
}
for(running=0;running<10;running++){
	submit();
}
