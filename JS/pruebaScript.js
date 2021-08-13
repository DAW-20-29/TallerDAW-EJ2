//Variables constantes para los botones.
const btnTirar = document.querySelector("#botonTirar1");
const btnReiniciar = document.querySelector("#botonReinicio1");

var intentos = 0;

var puntaje1 = 0;
var puntaje2 = 0;
var puntaje3 = 0;
var puntajeTotal= 0;
var usuario;
//Se pide al usuario su nombre y se guarda en una variable.
usuario = prompt("Hola! Cómo te llamas?")
//Funcion de tirar dados.
function tirarDados() {
    //Se asigna una variable que ayude a lanzar el dado con aleatoridad.
    var valorDado1 = Math.floor(1 + Math.random() * 6);
    //Se cambia los atributos de la etiqueta con la imagen del dado para que cambie de imagen respecto al numero aleatorio.
    var source1 = "./IMGS/dado" + valorDado1 + ".png";
    document.querySelector("#img-activa1").setAttribute("src", source1)
//El mismo código anterior pero para el 2do dado.
    var valorDado2 = Math.floor(1 + Math.random() * 6);
    var source2 = "./IMGS/dado" + valorDado2 + ".png";
    document.querySelector("#img-activa2").setAttribute("src", source2);
    
    var ValorTotal = valorDado1 + valorDado2;
}
//Funcion de reiniciar, los intentos vuelven a 0 y se vuelve a mostrar la imagen del dado número uno.
function reiniciar() {
    source = "./IMGS/dado1.png";
    intentos = 0;
}
//Se agregan los eventos para que las funciones de tirarDados o reiniciar se cumplan al darle click
//a los respectivos botones
btnTirar.addEventListener("click", tirarDados);
btnReiniciar.addEventListener("click", reiniciar);

//Si la variable intentos es igual a 3, el botón para tirar desaparece y se muestra un alert.
if (intentos == 3)
{
    document.getElementById('botonTirar1').style.display = 'none';
    alert("Estimado: "+usuario+". Se le acabaron los intentos.")
}else{
    document.getElementById('botonTirar1').style.display = 'block';
}


//Salida de datos

var username = [i];
//Funcion para saber el momento en que se realizó la jugada
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

//Matriz para guardar el puntaje de cada intento y la hora en que este se realizó
let Posicion = new Arrays(2);

Posicion[0] = {username : 1, 'puntaje' : puntaje , 'Hora: ' : sshora};
Posicion[1] = {username : 2, 'puntaje' : puntaje , 'Hora: ' : sshora};
Posicion[2] = {username : 3, 'puntaje' : puntaje , 'Hora: ' : sshora}

let tablaRegistro = document.getElementById('tablaPosiciones');
let tabla = document.createElement('tbody');
