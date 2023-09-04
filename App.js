// Eventos para quando os marcadores são detectados
AFRAME.registerComponent("markerhandler", {
    init: function () {
        const markerCachorro = document.getElementById("marker-cachorro");
        const markerCrocodilo = document.getElementById("marker-crocodilo");
        const markerCobra = document.getElementById("marker-cobra");
        const botaoCachorro = document.getElementById("botao-cachorro");
        const botaoCrocodilo = document.getElementById("botao-crocodilo");
        const botaoCobra = document.getElementById("botao-cobra");

        markerCachorro.addEventListener("markerFound", function () {
            // Marcador do Cachorro detectado, exibir o botão do Cachorro
            botaoCachorro.style.display = "block";
            botaoCrocodilo.style.display = "none"; // Ocultar o botão do Crocodilo
            botaoCobra.style.display = "none";
        });

        markerCrocodilo.addEventListener("markerFound", function () {
            // Marcador do Crocodilo detectado, exibir o botão do Crocodilo
            botaoCrocodilo.style.display = "block";
            botaoCachorro.style.display = "none"; // Ocultar o botão do Cachorro
            botaoCobra.style.display = "none";
        });

        markerCobra.addEventListener("markerFound", function () {
            // Marcador do Cobra detectado, exibir o botão do Cobra
            botaoCobra.style.display = "block";
            botaoCrocodilo.style.display = "none"; // Ocultar o botão do Crocodilo
            botaoCachorro.style.display = "none"; // Ocultar o botão do Cachorro
        });

        // Evento de clique no botão do Cachorro
        botaoCachorro.addEventListener("click", function () {
            alert("Cachorro Clicado!");
            const soundEl = document.getElementById("dog-sound");
            if (soundEl) {
                soundEl.play();
            }
        });

        // Evento de clique no botão do Crocodilo
        botaoCrocodilo.addEventListener("click", function () {
            alert("Crocodilo Clicado!");
            const soundEl = document.getElementById("kro-sound");
            if (soundEl) {
                soundEl.play();
            }
        });

         // Evento de clique no botão do Cobra
         botaoCobra.addEventListener("click", function () {
            alert("Cobra Clicada!");
            const soundEl = document.getElementById("snake-sound");
            if (soundEl) {
                soundEl.play();
            }
        });
    },
});