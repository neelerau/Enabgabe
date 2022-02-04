var Dönerladen;
(function (Dönerladen) {
    //salad
    var salad = document.getElementById("buttonsalad");
    var nosalad = document.getElementById("nosalad");
    var timersalad = document.getElementById("timersalad");
    var saladgesKitchen = 3;
    var saladges = 10;
    var saladimg = false;
    var buttonsalad = false;
    salad.addEventListener("click", function () {
        if (saladges == 1) {
            saladimg = true;
            salad.classList.add("is-hidden");
            nosalad.classList.remove("is-hidden");
            window.alert("Der Salat muss aufgefüllt werden!");
        }
        saladges--;
        saladMenge();
        noSalad();
    });
    nosalad.addEventListener("click", function () {
        if (buttonsalad == true) {
            saladgesKitchen--;
            nosalad.classList.add("is-hidden");
            timersalad.classList.remove("is-hidden");
            saladKitchenMenge();
            saladMenge();
            setTimeout(function () {
                salad.classList.remove("is-hidden");
                timersalad.classList.add("is-hidden");
                saladges = 10;
                saladMenge();
            }, 5000);
        }
    });
    function saladMenge() {
        document.querySelector(".salad").innerHTML = "" + saladges;
    }
    function saladKitchenMenge() {
        document.querySelector(".saladKitchen").innerHTML = "" + saladgesKitchen;
    }
    function noSalad() {
        if (saladimg == true) {
            buttonsalad = true;
        }
    }
    //tomato
    var tomato = document.getElementById("buttontomato");
    var notomato = document.getElementById("notomato");
    var timertomato = document.getElementById("timertomato");
    var tomatogesKitchen = 3;
    var tomatoges = 10;
    var tomatoimg = false;
    var buttontomato = false;
    tomato.addEventListener("click", function () {
        if (tomatoges == 1) {
            tomatoimg = true;
            tomato.classList.add("is-hidden");
            notomato.classList.remove("is-hidden");
            window.alert("Die Tomaten muss aufgefüllt werden!");
        }
        tomatoges--;
        tomatoValue();
        noTomato();
    });
    notomato.addEventListener("click", function () {
        if (buttontomato == true) {
            tomatogesKitchen--;
            notomato.classList.add("is-hidden");
            timertomato.classList.remove("is-hidden");
            tomatoKitchenValue();
            tomatoValue();
            setTimeout(function () {
                tomato.classList.remove("is-hidden");
                timertomato.classList.add("is-hidden");
                tomatoges = 10;
                tomatoValue();
            }, 5000);
        }
    });
    function tomatoValue() {
        document.querySelector(".tomato").innerHTML = "" + tomatoges;
    }
    function tomatoKitchenValue() {
        document.querySelector(".tomatoKitchen").innerHTML = "" + tomatogesKitchen;
    }
    function noTomato() {
        if (tomatoimg == true) {
            buttontomato = true;
        }
    }
    //onion
    var onion = document.getElementById("buttononion");
    var noonion = document.getElementById("noonion");
    var timeronion = document.getElementById("timeronion");
    var oniongesKitchen = 3;
    var onionges = 10;
    var onionimg = false;
    var buttononion = false;
    onion.addEventListener("click", function () {
        if (onionges == 1) {
            onionimg = true;
            onion.classList.add("is-hidden");
            noonion.classList.remove("is-hidden");
            window.alert("Die Zwiebeln müssen aufgefüllt werden!");
        }
        onionges--;
        onionValue();
        noOnion();
    });
    noonion.addEventListener("click", function () {
        if (buttononion == true) {
            oniongesKitchen--;
            noonion.classList.add("is-hidden");
            timeronion.classList.remove("is-hidden");
            onionKitchenValue();
            onionValue();
            setTimeout(function () {
                onion.classList.remove("is-hidden");
                timeronion.classList.add("is-hidden");
                onionges = 10;
                onionValue();
            }, 5000);
        }
    });
    function onionValue() {
        document.querySelector(".onion").innerHTML = "" + onionges;
    }
    function onionKitchenValue() {
        document.querySelector(".onionKitchen").innerHTML = "" + oniongesKitchen;
    }
    function noOnion() {
        if (onionimg == true) {
            buttononion = true;
        }
    }
    //dough
    var dough = document.getElementById("buttondough");
    var nodough = document.getElementById("nodough");
    var timerdough = document.getElementById("timerdough");
    var doughgesKitchen = 3;
    var doughges = 10;
    var doughimg = false;
    var buttondough = false;
    dough.addEventListener("click", function () {
        if (doughges == 1) {
            doughimg = true;
            dough.classList.add("is-hidden");
            nodough.classList.remove("is-hidden");
            window.alert("Das fladenbrot muss gebacken werden!");
        }
        doughges--;
        doughValue();
        noDough();
    });
    nodough.addEventListener("click", function () {
        if (buttondough == true) {
            doughgesKitchen--;
            nodough.classList.add("is-hidden");
            timerdough.classList.remove("is-hidden");
            doughKitchenValue();
            doughValue();
            setTimeout(function () {
                dough.classList.remove("is-hidden");
                timerdough.classList.add("is-hidden");
                doughges = 10;
                doughValue();
            }, 5000);
        }
    });
    function doughValue() {
        document.querySelector(".dough").innerHTML = "" + doughges;
    }
    function doughKitchenValue() {
        document.querySelector(".doughKitchen").innerHTML = "" + doughgesKitchen;
    }
    function noDough() {
        if (doughimg == true) {
            buttondough = true;
        }
    }
    //meet
    var meet = document.getElementById("buttonmeet");
    var nomeet = document.getElementById("nomeet");
    var timermeet = document.getElementById("timermeet");
    var meetgesKitchen = 3;
    var meetges = 10;
    var meetimg = false;
    var buttonmeet = false;
    meet.addEventListener("click", function () {
        if (meetges == 1) {
            meetimg = true;
            meet.classList.add("is-hidden");
            nomeet.classList.remove("is-hidden");
            window.alert("Das Fleisch muss aufgefüllt werden!");
        }
        meetges--;
        meetValue();
        noMeet();
    });
    nomeet.addEventListener("click", function () {
        if (buttonmeet == true) {
            meetgesKitchen--;
            nomeet.classList.add("is-hidden");
            timermeet.classList.remove("is-hidden");
            meetKitchenValue();
            meetValue();
            setTimeout(function () {
                meet.classList.remove("is-hidden");
                timermeet.classList.add("is-hidden");
                meetges = 10;
                meetValue();
            }, 5000);
        }
    });
    function meetValue() {
        document.querySelector(".meet").innerHTML = "" + meetges;
    }
    function meetKitchenValue() {
        document.querySelector(".meetKitchen").innerHTML = "" + meetgesKitchen;
    }
    function noMeet() {
        if (meetimg == true) {
            buttonmeet = true;
        }
    }
    //Spielende und Neustart
    var reloadbutton = document.getElementById("newSimulation");
    var ingrediens = document.getElementById("ingrediens");
    //Salad Resourcen leer
    nosalad.addEventListener("click", function () {
        nosaladleft();
    });
    function nosaladleft() {
        if (saladgesKitchen == -1) {
            saladimg = true;
            ingrediens.classList.add("is-hidden");
            reloadbutton.classList.remove("is-hidden");
            window.alert("Du hast keine Rohmaterialien mehr, die Simulation ist zu Ende!");
            console.log("ende");
        }
    }
    //Tomato Resourcen leer
    notomato.addEventListener("click", function () {
        notomatoleft();
    });
    function notomatoleft() {
        if (tomatogesKitchen == -1) {
            tomatoimg = true;
            ingrediens.classList.add("is-hidden");
            reloadbutton.classList.remove("is-hidden");
            window.alert("Du hast keine Rohmaterialien mehr, die Simulation ist zu Ende!");
            console.log("ende");
        }
    }
    //Onion Resourcen leer
    noonion.addEventListener("click", function () {
        noonionleft();
    });
    function noonionleft() {
        if (oniongesKitchen == -1) {
            onionimg = true;
            ingrediens.classList.add("is-hidden");
            reloadbutton.classList.remove("is-hidden");
            window.alert("Du hast keine Rohmaterialien mehr, die Simulation ist zu Ende!");
            console.log("ende");
        }
    }
    //Dough Resourcen leer
    nodough.addEventListener("click", function () {
        nodoughleft();
    });
    function nodoughleft() {
        if (doughgesKitchen == -1) {
            doughimg = true;
            ingrediens.classList.add("is-hidden");
            reloadbutton.classList.remove("is-hidden");
            window.alert("Du hast keine Rohmaterialien mehr, die Simulation ist zu Ende!");
            console.log("ende");
        }
    }
    //Meet Resourcen leer
    nomeet.addEventListener("click", function () {
        nomeetleft();
    });
    function nomeetleft() {
        if (meetgesKitchen == -1) {
            meetimg = true;
            ingrediens.classList.add("is-hidden");
            reloadbutton.classList.remove("is-hidden");
            window.alert("Du hast keine Rohmaterialien mehr, die Simulation ist zu Ende!");
            console.log("ende");
        }
    }
    //Bei Klick auf Reloudbutton, startet die Simulation neu
    reloadbutton.addEventListener("click", function () {
        location.reload();
    });
})(Dönerladen || (Dönerladen = {}));
//Bestellungsausgabe
// const customerOrder: Element = (document.getElementById("bestellbutton") as HTMLElement);
// var order: Boolean = false;
// var openOrder: ["Tomaten", "Zwiebeln", "Fleisch", "Salat"];
// customerOrder.addEventListener("click", function (): void {
//         mixOrder();
//         console.log("openorder");
// });
// function mixOrder(): void {
//     (Math.floor(Math.random() * openOrder.length));
//     console.log("random");
// }
// const customerOrder: Element = (document.getElementById("bestellbutton") as HTMLElement);
// var order: Boolean = false;
// interface Ingrediens {
//     img: string;
// }
// var openorder: Ingrediens[] = [
//     {
//         img: "images/Zutaten/salad.png"
//     },
//     {
//         img: "images/Zutaten/tomato.png"
//     },
//     {
//         img: "images/Zutaten/onion.png"
//     },
//     {
//         img: "images/Zutaten/meet.png"
//     }
// ];
// var createClass: number = 0;
// var imgArray: HTMLImageElement[] = [];
// customerOrder.addEventListener("click", function (): void {
//     if (order == true) {
//         let createImg: HTMLImageElement = <HTMLImageElement>document.createElement("img");
//         createImg.src = openorder[parseFloat(createImg.className)].img;
//         createImg.classList.add(createClass.toString());
//         imgArray.push(createImg);
//         mixOrder(openorder);
//         showOrder();
//         console.log(openorder);
//     }
// });
// function showOrder(): void {
//     (document.getElementById("bestellbutton") as HTMLInputElement).innerHTML = "Bestellung:" + openorder;
//     console.log("order");
// }
// function mixOrder(array: Array<Ingrediens>): void {
//     (Math.floor(Math.random() * openorder.length));
//     console.log("random");
// }
//# sourceMappingURL=ingredients.js.map