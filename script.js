//--------------------------
// Elementos DOM
//--------------------------

const palavraInput = document.getElementById('palavra');
const btnCaptalizar = document.getElementById('capitalizar');
const divResultado = document.getElementById('resultado');

//--------------------------
// Validacação de Entrada e Funções
//--------------------------

function verificarInput(event) {
    event.target.value = event.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}

function verificarPalavra() {
    if (palavraInput.value.trim() === "") {
        alert("Por favor preencha a frase");
        palavraInput.focus();
        return false;
    }

    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(palavraInput.value)) {
        alert("Por favor utilize apenas LETRAS");
        palavraInput.value = "";
        palavraInput.focus();
        return false;
    }

    return true;
}

// Exibir palavra
function capitularInput() {
    const palavraOriginal = palavraInput.value;

    const palavras = palavraInput.value.split(" ");
    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].length === 0) continue; // evita erro com espaços duplos
        palavras[i] = palavras[i][0].toUpperCase() + palavras[i].slice(1);
    }

    const fraseCapitalizada = palavras.join(" ");

    divResultado.innerHTML = `
    <p>Original: <b>${palavraOriginal}</b></p>
    <p>Capitalizada: <b>${fraseCapitalizada}</b></p>
    `;
}

// Eventos
palavraInput.addEventListener("input", verificarInput);

btnCaptalizar.addEventListener('click', () => {
    if (!verificarPalavra()) return;
    capitularInput();
});