function test() {
    window.open("https://www.google.com", "_blank");
}
var audio = new Audio('audios/nyan_cat.wav');
audio.volume = 0.15;
function nyan() {
    audio.play();
    document.getElementById("nyan").src="images/002.gif";
}
function pauseNyan() {
    audio.pause();
    document.getElementById("nyan").src="images/003.jpg";
    // audio.currentTime = 0;
}