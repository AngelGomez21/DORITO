//Evaluacion tema 1
const prompt=require("prompt-sync");
const porc=0.15;
class Cooperativa{
  constructor(nombre,apellidos,rfc,direccion,telefono,cosxhra,hrstra){
    this._nombre=nombre;
    this._apellidos=apellidos;
    this._rfc=rfc;
    this._direccion=direccion;
    this._telefono=telefono;
    this._cosxhra=cosxhra;
    this._hrstra=hrstra;
    this._agregarEm=[];
    this._sueldo=0;
    }


agregarEm(){
  let tam=parseInt(prompt("Cantidad de empleados a dar de alta: "));
  for(let i=0;i<tam;i++){
    this.nombre=prompt("Ingresa el nombre del empleado: ");
    this._hrstra=parseInt(prompt("Numero de horas trabajadas: "));
    this._cosxhra=parseFloat(prompt("Ingrese el costo por hora: "));
    }

    let empleado={
      nombre:this._nombre,
      horastrab:this._hrstra,
      cosxhra:this._cosxhra,
      sueldo: this.calcularSueldo()
    };
    this._agregarEm.push(empleado);

    }
    eliminarEm(){
      this._agregarEm.length>0
      ?this._agregarEm.pop()
      :console.log("No hay registro que eliminar");

    }
    calcularSueldo(){
      if (this._hrstra>8){
        this._sueldo=this._cosxhra*this._hrstra;
        return (this._sueldo=this._sueldo+this._cosxhra*porc*(this._hrstra-8));

        } else{
          return (this._sueldo=this._cosxhra*this._hrstra);   
        }

    }
    mostrarEmpleados(){
      this._agregarEm.length>0?this._agregarEm((em)=>{
    console.log(`EL nombre es ${em.nombre} y tiene un sueldo ${em.sueldo}`);
    
        }):console.log(("No hay empleados para mostrar: "));
        
    }


}

let emplpeados=new Cooperativa();
emplpeados.agregarEm();
emplpeados.mostrarEmpleados();
emplpeados.eliminarEm();
