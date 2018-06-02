$().ready(function(){
	
		var chart_dwelltime = echarts.init(document.getElementById('chart_dwelltime'));
        window.onresize = chart_dwelltime.resize;  
        
        var dataAxis = ['0-1h', '1-2h', '2-4h', '4-6h', '6-12h', '12-24h', '24-48h', '>48h'];
		var dataQuantity = [2200, 5182, 6191, 4234, 2290, 1330, 1310, 723];
		
        var option_dwelltime = {
		    title: {
		        text: '游客驻留时间',
		    },
		    xAxis: {
		        data: dataAxis,
		        name:'驻留时间',
		        nameTextStyle:{
                		//color:'#66ccff',
                		fontWeight:'bold',
                	
                },
		        axisLabel: {
		            //inside: true,
		            textStyle: {
		                //color: '#fff'
		            }
		        },
		        
		        z: 10
		    },
		    yAxis: {
		    	name:'游客数量',
		       nameTextStyle:{
                		//color:'#66ccff',
                		fontWeight:'bold',
                	
                	},
		        axisLabel: {
		            textStyle: {
		                //color: '#999'
		            }
		        }
		    },
		    toolbox: {
                left:'center',
                //bottom: 20,
                //orient:'vertical',
                //itemGap:15,
                feature: {
                    /*dataZoom: {
                       // yAxisIndex: 'none'
                    },*/
                    restore: {},
                    saveAsImage: {}
                }
            },

		    axisPointer:{
	            	//默认不显示，设置为显示
	            	//show:true,
	            	//snap:false,
	            	//提示框出发条件，默认mousemove|click
	            	//triggerOn:'click'
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
		            	//显示柱条上的标签，即数值
	                       show: true,
	                       //显示在柱条上，默认是inside
	                       position: 'top',
	                },
		            
		            data: dataQuantity
		        }
		    ]
		};

        
        chart_dwelltime.setOption(option_dwelltime);
  });