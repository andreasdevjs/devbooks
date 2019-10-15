import LightningElementWithSLDS from '../lightningElementWithSLDS/lightningElementWithSLDS';
import { books } from '../../../resources/assets/js/books';
import { api, track } from 'lwc';

export default class App extends LightningElementWithSLDS {
    @track
    mostrarMenu = false;

    @track
    books = [];

    // Abre y cierra el menú
    handleClicMenu() {
        this.mostrarMenu = !this.mostrarMenu;
        const menu = this.template.querySelector('.menu-button');
        this.mostrarMenu ? menu.innerText = '-Menu' : menu.innerText = '+Menu'
    }


    connectedCallback() {
        this.books = books;
    }





}
