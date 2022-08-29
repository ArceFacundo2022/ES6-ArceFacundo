const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
function obtenerPcias() {
    await retrasar(1800);

    const consulta = fetch('');
}

// Función que retorna los datos de departamentos
function obtenerDptos() {
    await retrasar(1391);

    const consulta = fetch('');
}

// Función que retorna los datos de localidades
function obtenerLocalidades() {
    await retrasar(900);

    const consulta = fetch('');
}




// Funcion para obtener todos los datos
function consultarDatos() {
    const provincias = obtenerPcias();
    const dptos = obtenerDptos();
    const localidades = obtenerLocalidades();

    console.log(provincias);
    console.log(dptos);
    console.log(localidades);
}

consultarDatos();
