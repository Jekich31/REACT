import { useState } from 'react';
import { FavoriteMovie } from './components/FavMov';
import { PersonalPage } from './components/PersPage';
import { LiveClock } from './components/LiveClock';
import { PetCard } from './components/PetCard';
import type { Movie, Person, Pet } from './types/';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const movieData: Movie = {
    title: 'Інтерстеллар (Interstellar)',
    director: 'Крістофер Нолан',
    year: 2014,
    studio: 'Paramount Pictures / Warner Bros.',
    genre: 'Наукова фантастика, драма',
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    description:
      'Коли посуха та кліматична криза ставлять людство на межу вимирання, команда дослідників вирушає крізь червоточину в пошуках нової придатної для життя планети.',
  };

  const personalData: Person = {
    fullName: 'Назаренко Євгеній Миколайович',
    role: 'Junior C# / .NET & Frontend Developer',
    city: 'Вінниця, Україна',
    phone: '+38 (097) 000-00-00',
    email: 'jekanazarkevich228@gmail.com',
    github: 'https://github.com/Jekich31',
    photo: 'https://fsx1.itstep.org/api/v1/files/vSe6_nRXFK5vsFvC3gByJimkpGalM49c?r=face&h=250&f=webp',
    experience:
      'Розробка десктопних застосунків на C# / WPF / Entity Framework Core, створення вебзастосунків на React, TypeScript та сучасному JavaScript. Досвід роботи мерчендайзером та вивчення перекладу (англійська, німецька мови).',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'C# / .NET 8', 'SQL', 'Git'],
  };

  const petData: Pet = {
    name: 'Барсік',
    species: 'Кіт',
    breed: 'Шотландський висловухий',
    age: '3 роки',
    weight: '4.8 кг',
    personality: 'Спокійний, допитливий, любить спати біля ноутбука під час написання коду.',
    favoriteFood: 'Лосось та вершкові ласощі',
    photo: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80',
  };

  return (
    <div className="app-container">
      <h1>Homework03.11</h1>
      <br></br>
      <nav className="tabs">
        
        <button className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}>
          Завдання 1: Фільм
        </button>
        <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}>
          Завдання 2: Профіль
        </button>
        <button className={activeTab === 3 ? 'active' : ''} onClick={() => setActiveTab(3)}>
          Завдання 3: Годинник
        </button>
        <button className={activeTab === 4 ? 'active' : ''} onClick={() => setActiveTab(4)}>
          Завдання 4: Улюбленець
        </button>
      </nav>
      <br></br>

      <main className="content">
        {activeTab === 1 && <FavoriteMovie movie={movieData} />}
        {activeTab === 2 && <PersonalPage person={personalData} />}
        {activeTab === 3 && <LiveClock label="Точний час (Київ / Вінниця)" format24={true} />}
        {activeTab === 4 && <PetCard pet={petData} />}
      </main>
    </div>
  );
}