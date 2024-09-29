const prompt = require("prompt-sync")()

class Persona{
    constructor(nombre, edad, sexo, direccion, telefono) {

    this._nombre = nombre;
    this._edad = edad;
    this._sexo = sexo;
    this._direccion = direccion;
    this._telefono = telefono;
    this._consulta = []
    }
    registro(){
        let valorar = parseInt(prompt("ingrese las cantidad de personas: "))
        for (let i = 0; i < valorar; i++) {
            this._nombre = prompt("ingrese su nombre: ");
            this._edad = parseInt(prompt("ingrese su edad: "));
            this._sexo = prompt("ingrese su sexo: ");
            this._direccion = prompt("ingrese su direccion: ");
            this._telefono = parseInt(prompt("ingrese su telefono: "));

            let datos = {
                nombre: this._nombre,
                edad: this._edad,
                sexo: this._sexo,
                direccion: this._direccion,
                telefono: this._telefono,
            }
            this._consulta.push(datos)
        }
        const datosPersona=()=>{
            this._consulta.map((datos,index)=>{
                datos.map((valores,)=>{
                    console.log(`${i}=${valores}`);
                })
            });
        }
    }


}
let personas = new Persona ();
personas.registro();