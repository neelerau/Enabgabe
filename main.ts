namespace dönerbude { 

    window.addEventListener("load", handleLoad);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;


    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas")!;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d")!;
        drawOutline ();
        drawDisplay ();
        drawCounter();
        drawSalad();
        drawTomatos();
        drawOnions();
        drawDough();
        drawMeet();
        drawKitchen ();
        drawSaladKitchen ();
        drawTomatosKitchen ();
        drawOnionsKitchen ();
        drawDoughKitchen ();
        drawMeetKitchen ();

    }
//Gesammtes Feld der Simulation
    function drawOutline (): void {
        crc2.beginPath();
        crc2.fillStyle = "#e9dad3";
        crc2.fillRect(0, 0, 1000, 550);
        crc2.closePath();
    }

//Anzeigefeld
    function drawDisplay (): void {
        crc2.beginPath();
        crc2.fillStyle = "white";
        crc2.strokeStyle = "black";
        crc2.fillRect(1000, 0, 400, 550);
        crc2.closePath();
    }

//Theke
    function drawCounter (): void {
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(300, 0, 200, 410);

        crc2.beginPath();
        crc2.fillStyle = "#e9dad3";
        crc2.fillRect(300, 90, 100, 220);
        crc2.closePath();

    } 

//Zutaten an der Theke
    function drawSalad (): void {
        crc2.beginPath();
        crc2.fillStyle = "green";
        crc2.arc(450, 65, 30, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }
    
    function drawTomatos (): void {
        crc2.beginPath();
        crc2.fillStyle = "red";
        crc2.arc(450, 135, 30, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }

    function drawOnions (): void {
        crc2.beginPath();
        crc2.fillStyle = "white";
        crc2.arc(450, 205, 30, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }

    function drawDough (): void {
        crc2.beginPath();
        crc2.fillStyle = "#e8bea0";
        crc2.arc(450, 275, 30, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }

    function drawMeet (): void {
        crc2.beginPath();
        crc2.fillStyle = "#b66512";
        crc2.arc(450, 345, 30, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }

//Breich der Küche
    function drawKitchen (): void {
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(5, 5, 110, 540);
        crc2.closePath();
    }
//Rohmaterialen in der Küche
    function drawSaladKitchen (): void {
        crc2.beginPath();
        crc2.fillStyle = "green";
        crc2.arc(60, 70, 40, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }

    function drawTomatosKitchen (): void {
        crc2.beginPath();
        crc2.fillStyle = "red";
        crc2.arc(60, 170, 40, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }

    function drawOnionsKitchen (): void {
        crc2.beginPath();
        crc2.fillStyle = "white";
        crc2.arc(60, 270, 40, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }    

    
    function drawDoughKitchen (): void {
        crc2.beginPath();
        crc2.fillStyle = "#e8bea0";
        crc2.arc(60, 370, 40, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }  

    function drawMeetKitchen (): void {
        crc2.beginPath();
        crc2.fillStyle = "#b66512";
        crc2.arc(60, 470, 40, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }  

}