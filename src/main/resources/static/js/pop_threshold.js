$().ready(function(){
		/*  阈值设置弹出框     */
		
	
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
		 
		 $(".addthr_btn").click(function(){
			 $(".pop_thr").fadeIn();
			 $(".pop_cont h3").text("增加阈值");
			 
			 $(".trueBtn").click(function(){
				 if(islegal()){
				 /* var reg =/^\d{1,6}$/;
				 if(thrname.attr("value") == ""){
					 warning.text("请输入阈值名称！");
					 warning.css("visibility","visible");
				 }else if(thrvalue.attr("value") == ""){
					 warning.text("请输入阈值数值！");
					 warning.css("visibility","visible");
				 }else if(!reg.test(thrvalue.attr("value")) ){
					 warning.text("阈值输入不合法！");
					 warning.css("visibility","visible");
				 }
				 else{*/
					warning.css("visibility","hidden");	
					$(".pop_thr").fadeOut();
					level_text=  $(".pop_thr").find(".sel_thrlevel").find('option:selected').text();//注意，这里的赋值必须放在点击事件内，否则获得的值只会是默认的第一个option
					type_text =  $(".pop_thr").find(".sel_thrtype").find('option:selected').text();
					var newthr = 
							 "<tr>" +
						 		"<td>" + thrname.val() + "</td>" +
						 		"<td>" + level_text  + "</td>" +
						 		"<td>" + type_text + "</td>" +
						 		"<td>" + thrvalue.val() + "</td>" +
						 		"<td>" +
						 			"<a  class='link_btn modthr_btn'>修改</a>" +
						 			"<a  class='link_btn delthr_btn'>删除</a>" +
						 		"</td>" +
						 	"</tr>";
					$(".table_thr").append(newthr);
					//window.alert(newthr);
					$(".trueBtn").unbind("click");//这里需要给trueBtn解除时间绑定，否则会多次触发嵌套的其他
				}
				
		});
		
		 });
		 //弹出文本性提示框
		 
		 $(".modthr_btn").click(function(){
			 $(".pop_thr").fadeIn();
			 $(".pop_cont h3").text("修改阈值");
			 
			 var mod = $(this);
			 $(".trueBtn").click(function(){
				 
				 if(islegal()){
					warning.css("visibility","hidden");	
					level_text=  $(".pop_thr").find(".sel_thrlevel").find('option:selected').text();//注意，这里的赋值必须放在点击事件内，否则获得的值只会是默认的第一个option
					type_text =  $(".pop_thr").find(".sel_thrtype").find('option:selected').text();
					$(".pop_thr").fadeOut();
					//window.alert(mod.text());
					var tr = mod.parent().parent();
					
					var td_first = tr.children().first();
					
					td_first.text(thrname.val());
					td_first.next().text(level_text);
					td_first.next().next().text(type_text);
					td_first.next().next().next().text(thrvalue.val());
					/*tr.html(  
				 		"<td>" + thrname.val() + "</td>" +
				 		"<td>" + level_text  + "</td>" +
				 		"<td>" + type_text + "</td>" +
				 		"<td>" + thrvalue.val() + "</td>" +
				 		"<td>" +
				 			"<a  class='link_btn modthr_btn'>修改</a>" +
				 			"<a  class='link_btn delthr_btn'>删除</a>" +
				 		"</td>" 
				 	);*/
					$(".trueBtn").unbind("click");//这里需要给trueBtn解除时间绑定，否则会多次触发嵌套的其他
				 }
			 });
		});
		$(".delthr_btn").click(function(){
			var del = $(this);
			var tr = del.parent().parent();
			tr.remove();
			
		});
		 //弹出：取消或关闭按钮
		 $(".falseBtn").click(function(){
			
			 $(".pop_bg").fadeOut();
		});
		 
		
		 
		 
});

