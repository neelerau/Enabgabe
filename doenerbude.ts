namespace Dönerladen {

    export class Doenerladen {

        // Soccer - Field
        draw(): void {

            //Gesamtes Feld
            crc2.beginPath();
            crc2.fillStyle = "#e9dad3";
            crc2.fillRect(0, 0, 1000, 550);
            crc2.closePath();

            //Anzeigefeld
            crc2.fillStyle = "white";
            crc2.fillRect(1000, 0, 400, 550);
            crc2.closePath();

            //Theke
            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.fillRect(300, 0, 200, 410);

            crc2.beginPath();
            crc2.fillStyle = "#e9dad3";
            crc2.fillRect(300, 90, 100, 220);
            crc2.closePath();

            //Zutatenboxen Theke

            //Salad
            crc2.beginPath();
            crc2.fillStyle = "green";
            crc2.arc(450, 65, 30, 0, 5 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //Tomatos
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.arc(450, 135, 30, 0, 5 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //Onions
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(450, 205, 30, 0, 5 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //Dough
            crc2.beginPath();
            crc2.fillStyle = "#e8bea0";
            crc2.arc(450, 275, 30, 0, 5 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //Meet
            crc2.beginPath();
            crc2.fillStyle = "#b66512";
            crc2.arc(450, 345, 30, 0, 5 * Math.PI);
            crc2.fill();
            crc2.closePath();


            //Küche
            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.fillRect(5, 5, 110, 540);
            crc2.closePath();

            //Zutatenboxen Küche
            //Salad
            crc2.beginPath();
            crc2.fillStyle = "green";
            crc2.arc(60, 70, 40, 0, 5 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //Tomatos
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.arc(60, 170, 40, 0, 5 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //Onions
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(60, 270, 40, 0, 5 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //Dough
            crc2.beginPath();
            crc2.fillStyle = "#e8bea0";
            crc2.arc(60, 370, 40, 0, 5 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //Meet
            crc2.beginPath();
            crc2.fillStyle = "#b66512";
            crc2.arc(60, 470, 40, 0, 5 * Math.PI);
            crc2.fill();
            crc2.closePath();

            //meal1
            crc2.beginPath();
            crc2.fillStyle = "#d1a0a0";
            crc2.arc(440, 450, 30, 0, 5 * Math.PI);
            crc2.fill();
            crc2.closePath();

            //meal2
            crc2.beginPath();
            crc2.fillStyle = "#d1a0a0";
            crc2.arc(370, 450, 30, 0, 5 * Math.PI);
            crc2.fill();
            crc2.closePath();

            //meal2
            crc2.beginPath();
            crc2.fillStyle = "#d1a0a0";
            crc2.arc(370, 515, 30, 0, 5 * Math.PI);
            crc2.fill();
            crc2.closePath();

            //meal4
            crc2.beginPath();
            crc2.fillStyle = "#d1a0a0";
            crc2.arc(440, 515, 30, 0, 5 * Math.PI);
            crc2.fill();
            crc2.closePath();

            //Eingang
            crc2.beginPath();
            crc2.rect(970, 200, 30, 5);
            crc2.closePath();
            crc2.fillStyle = "grey";
            crc2.fill();

            crc2.beginPath();
            crc2.rect(970, 350, 30, 5);
            crc2.closePath();
            crc2.fillStyle = "grey";
            crc2.fill();


        }
    } 
} 