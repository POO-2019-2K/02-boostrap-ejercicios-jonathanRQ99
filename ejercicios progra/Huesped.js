export default class Huesped {
    constructor(nombre, tipoHabitacion, fechaLlegada, fechaSalida) {
        this._nombre = nombre.toUpperCase();
        this._tipoHabitacion = tipoHabitacion;
        this._fechaLlegada = fechaLlegada;
        this._fechaSalida = fechaSalida;
    }
    
    get nombre() {
        return this._nombre;
    }

    get tipoHabitacion() {
        return this._tipoHabitacion;
    }

    get fechaLlegada() {
        return this._fechaLlegada;
    }

    get fechaSalida() {
        return this._fechaSalida;
    }

}