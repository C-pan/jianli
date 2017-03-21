// JavaScript Document
$(document).ready(function(){
 

  //设置地址输入框的width值  窗口大小改变好输入框百分比不变
  inp_add();
  function inp_add(){
    var h=$(".showcen").width()/2.380952380952381;
    //alert(h);
    $(".inp_add").css({"width":h+27});
  };
  

  $(window).resize(function () { 
     inp_add();
  });
 
  //用户信息显示  
  $(".user_info").click(function(){
    $(".userinof_submenu").fadeToggle(300);
  });
 
  //折叠右边信息栏 
  $(".folded_right").click(function(){
    var oRight_info=$(".middle_side");
    if(oRight_info.width()>30){
      oRight_info.animate({width:"-30px"},300);
			$(".folded_right").css({background:'url(img/ico/angle_right3.png)'});
			$(".middle_area").animate({"margin-right":"0px"},300);

		}
		else{
      oRight_info.show(300);
			oRight_info.animate({width:"200px"},300);
			$(".folded_right").css({background:'url(img/ico/angle_right2.png)'});
			$(".middle_area").animate({"margin-right":"200px"});
		}
  });

  //主内容部分宽度
  
  var m_conWt=$(".middle_area").width();
  $(".main").css({width:'m_conWt+20px'});

  //选项卡
  var $div_li = $(".tab_nav li");
  $div_li.click(function(){
    var index=$(".tab_nav li").index(this);
    $(this).addClass("on").siblings().removeClass("on");
    $(".tab_switch").eq(index).show().siblings(".tab_switch").hide();
  });

  //左边导航特效 
  $(".nav_list>li").click(function(){
    $(this).children(".submenu").slideToggle();
  });

  
});
//首页中心部分  公告框隔横变色
$(function(){ 
  var item = $(".showcen>ul>li"); 
  for(var i=0;i<item.length;i++){ 
    if(i%2==1){ 
      item[i].style.backgroundColor="#ededed"; 
    } 
  } 
});

// //表格隔横变色
// $(function(){ 
//   var item = $(".info_tab tbody tr"); 
//   for(var i=0;i<item.length;i++){ 
//     if(i%2==1){ 
//       item[i].style.backgroundColor="#ededed"; 
//     } 
//   } 
// }); 
//下拉选择框效果
$(function(){
  $(".select").each(function(){
    var s=$(this);
    var z=parseInt(s.css("z-index"));
    var dt=$(this).children("dt");
    var dd=$(this).children("dd");
    var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};
    var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};
    dt.click(function(){dd.is(":hidden")?_show():_hide();});
    dd.find("a").click(function(){dt.html($(this).html());_hide();});
    $("body").click(function(i){ !$(i.target).parents(".select").first().is(s) ? _hide():"";});
  });
});
// 下拉选择框效果结束

  // 表单全选  取消全选
  function selectAll(e){
    console.log(e.checked);
    if(e.checked == true){
      $(".checked").each(function(i, el){
          el.checked = true;
          console.log(i);
      });
    }else
    {
      $(".checked").each(function(i, el){
          el.checked = false;
      });
    };
  }
    // $(".checked").click(function(){
    //   var els = $(".checked");
    //   for(var i = 0; i < els.length; i++){
    //   console.log(els[i]);
    //   if(els[i].checked == false){
    //      $('#check_all')[0].checked = false;
    //      return;
    //   };
    //   };
    //   $('#check_all')[0].checked = true;
    // });
// 表格选择部分删除
  function del_tableTr(){
      var oCheckbox=document.getElementsByName("checkbox");
      for(var i=oCheckbox.length-1; i>=0;i--){
         if(oCheckbox[i].checked==true){
             //获取td节点
             var td=oCheckbox[i].parentNode;
            //获取tr节点
            var tr=td.parentNode;
            //获取table
            var table=tr.parentNode;
            //移除子节点
            table.removeChild(tr);
          }  
      }
  };

// 左边主导航 
$(function(){
	$(".ce > li > a").click(function(){
	$(this).addClass("xz").parents().siblings().find("a").removeClass("xz");
	$(this).parents().siblings().find(".er").slideUp(300);
	$(this).siblings(".er").slideToggle(300);
	$(this).parents().siblings().find(".er > li > .thr").slideUp().parents().siblings().find(".thr_nr").slideUp();

 });
  
$(".er > li > a").click(function(){
    $(this).addClass("sen_x").parents().siblings().find("a").removeClass("sen_x");
    $(this).parents().siblings().find(".thr").slideUp(300);  
    $(this).siblings(".thr").slideToggle(300); 
});

$(".thr > li > a").click(function(){
   $(this).addClass("xuan").parents().siblings().find("a").removeClass("xuan");
   $(this).parents().siblings().find(".thr_nr").slideUp(); 
   $(this).siblings(".thr_nr").slideToggle();
});
});

 
//多表結構購物車計算代碼
$(function(){
    totalNumber();
    subtotal();
    totalMoney();
    del_tr();
    $(".count_inp").live('focus blur keydown keypress keyup',function(){
      var reg = /^\d+$/g;
      var val = $(this).val();
      if($(this).val()==0 || !reg.test(val)){
          $(this).val(0);        
      };  
      totalNumber();
      subtotal();
      totalMoney(); 
    });
    
    $("#del_tr").click(function(){
      totalNumber();
      subtotal();
      totalMoney();
      del_tr()
    });

    // //不允许输入非数字
    // $(".count_inp").blur( function nonum(){
    //     var reg = /^\d+$/g;
    //     var val = $(this).val();
    //     if($(this).val()==0 || !reg.test(val)){
    //         $(this).val(1);        
    //     };
    // });

    //删除一行 后面新增一行  .total_tr #create_order
    function del_tr(){
      var tr=$(".cart_row");
      
      if(tr.length<11){
        var creatr_tr="<tr class='cart_row'>"+$("#copy_tr").html()+"</tr>";
        $("#cartTable").append(creatr_tr);  
      }
      paixu_id();
    };
    
    //排序 自动id
    function paixu_id(){
      var tr=$(".cart_row");
      for(var i = 0; i <$(".cart_row").length; i++  ){
        $(tr[i]).children(".order_num").html(i+1); 
      } 
    };
    //行内价格 .subtotal 单价 .price  tr:.cart_row   输入框 .count_inp
    function subtotal(){
      var tr=$(".cart_row");
      for(var i=0;i<tr.length;i++){
        var num=$(tr[i]).children("td").eq(5).children(".count_inp").val();//数量
        var price=$(tr[i]).children(".price").html(); //价格
        $(tr[i]).children(".subtotal").html(num*price);//行内总结
      }
    };
      
    //计算算量
    function totalNumber(){
      var count_len=$(".count_inp");  
      var num=0;    
      for (var i = 0; i <count_len.length; i++ ){
        var count_int=parseInt($(count_len[i]).val());
        if(count_int<0){
          count_int=0;
        }
        else if($(count_len[i]).val()==""){
          count_int=0;
        }
        num=parseInt(num)+count_int;
      }
      $("#selectedTotal").html(num);
    };
    
    //计算总价格
    function totalMoney(){
      var subtotal_len=$(".subtotal");
      var num=0;
      for (var i = 0; i <subtotal_len.length; i++ ){
        var totalM=parseInt($(subtotal_len[i]).text());
        if(totalM<0){
          totalM=0;
        }
        else if($(subtotal_len[i]).text()==""){
          totalM=0;
        }
        num=parseInt(num)+parseInt(totalM);
      }
      $("#priceTotal").html(num);
    };
});
//多表結構購物車計算代碼结束


