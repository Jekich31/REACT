
import type { Movie} from '../types';

interface MoviePosterProps {
  src: string;
  alt: string;
}

function MoviePoster({ src, alt }: MoviePosterProps) {
  return (
    <div className="poster-wrapper">
      <img src={src} alt={alt} className="poster-img" />
    </div>
  );
}

type MovieDetailsProps = Movie;

function MovieDetails({ title, director, year, studio, genre, description }: MovieDetailsProps) {
  return (
    <div className="details-wrapper">
      <h2>{title} ({year})</h2>
      <p><strong>Режисер:</strong> {director}</p>
      <p><strong>Кіностудія:</strong> {studio}</p>
      <p><strong>Жанр:</strong> {genre}</p>
      <p className="description">{description}</p>
    </div>
  );
}

interface FavoriteMovieProps {
  movie: Movie;
}

export function FavoriteMovie({ movie }: FavoriteMovieProps) {
  return (
    <div className="card movie-card">
      <MoviePoster src={movie.poster} alt={`Афіша фільму ${movie.title}`} />
      <MovieDetails {...movie} />
    </div>
  );
}