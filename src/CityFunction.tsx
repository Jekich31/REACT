import React from 'react';

export default function CityFunction() {
  const city = {
    name: "Вінниця",
    country: "Україна",
    foundedYear: 1363,
    landmarks: [
      { title: "Водонапірна вежа", url: "https://picsum.photos/id/1015/400/250" },
      { title: "Набережна Рошен", url: "https://picsum.photos/id/1043/400/250" },
      { title: "Центральний парк", url: "https://picsum.photos/id/1025/400/250" }
    ]
  };

  return (
    <div>
      <h2>Завдання 1: {city.name}</h2>
      <p><strong>Країна:</strong> {city.country}</p>
      <p><strong>Рік заснування:</strong> {city.foundedYear} р.</p>
      
      <h3>Пам'ятки міста:</h3>
      <div>
        {city.landmarks.map((place, index) => (
          <div key={index}>
            <img src={place.url} alt={place.title} />
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
}