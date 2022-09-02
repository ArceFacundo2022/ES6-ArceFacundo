import {consultarDatos} from './Libs/Funciones-Exportadas.js';

// const {consultarDatos, obtenerLocalidades, obtenerDptos, obtenerPcias, retrasar} = require("./Libs/Funciones-Exportadas.js");


consultarDatos()
 .then((solucion) => console.log(solucion))
 .catch((error) => console.log(error));
