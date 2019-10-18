import LightningElementWithSLDS from '../lightningElementWithSLDS/lightningElementWithSLDS';
import { books } from '../../../resources/assets/js/books';
import { api, track } from 'lwc';

export default class App extends LightningElementWithSLDS {
    @track
    mostrarMenu = false;

    @track
    mostrarBotonEliminarTexto = false;

    @track
    books = [];

    @track
    valorInput = '';

    // Abre y cierra el menú
    handleClicMenu() {
        this.mostrarMenu = !this.mostrarMenu;
        const menu = this.template.querySelector('.menu-button');
        this.mostrarMenu ? menu.innerText = '-Menu' : menu.innerText = '+Menu'
    }

    // Gestiona la búsqueda en el input
    handleSearch(event) {
        const searchText = event.target.value;
        if(searchText.length > 2) {
            this.mostrarBotonEliminarTexto = true;
        } else {
            this.mostrarBotonEliminarTexto = false;
        }

        this.valorInput = searchText;
    }

    // Gestiona el clic en el botón X que aparece en el input
    handleResetInput(event) {
        this.valorInput = '';
        this.mostrarBotonEliminarTexto = false;
    }



    connectedCallback() {
        this.books = books;
    }





}
