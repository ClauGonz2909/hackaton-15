// EJERCICIO 1: 
//Utilizando función arrow, crear una función que reciba como parámetros un nombre,
//apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián
//yabiku y mi edad 33”


const concatParams = (name, lastName, age) => `Hola mi nombre ${name} ${lastName} y mi edad es ${age}`
console.log(concatParams("Sebastian", "Yabiku", 33))
//////////////////////////////////////////////////////////////////////////////////////////////////
//EJERCICIOS 2:
//Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

function sumOfCubes(){
    const numeros = [1, 5, 9];
    const cubos = numeros.map((numero) => numero **3)

    let counterOfCubes = 0
    cubos.forEach(cubo => {
    counterOfCubes = counterOfCubes + cubo
        
    });

    console.log(counterOfCubes)
}
sumOfCubes()
/////////////////////////////////////////////////////////////////////////////////////////////////
//EJERCICIO 3:
//Crear una funcion que me retorne el tipo de valor entregado, invocar la función 
//para los distintos tipos de js.

function typeOfValue(value) {
    return  typeof value;

}
console.log(typeOfValue("hola"))

/////////////////////////////////////////////////////////////////////////////////////////////////
//EJERCICIO 4:
//Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parámetros rest)

sumOfArgs( 2,3,5,4,9,1)

function sumOfArgs(num1, num2, num3, ...params){
    const sumaTotal = params.reduce((sum, param) => sum + param, 0);
    const suma = num1 + num2 + num3 + sumaTotal;
    console.log(suma);
}

sumOfArgs(2, 3, 5, 4, 9, 1)


//////////////////////////////////////////////////////////////////////////////////////////////////
//EJERCICIO 5:
//Crear una función que reciba un array de valores y filtre los valores que no son string

function arrayValues(values) {
    return values.filter(value => typeof value === 'string');

}
function arrayValueResp() {

const array = [2, "hola", 5, false, "adios"];
const result = arrayValues (array);
console.log(result)
}
arrayValueResp()

////////////////////////////////////////////////////////////////////////////////////////
//EJERCICIO 6:
//Cree una función que tome una matriz de números y devuelva los números 
//mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

function minMax(numMinMax){
    const min = Math.min(...numMinMax);
    const max = Math.max(...numMinMax);

    return [min, max];
 
}

function rptaMinMax(){
    const numMinMax = [1, 2, 3, 4, 5];
    const resultado = minMax(numMinMax)

    console.log(resultado)
}
rptaMinMax()
///////////////////////////////////////////////////////////////////////////
//EJERCICIO 7:
//Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

function formatPhoneNumber(array){
    const phoneNumber =array.join('');
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;


}

function resultNum(){
    const numerostelf = [1, 2, 3, 4, 5, 6, 7, 8, 9,0];
    const rptaPhoneNumber = formatPhoneNumber(numerostelf);

    console.log(rptaPhoneNumber)
}
resultNum()

/////////////////////////////////////////////////////////////////////
//EJERCICIO 8:
//Cree una función que tome una matriz de matrices con números.
//Devuelve una nueva matriz (única) con el mayor número de cada uno.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

function findLargestNums(arrayNums){
    const subArrayNums = arrayNums.map(subArray => Math.max(...subArray));
    return subArrayNums


}

function findLargestNumsRpta(){
    const arrayNums = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
    const respuestLargesNumber = findLargestNums(arrayNums)

    console.log(respuestLargesNumber)

}
findLargestNumsRpta()

/////////////////////////////////////////////////////////////////////////////
//EJERCICIO 9:
//Dada una palabra, escriba una función que devuelva el primer
//índice y el último índice de un carácter.
//charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

function encontrarIndices(palabra, caracter){
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);
     return [primerIndice, ultimoIndice]
}

function resultIndices(){
   const palabra = "vaca";
   const caracter = "a";
   const resultadoIndice = encontrarIndices(palabra, caracter);
   
   console.log(resultadoIndice)
}

resultIndices()

