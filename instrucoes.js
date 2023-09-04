document.addEventListener("DOMContentLoaded", function () {
    // Selecione todos os botões com a classe "animal-button"
    const animalButtons = document.querySelectorAll(".animal-button");

    // Adicione um ouvinte de evento a cada botão
    animalButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Obtenha o ID do elemento de áudio associado a este botão
            const soundId = button.getAttribute("data-sound");

            // Obtenha o elemento de áudio correto com base no ID
            const soundEl = document.getElementById(soundId);

            // Verifique se o elemento de áudio existe
            if (soundEl) {
                // Reproduza o som associado ao animal
                soundEl.play();
            }
        });
    });
});
