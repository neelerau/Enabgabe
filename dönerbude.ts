namespace Dönerladen { 

    const nosalad: Element = (document.getElementById("nosalad")as HTMLInputElement);
    const salad: Element = (document.getElementById("buttonsalad")as HTMLInputElement);
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
    


    function noSalad(): void {
         if (saladimg == true) {
             buttonsalad = true;

             
         }
     }
    }
    