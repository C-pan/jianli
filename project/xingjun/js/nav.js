// JavaScript Document
/*top banner*/
$(function(){
	var indent = 0;
	var subindent;
	var movimg = $(".banimgbox").find(".barim");
	var movtext = $(".notelist");
	var movlist = $(".banrlist").find("li");
	var setinter;
	
	function AddIndet(){
		subindent = indent;
		indent++;
		if(indent >= movlist.length){
			indent =0;
		}
	}
	function AutoPlay(){
		movimg.eq(subindent).animate({right:"100%"},800,function(){
			$(this).css("right","-100%");
			
		});
		movtext.eq(subindent).animate({left:"-100%"},800,function(){
			$(this).css("left","100%");
		});
		movimg.eq(indent).animate({right:"0%"},800,function(){	
			//movtext.eq(indent).animate({left:"0px"},400).animate({left:"300px"},200).animate({left:"150px"},200);
			movtext.eq(indent).animate({left:"150px"},400);
		});
		movlist.eq(indent).addClass("curt").siblings().removeClass("curt");
	}
	
	function PlayMove(){
		AddIndet();
		AutoPlay();
	}	
	setinter = setInterval(PlayMove,5000);
	movlist.click(function(){
		if(indent == $(this).index()) return false;
		subindent = indent;
		indent = movlist.index($(this));
		clearInterval(setinter);
		AutoPlay();
		setinter = setInterval(PlayMove,10000);
	});
});
/*menu show style*/
$(function(){
	$(".meulist").hover(function(){
		$(this).addClass("curt_menu").find(".mudst").show();
	},function(){
		$(this).removeClass("curt_menu").find(".mudst").hide();
	});
	/*$(".bot_bio").click(function(){
		var woorps=$(".meulist");
		if(woorps.hasClass("curt_menu")){
			woorps.removeClass("curt_menu");
			woorps.find(".mudst").slideUp(200);
		}else{
			woorps.addClass("curt_menu");
			woorps.find(".mudst").slideDown(200);
		}
	});*/
});
/*导航滚动 scroll*/
function PageScroll(name){
	var scrollTop = $(name)[0].offsetTop;
	var nowDistance = document.documentElement.scrollTop || document.body.scrollTop;
	var disTime = 10;
	var speed = 600;
	var timing = 0;
	var oncesDistance = (scrollTop-nowDistance)*disTime/speed;
	//var DOM = document.documentElement || document.body;
	//alert(scrollTop+"----"+nowDistance+"----"+(oncesDistance))
	function movPlay(){
		if(timing < speed){
			document.documentElement.scrollTop += oncesDistance;
			document.body.scrollTop +=oncesDistance;
			timing += disTime;
			setTimeout(movPlay,disTime)
		}else{
			document.documentElement.scrollTop = scrollTop;
			document.body.scrollTop = scrollTop;
		}
	}
	movPlay();
}

/*nav fixed 菜单固定*/
$(function(){
	$(".header").css("position","fixed");
})

/*gotop 返回顶部*/
$(function(){
	$(".gotop").css("position","fixed");
	$(".gotop").mouseover(function(){
		$(".gotop").css({"opacity":"1"});
	});
	
	$(".gotop").mouseout(function(){
		$(".gotop").css("opacity","0.8");
	});
	$(".gotop").click(function(){
		//alert();
		$(".html,body").animate({scrollTop:"0"});
	});
	$(window).scroll(function() {
	var st = $(window).scrollTop();
	
	if (st>300)
	{
	  //alert(st);
	  $(".gotop").show();
	}
	else
	{
      $(".gotop").hide();
	}
	})
})
//$(function(){
//	if($("#navig").length>0){
//	var referenceHeight = $("#navig")[0].offsetTop;
//	var botmdom=$("#contact")[0].offsetTop;
//	function setClassStyle(){
//		var domScrollTop =document.documentElement.scrollTop || document.body.scrollTop;
//		var totalHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
//		var clientHeight = document.documentElement.clientHeight; 
//		if(domScrollTop > 75){
//			$(".abs_box").show();
//		}else{
//			$(".abs_box").hide();
//		}
//		if(domScrollTop > referenceHeight){
//			$("#navig").attr("class","navmenuB");
//			
//		}else{
//			$("#navig").attr("class","navmenuA");
//			
//		}
//		
//		if(domScrollTop>=totalHeight -clientHeight){
//			$(".page_botm").hide();
//		}else{
//			$(".page_botm").show();
//		}
//	}
//	setClassStyle();
//	$(window).scroll(function(){
//		setClassStyle();
//	});
//	}
//});

/*changtags*/
function chgtag(listname,showname,addname){
	$(listname).click(function(){
		var indentsum=$(listname).index($(this));
		$(this).addClass(addname).siblings().removeClass(addname);
		//$(showname).eq(indentsum).fadeIn(500).siblings().fadeOut(500);
		$(showname).siblings().hide().end().eq(indentsum).fadeIn(500);
	});
}
$(function(){
	chgtag(".serverlist li",".rows_list","curt");
	chgtag(".lift_list .btn",".lift_box_list","curt");
	
});

