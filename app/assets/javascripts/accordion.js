$(document).on('turbolinks:load', function() {
    $( ".first-acc" ).click(function() {
        $( ".first-acc-text" ).toggle( "slow", function() {
        });
    });
    $( ".second-acc" ).click(function() {
        $( ".second-acc-text" ).toggle( "slow", function() {
        });
    });
    $( ".third-acc" ).click(function() {
        $( ".third-acc-text" ).toggle( "slow", function() {
        });
    });
});