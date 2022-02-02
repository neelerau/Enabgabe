var Dönerladen;
(function (Dönerladen) {
    //salad
    var salad = document.getElementById("buttonsalad");
    var nosalad = document.getElementById("nosalad");
    var timersalad = document.getElementById("timersalad");
    var saladgesKitchen = 10;
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
    var tomatogesKitchen = 10;
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
    var oniongesKitchen = 10;
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
    var doughgesKitchen = 10;
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
    var meetgesKitchen = 10;
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
    //Bestellungsausgabe
    var customerOrder = document.querySelector(".bestellungbutton");
    var order = false;
    var openorder = [
        {
            img: "images/zutaten/salad.png"
        },
        {
            img: "images/zutaten/tomato.png"
        },
        {
            img: "images/zutaten/onion.png"
        },
        {
            img: "images/zutaten/meet.png"
        }
    ];
    customerOrder.addEventListener("click", function () {
        mixOrder(openorder);
        showOrder();
        console.log("bestellung");
    });
    function showOrder() {
        document.getElementById("Bestellung").innerHTML = "Bestellung:" + openorder;
        console.log("order");
    }
    function mixOrder(array) {
        (Math.floor(Math.random() * openorder.length));
        console.log("random");
    }
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=ingredients.js.map