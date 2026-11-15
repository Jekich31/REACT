import React from 'react';
import RestaurantInfo from './components/RestInfo';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <section style={{ marginBottom: '30px' }}>
        <h2>Завдання 1: Інформація про ресторан</h2>
        <RestaurantInfo
          name="La Veranda"
          address="вул. Соборна, 45, Вінниця"
          rating={4.8}
          cuisine="Італійська та європейська"
          image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
        />
      </section>
    </div>
  );
}