const prompt = require('prompt-sync')();

class Empleado {
  constructor(nombre, apellido, edad, rfc, direccion, telefono) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._rfc = rfc;
    this._direccion = direccion;
    this._telefono = telefono;
  }


  get nombre() {
    return this._nombre;
  }

  get apellido() {
    return this._apellido;
  }

  get edad() {
    return this._edad;
  }

  get rfc() {
    return this._rfc;
  }

  get direccion() {
    return this._direccion;
  }

  get telefono() {
    return this._telefono;
  }


  set nombre(value) {
    this._nombre = value;
  }

  set apellido(value) {
    this._apellido = value;
  }

  set edad(value) {
    this._edad = value;
  }

  set rfc(value) {
    this._rfc = value;
  }

  set direccion(value) {
    this._direccion = value;
  }

  set telefono(value) {
    this._telefono = value;
  }
}

let arreglo = [];

const datos = () => {
  const dimension = parseInt(prompt("Ingresa el tamaño del arreglo: "));
  for (let i = 0; i < dimension; i++) {
    let nombre = prompt("Ingrese el nombre: ");
    let apellido = prompt("Ingresa el apellido: ");
    let edad = parseInt(prompt("Ingresa la edad: "));
    let rfc = prompt("Ingrese su rfc: ");
    let direccion = prompt("Ingrese su direccion: ");
    let telefono = prompt("Ingrese su telefono: ");
    let empleado = new Empleado(nombre, apellido, edad, rfc, direccion, telefono);
    arreglo.push(empleado);
  }

  empleados();
};


const empleados = () => {
  arreglo.map((empleado, index) => {
    console.log(`Empleado ${index + 1}: ${empleado.nombre} ${empleado.apellido}, ${empleado.edad} años, RFC: ${empleado.rfc}, Dirección: ${empleado.direccion}, Teléfono: ${empleado.telefono}`);
  });
};


const eliminarempleado = () => {
  if (arreglo.length > 0) {
    const eliminado = arreglo.pop(); 
    console.log(`Empleado eliminado: ${eliminado.nombre} ${eliminado.apellido}`);
  } else {
    console.log("No hay empleados para eliminar.");
  }
};

datos();
eliminarempleado();
mostrarEmpleados(); 
