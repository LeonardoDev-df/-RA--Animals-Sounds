// Eventos para quando os marcadores são detectados
AFRAME.registerComponent("markerhandler", {
    init: function () {
        //marcador
        const markerCachorro = document.getElementById("marker-cachorro");
        const markerCrocodilo = document.getElementById("marker-crocodilo");
        const markerCobra = document.getElementById("marker-cobra");
        const markerCat = document.getElementById("marker-cat");
        const markerGolfi = document.getElementById("marker-golfi");
        const markerRino = document.getElementById("marker-rino");

        //botão
        const botaoCachorro = document.getElementById("botao-cachorro");
        const botaoCrocodilo = document.getElementById("botao-crocodilo");
        const CrocodiloDoubt = document.getElementById("crocodilo-doubt");
        const botaoCobra = document.getElementById("botao-cobra");
        const botaoCat = document.getElementById("botao-cat");
        const botaoGolfi = document.getElementById("botao-golfi");
        const botaoRino = document.getElementById("botao-rino");

         //div 
         const divCroc = document.getElementById("div-croc");
         const divSnake = document.getElementById("div-snake");
         const divGolfi = document.getElementById("div-golfi");
        
        //input 
        const inputCroc = document.getElementById("input-croc");
        const inputSnake = document.getElementById("input-snake");
        const inputGolfi = document.getElementById("input-golfi");


         // Evento de clique no botão do dúvida Crocodilo
         inputCroc.addEventListener("click", function () {
            divCroc.style.display = "block";
        });
         // Evento de clique no botão do dúvida Cobra
         inputSnake.addEventListener("click", function () {
            divSnake.style.display = "block";
        });
         // Evento de clique no botão do dúvida Golfinho
         inputGolfi.addEventListener("click", function () {
            divGolfi.style.display = "block";
        });
        
        

    
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
            soundEl.pause();
        });
        

        markerCrocodilo.addEventListener("markerFound", function () {
            // Marcador do Crocodilo detectado, exibir o botão do Crocodilo
            botaoCrocodilo.style.display = "block";
            inputCroc.style.display = "block";
            botaoCachorro.style.display = "none"; // Ocultar o botão do Cachorro
            botaoCobra.style.display = "none";
            botaoGolfi.style.display = "none";
        });

        markerCrocodilo.addEventListener("markerLost", function () {
            // Marcador do Crocodilo perdido, ocultar o botão do Crocodilo
            botaoCrocodilo.style.display = "none";
            inputCroc.style.display = "none";
            divCroc.style.display = "none";
            const soundEl = document.getElementById("kro-sound");
            if (soundEl) {
                soundEl.stop();
            }
        });

        markerCobra.addEventListener("markerFound", function () {
            // Marcador do Cobra detectado, exibir o botão do Cobra
            botaoCobra.style.display = "block";
            inputSnake.style.display = "block";
            botaoCrocodilo.style.display = "none"; // Ocultar o botão do Crocodilo
            botaoCachorro.style.display = "none"; // Ocultar o botão do Cachorro
            botaoGolfi.style.display = "none";
        });

        markerCobra.addEventListener("markerLost", function () {
            // Marcador do Cachorro perdido, ocultar o botão do Cachorro
            botaoCobra.style.display = "none";
            inputSnake.style.display = "none";
            divSnake.style.display = "none";
            const soundEl = document.getElementById("kro-sound");
            if (soundEl) {
                soundEl.stop();
            }
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
            soundEl.pause();
        });


        markerGolfi.addEventListener("markerFound", function () {
            // Marcador do Cobra detectado, exibir o botão do Cobra
            botaoGolfi.style.display = "block";
            inputGolfi.style.display = "block";
            botaoCat.style.display = "none";// Ocultar o botão do Gato
            botaoRino.style.display = "none"; // Ocultar o botão do Cachorro
            botaoCobra.style.display = "none";// Ocultar o botão do Cachorro
            botaoCrocodilo.style.display = "none"; // Ocultar o botão do Crocodilo
            botaoCachorro.style.display = "none"; // Ocultar o botão do Cachorro
        });

        markerGolfi.addEventListener("markerLost", function () {
            // Marcador do Cachorro perdido, ocultar o botão do Cachorro
            botaoGolfi.style.display = "none";
            inputGolfi.style.display = "none";
            divGolfi.style.display = "none";
            const soundEl = document.getElementById("kro-sound");
            if (soundEl) {
                soundEl.stop();
            }
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
            soundEl.stop();
        });
        markerCobra.addEventListener("markerLost", function () {
            // Marcador do Cachorro perdido, ocultar o botão do Cachorro
            botaoCat.style.display = "none";
            soundEl.pause();
        });

        // Evento de clique no botão do Cachorro
        botaoCachorro.addEventListener("click", function () {
          
            const soundEl = document.getElementById("dog-sound");
            if (soundEl) {
                soundEl.play();
            }
        });

        // Evento de clique no botão do Crocodilo
        botaoCrocodilo.addEventListener("click", function () {
           
            const soundEl = document.getElementById("kro-sound");
            if (soundEl) {
                soundEl.play();
            }
        });

         // Evento de clique no botão do Crocodilo
         CrocodiloDoubt.addEventListener("click", function () {
           
            divCroc.style.display = "block";
            
        });

         // Evento de clique no botão do Cobra
         botaoCobra.addEventListener("click", function () {
           
            const soundEl = document.getElementById("snake-sound");
            if (soundEl) {
                soundEl.play();
            }
        });

        // Evento de clique no botão do Gato
        botaoCat.addEventListener("click", function () {
           
            const soundEl = document.getElementById("cat-sound");
            if (soundEl) {
                soundEl.play();
            }
        });

        // Evento de clique no botão do Gato
        botaoRino.addEventListener("click", function () {
          
            const soundEl = document.getElementById("rino-sound");
            if (soundEl) {
                soundEl.play();
            }
        });

        // Evento de clique no botão do Gato
        botaoGolfi.addEventListener("click", function () {
       
            const soundEl = document.getElementById("golfi-sound");
            if (soundEl) {
                soundEl.play();
            }
        });
    },
});