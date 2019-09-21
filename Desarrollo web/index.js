/*var nombre = 'Ximena', edad = 4

function imprimiredad(n, e) {
    console.log(`${n} tiene ${e} años`);
}


imprimiredad(nombre, edad)
imprimiredad('Fernanda', 4)
imprimiredad('Ximena', 4)
imprimiredad('Alessandro', 6)
imprimiredad('Eric', 14)

var bembecho = {
    nombre: 'Alessandro',
    apellido: 'Henriquez',
    edad: 6
}

var ximena = {
    nombre: 'Ximena',
    apellido: 'Henriquez',
    edad: 4
}

function imprimirNombreEnMayusculas({nombre}) {
   var nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(bembecho)
imprimirNombreEnMayusculas(ximena)
imprimirNombreEnMayusculas({ nombre: 'chinese'})

function imprimirNombreYEdad(bembecho){
    var nombre = nombre
    var edad = edad
    console.log(nombre, edad)
}

imprimirNombreYEdad(nombre)
imprimirNombreYEdad(edad)

var x = 4, y = '4'

var ramiro = {
    nombre: 'Ramiro'
}

var otraPersona = {
    nombre: 'Ramiro'
}

let ramiro = {
    nombre: 'Ramiro',
    apellido: 'Henriquez',
    edad: 34,
    developer: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    gamer: false
}

 function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.developer) {
        console.log('Developer')
    }

    if (persona.cocinero) {
        console.log('Cocinero')
    }

    if (persona.cantante) {
        console.log('Cantante')
    }

    if (persona.guitarrista) {
        console.log('Guitarrista')
    }

    if (persona.dj) {
        console.log('DJ')
    }

    if (persona.gamer) {
        console.log('Gamer')
    }

}
//imprimirProfesiones(ramiro)

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({edad}) =>  edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso () {
    if (!esMayorDeEdad(persona))
    console.log('Acceso Denegado')
}
*/
//Ejercicio de 'While' adlgazando y subiendo de peso//

/*
var gordo = {
    // nombre: 'Leonardo',
    // apellido: 'Henriquez',
    // edad: 25,
    peso: 70
}

console.log(`Al inicio del año ${gordo.nombre} pesa ${gordo.peso}kg`)


const INCREMENTO_PESO = 0.3

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelagazar = persona => persona.peso -= INCREMENTO_PESO

const comeMucho = () => Math.random() < 0.30

const realizaDeporte = () => Math.random() < 0.4

const META = gordo.peso - 3

var dias = 0

while(gordo.peso > META) {
if (comeMucho()) {
    aumentarDePeso(gordo)
}

if (realizaDeporte()) {
    adelagazar(gordo)
    }
    dias += 1
}


console.log(`Pasaron ${dias} dias hasta que ${gordo.nombre} adelgazo 3kg`)


console.log(`Al final del año ${gordo.nombre} pesa ${gordo.peso.toFixed(1)}kg`)


let signo = prompt('Cual es tu signo')

switch (signo) {
    case 'acuario':
        console.log('Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis! Eum aliquid aspernatur excepturi repellat. Ducimus unde')
        break
        case 'piscis':
                console.log('Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis! Eum aliquid aspernatur excepturi repellat. Ducimus unde')
        break
        case 'tauro':
        console.log('Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis! Eum aliquid aspernatur excepturi repellat. Ducimus unde')
        break
        case 'capricornio':
        console.log('Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis! Eum aliquid aspernatur excepturi repellat. Ducimus unde')
        break
        case 'cancer':
        console.log('Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis! Eum aliquid aspernatur excepturi repellat. Ducimus unde')
        break
}
*/
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
}

saludar(fn) {
    var { nombre, apellido} = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`)
    if (fn) {
        fn(nombre, apellido)
    }
}

soyAlto() {
    return this.altura > 1.80

    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    
     saludar (fn) {
         var { nombre, apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy Desarrollador`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
    
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev) {
        console.log('Ah mira, no sabias que eras Developer');
    }
}

var xinese = new Persona('Ramiro', 'Henriquez', 1.82)
var ximena = new Persona('Ximena', 'Henriquez', 1.68)
var alessandro = new Persona('Alessandro', 'Henriquez', 1.72)
var fernanda = new Desarrollador('Fernanda', 'Henriquez', 1.65)

xinese.saludar(responderSaludo)
ximena.saludar(responderSaludo)
alessandro.saludar(responderSaludo)
fernanda.saludar(responderSaludo)
