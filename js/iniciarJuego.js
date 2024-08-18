const empezar = document.querySelector("#empezar");
const formJuego = document.querySelector(".formJuego")
const juego = document.querySelector(".juego");

let cantJugadores = 1;
const todosJugad = ["azul", "amarillo", "rojo", "verde"];
const jugadoresDivs = document.querySelectorAll("div.jugador");


empezar.addEventListener("click", () => {
    let cantJugadoresSelec = document.querySelector("#cantJug");

    for (let i = 0; i < cantJugadores; i++) {
        jugadoresDivs[i].classList.add("oculto");
    }

    cantJugadores = cantJugadoresSelec.value;
    for (let i = 0; i < cantJugadores; i++) {
        jugadoresDivs[i].classList.remove("oculto");
    }

    formJuego.classList.add("oculto");
    juego.classList.remove("oculto");
    tirarDados.classList.remove("oculto")

    nombreJugador.textContent = todosJugad[turnJug];
    nombreJugador.classList = (todosJugad[turnJug]);

})