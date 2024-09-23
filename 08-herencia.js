//regla sintactica
class persona {
    constructor(nombre,
                apellido,
                edad,
                sexo,
                dirreccion,
                tel,
                correo,
                horario
    ){
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
        this._sexo=sexo;
        this._direccion=dirreccion;
        this._tel=tel;
        this._correo=correo
        this._horario=horario
    }
}
class alumno extends persona {
    constructor(matricula, carrera, semestre, ){
        this._matricula=matricula;
        this._carrera=carrera;
        this._semestre=semestre;
        super(nombre, apellido, horario);
    }

    mensaje(){
        console.log(`Soy el alumno,${this.nombre} y estudio la carrera de ${this.carrera}`);
        
    }
    
}
let alumno1=new alumno("2022","Sistema",3);
alumno1.mensaje();