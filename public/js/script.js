$(document).ready(function() {

    $("#responsive__menu").hide(1);

    $("#pop").click(function() {
        $("#responsive__menu").fadeIn(300).show(1);

    });
    $("#unPop").click(function() {
        $("#responsive__menu").fadeOut(300).hide(1);

    });

});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("navbar").style.top = "0 ";
    } else {
        document.getElementById("navbar").style.top = "-200px ";
    }

    prevScrollpos = currentScrollpos;

}




const swup = new Swup();