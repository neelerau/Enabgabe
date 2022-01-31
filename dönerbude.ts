namespace Dönerladen { 

    const salad: Element = (document.getElementById("buttonsalad")as HTMLInputElement);
    const nosalad: Element = (document.getElementById("nosalad")as HTMLInputElement);
    const timer: Element = (document.getElementById("timerr")as HTMLInputElement);
    var saladges: number = 10;
    var saladimg: Boolean = false;
    var buttonsalad: Boolean = false;
    
    salad.addEventListener("click", function(): void {
        if (saladges == 1) {
            saladimg = true;
            salad.classList.add("is-hidden");
            nosalad.classList.remove("is-hidden");
            window.alert("Der Salat muss aufgefüllt werden!");
        }
        saladges --;
        saladMenge();
        noSalad();
    
    });

    
    function saladMenge(): void {
        (document.querySelector(".salad")as HTMLInputElement).innerHTML = "" + saladges;
    }
    

    nosalad.addEventListener("click", function (): void {
        if (buttonsalad == true) {
            saladges = 10;
            nosalad.classList.add("is-hidden");
            timer.classList.remove("is-hidden");
            for (let i: number = 0; i <= 3; i++);
            //console.log("Hi");
            setTimeout(function (): void {
                salad.classList.remove("is-hidden");
                timer.classList.add("is-hidden");
                saladMenge();
            },         5000);
        }
     }); 

    function noSalad(): void {
        if (saladimg == true) {
            buttonsalad = true;
            saladges = 10;

            
        }
    } 
    }
    