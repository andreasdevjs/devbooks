import LightningElementWithSLDS from '../lightningElementWithSLDS/lightningElementWithSLDS';
import { api, track } from 'lwc';

export default class AddABook extends LightningElementWithSLDS {

    @track
    nombreLibro = '';

    @track
    urlLibro = '';

    // Gestiona el nombre del libro
    handleNombreLibro(event) {
        const nombre = event.target.value;
        this.nombreLibro = nombre;
    }

    // Gestiona la URL del libro
    handleUrlLibro(event) {
        const url = event.target.value;
        this.urlLibro = url;
    }

    // Gestiona el envío de una propuesta de libro nueva
    handleSubmitAddBook(event) {
        event.preventDefault();
        console.log(this.nombreLibro, this.urlLibro);

    }



}
