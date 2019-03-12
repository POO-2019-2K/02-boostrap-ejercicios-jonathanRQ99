export default class Reservacion {
    constructor(tableReservacion, tableInfo) {
        this._tableReservacion = tableReservacion;
        this._tableInfo = tableInfo;

        this._numReservaciones = 0;
    }

    addHuesped(huesped) {
        let row = this._tableReservacion.insertRow(-1);
        let cellNombre = row.insertCell(0);
        let cellTipoHabitacion = row.insertCell(1);
        let cellFechaLlegada = row.insertCell(2);
        let cellFechaSalida = row.insertCell(3);

        cellNombre.innerHTML = huesped.nombre;
        cellTipoHabitacion.innerHTML = huesped.tipoHabitacion;
        cellFechaLlegada.innerHTML = huesped.fechaLlegada;
        cellFechaSalida.innerHTML = huesped.fechaSalida;

        this._numReservaciones++;
        
        this._tableInfo.rows[0].cells[1].innerHTML = this._numReservaciones;
    }
}