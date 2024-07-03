import Notificacion from "./classes/Notificacion.js";
import AdminCitas from "./classes/AdminCitas.js";
import { citaObject, editando } from "./variables.js";
import { formulario, formularioSubmit, pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput } from "./selectores.js";

const citas = new AdminCitas();

export function datosCita(e) {
    citaObject[e.target.name] = e.target.value;
}

export function submitCita(e) {
    e.preventDefault();

    if( Object.values(citaObject).some(valor => valor.trim() === '') ) {
        new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        })

        return;
    }
    
    if(editando.value) {
        citas.editar({...citaObject});
        // Mensaje de éxito
        new Notificacion({
            texto: 'Paciente actualizado correctamente',
            tipo: 'exito'
        })   
    } else {
        citas.agregar({...citaObject});
        // Mensaje de éxito
        new Notificacion({
            texto: 'Paciente agregado correctamente',
            tipo: 'exito'
        })   
    }

    formulario.reset();
    reiniciarObjetoCita();
    formularioSubmit.value = 'Registrar paciente';
    editando.value = false;

}

export function reiniciarObjetoCita() {
    // Reiniciar Objeto
    Object.assign(citaObject, {
        id: generarId(),
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: ''
    })

}

export function generarId() {
    return Math.random().toString(36).substring(2) + Date.now();
}

export function cargarEdicion(cita) {
    Object.assign(citaObject, cita);

    pacienteInput.value = cita.paciente
    propietarioInput.value = cita.propietario
    emailInput.value = cita.email
    fechaInput.value = cita.fecha
    sintomasInput.value = cita.sintomas

    editando.value = true;

    formularioSubmit.value = 'Guardar cambios';
}