var Dönerladen;
(function (Dönerladen) {
    Dönerladen.playerInformation = [
        { x: 50, y: 100, team: "employee" },
        { x: 180, y: 100, team: "employee" }
    ];
    var moveables = [];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Dönerladen.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", handleCanvasClick);
    }
    function drawUpdate() {
        Dönerladen.storesimulation.draw();
        for (var _i = 0, moveables_1 = moveables; _i < moveables_1.length; _i++) {
            var moveable = moveables_1[_i];
            moveable.draw();
        }
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
    }
    function handleCanvasClick(_event) {
        employeemoving(_event);
    }
    function employeemoving(_event) {
        var xpos = 0;
        var ypos = 0;
        if (_event.offsetX > 50 && _event.offsetX < 800) {
            xpos = _event.offsetX;
        }
        if (_event.offsetY > 50 && _event.offsetY < 700) {
            ypos = _event.offsetY;
        }
        if (xpos > 0 && ypos > 0) {
            Dönerladen.employee.destination = new Dönerladen.Vector(xpos, ypos);
            Dönerladen.employee.startMoving = true;
            //animation = true;
            console.log("HI");
        }
    }
    function getUserPreferences() {
        var formData = new FormData(document.forms[0]);
        employeeColor = formData.get("memberColorPicker");
        //teamBColor = <string>formData.get("TeamBColorPicker"); 
    }
    function animationUpdate() {
        for (var _i = 0, moveables_2 = moveables; _i < moveables_2.length; _i++) {
            var moveable = moveables_2[_i];
            moveable.move();
        }
    }
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=main.js.map