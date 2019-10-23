//Boolean
let muted: boolean = true
muted = false

//numeros
let numerador = 42
let denominador = 6
let resultado  = numerador / denominador

//String
let nombre: string = 'Richard'
let saludo: string =`Me llamo ${nombre}`

//Arreglos
let people: string[] = []
people= ['Isables', 'Nicole', 'Raul']
//people.push(2) Error no puedo asignar un numero
let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push('Ricardo')
peopleAndNumbers.push(900)

//Enum
// Si no le pongo el valor = entonces se pondra como 0, 1, 2
enum Color {
    Rojo = 'rojo',
    Verde = 'verde', 
    Azul = 'azul'
}

let colorFavorito = Color.Verde
console.log(`Mi color favorito es ${colorFavorito}`)

//any
let comodin: any = 'joker'
comodin = {type: 'Wildcard'}

//object
let someObject: Object = {type: 'Wildcard'} 

//Funciones
function add(a: number, b: number): number {
    return a+b
}

const sum = add(4, 7)

//Tipando retorno de funciones
function createAdder(a: number): (number) => number {
    return function(b: number){
        return a+b
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(3)


function fullName(firstName: string, lastName?: string): string{
    return `${firstName} ${lastName}`
}

const richard = fullName('Richard') //  Richard undefined

function fullNameAutoAssign(firstName: string, lastName: string= 'Maza'): string{
    return `${firstName} ${lastName}`
}

const hernan = fullNameAutoAssign('Hernan') // Hernan Maza


//========Interfaces =============
//Es como siyo quiero un modelo de un Object simple, no es necesario crearlo como clase para darle tipado si no
//simplemente declrarlo como inteface
enum ColorRect {
    Rojo= 'rojo',
    Verde= 'verde',
}
interface Rectangulo {
    ancho: number
    alto: number
    color?: ColorRect // es opcional
}

let rectangulo: Rectangulo ={
    ancho:4,
    alto: 6,
    color: ColorRect.Rojo
}
function area(r: Rectangulo){
    return r.alto  * r.ancho
}

const areaRect = area(rectangulo)
console.log(areaRect)


// OJo que se debe usar functino, si se usa arrow functions se solapa el this
rectangulo.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : 'Un rectangulo sin color'
}

console.log(rectangulo.toString())
