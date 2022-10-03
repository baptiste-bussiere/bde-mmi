$(document).ready(function() {

    $("#responsive__menu").hide(1);

    $("#pop").click(function() {
        $("#responsive__menu").fadeIn(300).show(1);

    });
    $("#unPop").click(function() {
        $("#responsive__menu").fadeOut(300).hide(1);

    });

});

const blobity = new Blobity({
    zIndex: "20",
    focusableElementsOffsetX: "5",
    magnetic: "true",
    focusableElementsOffsetY: "5",
    font: "courier",
    fontWeight: "400",
    color: "'rgb(3, 255, 176)'"

});
const swup = new Swup();