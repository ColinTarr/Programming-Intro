$(document).ready(function() {

    $("p").click(function() {
        $(this).hide();
    });

    $("h1").click(function() {
        $("p").show();
    });

    $("#myButton").click(function() {
        $("p").toggle();
    });

    $("#slideButton").click(function() {
        $("p").slideToggle(1000);
    });

    $("#fadeButton").click(function() {
        $("p").fadeToggle(2000);
    });
});