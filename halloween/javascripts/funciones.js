function mostrar(identificador){
    document.getElementById(identificador).style.visibility = "visible";
}
function ocultar(identificador){
    document.getElementById(identificador).style.visibility = "hidden";
}
function sonar(elemento){
    document.getElementById(elemento).play();
}
function parar(elemento){
    document.getElementById(elemento).pause();
}