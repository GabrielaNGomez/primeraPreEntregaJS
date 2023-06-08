function seleccionarUnModeloDeInflable() {
  let opcion = prompt("Seleccione un modelo de inflable:\n1. Modelo Inflable Punta Lápiz\n2. Modelo Inflable Punta Palmera\n3. Modelo Inflable Rampa");
  let precio;
  switch (opcion) {
    case "1":
      precio = 8500;
      console.log("Has seleccionado el Modelo de Inflable Punta Lápiz");
      break;
    case "2":
      precio = 8500;
      console.log("Has seleccionado el Modelo de Inflable Punta Palmera");
      break;
    case "3":
      precio = 12000;
      console.log("Has seleccionado el Modelo de Inflable Rampa");
      break;
    default:
      console.log("Opción inválida");
      return;
  }
  console.log("El precio del producto es: $" + precio);

  for (let i = 0; i < 4; i++) {
    console.log("Iteración " + (i + 1));
  }
}
seleccionarUnModeloDeInflable();