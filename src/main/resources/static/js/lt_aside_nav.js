$().ready(function(){
	var lt_aside = $(".lt_aside_nav");
	
	/*************** 左侧菜单栏内容，不包含管理员相关模块  ******************/
	lt_aside.html(
			"<h2>" +
				"<a href='/system.html'>系统列表</a>"  +
			"</h2>" +
			"<ul>" +
				"<li id='lt_li'>" +
					"<dl>" +
						"<dt id='scenicModule' >" + "景区信息服务" +
						"</dt>" +
						"<dd >" +
							"<a  href='/index.html'>" + "景区主页" +
							"</a>" +
						"</dd>" +
						"<dd id='hh'>" +
							"<a href='/prewarning_info.html'>" + "预警信息查询" +
							"</a>" +
						"</dd>" +
					"</dl>" +
					"<dl>" +
						"<dt id='vistorFlowModule'>" + "实时客流监测查询" +
						"</dt>" +
						"<dd>" +
							"<a href='/user/visitor/flow/realtime'>" + "实时客流分布查询" +
							"</a>" +
						"</dd>" +
						"<dd>" +
							"<a href='/user/visitor/flow/predict'>" + "实时客流预测查询" +
							"</a>" +
						"</dd>" +
						"<dd>" +
							"<a href='/user/visitor/flow/history'>" + "历史客流查询" +
							"</a>" +
						"</dd>" +
					"</dl>" +
					"<dl>" +
						"<dt id='vistorAnalysisModule'>" + "游客时空趋势分析" +
						"</dt>" +
						"<dd>" +
							"<a href='/visitor_flow_trend.html'>" + "游客时空趋势分析" +
							"</a>" +
						"</dd>" +
						/*"<dd>" +
							"<a href='visitor_flow_direction.html'>" + "游客流向统计" +
							"</a>" +
						"</dd>" +*/
						"<dd>" +
							"<a href='/visitor_dwell_time.html'>" + "游客驻留时间分析" +
							"</a>" +
					"</dd>" +
					"</dl>" +
					"<dl>" +
						"<dt id='scenicAnalysisModule'>" + "旅游路线分析" +
						"</dt>" +
						"<dd>" +
							"<a href='/scenic_route.html'>" + "路线热度查询" +
							"</a>" +
						"</dd>" +
						"<dd id='hh'>" +
							"<a href='/scenic_heat.html'>" + "景区热度查询" +
							"</a>" +
						"</dd>" +
					"</dl>" +
				"</li>" +
			"</ul>");
	
	/*******************  增加的管理员相关模块   ******************/
	
	//注意这里lt_li需要在这声明而不是在li之前。
	var lt_li = $("#lt_li");
	
	
	var adminModuleHtml = 
		"<dl >" +
			"<dt id='adminModule'>" + "管理员管理" +
			"</dt>" +
			"<dd>" +
				"<a href='/admin_account.html'>" + "账号管理" +
				"</a>" +
			"</dd>" +
		"</dl>";

	var prewarningModuleHtml = 
		"<dl >" +
			"<dt id='/prewarningModule'>" + "预警设置" +
			"</dt>" +
			/*"<dd>" +
				"<a href='prewarning_mode.html'>" + "预警方式设置" +
				"</a>" +
			"</dd>" +*/
			"<dd>" +
			"<a href='/prewarning_threshold.html'>" + "容量阈值设置" +
			"</a>" +
			"</dd>" +
			"<dd>" +
			"<a href='/prewarning_setting.html'>" + "联动预警设置" +
			"</a>" +
			"</dd>" +
			"<dd>" +
			"<a href='/prewarning_record.html'>" + "预警记录查询" +
			"</a>" +
			"</dd>" +
		"</dl>";

	lt_li.append(prewarningModuleHtml);
	lt_li.append(adminModuleHtml);
	
	
	
	
	
	//为演示管理员和预警设置两个模块的显示和隐藏
	var exit_btn = $("#exit_btn");
	var admin = $("#adminModule");
	var perwar = $("#prewarningModule");
	
	exit_btn.click(function(){
		admin.toggle("slow");
		perwar.toggle("slow");
	});
	
	
	
/*********** 左侧菜单栏效果  ***************/
	
	var lt_modules = $(lt_li.find("dt"));
	var lt_items = $(lt_li.find("dd"));
	
	lt_modules.attr('title','点击收起/展开');//左侧菜单收起和展开提示信息
	lt_items.css("display","none");//默认模块下子项目不显示
	
	lt_modules.click(function(){//左侧菜单收起和展开
		$(this).siblings().toggle(300);
	});

	//根据当前所在模块默认展开该模块菜单
	var title = $("title");
	var titleContent = title.text();
	
	var scenicModule = $('#scenicModule');
	var vistorFlowModule = $('#vistorFlowModule');
	var vistorAnalysisModule = $('#vistorAnalysisModule');
	var scenicAnalysisModule = $('#scenicAnalysisModule');
	var prewarningModule = $('#prewarningModule');
	var adminModule = $('#adminModule');
	
	switch(titleContent){//根据title判断网页所在位置
		case "景区主页-游客流量监测系统": 
		case "预警信息-游客流量监测系统": 
			scenicModule.siblings().css("display","block");
			break;
		case "客流分布-游客流量监测系统": 
		case "客流预测-游客流量监测系统": 
		case "历史客流-游客流量监测系统": 
			vistorFlowModule.siblings().css("display","block");
			break;
		case "客流趋势-游客流量监测系统": 
		case "游客流向-游客流量监测系统": 
		case "驻留分析-游客流量监测系统": 
			vistorAnalysisModule.siblings().css("display","block");
			break;
		case "路线热度-游客流量监测系统": 
		case "景区热度-游客流量监测系统": 
			scenicAnalysisModule.siblings().css("display","block");
			break;
		case "预警方式-游客流量监测系统": 
		case "阈值设置-游客流量监测系统": 
		case "联动预警-游客流量监测系统": 
		case "预警记录-游客流量监测系统":
			prewarningModule.siblings().css("display","block");
			break;
		case "账户管理-游客流量监测系统": 
			adminModule.siblings().css("display","block");
			break;
	}
	
});


