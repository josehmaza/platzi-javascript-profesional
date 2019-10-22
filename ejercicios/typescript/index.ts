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

const sum = add(a, b)