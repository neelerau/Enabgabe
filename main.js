var Dönerladen;
(function (Dönerladen) {
    Dönerladen.customerIn = [];
    var customerSpawnPoint;
    var lastFrame;
    var moveables = [];
    var employeeselection = false;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Dönerladen.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", handleCanvasClick);
    }
    //start Simulation
    var ingrediens = document.getElementById("ingrediens");
    var landingPage = document.getElementById("settings");
    var startbutton = document.getElementById("startbutton");
    var reloadbutton = document.getElementById("newSimulation");
    var employeeColor = "66b2ff";
    startbutton.addEventListener("click", function () {
        startSimulation();
    });
    function startSimulation() {
        landingPage.classList.add("is-hidden");
        ingrediens.classList.remove("is-hidden");
        Dönerladen.storesimulation = new Dönerladen.Doenerladen();
        console.log("start");
        Dönerladen.storesimulation.draw();
        reloadbutton.classList.remove("is-hidden");
        getUserPreferences();
        Dönerladen.employee = new Dönerladen.Employees(new Dönerladen.Vector(300, 300), employeeColor);
        moveables.push(Dönerladen.employee);
        window.setInterval(drawUpdate, 20);
        window.setInterval(function () {
            animationUpdate();
        }, 20);
        Dönerladen.middleX = Dönerladen.crc2.canvas.width / 3;
        Dönerladen.middleY = Dönerladen.crc2.canvas.height / 3;
        customerSpawnPoint = new Dönerladen.Vector(-50, Dönerladen.middleY);
        lastFrame = performance.now();
        update();
        setInterval(customerLeave, 4100);
        newCustomer();
        window.setInterval(newCustomer, 3900);
    }
    //Employees moving with mouseclick
    function drawUpdate() {
        Dönerladen.storesimulation.draw();
        for (var _i = 0, moveables_1 = moveables; _i < moveables_1.length; _i++) {
            var moveable = moveables_1[_i];
            moveable.draw();
        }
    }
    function getUserPreferences() {
        var formData = new FormData(document.forms[0]);
        employeeColor = formData.get("memberColorPicker");
        //employeeColor = <string>formData.get("TeamBColorPicker"); 
    }
    function handleCanvasClick(_event) {
        employeemoving(_event);
    }
    function employeemoving(_event) {
        var xpos = 0;
        var ypos = 0;
        if (_event.offsetX > 50 && _event.offsetX < 400) {
            xpos = _event.offsetX;
        }
        if (_event.offsetY > 50 && _event.offsetY < 500) {
            ypos = _event.offsetY;
        }
        if (xpos > 0 && ypos > 0) {
            Dönerladen.employee.destination = new Dönerladen.Vector(xpos, ypos);
            Dönerladen.employee.startMoving = true;
            console.log("HI");
        }
    }
    function animationUpdate() {
        for (var _i = 0, moveables_2 = moveables; _i < moveables_2.length; _i++) {
            var moveable = moveables_2[_i];
            moveable.move(1);
        }
    }
    //Kunden 
    function newCustomer() {
        if (Dönerladen.customerIn.length < 5) {
            Dönerladen.customerIn.push(new Dönerladen.Customer(new Dönerladen.Vector(customerSpawnPoint.x, customerSpawnPoint.y)));
            console.log("hi");
        }
    }
    function customerLeave() {
        Dönerladen.customerIn[0].receiveFood();
        console.log("weg");
    }
    function update() {
        var frameTime = performance.now() - lastFrame;
        lastFrame = performance.now();
        for (var _i = 0, customerIn_1 = Dönerladen.customerIn; _i < customerIn_1.length; _i++) {
            var person = customerIn_1[_i];
            //Geschwindigkeit Kunde
            person.move(frameTime / 1000);
            person.draw();
        }
        window.requestAnimationFrame(update);
    }
    function removeCustomer(_customer) {
        Dönerladen.customerIn.splice(Dönerladen.customerIn.indexOf(_customer), 1);
    }
    Dönerladen.removeCustomer = removeCustomer;
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=main.js.map