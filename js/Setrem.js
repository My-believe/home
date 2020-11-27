function setRem() {
    var clientWidth = document.documentElement.clientWidth;
    var nowPX = clientWidth / 520 * 100;
    document.documentElement.style.fontSize = nowPX + 'px';
}
setRem();
window.onresize= setRem;