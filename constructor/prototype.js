// Book constructor
function Book(author, name, yearOfPublication, publishingHouse) {
  this.author = author;
  this.name = name;
  this.yearOfPublication = yearOfPublication;
  this.publishingHouse = publishingHouse;
  }
  
// EBook constructor, inheriting from Book
function EBook(author, name, yearOfPublication, publishingHouse, format, electronicNumber) {
  Book.call(this, author, name, yearOfPublication, publishingHouse);
  this.format = format;
  this.electronicNumber = electronicNumber;
  }
  
//create the bond between constructors
EBook.prototype.__proto__ = Book.prototype;
 
Book.prototype.printInfo = function() {
  console.log(`Book: ${this.name} by ${this.author}`);
};
  
EBook.prototype.printInfo = function() {
  console.log(`E-Book: ${this.name} by ${this.author}`);
};
  
const book = new Book("Jane Ostin", "Pride and prejudice", 1985, "Publisher A");
book.printInfo();  // Output: Book: The Book by John Doe
  
const ebook = new EBook("Jane Ostin", "Pride and prejudice", 2022, "Publisher B", "PDF", "123456");
ebook.printInfo(); // Output: E-Book: The E-Book by Jane Smith
  
console.log(ebook);
console.log(book);