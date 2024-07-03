import { formulario } from "../selectores.js";

export default class Notificacion {

    constructor({texto, tipo}) {
        this.texto = texto
        this.tipo = tipo

        this.mostrar();
    }

    mostrar() {
        // Crear notificacion
        const alerta = document.createElement('DIV')
        alerta.classList.add(
            'text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert',
            'font-bold', 'text-sm'
        )

        // Eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alert');
        alertaPrevia?.remove();

        // Si es de tipo error, agrega color rojo
        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');

        // Mensaje de error
        alerta.textContent = this.texto

        // Insertar en el DOM
        formulario.parentElement.insertBefore(alerta, formulario);

        // Eliminar alerta despues de x segundos
        setTimeout(() => {
            alerta.remove()
        }, 2000)
    }

}