 
var popWin = {
    scrolling: 'no',
    //是否显示滚动条 no,yes,auto

int: function() {
        this.mouseClose();
        this.closeMask();
        //this.mouseDown();
    },

showWin: function(width, height, title, src) {
		width=width||'500';
		height=height||'500';
        title=title||"Title";
		//alert("宽："+width+";"+"高："+height+"；");
        var iframeHeight = height - 52;
        var marginLeft = width / 2;
        var marginTop = height / 2;
        var inntHtml = '';
        inntHtml += '<div id="mask" style="width:100%; height:100%; position:fixed; top:0; left:0; z-inde:1999;background:#000; filter:alpha(opacity=50); -moz-opacity:0.5; -khtml-opacity: 0.5; opacity:0.5;"></div>'
        inntHtml += '<div id="maskTop" style="width: ' + width + 'px; height: ' + height + 'px;  background: #fff; color: #333; border-radius:9px; position: fixed; top: 50%; left: 50%; margin-left: -' + marginLeft + 'px; margin-top: -' + marginTop + 'px; z-index: 2999; filter: progid:DXImageTransform.Microsoft.Shadow(color=#333,direction=120,strength=4); -moz-box-shadow: 2px 2px 10px #333; -webkit-box-shadow: 2px 2px 10px #333; box-shadow: 2px 2px 10px #333;">'
        inntHtml += '<div id="maskTitle" style="height: 40px; background:#8694ab url(img/ico/item_ico.png) center left no-repeat; border-radius:8px 8px 0px 0px;line-height: 40px; font-family: Microsoft Yahei; font-size: 16px; color: #fff; padding-left: 20px; border-bottom: 1px solid #999999; position: relative;">'
        inntHtml += '' + title + ''
        inntHtml += '<div id="popWinClose" style="width: 21px; height: 21px; cursor: pointer; position: absolute; top: 9px; right: 5px; background: url(img/ico/popWinClose.png);"></div>'
        inntHtml += '</div>'
        inntHtml += '<iframe width="' + width + '" height="' + iframeHeight + '" frameborder="0" scrolling="' + this.scrolling + '" src="' + src + '"></iframe>';
        $("body").append(inntHtml);
        this.int();
    },

mouseClose: function() {
        $("#popWinClose").on('mouseenter', 
        function() {
            $(this).css("background", "url(img/ico/popWinClose2.png)");

        });

        $("#popWinClose").on('mouseleave', 
        function() {
            $(this).css("background", "url(img/ico/popWinClose.png)");
        });
    },

closeMask: function() {
        $("#popWinClose").on('click', 
        function() {
            $("#mask,#maskTop").fadeOut(function() {
                $(this).remove();
            });
        });
    }

/*mouseDown : function(){
		var dragging = false;
		var iX, iY;
		//var elmen = $("div#maskTop");
		$("#maskTop").on('mousedown' , function(e){
			dragging = true;
                iX = e.clientX - this.offsetLeft;
                iY = e.clientY - this.offsetTop;
                this.setCapture && this.setCapture();
                return false;
		});
		document.onmousemove = function(e) {
                if (dragging) {
                var e = e || window.event;
                var oX = e.clientX - iX;
                var oY = e.clientY - iY;
                $("#maskTop").css({"left":oX + "px", "top":oY + "px"});
                return false;
                }
            };
            $(document).mouseup(function(e) {
                dragging = false;
                $("#maskTop")[0].releaseCapture();
                e.cancelBubble = true;
            })
	},*/

};
//认证弹窗效果
  function validateTips(width, height,content) {
      width=width||'250';
      height=height||'40';
      var marginLeft = width / 2;
      var marginTop = height / 2;
      var content=content;
      var inntHtml = '';
      inntHtml += '<div id="mask" style="width:100%; height:100%; position:fixed; top:0; left:0; z-inde:1999;background:#000; filter:alpha(opacity=30); -moz-opacity:0.3; -khtml-opacity: 0.3; opacity:0.5;"></div>'
      inntHtml += '<div id="maskTop" style=" padding:10px; font-size:16x; color:#f76868; font-weight:600; text-align:center;width: ' + width + 'px;height: ' + height + 'px; line-height: ' + height + 'px;  background: #fff; border-radius:9px; position: fixed; top: 50%; left: 50%; margin-left: -' + marginLeft + 'px; margin-top: -' + marginTop + 'px; z-index: 2999; filter: progid:DXImageTransform.Microsoft.Shadow(color=#333,direction=120,strength=4); -moz-box-shadow: 2px 2px 10px #333; -webkit-box-shadow: 2px 2px 10px #333; box-shadow: 2px 2px 10px #333;">'
      inntHtml += '' + content + '</div>'
      $("body").append(inntHtml);
      interval = setTimeout(
          function(){
              $("#mask,#maskTop").fadeOut(
                  function(){
                  $(this).remove();
              });
          },1200);
      this.int();
  };