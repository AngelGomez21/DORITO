//Definir clases con atributos dentro del constructor
class Persona{
    constructor(nombre,edad,sexo,direccion){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
        this.direccion=direccion;
    }
//Metodo saludar
    saludar(){
console.log(`Hola ${this.nombre}`);

    }
    //Encapsulamiento setter y getter
    get nombre(){
        return this.nombre
    }
    set nombre(values){
        this._nombre=values;
    }
}

let persona1=new Persona("Mario",19,"M","Chable");
persona1.nombre="Angel";
console.log(persona1);
persona1.saludar();