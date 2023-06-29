//Registro de usuario

const usuarios = [];

function registrarUsuario(nombre, apellido, telefono, email) {
  usuarios.push({ nombre, apellido, telefono, email });
}

function crearUsuario(usuario) {
  const { nombre, apellido, telefono, email } = usuario;
  return {
    nombreCompleto: `${nombre} ${apellido}`,
    telefono,
    email
  };
}

registrarUsuario("Yanina", "Gómez", "01165147511", "yanina_gomez@gmail.com");

console.log(crearUsuario);



//Calendario de Reservas

class reserva {
    constructor(fecha, hora, nombre, modeloDelInflable) {
        this.fecha = fecha;
        this.hora = hora;
        this.nombre = nombre;
        this.modelo = modeloDelInflable;
    }
}
  
  const calendarioDeReservas = {
    reservas: [],
    
    agregarReserva: function(fecha, hora, nombre, modeloDelInflable) {
      const nuevaReserva = new reserva(fecha, hora, nombre, modeloDelInflable);
      this.reservas.push(nuevaReserva);
      console.log('Reserva agregada:', nuevaReserva);
    },
    
    mostrarReservas: function() {
      console.log('Reservas:');
      this.reservas.forEach(function(reserva) {
        console.log('Fecha:', reserva.fecha, 'Hora:', reserva.hora, 'Nombre:', reserva.nombre, 'Modelo:', reserva.modeloDelInflable);
      });
    },
    
    filtrarReservasPorFecha: function(fecha) {
      const reservasFiltradas = this.reservas.filter(function(reserva) {
        return reserva.fecha === fecha;
      });
      
      console.log('Reservas para la fecha', fecha + ':');
      reservasFiltradas.forEach(function(reserva) {
        console.log('Hora:', reserva.hora, 'Nombre:', reserva.nombre, 'Modelo:', reserva.modeloDelInflable);
      });
    }
  };
  

  calendarioDeReservas.agregarReserva('2023-07-02', '12:00', 'Yanina', 'Modelo Punta lápiz');


  calendarioDeReservas.mostrarReservas();
  
  calendarioDeReservas.filtrarReservasPorFecha('2023-07-02');



//Lista de productos

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
  
  }
  seleccionarUnModeloDeInflable();