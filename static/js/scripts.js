$(document).ready(function() {
    $('.tooltipped').tooltip({ delay: 10 });
    $(".button-collapse").sideNav({
        menuWidth: 250
    });   
    $('.carousel').carousel();
    $(".type").typed({
        strings: ['Artist', 'Problem-Solver', 'Software Engineer'],
        startDelay: 950,
        typeSpeed: 100,
        loop: false
    });

});
