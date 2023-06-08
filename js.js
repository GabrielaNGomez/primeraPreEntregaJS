
function seleccionarUnModeloDeInflable(opcion) {
    let precio;

    switch (opcion) {
        case "Modelo Inflable Punta Lápiz":
          precio = 8500;
          console.log("Has seleccionado el Modelo de Inflable Punta Lápiz");
          break;
        case "Modelo Inflable Punta Palmera":
          precio = 8.500;
          console.log("Has seleccionado el Modelo de Inflable Punta Palmera");
          break;
        case "Modelo Inflable Rampa":
          precio = 12000;
          console.log("Has seleccionado el Modelo de Inflable Rampa");
          break;
        default:
          console.log("Seleccionar un modelo");
          return;
      }

    console.log("El precio del producto es: $" + precio);

    for (let i = 0; i < 4; i++) {
        console.log("Iteración " + (i + 1));
      }
  }

    seleccionarUnModeloDeInflable("Modelo Inflable Punta Lápiz");
    seleccionarUnModeloDeInflable("Modelo Inflable Punta Palmera");
    seleccionarUnModeloDeInflable("Modelo Inflable Rampa");
  


 