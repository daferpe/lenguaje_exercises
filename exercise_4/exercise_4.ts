// --- EJERCICIO 4.Read Books

function isBookRead(books: book[], titleToSearch: string): boolean {
  // Implementation here
  return books.some(books => books.title == titleToSearch && books.isRead == true);
}

// Ejemplo:
interface book {
  title: string;
  isRead: boolean;
}

const books: book[] = [
  {title: "Harry Potter y la piedra filosofal", isRead: true},
  {title: "Canción de hielo y fuego", isRead: false},
  {title: "Devastación", isRead: true},
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
