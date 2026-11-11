import React, { Component } from 'react';

export default class BookClass extends Component {
  render() {
    const book = {
      title: "Володар перснів",
      author: "Джон Р. Р. Толкін",
      genre: "Фентезі",
      pages: 1178,
      reviews: [
        { id: 1, author: "Максим", text: "Шедевр світової літератури! Продуманий світ до найменших деталей." },
        { id: 2, author: "Анна", text: "Чудова історія про дружбу, хоробрість і боротьбу зі злом." }
      ]
    };

    return (
      <div>
        <h2>Завдання 4: «{book.title}»</h2>
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
}