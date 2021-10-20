$(document).on('turbolinks:load', function() {
    $( ".collapser" ).click(function() {
        $( ".first-text" ).toggle( "slow", function() {
        });
    });
});