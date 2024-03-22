"use strict";

class Books {
  constructor(title, author, year, pages) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
  }

  getInfo() {
    console.log(`${this.title} was written by ${this.author}.`);
  }

  published() {
    let currentYear = new Date();
    const yearsFromPublishing = currentYear.getFullYear() - this.year;
    console.log(
      `${this.title} was published ${yearsFromPublishing} years ago.`
    );
  }

  getReadingSpeed() {
    let averagePageQuantity = 30;
    const daysOfReading = Math.ceil(this.pages / averagePageQuantity);
    console.log(`${this.title} can be read in about ${daysOfReading} days.`);
  }
}

class Fiction extends Books {
  constructor(title, author, year, pages, genre, subGenre) {
    super(title, author, year, pages);
    this.genre = genre;
    this.subGenre = subGenre;
  }

  getSubGenre() {
    console.log(
      `${this.title} is a ${this.genre}, namely a subgenre of ${this.subGenre}.`
    );
  }
}

class FantasyItem extends Fiction {
  #editionQuantity;

  constructor(
    title,
    author,
    year,
    pages,
    genre,
    subGenre,
    keySubject,
    editionQuantity
  ) {
    super(title, author, year, pages, genre, subGenre);
    this.keySubject = keySubject;
    this.#editionQuantity = editionQuantity;
  }

  getKeyItemDescription() {
    console.log(`${this.title} tells about ${this.keySubject}.`);
  }

  getEditions(authorFullName) {
    if (authorFullName === this.author) {
      console.log(
        `${this.title} has various covers, about ${this.#editionQuantity}.`
      );
    }
  }
}

class HorrorItem extends Fiction {
  #bookNumber;

  constructor(title, author, year, pages, genre, subGenre, rating, bookNumber) {
    super(title, author, year, pages, genre, subGenre);
    this.rating = rating;
    this.#bookNumber = bookNumber;
  }

  rated() {
    console.log(
      `${this.title} is quite popular, because it has ${this.rating} stars rating on a Goodreads.`
    );
  }

  getISBN(publishing) {
    if (publishing != null) {
      console.log(
        `${this.title} printed in ${this.year} and has ${
          this.#bookNumber
        } ISBN number.`
      );
    }
  }
}

const firstBook = new FantasyItem(
  "A Game of Thrones",
  "George R.R. Martin",
  1996,
  835,
  "fantasy",
  "dark fantasy",
  "dragons",
  486
);

firstBook.getInfo();
firstBook.published();
firstBook.getReadingSpeed();
firstBook.getSubGenre();
firstBook.getKeyItemDescription();
firstBook.getEditions("George R.R. Martin");

const secondBook = new HorrorItem(
  "The Dead Zone",
  "Stephen King",
  1979,
  555,
  "horror",
  "paranormal",
  3.96,
  5308001871
);

secondBook.getInfo();
secondBook.published();
secondBook.getReadingSpeed();
secondBook.getSubGenre();
secondBook.rated();
secondBook.getISBN("КСД");
