AFRAME.registerComponent("markerhandler", {
    init: function () {
        const marker = this.el;
        const botao = document.getElementById("animal-button");

        marker.addEventListener("markerFound", function () {
            // Marcador detectado, exibir o botão
            botao.style.display = "block";
        });

        marker.addEventListener("markerLost", function () {
            // Marcador perdido, ocultar o botão
            botao.style.display = "none";
        });

        // Evento de clique no botão
        botao.addEventListener("click", function () {
            alert("Botão Clicado!");
        });
    },
});