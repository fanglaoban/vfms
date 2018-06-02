$().ready(function(){
		/*  阈值设置弹出框     */
		
	
		 //弹出文本性提示框
		 $("#addWarning_btn").click(function(){
			 $("#addWarning_pop").fadeIn();
			 $(".pop_cont h3").text("增加联动预警");
			 $(".trueBtn").click(function(){
				
					warning.css("visibility","hidden");	
					$("#addWarning_pop").fadeOut();
					
				 $(".trueBtn").unbind("click");//这里需要给trueBtn解除时间绑定，否则会多次触发嵌套的其他
			 });
		 });
		 
		 
		 $("#issueWarning_btn").click(function(){
			 $("#issueWarning_pop").fadeIn();
			 $(".pop_cont h3").text("发布紧急预警");
			 $(".trueBtn").click(function(){
				 
				 
					warning.css("visibility","hidden");	
					$("#issueWarning_pop").fadeOut();
					
					$(".trueBtn").unbind("click");//这里需要给trueBtn解除时间绑定，否则会多次触发嵌套的其他
			 });
		 });
		 $(".modset_btn").click(function(){
			 $("#addWarning_pop").fadeIn();
			 $(".pop_cont h3").text("修改联动预警");
			 $(".trueBtn").click(function(){
				
					warning.css("visibility","hidden");	
					$("#addWarning_pop").fadeOut();
					
				 $(".trueBtn").unbind("click");//这里需要给trueBtn解除时间绑定，否则会多次触发嵌套的其他
			 });
		 });
		 
		 $(".delset_btn").click(function(){
				var del = $(this);
				var tr = del.parent().parent();
				tr.remove();
				
		});
		 
		 
		 var thrlevel = $(".sel_thrlevel");
		 var thrtype = $(".sel_thrtype");

		 thrlevel.change(function(){
			// window.alert(thrlevel[0].value);
			 var level = thrlevel.val();
			 
			 switch (level){
				case "lv1":
		 	 		thrtype.find("option[value='ty1']").attr("selected","selected");
		 	 		break;
		 	 	case "lv2":
		 	 		thrtype.find("option[value='ty2']").attr("selected","selected");
		 	 		break;
		 	 	case "lv3":
		 	 		thrtype.find("option[value='ty3']").attr("selected","selected");
		 	 		break;
		 	 	case "lv4":
		 	 		thrtype.find("option[value='ty4']").attr("selected","selected");
		 	 		break;
		 	 	case "lv5":
		 	 		thrtype.find("option[value='ty5']").attr("selected","selected");
		 	 		break;
			 }
		 });
		 thrtype.change(function(){
				// window.alert(thrlevel[0].value);
				 var type = thrtype.val();
				 switch (type){
					case "ty1":
						thrlevel.find("option[value='lv1']").attr("selected","selected");
			 	 		break;
			 	 	case "ty2":
			 	 		thrlevel.find("option[value='lv2']").attr("selected","selected");
			 	 		break;
			 	 	case "ty3":
			 	 		thrlevel.find("option[value='lv3']").attr("selected","selected");
			 	 		break;
			 	 	case "ty4":
			 	 		thrlevel.find("option[value='lv4']").attr("selected","selected");
			 	 		break;
			 	 	case "ty5":
			 	 		thrlevel.find("option[value='lv5']").attr("selected","selected");
			 	 		break;
			 }
		});
		 	
		
		/*
		 thrname.blur(function(){
			 if(thrname.attr("value") == ""){
				 warning.text("请输入阈值名称！");
				 warning.css("visibility","visible");
			 }
		 });

		 thrvalue.blur(function(){
			 var reg =/^\d{1,6}$/;
			 if(thrvalue.attr("value") == ""){
				 warning.text("请输入阈值数值！");
				 warning.css("visibility","visible");
			 }else if(!reg.test(thrvalue.attr("value")) ){
				 warning.text("阈值输入不合法！");
				 warning.css("visibility","visible");
			 }
		 });
		 
		 thrname.focus(function(){
			 warning.css("visibility","hidden");
		 });
		 thrvalue.focus(function(){
			 warning.css("visibility","hidden");
		 });
		 */
		 //弹出：确认按钮
		
	
		/* var level = thrlevel.val();
		 switch (level){
			case "lv1":
				level_text = thrlevel.find("option[value='lv1']").text();
				type_text = thrtype.find("option[value='ty1']").text();
				break;
			case "lv2":
				thrlevel.find("option[value='lv2']").text();
				type_text = thrtype.find("option[value='ty2']").text();			 	
				break;
			case "lv3":
				level_text = thrlevel.find("option[value='lv3']").text();
				type_text = thrtype.find("option[value='ty3']").text();			 	
				break;
			case "lv4":
				level_text = thrlevel.find("option[value='lv4']").text();
				type_text = thrtype.find("option[value='ty4']").text();			 	
				break;
			case "lv5":
				level_text = thrlevel.find("option[value='lv5']").text();
				type_text = thrtype.find("option[value='ty5']").text();			 	
				break;
		 }
		 */
			
		 
		 var level_text ;
		 var type_text ;
		 var warning = $(".pop_cont_warning");
		 var thrname = $(".thrname");
		 var thrvalue = $(".thrvalue");
		 function islegal(){
			 var reg =/^\d{1,6}$/;
			 if(thrname.attr("value") == ""){
				 warning.text("请输入阈值名称！");
				 warning.css("visibility","visible");
				 return false;
			 }else if(thrvalue.attr("value") == ""){
				 warning.text("请输入阈值数值！");
				 warning.css("visibility","visible");
				 return false;
			 }else if(!reg.test(thrvalue.attr("value")) ){
				 warning.text("阈值输入不合法！");
				 warning.css("visibility","visible");
				 return false;
			 }else{
				 return true;
			 }
		 }
		 /*$(".trueBtn").click(function(){
			 var reg =/^\d{1,6}$/;
			 if(thrname.attr("value") == ""){
				 warning.text("请输入阈值名称！");
				 warning.css("visibility","visible");
			 }else if(thrvalue.attr("value") == ""){
				 warning.text("请输入阈值数值！");
				 warning.css("visibility","visible");
			 }else if(!reg.test(thrvalue.attr("value")) ){
				 warning.text("阈值输入不合法！");
				 warning.css("visibility","visible");
			 }else{
				 $(".pop_bg").fadeOut();
			 }
		
			 });
			 */
		 
		
		 
		 //弹出：取消或关闭按钮
		 $(".falseBtn").click(function(){
			 
			 $(".pop_bg").fadeOut();
		});
		 
		
		 
		 
});

