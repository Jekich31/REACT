export interface Movie {
  title: string;
  director: string;
  year: number;
  studio: string;
  genre: string;
  poster: string;
  description: string;
}

export interface Person {
  fullName: string;
  role: string;
  city: string;
  phone: string;
  email: string;
  github: string;
  photo: string;
  experience: string;
  skills: string[];
}

export interface Pet {
  name: string;
  species: string;
  breed: string;
  age: string;
  weight: string;
  personality: string;
  favoriteFood: string;
  photo: string;
}