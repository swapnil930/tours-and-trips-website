import axios from "axios";

export class api {
    static serverURL = 'https://book-inventory-management-oqn8.onrender.com';

    static getAllBooks() {
        let dataURL = `${this.serverURL}/books`;
        return axios.get(dataURL);
    }
    static getBookById(bookId) {
        let dataURL = `${this.serverURL}/books/${bookId}`;
        return axios.get(dataURL)
    }
    static createBook(book) {
        let dataURL = `${this.serverURL}/books`;
        return axios.post(dataURL, {
            ...book,
            craetedAt: new Date().toISOString()
        })
    }

    static updateBook(bookId, book) {
        let dataURL = `${this.serverURL}/books/${bookId}`;
        return axios.put(dataURL, {
            ...book,
            lastUpdated: new Date().toISOString()
        });
    }

    static deleteBook(bookId) {
        let dataURL = `${this.serverURL}/books/${bookId}`;
        return axios.delete(dataURL)
    }

    static getAllCategories() {
        let dataURL = `${this.serverURL}/categories`;
        return axios.get(dataURL);
    }
}
