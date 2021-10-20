$(document).on('turbolinks:load', function() {
    $('.close').click(function(){
        $('.alert').slideUp('slow');
    });
});