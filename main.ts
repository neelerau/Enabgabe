namespace Dönerladen {


    export let crc2: CanvasRenderingContext2D;
    export let storesimulation: Doenerladen;

    export let employee: Employees;

    export let customerIn: Customer[] = [];
    export let middleX: number;
    export let middleY: number;

    let customerSpawnPoint: Vector;
    let lastFrame: number;



    let moveables: Moveable[] = [];

    const employeeselection: boolean = false;

    window.addEventListener("load", handleLoad); 

    function handleLoad(): void {


            let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
            if (!canvas)
                return;
            crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");




            canvas.addEventListener("click", handleCanvasClick); 

    }


    //start Simulation
    const ingrediens: Element = (document.getElementById("ingrediens") as HTMLInputElement);
    const landingPage: Element = (document.getElementById("settings")as HTMLInputElement);
    const startbutton: Element = (document.getElementById("startbutton")as HTMLInputElement);
    const reloadbutton: Element = (document.getElementById("newSimulation") as HTMLInputElement);

    let employeeColor: string = "66b2ff";


    startbutton.addEventListener("click", function (): void {
        startSimulation();
    });
    
    function startSimulation(): void {
        landingPage.classList.add("is-hidden");
        ingrediens.classList.remove("is-hidden");
        storesimulation = new Doenerladen();
        console.log("start");
        storesimulation.draw();
        reloadbutton.classList.remove("is-hidden");

        getUserPreferences();

        employee = new Employees(new Vector(300, 300), employeeColor);
        moveables.push(employee); 
        window.setInterval(drawUpdate, 20);

        window.setInterval(function (): void {
               animationUpdate();
        },                 20);


        middleX = crc2.canvas.width / 3;
        middleY = crc2.canvas.height / 3;

        customerSpawnPoint = new Vector(-50, middleY);

        
        lastFrame = performance.now();
        update();

        setInterval(customerLeave, 4100);
        newCustomer();
        window.setInterval(newCustomer, 3900);         


    }


    //Employees moving with mouseclick

    function drawUpdate(): void {
        storesimulation.draw();
        for (let moveable of moveables) {
            moveable.draw(); 
        } 
    }


    function getUserPreferences(): void {

        let formData: FormData = new FormData(document.forms[0]); 
        employeeColor = <string>formData.get("memberColorPicker"); 
        //employeeColor = <string>formData.get("TeamBColorPicker"); 
    }

   

    function handleCanvasClick(_event: MouseEvent): void {

        employeemoving(_event);
         }


    function employeemoving(_event: MouseEvent): void {
    let xpos: number = 0;
    let ypos: number = 0;

    if (_event.offsetX > 50 && _event.offsetX < 400) {
        xpos = _event.offsetX;
    }
    if (_event.offsetY > 50 && _event.offsetY < 500) {
        ypos = _event.offsetY;
    }

    if (xpos > 0 && ypos > 0) {
        employee.destination = new Vector(xpos, ypos);
        employee.startMoving = true;
        console.log("HI");
    }
}


    function animationUpdate(): void { 
    for ( let moveable of moveables) {
        moveable.move(1);
    }


    
}


//Kunden 

    function newCustomer(): void {
    if (customerIn.length < 5) {
        customerIn.push(new Customer(new Vector(customerSpawnPoint.x, customerSpawnPoint.y)));
        console.log("hi");
    }
}
    function customerLeave(): void {
    customerIn[0].receiveFood();
    console.log("weg");
}

    function update(): void {
    let frameTime: number = performance.now() - lastFrame;
    lastFrame = performance.now();
    for (let person of customerIn) {
        //Geschwindigkeit Kunde
        person.move(frameTime / 1000);
        person.draw();
    }
    window.requestAnimationFrame(update);
}
    export function removeCustomer(_customer: Customer): void {
    customerIn.splice(customerIn.indexOf(_customer), 1);
}
    



}