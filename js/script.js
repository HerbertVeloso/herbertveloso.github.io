$('.scroll').click(function(event){
    event.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('.navbar').innerHeight();
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500);
});