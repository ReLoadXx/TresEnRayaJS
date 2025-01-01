let turno = 'rojo'; 
const botones = document.querySelectorAll('.juego button')
const titulo = document.querySelector('h1');
const ganadorH2 = document.querySelector('h2');

const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function verificarGanador() {
    const clases = Array.from(botones).map(button => {
        if (button.classList.contains('rojo')) return 'rojo';
        if (button.classList.contains('azul')) return 'azul';
        return null;
        
    });

    for (let win of wins) {
        const [a, b, c] = win;
        if (clases[a] && clases[a] === clases[b] && clases[a] === clases[c]){
            return clases[a];
        }
    }

    return null;
}

function juegoLleno() {
    return Array.from(botones).every(button =>
        button.classList.contains('rojo') || button.classList.contains('azul')
    );
}

function reiniciarTablero() {
    botones.forEach(button => button.className = '');
    ganadorH2.textContent = '';
    titulo.textContent = "Turno del Rojo";
    turno = 'rojo';
}

botones.forEach(button => {
    button.addEventListener('click', () => {
    if (button.classList.contains('rojo') || button.classList.contains('azul')) {
        return;
}

if ( turno === 'rojo' ) {
    button.classList.add('rojo');
} else {
    button.classList.add('azul');
} 

const ganador = verificarGanador();
if (ganador) {
    ganadorH2.textContent = `¡${ganador.charAt(0).toUpperCase() + ganador.slice(1)} gana!`;
    setTimeout(reiniciarTablero, 2000);
    return;
}

if (juegoLleno()) {
    ganadorH2.textContent='Empate'
    setTimeout(reiniciarTablero, 2000);
    return;
}


turno = turno === 'azul' ? 'rojo' : 'azul';

if ( turno === 'rojo' ) {
    titulo.textContent = "Turno del Rojo"
} else {
    titulo.textContent = "Turno del Azul"
}

    });
});