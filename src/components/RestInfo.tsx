import React, { useState } from 'react';

interface RestaurantInfoProps {
  name: string;
  address: string;
  rating?: number;
  cuisine: string;
  image?: string;
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({
  name: initialName,
  address: initialAddress,
  rating: initialRating = 0,
  cuisine: initialCuisine,
  image = 'https://via.placeholder.com/400x250?text=No+Image',
}) => {
  // Стан для збереження актуальних даних ресторану
  const [name, setName] = useState<string>(initialName);
  const [address, setAddress] = useState<string>(initialAddress);
  const [rating, setRating] = useState<number>(initialRating);
  const [cuisine, setCuisine] = useState<string>(initialCuisine);

  // Стан перемикання режиму редагування
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div style={styles.card}>
      <img src={image} alt={`Будівля ресторану ${name}`} style={styles.image} />
      
      <div style={styles.content}>
        {isEditing ? (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.field}>
              <label>Назва:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.field}>
              <label>Адреса:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.field}>
              <label>Тип кухні:</label>
              <input
                type="text"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.field}>
              <label>Рейтинг (0 - 5):</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.actions}>
              <button type="submit" style={styles.buttonPrimary}>Зберегти</button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                style={styles.buttonSecondary}
              >
                Скасувати
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h2 style={styles.title}>{name}</h2>
            <p style={styles.text}>
              <strong>Адреса:</strong> {address}
            </p>
            <p style={styles.text}>
              <strong>Тип кухні:</strong> {cuisine}
            </p>
            <p style={styles.text}>
              <strong>Рейтинг:</strong> ⭐ {rating} / 5
            </p>
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              style={styles.buttonPrimary}
            >
              Редагувати інформацію
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    maxWidth: '400px',
    overflow: 'hidden' as const,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: '220px',
    objectFit: 'cover' as const,
  },
  content: {
    padding: '16px',
  },
  title: {
    margin: '0 0 12px 0',
    fontSize: '22px',
  },
  text: {
    margin: '6px 0',
    fontSize: '15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
    fontSize: '14px',
  },
  input: {
    padding: '6px 8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  actions: {
    display: 'flex',
    gap: '8px',
    marginTop: '8px',
  },
  buttonPrimary: {
    padding: '8px 14px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  buttonSecondary: {
    padding: '8px 14px',
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default RestaurantInfo;