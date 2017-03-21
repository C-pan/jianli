// Jq Document

$(function(){
		
		$(".shopClass_item").mouseover(function(){
			//alert($(this).html());
			//$(this).css("color","red");
			$(this).css({"background-color":"#fff"});
			$(this).children().css("color","#000");
			var index =$(".shopClass_item").index(this);
			$(".shopClass_list").eq(index).css("display","block");
			$(".shopClass_list").mouseover(function(){
				var index =$(".shopClass_list").index(this);
				$(".shopClass_item").eq(index).css({"background-color":"#fff"});
				$(".shopClass_item").eq(index).children().css("color","#000");
				$(".shopClass_list").eq(index).css("display","block");
				}).mouseout(function(){
					$(".shopClass_item").css({"background-color":"","color":""});
					$(".shopClass_item").children().css("color","");
					$(".shopClass_list").delay(4000).css("display","none");
					});
			//alert($(this).eq());
			//var liHeight=$(this).css('top');
			//$(this).eq().addClass("lihover");
			// alert($(this).eq());
		}).mouseout(function(){
			$(this).css({"background-color":"","color":""});
			$(this).children().css("color","");
			$(".shopClass_list").delay(4000).css("display","none");
		})
		
	})
$(function(){
	$(".voucher_nav").hover(function(){
		$(".voucher").stop().fadeToggle("slow");
		});
})
$(function(){
	$(".shopCar").mouseover(function(){
		//alert(22);
		$(".shopCar_ka").stop().show();
		}).mouseout(function(){
			$(".shopCar_ka").stop().hide();
		});
}) 

 
 