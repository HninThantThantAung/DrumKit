var sound1 = document.getElementById("tom1");
var sound2 = document.getElementById("tom2");
var sound3 = document.getElementById("tom3");
var sound4 = document.getElementById("tom4");
var sound5 = document.getElementById("snare");
var sound6 = document.getElementById("kick_bass");
var sound7 = document.getElementById("crash");

var key ="";
function playAudio1() {
    sound1.play();
}
function playAudio2() {
    sound2.play();
}
function playAudio3() {
    sound3.play();
}
function playAudio4() {
    sound4.play();
}
function playAudio5() {
    sound5.play();
}
function playAudio6() {
    sound6.play();
}
function playAudio7() {
    sound7.play();
}
window.addEventListener("keypress", function(event){
    key = event.key;
    if (key == "w"){
        sound1.play();
    }
    else if (key == "a"){
        sound2.play();
    }
    else if (key == "s"){
        sound3.play();
    }
    else if (key == "d"){
        sound4.play();
    }
    else if (key == "j"){
        sound5.play();
    }
    else if (key == "k"){
        sound6.play();
    }
    else if (key == "l"){
        sound7.play();
    }
  });
 
// var sound2 = document.getElementById("tom2");
// function playAudio() {
//     sound2.play();
// }
// var sound3 = document.getElementById("tom3");
// function playAudio() {
//     sound3.play();
// }
// var sound4 = document.getElementById("tom4");
// function playAudio() {
//     sound4.play();
// }
// var sound5 = document.getElementById("snare");
// function playAudio() {
//     sound5.play();
// }

// var sound6 = document.getElementById("crash");
// function playAudio() {
//     sound6.play();
// }