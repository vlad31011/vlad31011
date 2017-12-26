var font1 = document.getElementsByClassName('font1')[0];
var font2 = document.getElementsByClassName('font2')[0];

window.onload = setInterval(function font() {
        font1.style.display = 'none';
        font2.style.display = 'block';
}, 4000);

window.onload = setInterval(function font() {
    font1.style.display = 'block';
    font2.style.display = 'none';
}, 8000);



var data = document.getElementsByClassName('data')[0];

var close = document.getElementsByClassName('close')[0];
var background = document.getElementsByClassName('background')[0];
var modalContent = document.getElementsByClassName('modal-content')[0];
var closeBackground = document.getElementsByClassName('close-background')[0];


window.onclick = function (event) {
    if(event.target == close){
        close.style.visibility = 'hidden';
        background.style.visibility = 'hidden';
        modalContent.style.visibility = 'hidden';
        closeBackground.style.visibility = 'hidden';
    }
    if(event.target == data){
        close.style.visibility = 'visible';
        background.style.visibility = 'visible';
        modalContent.style.visibility = 'visible';
        closeBackground.style.visibility = 'visible';
    }
};


