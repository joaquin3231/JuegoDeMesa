const ubicMensaje = document.querySelector(".especial");

function casillaNormal() {
    ubicMensaje.textContent = mensajes[numRamdon(0, mensajes.length)];
}

function casillaBuena() {
    let numRam = numRamdon(0, 2);
    if (numRam == 0) {
        avance()
    } else {
        vuelvaTirar()
    }
}
function avance() {
    let numRam = numRamdon(1, 6);
    ubicMensaje.textContent = mensajesBuenosAvances[numRamdon(0, mensajesBuenosAvances.length)] + ` ${numRam} casillas`;

    setTimeout(() => {
        moverJugador(numRam, 1);
    }, 3000)
}
function vuelvaTirar() {
    ubicMensaje.textContent = mensajesBuenosDados[numRamdon(0, mensajesBuenosDados.length)];
    reactivarBoton();
}

function casillaMala() {
    let numRam = numRamdon(1, 6);
    ubicMensaje.textContent = mensajesMalosRetroceso[numRamdon(0, mensajesMalosRetroceso.length)] + ` ${numRam} casillas`;

    setTimeout(() => {
        moverJugador(numRam, -1);
    }, 3000)
}
function casillaRandom() {

    let numRam = numRamdon(0, mensajesRandom.length);

    ubicMensaje.innerHTML = mensajesRandom[numRam];

    setTimeout(()=>{
        reactivarBoton();
    }, 2000)

    if (numRam == 0) {
        tirarDados.classList.add("genio")
    } else if (numRam == 1) {
        tirarDados.classList.add("diablo")
    }

}

function randomGenio(numSeleccionado) {

    if (numSeleccionado == 1) {
        ubicMensaje.textContent = "Mierd.. Sacaste 1 retrocede 5 casillas";
        setTimeout(()=>{
            moverJugador(5, -1);
        }, 2000)
    } else if (numSeleccionado == 2 || numSeleccionado == 3) {
        ubicMensaje.textContent = "Sacaste "+numSeleccionado+" retrocede 2 casillas";
        setTimeout(()=>{
            moverJugador(2, -1);
        }, 2000)
    } else if (numSeleccionado == 4 || numSeleccionado == 5) {
        ubicMensaje.textContent = "Sacaste "+numSeleccionado+" avanza 2 casillas";
        setTimeout(()=>{
            moverJugador(2, 1);
        }, 2000)
    } else {
        ubicMensaje.textContent = "¡Woooow! Sacaste 6 avanza 5 casillas";
        setTimeout(()=>{
            moverJugador(5, 1);
        }, 2000)
    }
}


/*
    "Se te cruza el diablo y te da una apuesta si sacas <br>1: empiezas de nuevo <br>2 al 5: no pasa nada <br>6: ganas"    
*/

function randomDiablo(numSeleccionado) {
    let jugador = document.querySelector(`#${todosJugad[turnJug]}`);
    
    if (numSeleccionado == 1) {
        ubicMensaje.textContent = "Oh caraj… súplicas rezas, pero nada te sirve ahora empiezas de nuevo un trato es un trato (no recuerdas haber aceptado nada)";

        setTimeout(()=>{
            casilla =  document.getElementById(ubJugadores[turnJug]);
            casilla.removeChild(jugador);
            casilla = document.getElementById("inicio");
            casilla.appendChild(jugador);
            ubJugadores[turnJug] = 0;
        }, 1000)
    } else if (numSeleccionado == 6){
        ubicMensaje.textContent = "No parece un trato justo, pero lo terminas ganando avance 10 casillas";
        setTimeout(()=>{
            moverJugador(10, 1);
        }, 2000)
    } else {
        ubicMensaje.textContent = "Afortunadamente, no paso nada ni bueno ni malo estás tranquilo POR AHORA (presientes que te volverás a cruzar al diablo en el camino)";
    }

    setTimeout(() => {
        if(turnJug < cantJugadores - 1){
            turnJug ++;
        } else {
            turnJug = 0;
        }
        nombreJugador.textContent = todosJugad[turnJug];
        nombreJugador.classList = (todosJugad[turnJug]);
    }, 1000)

    setTimeout(() => {
        reactivarBoton();
    }, 2000)
}