module.exports = class BookDTO {

    constructor(id, name ,nameEn, author, isbn, year, price, quantity, row, shelf, column) {
        this.id = id;
        this.name = name;
        this.nameEn = nameEn;
        this.author = author;
        this.isbn  = isbn;
        this.year = year;
        this.price = price;
        this.quantity = quantity;
        this.row = row;
        this.shelf = shelf;
        this.column = column
    }

}