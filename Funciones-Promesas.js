
    // Promesa almacenada en una constante
    const promesa = new Promise((resolve, reject)=>

        (10 === 10)
            ? resolve('Los valores son iguales')
            : reject('Los valores son distintos'));

    promesa
       .then(resolve => console.log(resolve))
       .catch(reject => console.log(reject))

    // Promesa dentro en una función.
    const promesaDos = (provincia) => {

        return new Promise( (resolve, reject)=>
        
                ('Formosa' === provincia)
                    ? resolve('Usted está ubicado en Formosa')
                    : reject('Error al realizar la consulta'))
    }

    promesaDos("Formosa")
          .then(resolve => console.log(resolve))
          .catch(reject => console.log(reject))

    const promesaTres = (valorBooleano) => {

        return new Promise( (resolve, reject)=>
            ( true === valorBooleano )
            ? resolve('Los valores son iguales')
            : reject('Los valores son distintos'))
    }

    promesaTres(true)
      .then(resolve => console.log(resolve))
      .catch(reject => console.log(reject))


const promesaCuatro = async (arguments) =>

            ( true === arguments )
            ? 'Los valores son iguales'
            : 'Los valores son distintos'


    promesaCuatro(false)
      .then(console.log)
      .catch(console.log)
