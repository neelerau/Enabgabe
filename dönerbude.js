var Dönerladen;
(function (Dönerladen) {
    var nosalad = document.getElementById("nosalad");
    var salad = document.getElementById("buttonsalad");
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