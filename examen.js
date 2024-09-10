const prompt = require('prompt-sync')();

class Empleado {
  constructor(nombre, apellido, edad, rfc, direccion, telefono, sueldoBase, horasExtra) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._rfc = rfc;
    this._direccion = direccion;
    this._telefono = telefono;
    this._sueldoBase = sueldoBase;
    this._horasExtra = horasExtra;
  }

  // Getters
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

  get sueldoBase() {
    return this._sueldoBase;
  }

  get horasExtra() {
    return this._horasExtra;
  }

  // Setters
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

  set sueldoBase(value) {
    this._sueldoBase = value;
  }

  set horasExtra(value) {
    this._horasExtra = value;
  }

  // Método para calcular el sueldo con horas extra
  calcularSueldo() {
    let extra = this._horasExtra > 0 ? this._sueldoBase * 0.15 : 0;
    let sueldoTotal = this._sueldoBase + extra;
    return sueldoTotal;
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
    let sueldoBase = parseFloat(prompt("Ingrese el sueldo base: "));
    let horasExtra = parseInt(prompt("Ingrese las horas extras trabajadas: "));
    let empleado = new Empleado(nombre, apellido, edad, rfc, direccion, telefono, sueldoBase, horasExtra);
    arreglo.push(empleado);
  }

  empleados();
};

const empleados = () => {
  arreglo.map((empleado, index) => {
    console.log(`Empleado ${index + 1}: ${empleado.nombre} ${empleado.apellido}, ${empleado.edad} años, RFC: ${empleado.rfc}, Dirección: ${empleado.direccion}, Teléfono: ${empleado.telefono}`);
    console.log(`Sueldo Total: $${empleado.calcularSueldo().toFixed(2)}`);
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
empleados();
