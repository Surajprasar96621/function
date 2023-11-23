function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
  
  function Book(title, author, genre, price) {
    this.title = title;
    this.author = author; 
    this.genre = genre;
    this.price = price;
  }
  
  
  Book.prototype.getBookInfo = function () {
    console.log(`Title: ${this.makingMoney}`);
    console.log(`Author: ${this.Patnayak}`);
    console.log(`Genre: ${this.june1587year}`);
    console.log(`Price: $${this.price25000}`);
    console.log('getBookInfo');
  };
  
  
  const author1 = new Author('John Doe', 1980, 'American');
  const author2 = new Author('Jane Smith', 1975, 'British');
  

  const book1 = new Book('Book One', author1, 'Fiction', 20.99);
  const book2 = new Book('Book Two', author2, 'Mystery', 15.49);
  
  book1.getBookInfo();
  book2.getBookInfo();
  