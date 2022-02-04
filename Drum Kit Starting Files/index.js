var buttonW = document.querySelector(".w");
var buttons = document.querySelectorAll("button");
var instrumentSounds = ['crash', 'kick-bass', 'snare', 'tom-1', 'tom-2', 'tom-3', 'tom-4'];
var tom1 = new Audio("sounds/tom-1.mp3");


for (var i = 0; i < buttons.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var sound = new Audio("sounds/" + instrumentSounds[0] + ".mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/" + instrumentSounds[1] + ".mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/" + instrumentSounds[2] + ".mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/" + instrumentSounds[3] + ".mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/" + instrumentSounds[4] + ".mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/" + instrumentSounds[5] + ".mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("sounds/" + instrumentSounds[6] + ".mp3");
            sound.play();
            break;
        default:
            console.log("Uh Oh");
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}