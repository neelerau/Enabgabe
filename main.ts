namespace Dönerladen {


    export let crc2: CanvasRenderingContext2D;
    export let storesimulation: Doenerladen;
    export let customerin: Customer;
    export let employee: Employees;


    export interface EmployeeInformation {
        x: number;
        y: number;
        team: string;
    }

    export let playerInformation: EmployeeInformation[] = [

    { x: 50, y: 100, team: "employee" },
    { x: 180, y: 100, team: "employee" }
    ];

    let moveables: Moveable[] = [];




    window.addEventListener("load", handleLoad); 

    function handleLoad(): void {


            let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
            if (!canvas)
                return;
            crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


            canvas.addEventListener("click", handleCanvasClick); 

    }

    function drawUpdate(): void {

        storesimulation.draw();
    
        for (let moveable of moveables) {
            moveable.draw(); 
        
        }
        
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

    }

    function handleCanvasClick(_event: MouseEvent): void {
        employeemoving(_event);
         }


    function employeemoving(_event: MouseEvent): void {
    let xpos: number = 0;
    let ypos: number = 0;

    if (_event.offsetX > 50 && _event.offsetX < 800) {
        xpos = _event.offsetX;
    }
    if (_event.offsetY > 50 && _event.offsetY < 700) {
        ypos = _event.offsetY;
    }

    if (xpos > 0 && ypos > 0) {
        employee.destination = new Vector(xpos, ypos);
        employee.startMoving = true;
        //animation = true;
        console.log("HI");
    }
}

    function getUserPreferences(): void {

    let formData: FormData = new FormData(document.forms[0]); 
    employeeColor = <string>formData.get("memberColorPicker"); 
    //teamBColor = <string>formData.get("TeamBColorPicker"); 
}

    function animationUpdate(): void { 
    for ( let moveable of moveables) {
        moveable.move();
    }
}




}