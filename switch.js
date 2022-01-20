const ms = document.getElementsByClassName("ms-grid");
const wave = document.getElementsByClassName("wave");
const toggle_switch = document.getElementsByClassName("switch");

function toggle(){
    document.getElementById("switch").classList.toggle('toggle-on');

    for (var i = 0; i < ms.length; i++) {
        ms[i].classList.toggle("ms-grid-toggle")
        //Do something
    }
    for (var j = 0; j < wave.length; j++) {
        wave[j].classList.toggle("hide-wave")
        //Do something
    }
}

let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

if(matched)
    toggle()

// toggle_switch.onclick = toggle();