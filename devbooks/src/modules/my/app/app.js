import LightningElementWithSLDS from '../lightningElementWithSLDS/lightningElementWithSLDS';
import { books } from '../../../resources/assets/js/books';
import { track } from 'lwc';

const API_BOOKS = 'https://api.myjson.com/bins/gbbug';

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
    
    @track
    allBooks = [];

    @track 
    resultsBooks = [];

    @track
    searchResults = false;

    @track
    numberBooksMatch = 0;

    @track
    noResults = false

   

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
        this.valorInput = searchText;
        if(searchText.length > 2) {
            this.mostrarBotonEliminarTexto = true;
            const matches = this.allBooks.filter((book) => {
                return book.longTitle.toLowerCase().includes(searchText.toLowerCase()); 
            });
            const resultsLength = matches.length;
            this.resultsBooks = matches;
            console.log(matches.length)
            if(resultsLength == 0) {
                console.log('no hay resultados');
                this.noResults = true;
                this.searchResults = false;
                this.numberBooksMatch = 0;
            }
            else if(resultsLength > 0) {
                this.noResults = false;
                this.searchResults = true;
                this.numberBooksMatch = resultsLength;
            }
        } else {
            this.mostrarBotonEliminarTexto = false;
            this.searchResults = false;
            this.numberBooksMatch = 0;
            this.noResults = false;
        }
    }

    // Gestiona el clic en el botón X que aparece en el input
    handleResetInput() {
        this.valorInput = '';
        this.searchResults = false;
        this.resultsBooks = [];
        this.mostrarBotonEliminarTexto = false;
    }

    // Gestiona el clic en el libro que envía a otra web
    handleClicLibro(event) {
        const urlLibro = event.target.getAttribute('data-url');
        console.log(urlLibro)
        window.open(`${urlLibro}`, '_blank');
    }

    // Función que nos trae los libros de la api (Versión 1.0)
    async getAllBooks() {
        try {
            const response = await fetch(API_BOOKS);
            const books = await response.json();
            this.allBooks = books;
        } catch (error) {
            console.log(error);
        }
    }


    connectedCallback() {
        this.books = books;
        this.getAllBooks();
    }





}
