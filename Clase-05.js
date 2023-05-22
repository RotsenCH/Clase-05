/*

                Código síncrono  vs asíncrono

*/

// Aquí se presenta un ejempo de un código síncrono 

"use strict";

function solicitar(tipo) {

    for (let index = 0; index < 10000000000; index++) 
    {
    }
    return `¡Hola, ya regresé con el ${tipo}!`
}
console.log("Comenzar a escribir en la pizarra")
console.log("No hay marcador azul")
console.log("Solicitar ayuda")
const name = 'Ralph'
const respuestaEstudiante = solicitar("Marcador-azul")
console.log(respuestaEstudiante)
console.log("Continuar escribiendo en la pizarra");

// Aquí se presenta un ejempo de un código asíncrono

function solicitar(tipo) {
    console.log(`¡Hola, ya regresé con el ${tipo}!`)
}

console.log("Comenzar a escribir en la pizarra")
console.log("No hay marcador azul")
console.log("Solicitar ayuda")
const name2 = 'Ralph'
const data = setTimeout(()=>solicitar("Marcador-azul"),5000)
console.log("Continuar escribiendo en la pizarra")


/*

                Promesas

*/

const conexionBDDExterna = (datosConexion)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada")
        },3000)
    })
}

async function conexion() {
    try {
        console.log(await conexionBDDExterna(true));
    } catch (error) {
        console.log(error);
    }
}

conexion()

const obtenerProductos = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

conexionBDDExterna(true)
    .then(respuesta => console.log(respuesta))
    .catch(error=>console.log(error))


/* Usando .then y .catch
obtenerProductos
    .then(peticion=>peticion.json())
    .then(respuesta=>console.log(respuesta[0].name))
    .catch(error=>console.log(error))

obtenerProductos
    .then((respuesta)=>respuesta.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))*/


async function conectarAPI() {
    try {
        const peticion = await obtenerProductos
        const respuesta = await peticion.json()
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}
conectarAPI();

    // COnexion con una Base de datos

const conexionBDD = (datosConexion)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexion ok") : reject("Conexion Error")
        },3000)
    })
};

console.log("Usuario Inicia sesión")
conexionBDD(true)
    .then((respuesta)=>console.log(respuesta))
    .catch((error)=>console.log(error))
console.log("Usuario lista sus ventas");


/*

                Async Await

*/

/**
 * Paso 1 npm init --y
 * 
 * Paso 3 npm i nodemon
 * Paso 4 nodemon XXXXXX
 */
