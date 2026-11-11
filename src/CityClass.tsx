import React, { Component } from 'react';

export default class CityClass extends Component {
  render() {
    const city = {
      name: "Київ",
      country: "Україна",
      foundedYear: 482,
      landmarks: [
        { title: "Андріївський узвіз", url: "https://picsum.photos/id/1036/400/250" },
        { title: "Софійський собор", url: "https://picsum.photos/id/1040/400/250" },
        { title: "Батьківщина-Мати", url: "https://picsum.photos/id/1047/400/250" }
      ]
    };

    return (
      <div>
        <p><strong>Країна:</strong> {city.country}</p>
        <p><strong>Рік заснування:</strong> {city.foundedYear} р.</p>
        
        <h3>Пам'ятки міста:</h3>
        <div>
          {city.landmarks.map((place, index) => (
            <div key={index}>
              <img src={place.url} alt={place.title}/>
              <p></p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}