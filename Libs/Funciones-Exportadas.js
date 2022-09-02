export const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
export const obtenerPcias = async (provi = "") => {
  try {
    provincia.trim()
        ? provincia =`?nombre=${provincia}&`
        : provincia =`?`

    await retrasar(1800);

    const jsonProvincias = await fetch(`https://apis.datos.gob.ar/georef/api/provincias${provi}aplanar=true&max=24`)
      .then(res => res.json())
      .then(json => json.provincias)
    return jsonProvincias
  }
  catch (err) {
    return err;
  }
}

// obtenerPcias()
//    .then((respuesta) => console.log(respuesta))
//    .catch((error) => console.log(error))

//Función que retorna los datos de departamentos
export const obtenerDptos = async (Dpto = "") => {
  try {
    Dpto.trim()
    ? Dpto =`?nombre=${Dpto}&`
    : Dpto =`?`

    await retrasar(1391);

   const jsonDptos = await fetch(`https://apis.datos.gob.ar/georef/api/departamentos${Dpto}aplanar=true&max=529`)
     .then(res => res.json())
     .then(json => json.departamentos)
   return jsonDptos
  }
  catch (err) {
    return err
  }
}

//Función que retorna los datos de localidades
export const obtenerLocalidades = async (Loca = "") => {
  try{
    Loca.trim()
    ? Loca =`?nombre=${Loca}&`
    : Loca =`?`

    await retrasar(900);

    const consulta = await fetch(`https://apis.datos.gob.ar/georef/api/localidades${Loca}aplanar=true&max=4142`)
      .then(res => res.json())
      .then(json => json.localidades)
    return jsonProv
  }
  catch (err) {
    return err
  }
}




// Funcion para obtener todos los datos
export const consultarDatos = async () => {
  try{
    const provincias = obtenerPcias();
    const dptos = obtenerDptos();
    const localidades = obtenerLocalidades();
    const consultasPro = {provincias, dptos, localidades}

    return consultasPro
  }
  catch (err) {
    return err
  }
}

// consultarDatos()
//   .then(respuesta => console.log(respuesta))
//   .catch(error => console.log(error))

// Module.export = {consultarDatos, obtenerDptos, obtenerLocalidades, obtenerPcias, retrasar}

// export default Modulo = {
//     consultarDatos,
//     obtenerLocalidades,
//     obtenerPcias,
//     obtenerDptos,
//     retrasar
// }

