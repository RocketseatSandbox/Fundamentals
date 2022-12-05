/**
 * Searching and counting data on arrays:
 * -> Based on books per category array, do the following challenges:
 *      -> Count the number of categories and the number of books per category;
 *      -> Count the number of authors;
 *      -> Display books of an author called "Augusto Cury"
 *      -> Transform the function above in a function who receives the name of the author
 *      and return the books wrote by these author
 */

const booksByCategory = [
  {
    category: "Wealth",
    books: [
      {
        title: "Secrets of the millionaire mind in turbulent times",
        author: "T. Harv Eker",
      },
      {
        title: "Richest man in Babylon",
        author: "George S. Clason",
      },
      {
        title: "Retire young, retire rich",
        author: "Robert T. Kiyosaki",
      },
    ],
  },
  {
    category: "Emotional Intelligence",
    books: [
      {
        title: "You are irreplaceable",
        author: "Augusto Cury",
      },
      {
        title: "Anxiety – How to face the evil of the century",
        author: "Augusto Cury",
      },
      {
        title: "The 7 habits of highly effective families",
        author: "Stephen R. Covey",
      },
    ],
  },
];

function countCategoriesAndBooksPerCategory(booksByCategoryObject) {
  let categoriesCounter = 0,
    booksByCategoryCounter = 0;
  for (let categoryAndHisBooksItem of booksByCategoryObject) {
    if (categoryAndHisBooksItem.category) categoriesCounter++;
    if (categoryAndHisBooksItem.books)
      booksByCategoryCounter = categoryAndHisBooksItem.books.length;
  }
  return {
    numberOfCategories: categoriesCounter,
    numberOfBooksPerCategory: booksByCategoryCounter,
  };
}

function countDifferentAuthors(booksByCategoryObject) {
  let authorsNames = [],
    differentAuthorsNamesIterator = 0;
  for (let booksAndCategoryItem of booksByCategoryObject) {
    if (booksAndCategoryItem.books) {
      for (let bookItem of booksAndCategoryItem.books)
        authorsNames.push(bookItem.author);
    }
  }
  for (let author of authorsNames) {
    let authorToBeRemoved = author;
    if (authorToBeRemoved === authorsNames[differentAuthorsNamesIterator + 1])
      authorsNames.splice(differentAuthorsNamesIterator, 1);
    differentAuthorsNamesIterator++;
  }
  return authorsNames.length;
}

function showBooksQuantityOfSpecifAuthor(authorName, booksByCategoryObject) {
  let booksQuantityOfSpecifAuthor = 0;
  for (let booksCategory of booksByCategoryObject) {
    for (let bookItem of booksCategory.books)
      if (bookItem.author === authorName) booksQuantityOfSpecifAuthor++;
  }
  return booksQuantityOfSpecifAuthor;
}

console.log(`
====================== \n
Quantity of categories: ${
  countCategoriesAndBooksPerCategory(booksByCategory).numberOfCategories
} \n
The number of books per category: ${
  countCategoriesAndBooksPerCategory(booksByCategory).numberOfBooksPerCategory
} \n
We have these quantity of different authors: ${countDifferentAuthors(
  booksByCategory
)} \n
We have ${showBooksQuantityOfSpecifAuthor(
  "Augusto Cury",
  booksByCategory
)} books of Augusto Cury \n
======================
`);
