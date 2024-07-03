import { generarId } from "./funciones.js";

export let editando = {
    value: false
}

// Objeto Cita
export const citaObject = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}