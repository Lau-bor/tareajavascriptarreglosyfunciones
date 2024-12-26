
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const lista = document.getElementById('miLista');

meses.forEach((elemento) => {const item = document.createElement('li');
    item.textContent = elemento;
    lista.appendChild(item);

}); // 1





let ciudades = [];
while (true) {
    let ciudad = prompt('Ingrese el nombre de una ciudad');
    if (ciudad === null){
        break;
    }
    ciudades.push(ciudad)
}

console.log('Arreglo de ciudades:');
console.log(ciudades);


document.write('<br>El arreglo de ciudades tiene '+ ciudades.length +' elementos.<br>');

document.write('Elemento 1er posicion: '+ ciudades[0] + '<br>');
document.write('Elemento 3er posicion: '+ ciudades[2] + '<br>');
document.write('Elemento ultima posicion: '+ ciudades[ciudades.length - 1] + '<br>');

ciudades.push('París');

console.log('Ciudad en la segunda posición:', ciudades[1]);

ciudades[1] = 'Barcelona';

document.write('<h2>Arreglo de ciudades actualizado: </h2> ');
document.write(ciudades);
document.write('<br>') // 2









let apariciones = new Array(11).fill(0);

for (let i = 0; i < 50; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;
    apariciones[suma - 2]++;
}
document.write('<br>')
document.write(`<table border= '1'> `);
document.write(`<tr><th>Suma</th><th>Numero de Apariciones</th></tr>`);
for (let i = 0; i < apariciones.length; i++) {
    document.write(`<tr><td>${i + 2}</td><td>${apariciones[i]}</td></tr>`);
}
document.write('</table>') // 3







function parOImpar(num){
    if (num % 2 === 0) {
        return " par <br>";
    } else {
        return " impar <br>";
    }
}

let numeroParOImpar = +prompt('Ingrese un número:')

let resultado = parOImpar(numeroParOImpar);
document.write(`<br> El número ${numeroParOImpar} es ${resultado}`); // 4
















function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()){
        return "<br> La cadena está formada solo por mayúsculas. <br>";
    } else if (cadena === cadena.toLowerCase()){
        return "<br> La cadena está formada solo por minúsculas. <br>";
    } else {
        return "<br> La cadena está formada por una mezcla de mayúsculas y minúsculas. <br>";
    }
}


let cadena = prompt('Ingrese una frase.')
document.write(analizarCadena(cadena)); // 5









let ladoA = +prompt('Ingrese el valor del lado A.');
let ladoB = +prompt('Ingrese el valor del lado B.');

function calcularPerimetro(a, b){
    return 2 * (a + b);
}

let perimetro = calcularPerimetro(ladoA, ladoB);
document.write('<br> El perímetro del rectángulo es: <br>' + perimetro); // 6









let numeroTabla = +prompt('Ingrese un número para la tabla de multiplicar.')

function mostrarTablaMultiplicar(num) {
    document.write(`<br> <h2> Tabla de multiplicar de ${num}</h2>`);
    for (let i = 1; i <= 10; i++) {
        document.write(`${num} x ${i} = ${num * i} <br>`);
    }
}

mostrarTablaMultiplicar(numeroTabla); // 7