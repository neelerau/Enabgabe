var Dönerladen;
(function (Dönerladen) {
    var salad = document.getElementById("buttonsalad");
    var nosalad = document.getElementById("nosalad");
    var timer = document.getElementById("timerr");
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
            saladges = 10;
            nosalad.classList.add("is-hidden");
            salad.classList.remove("is-hidden");
            //for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function () {
                timer.classList.remove("is-hidden");
                salad.classList.remove("is-hidden");
                timer.classList.add("is-hidden");
                saladMenge();
            }, 5000);
        }
    });
    function saladMenge() {
        document.querySelector(".salad").innerHTML = "" + saladges;
    }
    function noSalad() {
        if (saladimg == true) {
            buttonsalad = true;
        }
    }
})(Dönerladen || (Dönerladen = {}));
//# sourceMappingURL=d%C3%B6nerbude.js.map