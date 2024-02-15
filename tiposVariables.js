function explicarVar(){
    var edad = 10;
    edad = 90;
    if(true){
        var edad = 45;
        console.log(edad);
    }
    console.log(edad);
}
explicarVar();

function explicarLet(){
    let edad = 10;
    edad = 90;
    if(true){
        let edad = 45;
        console.log(edad);
    }
    console.log(edad);
}
explicarLet();


function explicarConst(){
    const edad = 10;
    //edad = 90;
    const jugador = { name: "juan"};
    if(true){
        const edad = 45;
        console.log(edad);
    }
    console.log(edad);
    console.log(jugador);
    jugar.lastname = "perez";
    console.log(jugador);
}
explicarConst();