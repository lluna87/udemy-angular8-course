
// Uso de Let y Const
/*
var nombre = "Ricardo Tapia";
var edad = 23;

var PERSONAJE = {
  nombre: nombre,
  edad: edad
};
*/

const nombre:string = "Luis Luna";
const edad:number = 32;

let PERSONAJE = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
/*
var batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}
*/
interface HeroeDC {
  nombre:string,
  artesMarciales:string[]
}

let batman:HeroeDC = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}



// Convertir esta funcion a una funcion de flecha
/*
function resultadoDoble( a, b ){
  return (a + b) * 2
}
*/
const resultadoDoble = (a:number, b:number) => (a + b) * 2;

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
/*
function getAvenger( nombre, poder, arma ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};
*/

function getAvenger(nombre:string, poder?:string, arma:string = "arco"){
  let mensaje:string;
  if (poder){
     // mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
     mensaje = `${ nombre } tiene el poder de: ${ poder } y un arma: ${ arma }`;
  } else {
     mensaje = `${ nombre } tiene un  ${ poder }`;
  }

  return mensaje;
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo
{
  base:number;
  altura:number;

  constructor(base:number, altura:number) {
    if (base == altura) throw "Eso es un cuadrado";
    this.base = base;
    this.altura = altura;
  }

  calcularArea():number {
    return this.base * this.altura;
  }
}


let elRectangulo = new Rectangulo(5, 3);
let elOtroRectangulo = new Rectangulo(5, 5);
