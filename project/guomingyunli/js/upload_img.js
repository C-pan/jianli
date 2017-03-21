// JavaScript Document
$(function(){
	var myDropzone = new Dropzone("div#mydropzone1", {
		url: "upload.php",
		paramName: "file",
		maxFilesize: 0.5, // MB
		maxFiles: 5,
		acceptedFiles: ".jpg,.png,.gif"
	});
	var myDropzone = new Dropzone("div#mydropzone2", {
		url: "upload.php",
		paramName: "file",
		maxFilesize: 0.5, // MB
		maxFiles: 5,
		acceptedFiles: ".jpg,.png,.gif"
	});
	var myDropzone = new Dropzone("div#mydropzone3", {
		url: "upload.php",
		paramName: "file",
		maxFilesize: 0.5, // MB
		maxFiles: 5,
		acceptedFiles: ".jpg,.png,.gif"
	});

	$(".droz").click(function () {
		$(this).next(".dropzone").find(".dz-preview").hide()
	})

});