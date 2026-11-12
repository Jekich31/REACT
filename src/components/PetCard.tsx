
import type { Pet } from '../types';

type PetStatsProps = Pick<Pet, 'species' | 'breed' | 'age' | 'weight'>;

function PetStats({ species, breed, age, weight }: PetStatsProps) {
  return (
    <ul className="pet-stats">
      <li><strong>Вид:</strong> {species}</li>
      <li><strong>Порода:</strong> {breed}</li>
      <li><strong>Вік:</strong> {age}</li>
      <li><strong>Вага:</strong> {weight}</li>
    </ul>
  );
}

interface PetCardProps {
  pet: Pet;
}

export function PetCard({ pet }: PetCardProps) {
  return (
    <div className="card pet-card">
      <img src={pet.photo} alt={pet.name} className="pet-photo" />
      <div className="pet-info">
        <h2>{pet.name}</h2>
        <PetStats
          species={pet.species}
          breed={pet.breed}
          age={pet.age}
          weight={pet.weight}
        />
        <p><strong>Характер:</strong> {pet.personality}</p>
        <p><strong>Улюблена їжа:</strong> {pet.favoriteFood}</p>
      </div>
    </div>
  );
}