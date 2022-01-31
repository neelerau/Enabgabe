var Dönerladen;
(function (Dönerladen) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        Dönerladen.crc2 = canvas.getContext("2d");
        drawOutline();
        drawDisplay();
        drawCounter();
        drawSalad();
        drawTomatos();
        drawOnions();
        drawDough();
        drawMeet();
        drawKitchen();
        drawSaladKitchen();
        drawTomatosKitchen();
        drawOnionsKitchen();
        drawDoughKitchen();
        drawMeetKitchen();
    }
    //Gesammtes Feld der Simulation
    function drawOutline() {
        Dönerladen.crc2.beginPath();
        Dönerladen.crc2.fillStyle = "#e9dad3";
        Dönerladen.crc2.fillRect(0, 0, 1000, 550);
        Dönerladen.crc2.closePath();
    }
    //Anzeigefeld
    function drawDisplay() {
        Dönerladen.crc2.beginPath();
        Dönerladen.crc2.fillStyle = "white";
        Dönerladen.crc2.strokeStyle = "black";
        Dönerladen.crc2.fillRect(1000, 0, 400, 550);
        Dönerladen.crc2.closePath();
    }
    //Theke
    function drawCounter() {
        Dönerladen.crc2.beginPath();
        Dönerladen.crc2.fillStyle = "brown";
        Dönerladen.crc2.fillRect(300, 0, 200, 410);
        Dönerladen.crc2.beginPath();
        Dönerladen.crc2.fillStyle = "#e9dad3";
        Dönerladen.crc2.fillRect(300, 90, 100, 220);
        Dönerladen.crc2.closePath();
    }
    //Zutaten an der Theke
    function drawSalad() {
        Dönerladen.crc2.beginPath();
        Dönerladen.crc2.fillStyle = "green";
        Dönerladen.crc2.arc(450, 65, 30, 0, 5 * Math.PI);
        Dönerladen.crc2.fill();
        Dönerladen.crc2.closePath();
    }
    function drawTomatos() {
        Dönerladen.crc2.beginPath();
        Dönerladen.crc2.fillStyle = "red";
        Dönerladen.crc2.arc(450, 135, 30, 0, 5 * Math.PI);
        Dönerladen.crc2.fill();
        Dönerladen.crc2.closePath();
    }
    function drawOnions() {
        Dönerladen.crc2.beginPath();
        Dönerladen.crc2.fillStyle = "white";
        Dönerladen.crc2.arc(450, 205, 30, 0, 5 * Math.PI);
        Dönerladen.crc2.fill();
        Dönerladen.crc2.closePath();
    }
    function drawDough() {
        Dönerladen.crc2.beginPath();
        Dönerladen.crc2.fillStyle = "#e8bea0";
        Dönerladen.crc2.arc(450, 275, 30, 0, 5 * Math.PI);
        Dönerladen.crc2.fill();
        Dönerladen.crc2.closePath();
    }
    function drawMeet() {
        Dönerladen.crc2.beginPath();
        Dönerladen.crc2.fillStyle = "#b66512";
        Dönerladen.crc2.arc(450, 345, 30, 0, 5 * Math.PI);
        Dönerladen.crc2.fill();
        Dönerladen.crc2.closePath();
    }
    //Breich der Küche
    function drawKitchen() {
        Dönerladen.crc2.beginPath();
        Dönerladen.crc2.fillStyle = "brown";
        Dönerladen.crc2.fillRect(5, 5, 110, 540);
        Dönerladen.crc2.closePath();
    }
    //Rohmaterialen in der Küche
    function drawSaladKitchen() {
        Dönerladen.crc2.beginPath();
        Dönerladen.crc2.fillStyle = "green";
        Dönerladen.crc2.arc(60, 70, 40, 0, 5 * Math.PI);
        Dönerladen.crc2.fill();
        Dönerladen.crc2.closePath();
    }
    function drawTomatosKitchen() {
        Dönerladen.crc2.beginPath();
        Dönerladen.crc2.fillStyle = "red";
        Dönerladen.crc2.arc(60, 170, 40, 0, 5 * Math.PI);
        Dönerladen.crc2.fill();
        Dönerladen.crc2.closePath();
    }
    function drawOnionsKitchen() {
        Dönerladen.crc2.beginPath();
        Dönerladen.crc2.fillStyle = "white";
        Dönerladen.crc2.arc(60, 270, 40, 0, 5 * Math.PI);
        Dönerladen.crc2.fill();
        Dönerladen.crc2.closePath();
    }
    function drawDoughKitchen() {
        Dönerladen.crc2.beginPath();
        Dönerladen.crc2.fillStyle = "#e8bea0";
        Dönerladen.crc2.arc(60, 370, 40, 0, 5 * Math.PI);
        Dönerladen.crc2.fill();
        Dönerladen.crc2.closePath();
    }
    function drawMeetKitchen() {
        Dönerladen.crc2.beginPath();
        Dönerladen.crc2.fillStyle = "#b66512";
        Dönerladen.crc2.arc(60, 470, 40, 0, 5 * Math.PI);
        Dönerladen.crc2.fill();
        Dönerladen.crc2.closePath();
    }
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=main.js.map