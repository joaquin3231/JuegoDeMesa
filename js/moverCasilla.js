const nombreJugador = document.querySelector("p.jugador>span");

let turnJug = 0;
let ubJugadores = [0,0,0,0];


async function moverJugador(num, mover){
    for (let i = 0; i < num; i++) {
        let jugador = document.querySelector(`#${todosJugad[turnJug]}`);

        if(jugador.parentElement.id == "inicio" && mover !== -1){
            ubJugadores[turnJug] += mover;
            jugador.parentElement.removeChild(jugador);
            
            let casilla =  document.getElementById(ubJugadores[turnJug]);
            casilla.appendChild(jugador);
        } else {
            ubJugadores[turnJug] += mover;

            if (document.getElementById(ubJugadores[turnJug]) != null) {
                casilla =  document.getElementById(ubJugadores[turnJug] - mover);
                casilla.removeChild(jugador);
                casilla = document.getElementById(ubJugadores[turnJug]);
                casilla.appendChild(jugador);
            } else if(ubJugadores[turnJug] == 0){
                casilla =  document.getElementById(1);
                casilla.removeChild(jugador);
                casilla = document.getElementById("inicio");
                casilla.appendChild(jugador);
                ubJugadores[turnJug] = 0;
            } else if(ubJugadores[turnJug] > 0){
                casilla =  document.getElementById(ubJugadores[turnJug] - mover);
                casilla.removeChild(jugador);
                casilla = document.getElementById("final");
                casilla.appendChild(jugador);
                return ganador(todosJugad[turnJug]);
            } else {
                ubJugadores[turnJug] = 0;
            }
        }


        await new Promise(resolve => setTimeout(resolve, 300));
    }

    let jugador = document.querySelector(`#${todosJugad[turnJug]}`)

    if(jugador.parentElement.classList.contains("bueno")){
        casillaBuena();
        return
    } else if(jugador.parentElement.classList.contains("malo")){
        casillaMala();
        return
    } else if(jugador.parentElement.classList.contains("random")){
        casillaRandom();
        return
    } else {
        casillaNormal();
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
        tirarDados.classList.add("oculto");
    }, 1000)
}