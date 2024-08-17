let go = document.getElementById("go");
let move = document.getElementById("move");
let eq1 = document.getElementById("eq1");
let eq2 = document.getElementById("eq2");
let eq3 = document.getElementById("eq3");
let e1 = 0;
let e2 = 0;
let e3 = 0;

eq1.addEventListener("click", () => {
    if (e1 == 0) {
        eq1.classList.add('dsq');
        eq1.innerHTML = 'DESEQUIPAR';
        e1 += 1;
    } else {
        e1 -= 1;
        eq1.innerHTML = 'EQUIPAR';
        eq1.classList.remove("dsq");
    }
});

eq2.addEventListener("click", () => {
    if (e2 == 0) {
        eq2.classList.add('dsq');
        eq2.innerHTML = 'DESEQUIPAR';
        e2 += 1;
    } else {
        e2 -= 1;
        eq2.classList.remove('dsq');
        eq2.innerHTML = 'EQUIPAR';
    }
});

eq3.addEventListener("click", () => {
    if (e3 == 0) {
        eq3.classList.add('dsq');
        eq3.innerHTML = 'DESEQUIPAR';
        e3 += 1;
    } else {
        e3 -= 1;
        eq3.classList.remove('dsq');
        eq3.innerHTML = 'EQUIPAR';
    }
});

go.addEventListener("click", () => {
    if (e1 == 1 && e2 == 1 && e3 == 1) {
        alert("Tiene todo, puede empezar el recorrido");
        move.classList.add("mvmnt1");

        setTimeout(() => {
            if (e1 == 1 && e2 == 1 && e3 == 1) {
                alert("Tiene todo, puede seguir");
                move.classList.add("mvmnt2");

                setTimeout(() => {
                    if (e1 == 1 && e2 == 1 && e3 == 1) {
                        alert("Tiene todo, puede seguir");
                        move.classList.add("mvmnt3");
                        setTimeout(()=> {
                            alert("Haz completado el recorrido")
                            location.reload();
                        },10000)
                    } else {
                        move.classList.remove("mvmnt1");
                        alert("No tiene todo, no puedes seguir")
                        location.reload();
                    }
                }, 10000);
            } else {
                move.classList.remove("mvmnt1");
                alert("No tiene todo, no puedes seguir")
                location.reload();
            }
        }, 10000);
    } else {
        move.classList.remove("mvmnt1");
            alert("No tiene todo, no puedes Empezar el recorrido")

    }

    
});
