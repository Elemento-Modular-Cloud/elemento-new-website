const ms = document.getElementsByClassName("ms-grid");
const wave = document.getElementsByClassName("wave");

$('.toggle').click(function(e){
    e.preventDefault(); // The flicker is a codepen thing
    $(this).toggleClass('toggle-on');
    for (var i = 0; i < ms.length; i++) {
        ms[i].classList.toggle("ms-grid-toggle")
        //Do something
    }
    for (var j = 0; j < wave.length; j++) {
        wave[j].classList.toggle("hide-wave")
        //Do something
    }
});