$().ready(function(){
	
	// 基于准备好的dom，初始化echarts实例
	var chartFlow = echarts.init(document.getElementById('chart_flow'));
	var chartVelocity = echarts.init(document.getElementById('chart_velocity'));
	var chartDirection = echarts.init(document.getElementById('chart_direction'));
	//根据窗口大小自适应图表大小
	window.onresize = chartFlow.resize;  
	window.onresize = chartVelocity.resize;
	window.onresize = chartDirection.resize;
	//
	
	//阈值数据
	var threshold = [500,1000,1500,2000,3000];
 

	//纵坐标游客流量数据
	var dataFlow = [500, 1300, 1550, 2200, 3010, 3333, 2888, 2666, 2400, 2651, 2321, 1884, 1205,
	                     1000, 1252, 1550, 2250, 2910, 2802, 2888, 2666, 2400, 2651, 2321, 1884, 1200];
    
	
	   
	//密度阈值数据
	var threshold_dens = [500,1000,1500,2000,3000];
	
	//纵坐标流速
	var dataVelocity = [500, 1300, 1550, 2200, 3010, 3333, 2888, 2666, 2400, 2651, 2321, 1884, 1205,
	                     1000, 1252, 1550, 2250, 2910, 2802, 2888, 2666, 2400, 2651, 2321, 1884, 1200];
	
	
	//横坐标时间数据
	var dataTime = ["0:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00",
	                "12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00",];
	
	//纵坐标游客开源数据，按照大小从高到低,
	var dataSource = [98564,87541,75644,72122,64521,54554,21321,12231,10001,8789,54657];
	
	//来源地横坐标地点名称
	var dataSourceName = ['西安', '成都', '洛阳', '太原', '兰州', '武汉', '北京', '上海', '南京', '杭州', '其他'];
	
	
	
	// 指定图表的配置项和数据

	var optionFlow = {
            //---------- 标题组件 -----------
        		
        	//grid组件，在直角坐标系中绘制网格，
        	grid:{
        		//width:'80%',
        		//height:'80%',
        		left:80,
        		
        	},	
        	title: {
        		//是否显示标题组件，默认显示
        		show:true,
        		//标题文本内容
                text: '客流流量',
                //标题文本样式
                textStyle:{
                	
                },
                //标题组件位置
                //left:'50%',
            },
            
            //------------- 工具栏组件 ---------------
            tooltip: {},
            
            legend: {
                data:['客流流量'],
                right:'20%',
                top:5,
            },
            xAxis: {
            	type: 'category',
            	name:'时间',
            	nameTextStyle:{
            		//color:'#66ccff',
            		fontWeight:'bold',
            	},
            	//标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
            	//类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。
            	boundaryGap: false,
                data: dataTime
            },
            yAxis: {
            	name:'客流流量',
            },
            /*
           //------------ 视觉印象组件 ----------------
            visualMap: {
            	//分段型视觉映像组件
            	type:'piecewise',
            	//visual组件离容器的距离
                top: 0,
                right: 0,
                //定义如何放置visual组件，默认垂直vertical
                //orient:'horizontal',
                
                //定义visual组件边框、背景，字体颜色等样式
                //borderWidth: 1,
                //borderColor:'#999',
                //backgroundColor:'#999',
               
                //定义文本样式
                textStyle:{
                	color:'#999',
                },

                //是否显示视觉映射组件，若为false不会显示，但数据映射的功能还在,默认显示
                //show:false,
           
                //自定义分段式视觉映射组件的每一段的范围，以及每一段的文字，以及每一段的样式
                pieces: [
                  {
                	
                    gt: 0,
                    lte: threshold[0],
                    color: '#90C9FA',
                    label:' ',
                    
                }, {
                    gt: threshold[0],
                    lte: threshold[1],
                    color: '#69B2F3',
                    label:'稀少',
                    label:'稀少 :'+ threshold[0]
                }, {
                    gt: threshold[1],
                    lte: threshold[2],
                    color: '#2C83D8',
                    label:'最佳 :'+ threshold[1]
                }, {
                    gt: threshold[2],
                    lte: threshold[3],
                    color: '#1F76CE',
                    label:'适宜 :'+ threshold[2]
                    
                }, {
                    gt: threshold[3],
                    lte: threshold[4],
                    color: '#156CBF',
                    label:'拥挤 :'+ threshold[3]
                }, {
                    gt: threshold[4],
                    color: '#005DAD',
                    label:'爆满 :'+ threshold[4]
                    
                }],
                outOfRange: {
                    color: '#1D8DEE',
                   
                }
            },
            */
            //----------- 坐标指示器 --------------
            axisPointer:{
            	//默认不显示，设置为显示
            	show:true,
            	//snap:false,
            	//提示框出发条件，默认mousemove|click
            	//triggerOn:'click'
            },
          
            toolbox: {
                left:'center',
                //bottom: 20,
                //orient:'vertical',
                //itemGap:15,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            /*
            dataZoom: [{
                startValue: '9:00'
            }, {
                type: 'inside',
            }], 
            */
            series: [{
                name: '客流流量',
                type: 'line',
                data: dataFlow,
                //标记的图形,默认为空心圆
                symbol:'emptyCircle',
                //标记的大小
                symbolSize:5,
                //是否平滑,默认false
                //smooth:true,
                //标记线
                /*markLine: {
                    silent: true,
                    data: [{
                        yAxis: threshold[0]
                    }, {
                        yAxis: threshold[1]
                    }, {
                        yAxis: threshold[2]
                    }, {
                        yAxis: threshold[3]
                    }, {
                        yAxis: threshold[4]
                    }]
                },*/
                itemStyle:{
                	color:'#1D8DEE',  
                },
                lineStyle:{
                      color:'#1D8DEE',  
                },
            }]
            
        };
	// 指定图表的配置项和数据

	var optionVelocity = {
            //---------- 标题组件 -----------
        	//grid组件，在直角坐标系中绘制网格，
        	grid:{
        		width:'80%',
        		//height:'80%',
        		left:80,
        	},	
        	title: {
        		show:true,
                text: '客流流速',
                textStyle:{
                },
               
            },
            
            //------------- 工具栏组件 ---------------
            tooltip: {},
            legend: {
                data:['客流流速'],
                right:'20%',
                top:5,
            },
            xAxis: {
            	type: 'category',
            	name:'时间',
            	nameTextStyle:{
            		fontWeight:'bold',
            	},
            	boundaryGap: false,
                data: dataTime
            },
            yAxis: {
            	name:'客流流速',
            },
            /*
           //------------ 视觉印象组件 ----------------
            visualMap: {
            	type:'piecewise',
                top: 0,
                right: 0,
                textStyle:{
                	color:'#999',
                },
                pieces: [
                  {
                	
                    gt: 0,
                    lte: threshold[0],
                    color: '#90C9FA',
                    label:' ',
                    
                }, {
                    gt: threshold[0],
                    lte: threshold[1],
                    color: '#69B2F3',
                    label:'稀少',
                    label:'稀少 :'+ threshold[0]
                }, {
                    gt: threshold[1],
                    lte: threshold[2],
                    color: '#2C83D8',
                    label:'最佳 :'+ threshold[1]
                }, {
                    gt: threshold[2],
                    lte: threshold[3],
                    color: '#1F76CE',
                    label:'适宜 :'+ threshold[2]
                    
                }, {
                    gt: threshold[3],
                    lte: threshold[4],
                    color: '#156CBF',
                    label:'拥挤 :'+ threshold[3]
                }, {
                    gt: threshold[4],
                    color: '#005DAD',
                    label:'爆满 :'+ threshold[4]
                    
                }],
                outOfRange: {
                    color: '#1D8DEE',
                   
                }
            },
            */
            //----------- 坐标指示器 --------------
            axisPointer:{
            	show:true,
            },
            toolbox: {
                left:'center',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            /*
            dataZoom: [{
                startValue: '9:00'
            }, {
                type: 'inside',
            }], 
            */
            series: [{
                name: '客流流速',
                type: 'line',
                data: dataVelocity,
                //标记的图形,默认为空心圆
                symbol:'emptyCircle',
               
                //标记的大小
                symbolSize:5,
                //是否平滑,默认false
                //smooth:true,
                //标记线
                /*
                markLine: {
                    silent: true,
                    data: [{
                        yAxis: threshold[0]
                    }, {
                        yAxis: threshold[1]
                    }, {
                        yAxis: threshold[2]
                    }, {
                        yAxis: threshold[3]
                    }, {
                        yAxis: threshold[4]
                    }]
                },
                */
                itemStyle:{
                	color:'#1D8DEE',  
                },
                lineStyle:{
                      color:'#1D8DEE',  
                },
            }]
        };
		
	 var optionDirection = {
			    title: {
			        text: '客流流向',
			    },
			    xAxis: {
			        data: dataSourceName,
			        name:'目的地',
			        nameTextStyle:{
	                		fontWeight:'bold',
	                	
	                },
			        axisLabel: {
			            textStyle: {
			            }
			        },
			        
			        z: 10
			    },
			    yAxis: {
			    	name:'游客数量',
			       nameTextStyle:{
	                		fontWeight:'bold',
	                	},
			        axisLabel: {
			            textStyle: {
			            }
			        }
			    },
			    toolbox: {
	                left:'center',
	                feature: {
	                    restore: {},
	                    saveAsImage: {}
	                }
	            },
			    series: [
			        {
			            type: 'bar',
			            itemStyle: {
			                normal: {
			                    color: new echarts.graphic.LinearGradient(
			                        0, 0, 0, 1,
			                        [
			                            {offset: 0, color: '#83bff6'},
			                            {offset: 0.5, color: '#188df0'},
			                            {offset: 1, color: '#188df0'}
			                        ]
			                    )
			             },
			             
			              emphasis: {
			                    color: new echarts.graphic.LinearGradient(
			                        0, 0, 0, 1,
			                        [
			                            {offset: 0, color: '#2378f7'},
			                            {offset: 0.7, color: '#2378f7'},
			                            {offset: 1, color: '#83bff6'}
			                        ]
			                    ),
			                    label: {
					            	color: '#188df0',
					            	fontWeight:'bold',
				                },
			                 
			                }
			            },
			            
			            
			            label: {
		                       show: true,
		                       position: 'top',
		                },
			            
			            data: dataSource
			        }
			    ]
			};
	    chartFlow.showLoading();
//	 	chartDensity.showLoading();
//	 	chartSource.showLoading();
		setTimeout(function(){
			chartFlow.hideLoading();
	 		
			chartFlow.setOption(optionFlow);
	 	},800);
	 	
	 	//clearTimeout(t);
	 	
		//chartDensity.setOption(optionDensity);
		//chartSource.setOption(optionSource);
	 	
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
			if(selected.val() == "flow"){
				showChar1();
				chartFlow.showLoading();
				setTimeout(function(){
					chartFlow.hideLoading();
					chartFlow.setOption(optionFlow);
			 	},800);
			}
			else if(selected.val() == "velocity"){
				showChar2();
				chartVelocity.showLoading();
				setTimeout(function(){
			 		chartVelocity.hideLoading();
			 		chartVelocity.setOption(optionVelocity);
			 	},800);
			}
			else{
				showChar3();
				chartDirection.showLoading();
				setTimeout(function(){
					chartDirection.hideLoading();
					chartDirection.setOption(optionDirection);
			 	},800);
			}
		});
 });