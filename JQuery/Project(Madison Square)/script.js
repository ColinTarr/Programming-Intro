$(document).ready(function() {

    $("#cart").click(function() {
        $("#cartMenu").slideDown();
    });

    $("#account").click(function() {
        $("#accountMenu").slideDown();
    });

    $("#help").click(function() {
        $("#helpMenu").slideDown();
    });

    $(".dropdown-menu").mouseleave(function() {
        $(".dropdown-menu").hide();
    });

});