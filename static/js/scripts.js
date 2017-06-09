$(document).ready(function() {
    $('.tooltipped').tooltip({ delay: 10 });
    $(".button-collapse").sideNav({
        menuWidth: 100
    });

    $(function() {
        $("#typing_text").typed({
            strings: ["Hello World,", "this is amazing."],
            typeSpeed: 0
        });
    });

});
