function describirPersona(p) {


    console.log(`${ p.nombre } tiene una edad de ${ p.edad } y mide ${ p.estatura }`);

}



let persona = {
    nombre: 'Melissa',
    edad: 27,
    estatura: 1.50
}

describirPersona(persona);

//___________________________________________________________________________


let persona1 = {
    nombre: 'Fernando',
    edad: 32
};

let persona2 = {
    nombre: 'Melissa',
    edad: 27
};

let persona3 = {
    nombre: 'Juan',
    edad: 40
};

let personas = [persona1, persona2, persona3];


for (let i = 0; i < personas.length; i++) {

    console.log(`${ personas[i].nombre } -- ${ personas[i].edad }`);

}