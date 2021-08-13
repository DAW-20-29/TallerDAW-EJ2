const btnTirar = document.querySelector("#botonTirar1");
const btnReiniciar = document.querySelector("#botonReinicio1");

var intentos = 0;

var puntaje1 = 0;
var puntaje2 = 0;
var puntaje3 = 0;
var puntajeTotal= 0;
var usuario;

usuario = prompt("Hola! Cómo te llamas?")

function tirarDados() {
    var valorDado1 = Math.floor(1 + Math.random() * 6);
    var source1 = "./IMGS/dado" + valorDado1 + ".png";
    document.querySelector("#img-activa1").setAttribute("src", source1)

    var valorDado2 = Math.floor(1 + Math.random() * 6);
    var source2 = "./IMGS/dado" + valorDado2 + ".png";
    document.querySelector("#img-activa2").setAttribute("src", source2);

}

function reiniciar() {
    source = "./IMGS/dado1.png";
    intentos = 0;
}

btnTirar.addEventListener("click", tirarDados);
btnReiniciar.addEventListener("click", reiniciar);

if (intentos == 3)
{
    document.getElementById('botonTirar1').style.display = 'none';
    alert("Estimado: "+usuario+". Se le acabaron los intentos.")
}else{
    document.getElementById('botonTirar1').style.display = 'block';
}


//Salida de datos

var username = [i];

function fecha(){
    const h = new Date();
    const hora = ((h.getHours() < 10) ? "0" : "") + h.getHours();
    const min = ((h.getMinutes() < 10) ? "0" : "") + h.getMinutes();
    const s = ((h.getSeconds() < 10) ? "0" : "") + h.getSeconds();

    let sshora = document.write(hora + ":" + min + ":" + s);
}

function User(username, puntaje, sshora){

    this.username = username;
    this.puntaje = puntaje;
    this.sshora = sshora;
    
}


let Posicion = new User(2);

Posicion[0] = {username : 1, 'puntaje' : puntaje , 'Hora: ' : sshora};
Posicion[1] = {username : 2, 'puntaje' : puntaje , 'Hora: ' : sshora};
Posicion[2] = {username : 3, 'puntaje' : puntaje , 'Hora: ' : sshora}

let tablaRegistro = document.getElementById('tablaPosiciones');
let tabla = document.createElement('tbody');
