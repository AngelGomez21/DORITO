const prompt = require("prompt-sync")()

class Cliente {
    constructor(Membresia, Nombre, Direccion, Telefono, Estado) {
        this._membresia = Membresia
        this._nombre = Nombre;
        this._direccion = Direccion;
        this._telefono = Telefono;
        this._estado = Estado;
        this._consulta = []
    }

    registro(){
        let valorar = parseInt(prompt("Ingrese la cantidad de personas para registrar: "));
        for (let i = 0; i < valorar; i++) {
            this._nombre = prompt("Ingrese su nombre: ");
            this._estado = prompt(`Cual es tu estado (1. Deudor), (2. libre)`);
            switch (parseInt(this._estado)) {
                case 1:
                    this._estado = `Deudor`;
                    break;
                case 2:
                    this._estado = `Libre`;
                    break;

            }
            let datos = {
                nombre: this._nombre,
                membresia: this._membresia,
                dirrecion: this._direccion,
                telefono: this._telefono,
                estado: this._estado
            }
            this._consulta.push(datos)
        }
    }


    eliminarDeudor() {
        for (let i = 0; i < this._consulta.length; i++) {
            if (this._consulta[i].estado === `Deudor`) {
                this._consulta.slice(i, 1);
                console.log(`Cliente ${this._consulta[i].nombre} con menbrescia has sido dado de baja `);
                
            } else {
                console.log(`Cliente ${this._consulta[i].nombre} con membrecia libre de multa `);
            }
        }
    }
}

class cine extends Cliente {
    constructor(Numero, Titulo, Clasificacion, Disponibilidad, Tipo,) {
        super()
        this._numero = Numero
        this._titulo = Titulo
        this._clasificacion = Clasificacion
        this._disponible = Disponibilidad
        this._tipo = Tipo
        this._consultaPeli = []
        this._precioPeli = 0
    }

    consultaP() {
        let pelis = parseInt(prompt("Ingrese las peliculas a consultar "));
        for (let i = 0; i < pelis; i++) {

            this._titulo = prompt("Ingrese el nombre de la pelicula: ");

            this._disponible = parseInt(prompt("Aun hay(1. disponible), (2. Rentado)"));
            switch(parseInt(this._disponible)) {
                case 1:
                    this._disponible = `Disponible`
                    break
                case 2:
                    this._disponible = `Rentado`
                    break
            }
            this._tipo = prompt("tipo de pelicula(3. estreno), (4. catalogo)")
            switch (parseInt(this._tipo)) {
                case 3:
                    this._tipo = `Estreno`
                    break
                case 4:
                    this._tipo = `catalogo`
                    break
            }
            let varea = {
                numero: this._numero,
                titulo: this._titulo,
                clasificacion: this._clasificacion,
                disponible: this._disponible,
                tipo: this._tipo
            }
            this._consultaPeli.push(varea)
        }
    }

    eliminarP() {
        for (let i = 0; i < this._consultaPeli.length; i++) {
            if (this._consultaPeli[i].dispo === `Rentada`) {
                this._consultaPeli.slice(i, 1);

            } else {
                console.log(`La peli ${this._consultaPeli[i].titulo} aun sigue disponible `);               
            }
        }
    }

    rentaPeli(titulo, verif) {
        let cinemax = this._consultaPeli;
        let peliculaEncontrada = null;

        for (let i = 0; i < cinemax.length; i++) {
            if (cinemax[i].titulo === titulo) {
                peliculaEncontrada = cinemax[i]
                break;
            }
        }
        if (peliculaEncontrada) {
            if (peliculaEncontrada.dispo === `Disponible`) {
                let deudorLibre = verif._consulta.some(c => c.estado === `Deudor`)
                if (deudorLibre) {
                    console.log("Salde su deuda");                    
                } else {
                if (peliculaEncontrada.tipo === `Estreno`) {
                    this._precioPeli = 50;
                } else if (peliculaEncontrada.tipo === `catalogo`) {
                    this._precioPeli = 35
                }
                let fechaRenta = prompt("Ingrese la fecha de renta ")
                let fehcaLimite = this.calcularLimite(fechaRenta)
                peliculaEncontrada.dispo = `Rentada`;
                peliculaEncontrada.fechaRenta = fechaRenta;
                peliculaEncontrada.fehcaLimite = fehcaLimite;
                console.log(`La peli ${titulo} ha sido rentada`);
                console.log(`Fecha devolucion ${peliculaEncontrada.fechaRenta}`);
                console.log(`Precio es de ${this._precioPeli}`);                
            }
            } else {
                console.log("peli no disponible");      
            }
        }
    }

    calcularLimite(fecharenta) {
        let fechaLime = new Date(fecharenta);
        fechaLime.setDate(fechaLime.getDate() + 3);
        return fechaLime.toISOString().slice(0, 10)
    }
}

let clientes = new Cliente();
clientes.registro();
clientes.eliminarDeudor();

let starci = new cine();
starci.consulta();
let titulo = prompt("Ingrese el titulo de la peli a rentar ")
let verif = clientes
starci.rentaPeli(titulo, verif)
starci.eliminarP();