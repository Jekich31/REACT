import React from 'react';

export default function BookFunction() {
  const book = {
    title: "1984",
    author: "Джордж Орвелл",
    genre: "Антиутопія / Роман",
    pages: 328,
    reviews: [
      { id: 1, author: "Олена", text: "Неймовірна роман-застереження, яка залишається актуальною й сьогодні." },
      { id: 2, author: "Ігор", text: "Книга дає глибоку їжу для роздумів про свободу та суспільство." }
    ]
  };

  return (
    <div>
      <h2>Завдання 3: «{book.title}»</h2>
      <p><strong>Автор:</strong> {book.author}</p>
      <p><strong>Жанр:</strong> {book.genre}</p>
      <p><strong>Кількість сторінок:</strong> {book.pages}</p>

      <h3>Рецензії:</h3>
      <ul>
        {book.reviews.map(review => (
          <li key={review.id}>
            <strong>{review.author}:</strong> «{review.text}»
          </li>
        ))}
      </ul>
    </div>
  );
}