var dönerbude;
(function (dönerbude) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        dönerbude.crc2 = canvas.getContext("2d");
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
        dönerbude.crc2.beginPath();
        dönerbude.crc2.fillStyle = "#e9dad3";
        dönerbude.crc2.fillRect(0, 0, 1000, 550);
        dönerbude.crc2.closePath();
    }
    //Anzeigefeld
    function drawDisplay() {
        dönerbude.crc2.beginPath();
        dönerbude.crc2.fillStyle = "white";
        dönerbude.crc2.strokeStyle = "black";
        dönerbude.crc2.fillRect(1000, 0, 400, 550);
        dönerbude.crc2.closePath();
    }
    //Theke
    function drawCounter() {
        dönerbude.crc2.beginPath();
        dönerbude.crc2.fillStyle = "brown";
        dönerbude.crc2.fillRect(300, 0, 200, 410);
        dönerbude.crc2.beginPath();
        dönerbude.crc2.fillStyle = "#e9dad3";
        dönerbude.crc2.fillRect(300, 90, 100, 220);
        dönerbude.crc2.closePath();
    }
    //Zutaten an der Theke
    function drawSalad() {
        dönerbude.crc2.beginPath();
        dönerbude.crc2.fillStyle = "green";
        dönerbude.crc2.arc(450, 65, 30, 0, 5 * Math.PI);
        dönerbude.crc2.fill();
        dönerbude.crc2.closePath();
    }
    function drawTomatos() {
        dönerbude.crc2.beginPath();
        dönerbude.crc2.fillStyle = "red";
        dönerbude.crc2.arc(450, 135, 30, 0, 5 * Math.PI);
        dönerbude.crc2.fill();
        dönerbude.crc2.closePath();
    }
    function drawOnions() {
        dönerbude.crc2.beginPath();
        dönerbude.crc2.fillStyle = "white";
        dönerbude.crc2.arc(450, 205, 30, 0, 5 * Math.PI);
        dönerbude.crc2.fill();
        dönerbude.crc2.closePath();
    }
    function drawDough() {
        dönerbude.crc2.beginPath();
        dönerbude.crc2.fillStyle = "#e8bea0";
        dönerbude.crc2.arc(450, 275, 30, 0, 5 * Math.PI);
        dönerbude.crc2.fill();
        dönerbude.crc2.closePath();
    }
    function drawMeet() {
        dönerbude.crc2.beginPath();
        dönerbude.crc2.fillStyle = "#b66512";
        dönerbude.crc2.arc(450, 345, 30, 0, 5 * Math.PI);
        dönerbude.crc2.fill();
        dönerbude.crc2.closePath();
    }
    //Breich der Küche
    function drawKitchen() {
        dönerbude.crc2.beginPath();
        dönerbude.crc2.fillStyle = "brown";
        dönerbude.crc2.fillRect(5, 5, 110, 540);
        dönerbude.crc2.closePath();
    }
    //Rohmaterialen in der Küche
    function drawSaladKitchen() {
        dönerbude.crc2.beginPath();
        dönerbude.crc2.fillStyle = "green";
        dönerbude.crc2.arc(60, 70, 40, 0, 5 * Math.PI);
        dönerbude.crc2.fill();
        dönerbude.crc2.closePath();
    }
    function drawTomatosKitchen() {
        dönerbude.crc2.beginPath();
        dönerbude.crc2.fillStyle = "red";
        dönerbude.crc2.arc(60, 170, 40, 0, 5 * Math.PI);
        dönerbude.crc2.fill();
        dönerbude.crc2.closePath();
    }
    function drawOnionsKitchen() {
        dönerbude.crc2.beginPath();
        dönerbude.crc2.fillStyle = "white";
        dönerbude.crc2.arc(60, 270, 40, 0, 5 * Math.PI);
        dönerbude.crc2.fill();
        dönerbude.crc2.closePath();
    }
    function drawDoughKitchen() {
        dönerbude.crc2.beginPath();
        dönerbude.crc2.fillStyle = "#e8bea0";
        dönerbude.crc2.arc(60, 370, 40, 0, 5 * Math.PI);
        dönerbude.crc2.fill();
        dönerbude.crc2.closePath();
    }
    function drawMeetKitchen() {
        dönerbude.crc2.beginPath();
        dönerbude.crc2.fillStyle = "#b66512";
        dönerbude.crc2.arc(60, 470, 40, 0, 5 * Math.PI);
        dönerbude.crc2.fill();
        dönerbude.crc2.closePath();
    }
})(dönerbude || (dönerbude = {}));
//# sourceMappingURL=main.js.map