$(".contacts").on("click", function(event){
    $('#god').fadeOut('slow', function(){
        $('#god').remove();
        $('#contact').fadeIn(500);
        $('body').css('background-color', 'rgb(112, 163, 244)');
    });
    event.stopPropagation();
});