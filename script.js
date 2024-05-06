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

    const sumOfCubes = () => {
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

const typeOfValue = (value) => typeof value 

console.log(typeOfValue("hola"))


/////////////////////////////////////////////////////////////////////////////////////////////////
//EJERCICIO 4:
//Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parámetros rest)


const sumOfArgs = (num1, num2, num3, ...params) => {
    const sumaTotal = params.reduce((sum, param) => sum + param, 0);
    const suma = num1 + num2 + num3 + sumaTotal;
    console.log(suma);
}

sumOfArgs(2, 3, 5, 4, 9, 1)


//////////////////////////////////////////////////////////////////////////////////////////////////
//EJERCICIO 5:
//Crear una función que reciba un array de valores y filtre los valores que no son string

const arrayValues = (values) => values.filter(value => typeof value === 'string');


const arrayValueResp = () => {

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

const minMax = (numMinMax) => {
    const min = Math.min(...numMinMax);
    const max = Math.max(...numMinMax);

    return [min, max];
 
}

const rptaMinMax = () => {
    const numMinMax = [1, 2, 3, 4, 5];
    const resultado = minMax(numMinMax)

    console.log(resultado)
}
rptaMinMax()

///////////////////////////////////////////////////////////////////////////
//EJERCICIO 7:
//Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

const formatPhoneNumber = (array) => {
    const phoneNumber =array.join('');
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;


}

const resultNum = () => {
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

const findLargestNums = (arrayNums) => {
    const subArrayNums = arrayNums.map(subArray => Math.max(...subArray));
    return subArrayNums


}

const findLargestNumsRpta = () => {
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

const encontrarIndices = (palabra, caracter) => {
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);
     return [primerIndice, ultimoIndice]
}

const resultIndices = () => {
   const palabra = "vaca";
   const caracter = "a";
   const resultadoIndice = encontrarIndices(palabra, caracter);
   
   console.log(resultadoIndice)
}

resultIndices()

////////////////////////////////////////////////////////////////////////////
//EJERCICIO 10:
//Escriba una función que convierta un objeto en una matriz, 
//donde cada elemento representa un par clave-valor.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]


const toArray = (letter) =>  Object.entries(letter);



const toArrayRpta = () => {
    const letter = {
        a: 1,
        b: 2
    }
    const respuestLetter = toArray(letter)

    console.log(respuestLetter)
}
toArrayRpta()

/////////////////////////////////////////////////////////////////////////
//EJERCICIO 11:
//Cree la función que toma una matriz con objetos y devuelve
//la suma de los presupuestos de las personas.


const getBudgets = (personas) => {
    let contador = 0;

    personas.forEach(persona => {
    contador = contador + persona.budget    
    });
    return contador


}


const getBudgetsRpta = () => {
    const personas = [
        {
            name: "Jhon",
            age: 21,
            budget: 23000
        },

        {
            name: "Steven",
            age: 32,
            budget: 40000
        },

        {
            name: "Martin",
            age: 16,
            budget: 2700
        }    
    ];

    const respuesta = getBudgets(personas)
    console.log(respuesta)
}
getBudgetsRpta()

///////////////////////////////////////////////////////////
//EJERCICIO 12:
//Cree una función que tome una matriz de estudiantes 
//y devuelva una matriz de nombres de estudiantes.
//getStudentNames([
//{ name: "Steve" },
//{ name: "Mike" },
//{ name: "John" }
//]) ➞ ["Becky", "John", "Steve"]



const getStudentsNames = (students) => students.map(student => student.name)


const GetStudentsNamesRpta = () => {
    const students = [
        {
            name: "Jhon",
        },

        {
            name: "Steven",
        },

        {
            name: "Martin",
        }    
    ];

    const respuesta = getStudentsNames(students)

    console.log(respuesta)
}
GetStudentsNamesRpta()
//////////////////////////////////////////////////////////////
//EJERCICIO 13:
//Escriba una función que convierta un objeto 
//en una matriz de claves y valores.
//objectToArray({
//likes: 2,
//dislikes: 3,
//followers: 10
//}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]


const objectArray = (reactions) => Object.entries(reactions)


const ObjectArrayRspt = () => {
    const reactions = {
            like: 10,
            dislikes: 2,
            followers: 100,
        }

         
    ;

    const respuesta = objectArray(reactions)

    console.log(respuesta)
}
ObjectArrayRspt()

///////////////////////////////////////////////////////////////////////////////////
//EJERCICIO 14:
//Cree una función donde, dado el número n, devuelva la suma 
//de todos los números cuadrados  incluyendo n.
//squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14

const squaresSum = (numN) => {
    let contador = 0
    for (let i = 1; i <= numN; i++) {
        contador = contador + i *i   
    }
    return contador

}

const squaresSumRpta = () => {
    const numN = 3;
    const respuesta = squaresSum(numN)
    console.log(respuesta)
}
squaresSumRpta()

////////////////////////////////////////////////////////////////////////////
//EJERCICIOS 15:
//Cree una función para multiplicar todos los valores
//en una matriz por la cantidad de valores en la matriz dada
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

const multiplyByLength = (arrayNum) => arrayNum.map(numero => numero * arrayNum.length)

const multiplyByLengthRpta = () => {
    const arrayNum = [2, 3, 1, 0];
    const respuesta = multiplyByLength(arrayNum)
    console.log(respuesta)
    
}
multiplyByLengthRpta()

///////////////////////////////////////////////////////////////////////////
//EJERCICIO 16:
//Cree una función que tome un número como argumento y devuelva
//una matriz de números contando desde este número a cero.
//countdown(5) ➞ [5, 4, 3, 2, 1, 0]

const countdown = (numArray) =>{
    const arrayFinal = [];
    for (let i = numArray ; i >= 0; i--) {
        arrayFinal.push(i)
    }
    return arrayFinal
}

const countdownRpta = () => {
    const numArray = 5
    const respuesta = countdown(numArray)

    console.log(respuesta)

}
countdownRpta()

///////////////////////////////////////////////////////////////////////////
//EJERCICIO 17:
//Cree una función que tome una matriz y devuelva la
//diferencia entre los números más grandes y más pequeños.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

const diffMaxMin = (arrayMinMax) => {
    const numMin = Math.min(...arrayMinMax);
    const numMax = Math.max(...arrayMinMax);
    const diference = Math.abs(numMin - numMax);
    return diference


}

const diffMaxMinRspt = () => {

    const arrayMinMax = [10, 4, 1, 4, -10, -50, 32, 21];
    const respuesta = diffMaxMin(arrayMinMax)

    console.log(respuesta)
}
diffMaxMinRspt()
/////////////////////////////////////////////////////////////////////////
//EJERCICIO 18
//Cree una función que filtre las cadenas de una matriz y
//devuelva una nueva matriz que solo contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

const filterList = (numList) => numList.filter(numero => Number.isInteger(numero)) 

const filterListRspt = () => {
    const numList = [1, 2, 3, "x", "y", 10]
    const respuesta = filterList(numList)
     console.log(respuesta)
} 
filterListRspt()

/////////////////////////////////////////////////////////////////////////
//EJERCICIO 19
// Cree una función que tome dos argumentos (elemento, tiempos). 
// El primer argumento (elemento) es el elemento que necesita repetirse,
// mientras que el segundo argumento (veces) es la cantidad de veces que
// se debe repetir el elemento. Devuelve el resultado en una matriz.
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]

const repeatNumber = (elemento, veces) => {
    const numRepeat = []
    for (let i = 1; i <= veces ; i++) {
        numRepeat.push(elemento)
        
    }
    return numRepeat

}

const repeatRspt = () => {
    const elemento = 13;
    const veces = 5;

    const respuesta = repeatNumber(elemento, veces)
    console.log(respuesta)
}
repeatRspt()

////////////////////////////////////////////////////////////////////////////
//EJERCICIO 20:
//Escriba una función, .vreplace () que extienda el prototipo de cadena
//reemplazando todas las vocales en una cadena con una vocal especificada.
//"apples and bananas".vreplace("u")


