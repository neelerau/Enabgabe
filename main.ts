namespace Dönerladen {


    export let crc2: CanvasRenderingContext2D;
    export let storesimulation: Doenerladen;
    let landingPage: HTMLDivElement;
    let startbutton: HTMLDivElement;
    let ingrediens: Element = (document.getElementById("ingrediens")as HTMLInputElement);

    window.addEventListener("load", handleLoad); 

    function handleLoad(): void {


            let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
            if (!canvas)
                return;
            crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

            landingPage = <HTMLDivElement>document.getElementById("settings");
            startbutton = <HTMLDivElement>document.getElementById("startbutton");

            startbutton.addEventListener("click", startSimulation);


    }

    function startSimulation(): void {

        landingPage.style.display = "none";

        
        ingrediens.classList.remove("is-hidden");
        storesimulation = new Doenerladen();
        
        window.setInterval(drawUpdate);
}

    function drawUpdate(): void {

    storesimulation.draw();

    
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