$().ready(function(){
	var select_time = $("#select_time");
	var input_time =  $("#input_time");
	var submit_time = $("#submit_time");
	var nowdate = new Date();
	/*window.alert(time_type.value);*/
	select_time.change(function(){
		var selected_type = $("#select_time option:selected");
		var typeval = selected_type.val();
		switch (selected_type.val()){
			case "day":
				//window.alert("day");
				input_time.attr("type","date");
				//input_time.attr("value","nowdate.toLocaleDateString()");//这里不能使用，格式不对
				break;
			case "week":
				//window.alert("week");
				input_time.attr("type","week");
				break;
			case "month":
				//window.alert("month");
				input_time.attr("type","month");
				break;
			case "year":
				//window.alert("year");
				input_time.attr("type","number");
				input_time.attr("value",nowdate.getFullYear());//设置默认值，这里虽然格式不对，但是可以转化为number显示
				break;	
		}
			
		//window.alert(selected_type.val());
		//window.alert(time_type.options[0].attr("value"));
		
		/*submit_time.click(function(){
			window.alert(input_time.val());
		});*/
	});
/*	input_time.change(function(){
		window.alert(input_time.val());
	});
	*/
	
});
