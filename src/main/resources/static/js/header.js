$().ready(function(){
	var header = $(".header_top");
	header.html(
			" <img src='images/logo_management_128px.png' />" +
			"<div class='logo_admin' > " +
				"<h1> 游客流量监测系统 </h1>" +
				"<p>Visitor Flow Monitoring System</p>" +
			"</div>" +
			
			"<ul class='rt_nav'>" +
				"<li>" +
					"<a id='position_btn' class='set_icon'>位置设置</a>" +
				"</li>" +
				"<li>" +
					"<a id='homepage_btn' href='index.html' class='website_icon'>景区首页</a>" +
				"</li>" +
				"<li>" +
					"<a id='admin_btn' class='admin_icon'>管理员</a>" +
				"</li>" +
				"<li>" +
					"<a id='exit_btn' href='admin_login.html' class='quit_icon'>退出系统</a>" +
				"</li>" +
			"</ul>" +
			"<form class='form-inline headercitypicker'>" +
				"<div id='distpicker' class='form-group'>" +
					"<div class='form-group'>" +
						"<div style='position: relative;'>" +
							"<input id='city-picker4' class='form-control' readonly type='text' value='陕西省/西安市' data-toggle='city-picker'>" +
						"</div>" +
					"</div>" +
				/*"<div class='form-group'>" +
					"<button class='group_btn' id='reset' type='button'>重置</button>" +
					"</div>" +
				*/
					/*"<button type='button'>确定</button>" +*/
				"</div>" +
			"</form>" 
	);
	//测试效果用
	/*
	 *  	  <form class="form-inline">
     	<div class="form-group">
     		<input id="input_time" type="date" class="input_time">
     	</div>
		<div id="distpicker" class="form-group">
			<div class="form-group">
				<div style="position: relative;">
					<input id="city-picker3" class="form-control" readonly type="text" value="陕西省/西安市" data-toggle="city-picker">
				</div>
			</div>
			<div class="form-group">
				<button class="group_btn" id="reset" type="button">重置</button>
			</div>
			
			<button class="group_btn"  type="button">查询</button>
		</div>
	</form>
	 * 
	 */
	$("#admin_btn").click(function(){
		$("#adminModule").parent().toggle("slow");
		$("#prewarningModule").parent().toggle("slow");
	});
	
	$("#position_btn").click(function(){
		$(".headercitypicker").toggle("slow");
	});
});



/*
  <img src="images/logo_management_128px.png"></img>
   <div class="logo_admin" > 
	<h1> 游客流量监测系统 </h1>
    <p>Visitor Flow Monitoring System</p>
  </div>

 <ul class="rt_nav">
  <!-- 
  <li><a href="#" class="clear_icon">清除缓存</a></li>
  <li><a href="#" class="admin_icon">DeathGhost</a></li>
  
   -->
  <li><a href="index.html" class="website_icon">首页</a></li>
  <li><a href="#" class="set_icon">位置设置</a></li>
  <li><a href="login_admin" class="admin_icon">管理员</a></li>
  <li><a  id="exit_btn" class="quit_icon">退出系统</a></li>
 </ul>

*/