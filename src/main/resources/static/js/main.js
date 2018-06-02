$().ready(function(){
	if($(".li1a").hasClass("navon")){
			$(".area").css("display","block");
		}
	$(".bigbig").mouseenter(function(){
		var bb = $(this).attr("id");
		if(bb!="index"){
			$(".li1a").addClass("navon")
		}
		if($(".li1a").hasClass("navon")){
			$(".area").css("display","block");
		}
	})

	$(".bigbig").mouseleave(function(){
		var bb = $(this).attr("id");
		if(bb!="index"){
			$(".li1a").removeClass("navon")
		}
		if($(".li1a").hasClass("navon")){
			$(".area").css("display","block");
		}else{
			$(".area").css("display","none");
		}
	})


	$(".area li").mouseenter(function(){
		var bb = "#"+$(this).attr("class");
		$(bb).css("display","block");
	})

	$(".area li").mouseleave(function(){
		var bb = "#"+$(this).attr("class");
		$(bb).css("display","none");
	})

	$('.flexslider').flexslider({
		directionNav: true,
		pauseOnAction: false, 

	});

	$(".ulWrap li").mouseenter(function(){
		$(this).find("div").slideDown();

	})
	$(".ulWrap li").mouseleave(function(){
		$(this).find("div").slideUp();
	})

	$(".ulWrap1 li").mouseenter(function(){
		$(this).find("div").slideDown();
	})
	$(".ulWrap1 li").mouseleave(function(){
		$(this).find("div").slideUp();
	})
	jQuery(".multipleColumn").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4});
	jQuery(".multipleColumn1").slide({titCell:".hd1 ul",mainCell:".bd1 ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:2});
	jQuery(".multipleColumn2").slide({titCell:".hd2 ul",mainCell:".bd2 ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:3});
})

$().ready(function(){
	$(".applyul li").each(function(){
		if($(this).hasClass("con")){
			var iidd = "."+$(this).attr("id");
			$(iidd).css("display","block");
		}
	})

	$(".applyul li").mouseenter(function(){
		$(".applyul li").each(function(k,v){
			if($(v).hasClass("con")){
				var iidd = "."+$(v).attr("id");
				$(v).removeClass("con")
				$(iidd).css("display","none");
			}
		})
		$(this).addClass("con");
		var iidd = "."+$(this).attr("id");
		$(iidd).css("display","block");
	})

	$(".applyul1 li").each(function(){
		if($(this).hasClass("con")){
			var iidd = "."+$(this).attr("id");
			$(iidd).css("display","block");
		}
	})

	$(".applyul1 li").mouseenter(function(){
		$(".applyul1 li").each(function(k,v){
			if($(v).hasClass("con")){
				var iidd = "."+$(v).attr("id");
				$(v).removeClass("con")
				$(iidd).css("display","none");
			}
		})
		$(this).addClass("con");
		var iidd = "."+$(this).attr("id");
		$(iidd).css("display","block");
	})

	$(".applyul2 li").each(function(){
		if($(this).hasClass("con")){
			var iidd = "."+$(this).attr("id");
			$(iidd).css("display","block");
		}
	})

	$(".applyul2 li").mouseenter(function(){
		$(".applyul2 li").each(function(k,v){
			if($(v).hasClass("con")){
				var iidd = "."+$(v).attr("id");
				$(v).removeClass("con")
				$(iidd).css("display","none");
			}
		})
		$(this).addClass("con");
		var iidd = "."+$(this).attr("id");
		$(iidd).css("display","block");
	})

	$(".applyul3 li").each(function(){
		if($(this).hasClass("con")){
			var iidd = "."+$(this).attr("id");
			$(iidd).css("display","block");
		}
	})

	$(".applyul3 li").mouseenter(function(){
		$(".applyul3 li").each(function(k,v){
			if($(v).hasClass("con")){
				var iidd = "."+$(v).attr("id");
				$(v).removeClass("con")
				$(iidd).css("display","none");
			}
		})
		$(this).addClass("con");
		var iidd = "."+$(this).attr("id");
		$(iidd).css("display","block");
	})

	$(".xuanxian span").each(function(){
		if($(this).hasClass("static")){
			var iidd = "."+$(this).attr("id");
			$(iidd).css("display","block");
		}
	})

	$(".xuanxian span").mouseenter(function(){
		$(".xuanxian span").each(function(k,v){
			if($(v).hasClass("static")){
				var iidd = "."+$(v).attr("id");
				$(v).removeClass("static")
				$(iidd).css("display","none");
			}
		})
		$(this).addClass("static");
		var iidd = "."+$(this).attr("id");
		$(iidd).css("display","block");
	})

	$(".xuanxian1 span").each(function(){
		if($(this).hasClass("static")){
			var iidd = "."+$(this).attr("id");
			$(iidd).css("display","block");
		}
	})

	$(".xuanxian1 span").mouseenter(function(){
		$(".xuanxian1 span").each(function(k,v){
			if($(v).hasClass("static")){
				var iidd = "."+$(v).attr("id");
				$(v).removeClass("static")
				$(iidd).css("display","none");
			}
		})
		$(this).addClass("static");
		var iidd = "."+$(this).attr("id");
		$(iidd).css("display","block");
	})

	$(".ul_item .tr4:lt(15):even").css("background-color","#f8f8f8");
	$(".ul_item .tr4:gt(14):lt(15):even").css("background-color","#f8f8f8");
	$(".ul_item .tr4:gt(29):lt(15):even").css("background-color","#f8f8f8");
	$(".ul_item .tr4:gt(44):lt(15):even").css("background-color","#f8f8f8");

	$(".sidebtn b").click(function(){
		if($(this).attr("id")=="open"){
			$(".byby").css("right","-190px");
			$(this).attr("style","background-position:-30px 0px;");
			$(this).attr("id","off");
		}else{
			$(".byby").css("right","0px");
			$(this).attr("style","background-position:0px 0px;");
			$(this).attr("id","open");
		}
		
	})

	$(".contr_ul li").mouseenter(function(){
		var cc = $(this);
		$(this).find("p").click(function(){
			cc.remove();
		})
	})

	$(".empty").click(function(){
		$(".contr_ul").empty();
	})

	$(".mosth2 ul li").mouseenter(function(){
		$(".mosth2 ul li a").css("color","#6e6e6e");
		$(this).find("a").css("color","#03b8b3");
		$(".bigxx").css("display","none");
		var lalala = "."+$(this).attr("id");
		$(lalala).css("display","block");
	})
})