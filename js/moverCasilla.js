const nombreJugador = document.querySelector("p.jugador>span");

let turnJug = 0;
let ubJugadores = [0,0,0,0];


async function moverJugador(num){
    for (let i = 0; i < num; i++) {
        let jugador = document.querySelector(`#${todosJugad[turnJug]}`);

        if(jugador.parentElement.id == "inicio"){
            ubJugadores[turnJug] ++;
            jugador.parentElement.removeChild(jugador);
            
            let casilla =  document.getElementById(ubJugadores[turnJug]);
            casilla.appendChild(jugador);
        } else {
            ubJugadores[turnJug] ++;

            if (document.getElementById(ubJugadores[turnJug]) == null) {
                ubJugadores[turnJug] ++;
                casilla =  document.getElementById(ubJugadores[turnJug] - 1);
                casilla = document.getElementById("final");
                casilla.appendChild(jugador);
                return ganador(todosJugad[turnJug]);
            } else {
                casilla =  document.getElementById(ubJugadores[turnJug] - 1);
                casilla.removeChild(jugador);
                casilla = document.getElementById(ubJugadores[turnJug]);
                casilla.appendChild(jugador);
            }
        }


        await new Promise(resolve => setTimeout(resolve, 300)); // Espera 2 segundos
    }
    
    if(turnJug < cantJugadores - 1){
        turnJug ++;
    } else {
        turnJug = 0;
    }

    nombreJugador.textContent = todosJugad[turnJug];
    nombreJugador.classList = (todosJugad[turnJug]);


    reactivarBoton();
}

async function ganador(jugador){

    setTimeout(() => {
        alert("jugador "+jugador+" gano");
    }, 1000)

    setTimeout(() => {
        formJuego.classList.remove("oculto");
        juego.classList.add("oculto");
    }, 1000)
}