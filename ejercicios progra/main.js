import Reservacion from "./Reservacion.js";
import Huesped from "./Huesped.js";

class Main {
    constructor() {
        this._reservacion = new Reservacion(document.querySelector("#reservacion"), document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let nombre = document.querySelector("#nombre").value;
            let tipoHabitacion = document.querySelector("#tipoHabitacion").value;
            let fechaLlegada = document.querySelector("#fechaLlegada").value;
            let fechaSalida = document.querySelector("#fechaSalida").value;

            let huesped = new Huesped(nombre, tipoHabitacion, fechaLlegada, fechaSalida);
            
            this._reservacion.addHuesped(huesped);

        });
    }
}
let m = new Main();