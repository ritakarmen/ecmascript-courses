function newFunction(name,age,country){
    var name = name || 'oscar';
    var age = age   || 23;
    var country = country || 'MX';

    console.log(name, age, country);
}

// es6

function newFunction2 (name = 'oscar', age = 32, country ="MX"){
    console.log(name, age, country);
};

newFunction2();
newFunction2('Isabel',16,'PU');
///

function printNumbers() {
	for (let i = 0; i < 10; i++) {
		// Cuando usamos let en un for-loop, es como si definieramos `i` aquí.

		setTimeout(
      function printer() {
	      console.log(i);
	    },
			100 * i
		);
	}
}

printNumbers();

//let uso

let separacion = `hola gaturro
salto de linea`;

let sinseparacion = 'hola gaturro sin salto de linea';

console.log(separacion);
console.log(sinseparacion);

//destructuracion de elemnetos de un objeto

let gaturro = {
    'sexo': 'macho',
    'color': 'anaranjado',
    'edad': 7
}

let{sexo, color}= gaturro;

console.log(color,sexo);

//uniendo arreglos

let uno = ['manzana','pera','piña'];
let dos = ['gato','perro'];
let unimos = ['ejemplo', ...uno, ...dos];

console.log(unimos);

//asignacion de objetos

let name = 'Rita';
let age = 39;

obj = {name,age};

console.log(obj);

//fuciones tipo flecha

const names =[
    {name: 'Rita', age: 39},
    {name: 'Carlos', age: 38}
]

let listOfName = names.map(item => console.log(item,name));

//promesas

const hellopromesa =()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve ('heeey');
        }else{
            reject ('upsss');
        }
    });
}

hellopromesa()

.then(response => console.log(response))
.catch(error=>console.log(error));

// CLASES

class calculator {
    constructor(){
        this.numA = 0;
        this.numB = 0;
    }
    sum(numA, numB){
        this.numA = numA;
        this.numB = numB;
        
        return this.numA +this.numB;
    }
}

const calculando = new calculator();

console.log(calculando.sum(5,3));

import {gaturro} from './mudule';

gaturro();