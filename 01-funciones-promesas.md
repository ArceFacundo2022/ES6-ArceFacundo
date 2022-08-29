# Trabajando con Promesas

> 1. Transformar todas las funciones declarativas en funciones flecha.

> 2. Iplementar los métodos .then y .catch necesarios para manejar las respuestas exitosas y/o los errores al invocar las funciones.

> 3. Simplificar el código de las funciones.

> 4. Transformar la función **funcionCuatro()** en una función asíncrona con la palabra reservada __async__ e implementarla junto con **await**.

```JS
    // Promesa almacenada en una constante
    const promesa = new Promise((resolve, reject)=>{

        if( 10 === 11){
            resolve('Los valores son iguales');
        } else {
            reject('Los valores son distintos')
        }

    });

    promesa
```

```JS
    // Promesa dentro en una función.
    function promesaDos(provincia){

        const promesa = new Promise( (resolve, reject)=> {
        
                if('Formosa' === provincia){
                    resolve('Usted está ubicado en Formosa');
                } else {
                    reject('Error al realizar la consulta')
                }

        });

        return promesa;
    }

    promesaDos()
```

```JS
    function promesaTres(valorBooleano){

        new Promise( ()=> {
            ( true === valorBooleano )
            ? resolve('Los valores son iguales')
            : reject('Los valores son distintos')
        })
        
    }

    promesaTres()
        

```

```JS
function promesaCuatro(){

        new Promise( ()=> {
            ( true === arguments )
            ? resolve('Los valores son iguales')
            : reject('Los valores son distintos')
        })
        
}

    promesaCuatro()
```