/* 新闻部分title move 星骏新闻和行业新闻转换*/
$(function(){
	var movebox = $(".news_class").outerWidth();
	var showmun = 0;
	$(".moveid").click(function(){
		showmun = showmun == 0 ? 1 : 0;
		var thiswidth=$(this).siblings().outerWidth();
		$(this).siblings().fadeOut(1000).end().animate({right:movebox-thiswidth},800,function(){
			
			var siblings = $(this).siblings().html();
			$(this).siblings().html($(this).html());
			$(this).html(siblings);
			$(this).siblings().fadeIn(2000).end().animate({right:"0px"},1500);
			$(".newsboxlist").eq(showmun).show().siblings().hide();
		})
	});
});
/*about*/
$(function(){
	$(".aboutlist li").hover(function(){
		$(this).addClass("curt").siblings().removeClass("curt");
	},function(){
		$(this).removeClass("curt");
	});
})

/*pop windows*/
function popWindows(idname){
	var scrollheight = document.documentElement.scrollTop || document.body.scrollTop;
	var relvheight = $("#Interpretation")[0].offsetTop;
	$(".shadowbg").fadeIn(300);
	$(idname).css("top",scrollheight-relvheight+100).fadeIn(500);
	if(idname == ".course"){
		courseingFun();
	}
}
function closePopWindow(nameid){
	$(".shadowbg").fadeOut(300);
	$(nameid).fadeOut(500);
	if(nameid == ".course"){
		courseingCloseFun();
	}
}
function courseingFun(){
	$(".courseing").animate({width:"100%"},8000,function(){
		$(".course_tatol").fadeIn(500);
	});
	
}
function courseingCloseFun(){
	$(".courseing").css("width","0px");
	$(".course_tatol").hide();
}
/*rotate*/
$(function(){
	if($(".rota_img").length<=0){return false};
	var rotate_img = $(".rota_img li");
	var rotate_indent = Math.ceil(rotate_img.length/2);
	var imgWidth = parseInt(rotate_img.find("img").css("width"));
	var imgHeight = parseInt(rotate_img.find("img").css("height"));
	var pddWidth = rotate_img[0].offsetWidth;
	
	var speed = 1000;
	var invaltime = 4000;
	var setsdtal =335;
	rotate_img.css({
		position:"absolute",
		top:"125px"
	});
	
	function showFun(){
		var woorrp= $(".rota_img");		
		var boxWidth = woorrp[0].offsetWidth;
		for(var i=0,k=rotate_img.length; i<k; i++){
			if(i<rotate_indent){
				var left = (boxWidth/2) -setsdtal + (i-rotate_indent)*pddWidth;
				rotate_img.eq(i).animate({
					left:parseInt(left),
					top:"125px",
					"z-index":"2"
				},speed).find("img").animate({
					width:imgWidth,
					height:imgHeight
				},speed);
			}else if(i>rotate_indent){
				var left = (boxWidth/2) +setsdtal + (i -rotate_indent-1)*pddWidth+(pddWidth - imgWidth);
				rotate_img.eq(i).animate({
					left:parseInt(left),
					top:"125px",
					"z-index":"2"
				},speed).find("img").animate({
					width:imgWidth,
					height:imgHeight
				},speed);
			}else{
				var left = (boxWidth/2) -imgWidth;
				rotate_img.eq(i).animate({
					left:parseInt(left),
					top:"0px",
					"z-index":"3"
				},speed).find("img").animate({
					width:imgWidth*2,
					height:imgHeight*2
				},speed);
			}	
		}
	}
	showFun();
	
	$(window).resize(function(){


			speed = 0;
			showFun();
			
			speed = 1000;

	});
	rotate_img.click(function(){
		if(!rotate_img.is(":animated")){
			rotate_indent = rotate_img.index($(this));
			showFun();
		}
	});
	$(".rotate_left").click(function(){
		if(!rotate_img.is(":animated")){
			rotate_indent--;
			if(rotate_indent<0){
				rotate_indent = 0;
			}
			showFun();
		}
	});
	$(".rotate_right").click(function(){
		if(!rotate_img.is(":animated")){
			rotate_indent++;
			if(rotate_indent>=rotate_img.length){
				rotate_indent = rotate_img.length -1;
			}
			showFun();
		}
	});
});

/*lingdao xianshi*/
$(function(){
	$(".cony_lnfo").click(function(){
		
		if($(this).hasClass("curt")){
			$(this).removeClass("curt");
			$(".headimg").animate({width:"0px"},500);
		}else{
			$(this).addClass("curt");
			$(".headimg").animate({width:"640px"},500);
		}
	});
	$(".headimg li,.headname li").click(function(){
		$(this).addClass("curt").siblings().removeClass("curt");
		var headimgindent=$(this).index();
		$(".headname li").eq(headimgindent).addClass("curt").siblings().removeClass("curt");
		var tags=$(this).attr("tags");
		$(".relateinfo li").each(function(){
			if($(this).attr("tags").indexOf(tags) >=0){
				$(this).addClass("curt");	
			}else{
				$(this).removeClass("curt");
			}
		});
	});
});

$(function(){
	$(".btn_aboutmore").click(function(){
		if($(this).hasClass("curt")){
			$(this).removeClass("curt");
			$(".conmy").slideUp(500);
		}else{
			$(this).addClass("curt");
			$(".conmy").slideDown(500);
		}
	});
});

