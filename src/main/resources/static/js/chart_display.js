$().ready(function(){
	
	var query = $(".query_btn");
	var selected = $(".sel_flowtype");
	var chart1 = $(".chart1");
	var chart2 = $(".chart2");
	var chart3 = $(".chart3");
	
	function showChar1(){
		
		chart1.css("display","block");
		chart2.css("display","none");
		chart3.css("display","none");
		
	}
	
	function showChar2(){
		chart1.css("display","none");
		chart2.css("display","block");
		chart3.css("display","none");
	}
	function showChar3(){
		chart1.css("display","none");
		chart2.css("display","none");
		chart3.css("display","block");
	}
	
	
	query.click(function() {
		if(selected.val() == "quantity"){
			showChar1();
		}
		else if(selected.val() == "density"){
			showChar2();
		}
		else{
			showChar3();
		}
	});
	
	
});