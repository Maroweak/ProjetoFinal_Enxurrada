function mostrarAlerta() {
    alert('Você clicou no botão "Mostrar Alerta"!');
}

function mudarCorFundo() {
    document.body.style.backgroundColor = corAleatoria();
}

function alternarTexto() {
    var elemento = document.getElementById('texto');
    elemento.textContent = (elemento.textContent === 'Clique nos botões abaixo para experimentar as funções interativas em JavaScript.') ? 'Texto Alterado' : 'Clique nos botões abaixo para experimentar as funções interativas em JavaScript.';
}

function corAleatoria() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}