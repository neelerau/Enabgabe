var Dönerladen;
(function (Dönerladen) {
    var landingPage;
    var startbutton;
    var ingrediens = document.getElementById("ingrediens");
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Dönerladen.crc2 = canvas.getContext("2d");
        landingPage = document.getElementById("settings");
        startbutton = document.getElementById("startbutton");
        startbutton.addEventListener("click", startSimulation);
    }
    function startSimulation() {
        landingPage.style.display = "none";
        ingrediens.classList.remove("is-hidden");
        Dönerladen.storesimulation = new Dönerladen.Doenerladen();
        window.setInterval(drawUpdate);
    }
    function drawUpdate() {
        Dönerladen.storesimulation.draw();
    }
    //     const ingrediens: Element = (document.getElementById("ingrediens") as HTMLInputElement);
    //     const landingPage: Element = (document.getElementById("settings")as HTMLInputElement);
    //     const startbutton: Element = (document.getElementById("startbutton")as HTMLInputElement);
    //     startbutton.addEventListener("click", function (): void {
    //         startSimulation();
    //     });
    //     function startSimulation(): void {
    //         landingPage.classList.add("is-hidden");
    //         ingrediens.classList.remove("is-hidden");
    //         storesimulation = new Doenerladen();
    //         console.log("start");
    //         storesimulation.draw();
    //     }
    // }
})(Dönerladen || (Dönerladen = {}));
//     const ingrediens: Element = (document.getElementById("ingrediens") as HTMLInputElement);
//     const landingPage: Element = (document.getElementById("settings")as HTMLInputElement);
//     const startbutton: Element = (document.getElementById("startbutton")as HTMLInputElement);
//     startbutton.addEventListener("click", function (): void {
//         startSimulation();
//     });
//     function startSimulation(): void {
//         landingPage.classList.add("is-hidden");
//         ingrediens.classList.remove("is-hidden");
//         storesimulation = new Doenerladen();
//         console.log("start");
//         storesimulation.draw();
//     }
// }
//# sourceMappingURL=main.js.map