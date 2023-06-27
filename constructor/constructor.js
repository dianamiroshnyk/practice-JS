// Book constructor
function Book(author, name, yearOfPublication, publishingHouse) {
    this.author = author;
    this.name = name;
    this.yearOfPublication = yearOfPublication;
    this.publishingHouse = publishingHouse;
  }
  
  // EBook constructor
  function EBook(author, name, yearOfPublication, publishingHouse, format, electronicNumber) {
    this.author = author;
    this.name = name;
    this.yearOfPublication = yearOfPublication;
    this.publishingHouse = publishingHouse;
    this.format = format;
    this.electronicNumber = electronicNumber;
  }
  
  // Example usage
  const book = new Book("John Doe", "The Book", 2022, "Publisher A");
  console.log(book);
  
  const ebook = new EBook("Jane Smith", "The E-Book", 2023, "Publisher B", "PDF", "123456");
  console.log(ebook);
  