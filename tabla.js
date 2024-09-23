
class Docente {
    constructor(nombre, especialidad) {
        this.nombre = nombre;
        this.especialidad = especialidad;
    }
}

class Materia {
    constructor(nombre, docente) {
        this.nombre = nombre;
        this.docente = docente;
    }
}

class Calificaciones {
    constructor() {
        this.notas = [];
    }

    agregarNotas(materia, nota1, nota2) {
        this.notas.push({ materia, nota1, nota2 });
    }

    obtenerPromedioPorMateria(materia) {
        const calificacion = this.notas.find(nota => nota.materia === materia);
        if (calificacion) {
            return ((calificacion.nota1 + calificacion.nota2) / 2).toFixed(2);
        }
        return "N/A";
    }

    obtenerPromedioGeneral() {
        let total = this.notas.reduce((acum, item) => acum + item.nota1 + item.nota2, 0);
        return (total / (this.notas.length * 2)).toFixed(2);
    }
}

class Alumno {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.materias = [];
        this.calificaciones = new Calificaciones();
    }

    inscribirMateria(materia) {
        this.materias.push(materia);
    }

    agregarCalificaciones(materia, nota1, nota2) {
        this.calificaciones.agregarNotas(materia, nota1, nota2);
    }

    mostrarDatos() {
        console.log(`Alumno: ${this.nombre}`);
        this.materias.forEach(materia => {
            const calificacion = this.calificaciones.notas.find(nota => nota.materia === materia);
            const promedio = this.calificaciones.obtenerPromedioPorMateria(materia);
            console.log(`  Materia: ${materia.nombre}`);
            console.log(`    Docente: ${materia.docente.nombre}`);
            console.log(`    Calificación 1: ${calificacion ? calificacion.nota1 : "N/A"}`);
            console.log(`    Calificación 2: ${calificacion ? calificacion.nota2 : "N/A"}`);
            console.log(`    Promedio: ${promedio}`);
        });
        console.log(`  Promedio General: ${this.calificaciones.obtenerPromedioGeneral()}`);
        console.log();
    }
}

let docente1 = new Docente("Prof. Juan", "Calculo");
let docente2 = new Docente("Prof. María", "Programacion");

let calculo = new Materia("Calculo", docente1);
let programacion = new Materia("Programacion", docente2);

let alumno1 = new Alumno("Mario", 21);
alumno1.inscribirMateria(calculo);
alumno1.inscribirMateria(programacion);
alumno1.agregarCalificaciones(calculo, 85, 70);
alumno1.agregarCalificaciones(programacion, 88, 76);

let alumno2 = new Alumno("Jarinsy", 22);
alumno2.inscribirMateria(calculo);
alumno2.inscribirMateria(programacion);
alumno2.agregarCalificaciones(calculo, 92, 96);
alumno2.agregarCalificaciones(programacion, 95, 90);

alumno1.mostrarDatos();
alumno2.mostrarDatos();
