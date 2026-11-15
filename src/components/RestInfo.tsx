import React from 'react';

interface RestaurantInfoProps {
  name: string;
  address: string;
  rating?: number;
  cuisine: string;
  image?: string;
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({
  name,
  address,
  rating = 0,
  cuisine,
  image = 'https://via.placeholder.com/400x250?text=No+Image',
}) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={`Будівля ресторану ${name}`} style={styles.image} />
      <div style={styles.content}>
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
};

export default RestaurantInfo;