function numRamdon(min, max) {
    return  parseInt(Math.random() * (max - min) + min);
}

let numSeleccionado = 0;

const tirarDados = document.querySelector(".tirarDados");

tirarDados.addEventListener("click", () => {
    const dado = document.querySelector(".dado");

    dado.classList.remove("oculto");
    dado.src = `img/dados/tiradaDado.gif`;

    tirarDados.classList.add("oculto");
    
    seleccionaDado(dado);
})

async function seleccionaDado(dado) {
    numSeleccionado = numRamdon(1,7);

    setTimeout(() => {
        dado.src = `img/dados/${numSeleccionado}.png`;

        moverJugador(numSeleccionado);
    }, 1000)
}

function reactivarBoton(){
    tirarDados.classList.remove("oculto");
}