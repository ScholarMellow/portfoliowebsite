

$(".contacts").on("click", function(event){
    $('#god').fadeOut('slow', function(){
        /*$('#god').remove();*/
        $('#contactpage').fadeIn(500);
        $('body').css('background-color', 'rgb(112, 163, 244)');
        window.scrollTo(0, 0);
    });
    event.stopPropagation();
});

$("#buttonfadetoggler").on("click", function(event) {
	$("#contactpage").fadeOut('slow', function(){
		$("#god").fadeIn(500);
		$("body").css("background-color", "white");
	});
	window.scrollTo(0, 0);
});