var Dönerladen;
(function (Dönerladen) {
    var Doenerladen = /** @class */ (function () {
        function Doenerladen() {
        }
        // Soccer - Field
        Doenerladen.prototype.draw = function () {
            //Gesamtes Feld
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "#e9dad3";
            Dönerladen.crc2.fillRect(0, 0, 1000, 550);
            Dönerladen.crc2.closePath();
            //Anzeigefeld
            Dönerladen.crc2.fillStyle = "white";
            Dönerladen.crc2.fillRect(1000, 0, 400, 550);
            Dönerladen.crc2.closePath();
            //Theke
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "brown";
            Dönerladen.crc2.fillRect(300, 0, 200, 410);
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "#e9dad3";
            Dönerladen.crc2.fillRect(300, 90, 100, 220);
            Dönerladen.crc2.closePath();
            //Zutatenboxen Theke
            //Salad
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "green";
            Dönerladen.crc2.arc(450, 65, 30, 0, 5 * Math.PI);
            Dönerladen.crc2.fill();
            Dönerladen.crc2.closePath();
            //Tomatos
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "red";
            Dönerladen.crc2.arc(450, 135, 30, 0, 5 * Math.PI);
            Dönerladen.crc2.fill();
            Dönerladen.crc2.closePath();
            //Onions
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "white";
            Dönerladen.crc2.arc(450, 205, 30, 0, 5 * Math.PI);
            Dönerladen.crc2.fill();
            Dönerladen.crc2.closePath();
            //Dough
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "#e8bea0";
            Dönerladen.crc2.arc(450, 275, 30, 0, 5 * Math.PI);
            Dönerladen.crc2.fill();
            Dönerladen.crc2.closePath();
            //Meet
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "#b66512";
            Dönerladen.crc2.arc(450, 345, 30, 0, 5 * Math.PI);
            Dönerladen.crc2.fill();
            Dönerladen.crc2.closePath();
            //Küche
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "brown";
            Dönerladen.crc2.fillRect(5, 5, 110, 540);
            Dönerladen.crc2.closePath();
            //Zutatenboxen Küche
            //Salad
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "green";
            Dönerladen.crc2.arc(60, 70, 40, 0, 5 * Math.PI);
            Dönerladen.crc2.fill();
            Dönerladen.crc2.closePath();
            //Tomatos
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "red";
            Dönerladen.crc2.arc(60, 170, 40, 0, 5 * Math.PI);
            Dönerladen.crc2.fill();
            Dönerladen.crc2.closePath();
            //Onions
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "white";
            Dönerladen.crc2.arc(60, 270, 40, 0, 5 * Math.PI);
            Dönerladen.crc2.fill();
            Dönerladen.crc2.closePath();
            //Dough
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "#e8bea0";
            Dönerladen.crc2.arc(60, 370, 40, 0, 5 * Math.PI);
            Dönerladen.crc2.fill();
            Dönerladen.crc2.closePath();
            //Meet
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "#b66512";
            Dönerladen.crc2.arc(60, 470, 40, 0, 5 * Math.PI);
            Dönerladen.crc2.fill();
            Dönerladen.crc2.closePath();
            //meal1
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "#d1a0a0";
            Dönerladen.crc2.arc(440, 450, 30, 0, 5 * Math.PI);
            Dönerladen.crc2.fill();
            Dönerladen.crc2.closePath();
            //meal2
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "#d1a0a0";
            Dönerladen.crc2.arc(370, 450, 30, 0, 5 * Math.PI);
            Dönerladen.crc2.fill();
            Dönerladen.crc2.closePath();
            //meal2
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "#d1a0a0";
            Dönerladen.crc2.arc(370, 515, 30, 0, 5 * Math.PI);
            Dönerladen.crc2.fill();
            Dönerladen.crc2.closePath();
            //meal4
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.fillStyle = "#d1a0a0";
            Dönerladen.crc2.arc(440, 515, 30, 0, 5 * Math.PI);
            Dönerladen.crc2.fill();
            Dönerladen.crc2.closePath();
            //Eingang
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.rect(970, 200, 30, 5);
            Dönerladen.crc2.closePath();
            Dönerladen.crc2.fillStyle = "grey";
            Dönerladen.crc2.fill();
            Dönerladen.crc2.beginPath();
            Dönerladen.crc2.rect(970, 350, 30, 5);
            Dönerladen.crc2.closePath();
            Dönerladen.crc2.fillStyle = "grey";
            Dönerladen.crc2.fill();
        };
        return Doenerladen;
    }());
    Dönerladen.Doenerladen = Doenerladen;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=doenerbude.js.map