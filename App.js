// Eventos para quando os marcadores são detectados
AFRAME.registerComponent("markerhandler", {
    init: function () {
        const markerCachorro = document.getElementById("marker-cachorro");
        const markerCrocodilo = document.getElementById("marker-crocodilo");
        const markerCobra = document.getElementById("marker-cobra");
        const markerCat = document.getElementById("marker-cat");
        const markerGolfi = document.getElementById("marker-golfi");
        const markerRino = document.getElementById("marker-rino");


        const botaoCachorro = document.getElementById("botao-cachorro");
        const botaoCrocodilo = document.getElementById("botao-crocodilo");
        const botaoCobra = document.getElementById("botao-cobra");
        const botaoCat = document.getElementById("botao-cat");
        const botaoGolfi = document.getElementById("botao-golfi");
        const botaoRino = document.getElementById("botao-rino");

        markerCachorro.addEventListener("markerFound", function () {
            // Marcador do Cachorro detectado, exibir o botão do Cachorro
            botaoCachorro.style.display = "block";
            botaoCrocodilo.style.display = "none"; // Ocultar o botão do Crocodilo
            botaoCobra.style.display = "none";
            botaoGolfi.style.display = "none";
        });

        markerCachorro.addEventListener("markerLost", function () {
            // Marcador do Cachorro perdido, ocultar o botão do Cachorro
            botaoCachorro.style.display = "none";
        });
        

        markerCrocodilo.addEventListener("markerFound", function () {
            // Marcador do Crocodilo detectado, exibir o botão do Crocodilo
            botaoCrocodilo.style.display = "block";
            botaoCachorro.style.display = "none"; // Ocultar o botão do Cachorro
            botaoCobra.style.display = "none";
            botaoGolfi.style.display = "none";
        });

        markerCrocodilo.addEventListener("markerLost", function () {
            // Marcador do Cachorro perdido, ocultar o botão do Cachorro
            botaoCrocodilo.style.display = "none";
        });

        markerCobra.addEventListener("markerFound", function () {
            // Marcador do Cobra detectado, exibir o botão do Cobra
            botaoCobra.style.display = "block";
            botaoCrocodilo.style.display = "none"; // Ocultar o botão do Crocodilo
            botaoCachorro.style.display = "none"; // Ocultar o botão do Cachorro
            botaoGolfi.style.display = "none";
        });

        markerCobra.addEventListener("markerLost", function () {
            // Marcador do Cachorro perdido, ocultar o botão do Cachorro
            botaoCobra.style.display = "none";
        });

        markerCat.addEventListener("markerFound", function () {
            // Marcador do Cobra detectado, exibir o botão do Cobra
            botaoCat.style.display = "block"; // Ocultar o botão do Cachorro
            botaoCobra.style.display = "none";
            botaoCrocodilo.style.display = "none"; // Ocultar o botão do Crocodilo
            botaoCachorro.style.display = "none"; // Ocultar o botão do Cachorro
            botaoGolfi.style.display = "none";
        });

        markerCat.addEventListener("markerLost", function () {
            // Marcador do Cachorro perdido, ocultar o botão do Cachorro
            botaoCat.style.display = "none";
        });


        markerGolfi.addEventListener("markerFound", function () {
            // Marcador do Cobra detectado, exibir o botão do Cobra
            botaoGolfi.style.display = "block";
            botaoCat.style.display = "none";// Ocultar o botão do Gato
            botaoRino.style.display = "none"; // Ocultar o botão do Cachorro
            botaoCobra.style.display = "none";// Ocultar o botão do Cachorro
            botaoCrocodilo.style.display = "none"; // Ocultar o botão do Crocodilo
            botaoCachorro.style.display = "none"; // Ocultar o botão do Cachorro
        });

        markerGolfi.addEventListener("markerLost", function () {
            // Marcador do Cachorro perdido, ocultar o botão do Cachorro
            botaoGolfi.style.display = "none";
        });

        markerRino.addEventListener("markerFound", function () {
            // Marcador do Cobra detectado, exibir o botão do Cobra
            botaoRino.style.display = "block";
            botaoCat.style.display = "none";
            botaoGolfi.style.display = "none"; // Ocultar o botão do Cachorro
            botaoCobra.style.display = "none";
            botaoCrocodilo.style.display = "none"; // Ocultar o botão do Crocodilo
            botaoCachorro.style.display = "none"; // Ocultar o botão do Cachorro
            botaoGolfi.style.display = "none";
        });

        markerRino.addEventListener("markerLost", function () {
            // Marcador do Cachorro perdido, ocultar o botão do Cachorro
            botaoRino.style.display = "none";
        });
        markerCobra.addEventListener("markerLost", function () {
            // Marcador do Cachorro perdido, ocultar o botão do Cachorro
            botaoCat.style.display = "none";
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

        // Evento de clique no botão do Gato
        botaoCat.addEventListener("click", function () {
            alert("Gato Clicado!");
            const soundEl = document.getElementById("cat-sound");
            if (soundEl) {
                soundEl.play();
            }
        });

        // Evento de clique no botão do Gato
        botaoRino.addEventListener("click", function () {
            alert("Rinoceronte Clicado!");
            const soundEl = document.getElementById("rino-sound");
            if (soundEl) {
                soundEl.play();
            }
        });

        // Evento de clique no botão do Gato
        botaoGolfi.addEventListener("click", function () {
            alert("Golfinho Clicado!");
            const soundEl = document.getElementById("golfi-sound");
            if (soundEl) {
                soundEl.play();
            }
        });
    },
});