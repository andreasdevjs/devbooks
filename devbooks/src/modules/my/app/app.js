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

    @track
    mostrarPaginaHome = true;

    @track
    mostrarPaginaAddABook = false; 

   

    // Abre y cierra el menú
    handleClicMenu() {
        this.mostrarMenu = !this.mostrarMenu;
        const menu = this.template.querySelector('.menu-button');
        this.mostrarMenu ? menu.innerText = '-Menu' : menu.innerText = '+Menu'
    }

    // Gestiona el clic en el logo para ir a la home
    handleClicLogo() {
        this.mostrarPaginaHome = true;
        this.mostrarPaginaAddABook = false;
    }

    // Gestiona el clic en los enlaces de navegación de páginas
    handleNav(event) {
        const itemMenu = event.target.innerText;
        if(itemMenu == 'Add a Book') {
            this.mostrarPaginaHome = false;
            this.mostrarPaginaAddABook = true;
        } else {
            this.mostrarPaginaHome = true;
            this.mostrarPaginaAddABook = false;
        }
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
