$().ready(function(){
	var oldPwd = $("#pwd_old");
	var newPwd1 = $("#pwd_new1");
	var newPwd2 = $("#pwd_new2");
	
	$("input[type=button]").click(function(){
		//window.alert(oldPwd.attr("value"));
		
	});
	
	
	oldPwd.blur(function(){
		var str = oldPwd.attr("value");
		if(str != '123456'){
			//这里应该修改为旧密码错误的条件
			//window.alert(oldPwd.attr("value"));
			oldPwd.siblings(".warning").text('密码输入错误！');
			oldPwd.siblings(".warning").css("visibility","visible");
		}
	});
	
	oldPwd.focus(function(){
		oldPwd.siblings(".warning").css("visibility","hidden");
	});
	
	newPwd1.blur(function(){
		var str = newPwd1.attr("value");
		if( str.length == 0){
			
			newPwd1.siblings(".warning").text('新密码不能为空！');
			newPwd1.siblings(".warning").css("visibility","visible");
		}else if(str.length<6 && str.length>0){
			newPwd1.siblings(".warning").text('新密码长度过短！');
			newPwd1.siblings(".warning").css("visibility","visible");
		}
		else{
			;
		}
			
	});
	newPwd1.focus(function(){
		newPwd1.siblings(".warning").css("visibility","hidden");
	});
	
	newPwd2.blur(function(){
		var str1 = newPwd1.attr("value");
		var str2 = newPwd2.attr("value");
		if( str2.length == 0){
			newPwd2.siblings(".warning").text('新密码不能为空！');
			newPwd2.siblings(".warning").css("visibility","visible");
		}else if( str1 != str2){
			newPwd2.siblings(".warning").text('新密码不匹配！');
			newPwd2.siblings(".warning").css("visibility","visible");
		}
		else{
			;
		}
		
	});
	newPwd2.focus(function(){
		newPwd2.siblings(".warning").css("visibility","hidden");
	});
	
});
