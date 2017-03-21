var setting = {
				check: {
					enable: true,
					chkStyle: "radio",
					radioType: "all"
				},
				view: {
					dblClickExpand: false
				},
				data: {
					simpleData: {
						enable: true
					}
				},
				callback: {
					onClick: onClick,
					onCheck: onCheck
				}
			};

			// var zNodes =[
			// 	 {id:4, pId:0, name:"中国", open:true, nocheck:true},
			// 	{id:5, pId:0, name:"河北省", open:true, nocheck:true},
			// 	{id:40, pId:3, name:"石家庄"},
			// 	{id:41, pId:4, name:"石家庄"},
			// 	{id:42, pId:4, name:"保定"},
			// 	{id:43, pId:4, name:"邯郸"},
			// 	{id:44, pId:4, name:"承德"},
			// 	{id:5, pId:0, name:"广东省", open:true, nocheck:true},
			// 	{id:51, pId:5, name:"广州"},
			// 	{id:52, pId:5, name:"深圳"},
			// 	{id:53, pId:5, name:"东莞"},
			// 	{id:54, pId:5, name:"佛山"},
			// 	{id:6, pId:0, name:"福建省", open:true, nocheck:true},
			// 	{id:61, pId:6, name:"福州"},
			// 	{id:62, pId:6, name:"厦门"},
			// 	{id:63, pId:6, name:"泉州", open:true, nocheck:true},
			// 	{id:64, pId:12, name:"三明"}
	 
			//  ];
			//  
			// var zNodes =[
	  //           { id:1, pId:0, name:"一级 1", open:true},
	  //           { id:11, pId:1, name:"叶子节点 1-1"},
	  //           { id:12, pId:1, name:"叶子节点 1-2"},
	  //           { id:13, pId:1, name:"叶子节点 1-3"},
	  //            { id:14, pId:1, name:"叶子节点 1-3"},
	  //           { id:2, pId:0, name:"一级 2", open:true},
	  //           { id:21, pId:2, name:"叶子节点 2-1"},
	  //           { id:22, pId:2, name:"叶子节点 2-2"},
	  //           { id:23, pId:2, name:"叶子节点 2-3"},
	  //           { id:3, pId:0, name:"一级 3", open:true},
	  //           { id:31, pId:3, name:"叶子节点 3-1"},
	  //           { id:32, pId:3, name:"叶子节点 3-2"},
	  //           { id:33, pId:3, name:"叶子节点 3-3"}
	  //       ];
	  		// var zNodes =[
	    //         { id:1, pId:0, name:"一级1", open:true},
	    //         { id:11, pId:1, name:"二级11"},
	    //         { id:111, pId:11, name:"三级目录111"},
	    //         { id:112, pId:11, name:"三级目录112"},
	    //         { id:113, pId:11, name:"三级目录113"},
	    //         { id:114, pId:11, name:"三级目录114"},
	    //         { id:12, pId:1, name:"一级12"},
	    //         { id:121, pId:12, name:"三级目录121"},
	    //         { id:122, pId:12, name:"三级目录122"},
	    //         { id:123, pId:12, name:"三级目录123"},
	    //         { id:124, pId:12, name:"三级目录124"},
	    //         { id:13, pId:1, name:"二级13", isParent:true},

	    //         { id:2, pId:0, name:"一级2"},
	    //         { id:21, pId:2, name:"二级21", open:true},
	    //         { id:211, pId:21, name:"三级目录211"},
	    //         { id:212, pId:21, name:"三级目录212"},
	    //         { id:213, pId:21, name:"三级目录213"},
	    //         { id:214, pId:21, name:"三级目录214"},
	    //         { id:22, pId:2, name:"二级22"},
	    //         { id:221, pId:22, name:"三级目录221"},
	    //         { id:222, pId:22, name:"三级目录222"},
	    //         { id:223, pId:22, name:"三级目录223"},
	    //         { id:224, pId:22, name:"三级目录224"},
	    //         { id:23, pId:2, name:"二级23"},
	    //         { id:231, pId:23, name:"三级目录231"},
	    //         { id:232, pId:23, name:"三级目录232"},
	    //         { id:233, pId:23, name:"三级目录233"},
	    //         { id:234, pId:23, name:"叶子节点234"},

	    //         { id:3, pId:0, name:"一级3", isParent:true}
	           
	    //     ];
	    	var zNodes =[
	            { id:1, pId:0, name:"pNode 1", open:false},
	            { id:11, pId:1, name:"pNode 11", attr:"id11"},
	            { id:111, pId:11, name:"leaf node 111", attr:"id111"},
	            { id:112, pId:11, name:"leaf node 112", attr:"id112"},
	            { id:113, pId:11, name:"leaf node 112", attr:"id113"},
	            { id:12, pId:1, name:"pNode 12", attr:"id12"},



	             { id:2, pId:0, name:"pNode 2", open:false},
	            { id:21, pId:2, name:"pNode 21", attr:"id11"},
	            { id:211, pId:21, name:"leaf node 211", attr:"id211"},
	            { id:212, pId:21, name:"leaf node 212", attr:"id212"},
	            { id:213, pId:21, name:"leaf node 212", attr:"id213"},
	            { id:22, pId:2, name:"pNode 22", attr:"id11"},
	            { id:221, pId:22, name:"leaf node 211", attr:"id211"},
	            { id:222, pId:22, name:"leaf node 212", attr:"id212"},
	            { id:223, pId:22, name:"leaf node 212", attr:"id213"},


	            { id:3, pId:0, name:"pNode 3", attr:"id3"},
	            { id:31, pId:3, name:"pNode 21", open:true, attr:"id31"},

	            { id:4, pId:0, name:"pNode 4", attr:"id4"},
	            { id:41, pId:4, name:"pNode 21", open:true, attr:"id41"}
			];




			function onClick(e, treeId, treeNode) {
				var zTree = $.fn.zTree.getZTreeObj("treeDemo");
				zTree.checkNode(treeNode, !treeNode.checked, null, true);
				return false;
			}

			function onCheck(e, treeId, treeNode) {
				var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
				nodes = zTree.getCheckedNodes(true),
				v = "";
				for (var i=0, l=nodes.length; i<l; i++) {
					v += nodes[i].name + ",";
				}
				if (v.length > 0 ) v = v.substring(0, v.length-1);
				var cityObj = $("#citySel");
				cityObj.attr("value", v);
			}

			function showMenu() {
				var cityObj = $("#citySel");
				var cityOffset = $("#citySel").offset();
				$("#menuContent").css({left:cityOffset.left + "px", top:cityOffset.top + cityObj.outerHeight() + "px"}).slideDown("fast");

				$("body").bind("mousedown", onBodyDown);
			}
			function hideMenu() {
				$("#menuContent").fadeOut("fast");
				$("body").unbind("mousedown", onBodyDown);
			}
			function onBodyDown(event) {
				if (!(event.target.id == "menuBtn" || event.target.id == "citySel" || event.target.id == "menuContent" || $(event.target).parents("#menuContent").length>0)) {
					hideMenu();
				}
			}

			$(document).ready(function(){
				$.fn.zTree.init($("#treeDemo"), setting, zNodes);
			});