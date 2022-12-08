//EX1
let altura_cm = 179 
console.log(altura_cm);

//EX2
let altura_metros = 1.79
console.log(altura_metros);

//EX3
let peso = 75.2
console.log(peso);

//EX4
let altura_metros_arriba = 1.79
console.log(Math.ceil(altura_metros_arriba));

//EX5
let peso_abajo = 75.2
console.log(Math.floor(peso_abajo));

//EX6
var numero1 = 1.79E+308;
var numero2 = 1.79E+309;
let text;

function verificarValorMaximo(num){
    if (num <= Number.MAX_VALUE){
        return text = "El numero no es infinito"
    }else{
        return text = "El numero es infinito"
    }
}

console.log(verificarValorMaximo(numero1));
console.log(verificarValorMaximo(numero2));

console.log(numero1);
console.log(numero2);
