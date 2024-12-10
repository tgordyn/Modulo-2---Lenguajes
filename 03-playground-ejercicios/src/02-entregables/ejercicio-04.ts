// 4. Read books
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

interface Book {
  title: string;
  isRead: boolean;
}

const isBookRead = (books: Book[], titleToSearch: string): boolean => {
  const book =  books.find((el)=> el.title === titleToSearch)

  return book ? book.isRead : false;
};


console.log("************** DELIVERABLE 04 *********************");

console.log("isBookRead", isBookRead(books, "Devastación"))
console.log("isBookRead", isBookRead(books, "Canción de hielo y fuego"));
console.log("isBookRead", isBookRead(books, "Los Pilares de la Tierra"));
