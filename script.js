// Interação básica: clicar numa tecla escreve a letra na célula selecionada
// e passa a seleção para a próxima célula da mesma linha.
// (A lógica do jogo fica para a próxima atividade.)

const teclas = document.querySelectorAll(".tecla");

teclas.forEach(function (tecla) {
    tecla.addEventListener("click", function () {
        const selecionada = document.querySelector(".selecionada");

        if (selecionada === null) {
            return; // linha já está completa
        }

        selecionada.textContent = tecla.textContent;
        selecionada.classList.remove("selecionada");

        const proxima = selecionada.nextElementSibling;

        if (proxima !== null) {
            proxima.classList.add("selecionada");
        }
    });
});
