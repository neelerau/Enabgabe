namespace Dönerladen {


    //salad
    const salad: Element = (document.getElementById("buttonsalad") as HTMLInputElement);
    const nosalad: Element = (document.getElementById("nosalad") as HTMLInputElement);
    const timersalad: Element = (document.getElementById("timersalad") as HTMLInputElement);
    var saladgesKitchen: number = 1;
    var saladges: number = 10;
    var saladimg: Boolean = false;
    var buttonsalad: Boolean = false;

    salad.addEventListener("click", function (): void {
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


    nosalad.addEventListener("click", function (): void {
        if (buttonsalad == true) {
            saladgesKitchen--;
            nosalad.classList.add("is-hidden");
            timersalad.classList.remove("is-hidden");
            saladKitchenMenge();
            saladMenge();

            setTimeout(function (): void {
                salad.classList.remove("is-hidden");
                timersalad.classList.add("is-hidden");
                saladges = 10;
                saladMenge();
            },         5000);
        }

    });


    function saladMenge(): void {
        (document.querySelector(".salad") as HTMLInputElement).innerHTML = "" + saladges;
    }

    function saladKitchenMenge(): void {
        (document.querySelector(".saladKitchen") as HTMLInputElement).innerHTML = "" + saladgesKitchen;
    }

    function noSalad(): void {
        if (saladimg == true) {
            buttonsalad = true;

        }
    }


    //tomato
    const tomato: Element = (document.getElementById("buttontomato") as HTMLInputElement);
    const notomato: Element = (document.getElementById("notomato") as HTMLInputElement);
    const timertomato: Element = (document.getElementById("timertomato") as HTMLInputElement);
    var tomatogesKitchen: number = 1;
    var tomatoges: number = 10;
    var tomatoimg: Boolean = false;
    var buttontomato: Boolean = false;

    tomato.addEventListener("click", function (): void {
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


    notomato.addEventListener("click", function (): void {
        if (buttontomato == true) {
            tomatogesKitchen--;
            
            notomato.classList.add("is-hidden");
            timertomato.classList.remove("is-hidden");
            tomatoKitchenValue();
            tomatoValue();

            setTimeout(function (): void {
                tomato.classList.remove("is-hidden");
                timertomato.classList.add("is-hidden");
                tomatoges = 10;
                tomatoValue();
            },         5000);
        }

    });

    function tomatoValue(): void {
        (document.querySelector(".tomato") as HTMLInputElement).innerHTML = "" + tomatoges;
    }

    function tomatoKitchenValue(): void {
        (document.querySelector(".tomatoKitchen") as HTMLInputElement).innerHTML = "" + tomatogesKitchen;
    }

    function noTomato(): void {
        if (tomatoimg == true) {
            buttontomato = true;


        }
    }


    //onion
    const onion: Element = (document.getElementById("buttononion") as HTMLInputElement);
    const noonion: Element = (document.getElementById("noonion") as HTMLInputElement);
    const timeronion: Element = (document.getElementById("timeronion") as HTMLInputElement);
    var oniongesKitchen: number = 1;
    var onionges: number = 10;
    var onionimg: Boolean = false;
    var buttononion: Boolean = false;

    onion.addEventListener("click", function (): void {
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


    noonion.addEventListener("click", function (): void {
        if (buttononion == true) {
            oniongesKitchen--;
            noonion.classList.add("is-hidden");
            timeronion.classList.remove("is-hidden");
            onionKitchenValue();
            onionValue();

            setTimeout(function (): void {
                onion.classList.remove("is-hidden");
                timeronion.classList.add("is-hidden");
                onionges = 10;
                onionValue();
            },         5000);
        }

    });

    function onionValue(): void {
        (document.querySelector(".onion") as HTMLInputElement).innerHTML = "" + onionges;
    }

    function onionKitchenValue(): void {
        (document.querySelector(".onionKitchen") as HTMLInputElement).innerHTML = "" + oniongesKitchen;
    }

    function noOnion(): void {
        if (onionimg == true) {
            buttononion = true;


        }
    }

    //Cucumber
    const dough: Element = (document.getElementById("buttondough") as HTMLInputElement);
    const nodough: Element = (document.getElementById("nodough") as HTMLInputElement);
    const timerdough: Element = (document.getElementById("timerdough") as HTMLInputElement);
    var doughgesKitchen: number = 1;
    var doughges: number = 10;
    var doughimg: Boolean = false;
    var buttondough: Boolean = false;

    dough.addEventListener("click", function (): void {
        if (doughges == 1) {
            doughimg = true;
            dough.classList.add("is-hidden");
            nodough.classList.remove("is-hidden");
            window.alert("Die Gurken müssen aufgefüllt werden!");
        }
        doughges--;
        doughValue();
        noDough();

    });


    nodough.addEventListener("click", function (): void {
        if (buttondough == true) {
            doughgesKitchen--;
            nodough.classList.add("is-hidden");
            timerdough.classList.remove("is-hidden");
            doughKitchenValue();
            doughValue();

            setTimeout(function (): void {
                dough.classList.remove("is-hidden");
                timerdough.classList.add("is-hidden");
                doughges = 10;
                doughValue();
            },         5000);
        }

    });
    function doughValue(): void {
        (document.querySelector(".dough") as HTMLInputElement).innerHTML = "" + doughges;
    }

    function doughKitchenValue(): void {
        (document.querySelector(".doughKitchen") as HTMLInputElement).innerHTML = "" + doughgesKitchen;
    }

    function noDough(): void {
        if (doughimg == true) {
            buttondough = true;


        }
    }

    //meet
    const meet: Element = (document.getElementById("buttonmeet") as HTMLInputElement);
    const nomeet: Element = (document.getElementById("nomeet") as HTMLInputElement);
    const timermeet: Element = (document.getElementById("timermeet") as HTMLInputElement);
    var meetgesKitchen: number = 1;
    var meetges: number = 10;
    var meetimg: Boolean = false;
    var buttonmeet: Boolean = false;

    meet.addEventListener("click", function (): void {
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


    nomeet.addEventListener("click", function (): void {
        if (buttonmeet == true) {
            meetgesKitchen--;
            nomeet.classList.add("is-hidden");
            timermeet.classList.remove("is-hidden");
            meetKitchenValue();
            meetValue();

            setTimeout(function (): void {
                meet.classList.remove("is-hidden");
                timermeet.classList.add("is-hidden");
                meetges = 10;
                meetValue();
            },         5000);
        }

    });

    function meetValue(): void {
        (document.querySelector(".meet") as HTMLInputElement).innerHTML = "" + meetges;
    }

    function meetKitchenValue(): void {
        (document.querySelector(".meetKitchen") as HTMLInputElement).innerHTML = "" + meetgesKitchen;
    }

    function noMeet(): void {
        if (meetimg == true) {
            buttonmeet = true;


        }
    }


    //Spielende und Neustart
    const reloadbutton: Element = (document.getElementById("newSimulation") as HTMLInputElement);
    const ingrediens: Element = (document.getElementById("ingrediens") as HTMLInputElement);
    const hiddencanvas: Element = (document.getElementById("hiddencanvas") as HTMLInputElement);


    //Salad Resourcen leer
    nosalad.addEventListener("click", function (): void {
        nosaladleft();
    });

    function nosaladleft(): void {
        if (saladgesKitchen == -1) {
            saladimg = true;
            ingrediens.classList.add("is-hidden");
            hiddencanvas.classList.add("noopacity");


            window.alert("Du hast keine Rohmaterialien mehr, die Simulation ist zu Ende!");
            console.log("ende");

        }
    }

    //Tomato Resourcen leer
    notomato.addEventListener("click", function (): void {
        notomatoleft();
    });

    function notomatoleft(): void {
        if (tomatogesKitchen == -1) {
            tomatoimg = true;
            ingrediens.classList.add("is-hidden");
            hiddencanvas.classList.add("noopacity");


            window.alert("Du hast keine Rohmaterialien mehr, die Simulation ist zu Ende!");
            console.log("ende");

        }
    }

    //Onion Resourcen leer
    noonion.addEventListener("click", function (): void {
        noonionleft();
    });

    function noonionleft(): void {
        if (oniongesKitchen == -1) {
            onionimg = true;
            ingrediens.classList.add("is-hidden");
            hiddencanvas.classList.add("noopacity");


            window.alert("Du hast keine Rohmaterialien mehr, die Simulation ist zu Ende!");
            console.log("ende");

        }
    }


    //Cucumber Resourcen leer
    nodough.addEventListener("click", function (): void {
            nodoughleft();
        });

    function nodoughleft(): void {
        if (doughgesKitchen == -1) {
            doughimg = true;
            ingrediens.classList.add("is-hidden");
            hiddencanvas.classList.add("noopacity");


            window.alert("Du hast keine Rohmaterialien mehr, die Simulation ist zu Ende!");
            console.log("ende");

        }
    }

    //Meet Resourcen leer
    nomeet.addEventListener("click", function (): void {
            nomeetleft();
        });

    function nomeetleft(): void {
        if (meetgesKitchen == -1) {
            meetimg = true;
            ingrediens.classList.add("is-hidden");
            hiddencanvas.classList.add("noopacity");


            window.alert("Du hast keine Rohmaterialien mehr, die Simulation ist zu Ende!");
            console.log("ende");

        }
    }

        //Bei Klick auf Reloudbutton, startet die Simulation neu
    reloadbutton.addEventListener("click", function (): void {
            location.reload();
        });



    //Bestellungsausgabe

    const order: Element = (document.getElementById("bestellbutton")as HTMLInputElement);

    order.addEventListener("click", function(): void {
        let images: string [] =  new Array("images/Zutaten/salad.png", "images/Zutaten/tomato.png", "images/Zutaten/onion.png", "images/Zutaten/meet.png", "images/Zutaten/dough.png");
        let index: number = 0;
        const ingredient1: Element = (document.getElementById("randomingredient1")as HTMLInputElement);
        
        index = Math.floor(Math.random() * images.length);
        (document.getElementById("randomingredient1")as HTMLInputElement).src = images[index];
        ingredient1.classList.remove("is-hidden");
    
        let images2: string [] =  new Array("images/Zutaten/salad.png", "images/Zutaten/tomato.png", "images/Zutaten/onion.png", "images/Zutaten/meet.png", "images/Zutaten/dough.png");
        let index2: number = 0;
        const ingredient2: Element = (document.getElementById("randomingredient2")as HTMLInputElement);
        
        index2 = Math.floor(Math.random() * images2.length);
        (document.getElementById("randomingredient2")as HTMLInputElement).src = images2[index2];
        ingredient2.classList.remove("is-hidden");

        let images3: string [] =  new Array("images/Zutaten/meal1.png", "images/Zutaten/meal2.png", "images/Zutaten/meal3.png", "images/Zutaten/meal4.png");
        let index3: number = 0;
        const ingredient3: Element = (document.getElementById("randomingredient3")as HTMLInputElement);
        
        index3 = Math.floor(Math.random() * images3.length);
        (document.getElementById("randomingredient3")as HTMLInputElement).src = images3[index3];
        ingredient3.classList.remove("is-hidden");
         });


    //Bestellunsanzahl
    const meal1: Element = (document.getElementById("buttonmeal1") as HTMLInputElement);
    const meal2: Element = (document.getElementById("buttonmeal2") as HTMLInputElement);
    const meal3: Element = (document.getElementById("buttonmeal3") as HTMLInputElement);
    const meal4: Element = (document.getElementById("buttonmeal4") as HTMLInputElement);
    var meals: number = 0;

    meal1.addEventListener("click", function (): void {
        meals++;
        mealValue();

    });

    meal2.addEventListener("click", function (): void {
        meals++;
        mealValue();

    });

    meal3.addEventListener("click", function (): void {
        meals++;
        mealValue();

    });

    meal4.addEventListener("click", function (): void {
        meals++;
        mealValue();

    });

    function mealValue(): void {
        (document.querySelector(".meal") as HTMLInputElement).innerHTML = "Bestellungen Anzahl: " + meals;
    }



}
