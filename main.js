var Dönerladen;
(function (Dönerladen) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Dönerladen.crc2 = canvas.getContext("2d");
    }
    var ingrediens = document.getElementById("ingrediens");
    var landingPage = document.getElementById("settings");
    var startbutton = document.getElementById("startbutton");
    startbutton.addEventListener("click", function () {
        startSimulation();
    });
    function startSimulation() {
        landingPage.classList.add("is-hidden");
        ingrediens.classList.remove("is-hidden");
        Dönerladen.storesimulation = new Dönerladen.Doenerladen();
        console.log("start");
        Dönerladen.storesimulation.draw();
    }
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=main.js.map