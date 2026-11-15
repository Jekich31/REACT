import React from 'react';
import RestaurantInfo from './components/RestInfo';
import UserCredentials from './components/UseCred';
import type { UserCredentialsData } from './components/UseCred';

const App: React.FC = () => {
  const handleSaveUser = (data: UserCredentialsData) => {
    console.log('Отримано нові дані облікового запису:', data);
    alert(`Дані успішно збережено для користувача: ${data.login}`);
  };

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

      <section>
        <h2>Завдання 3: Керування обліковим записом</h2>
        <UserCredentials
          initialLogin="admin_user"
          initialPassword="SecurePassword2026"
          onSave={handleSaveUser}
        />
      </section>
    </div>
  );
};

export default App;