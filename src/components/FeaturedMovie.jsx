import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FeaturedMovie({ movieId }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR&api_key=14510e4ed1ab929f53ba65555d612fdd`,
        );
        const data = await response.json();
        setMovie(data);
        console.log(response);
      } catch (error) {
        console.error("Erro ao buscar o filme:", error);
      }
    };

    loadMovie();
  }, [movieId]);

  if (!movie) return null;

  return (
    <section
      className="text-white py-5"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 80%),
      url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        position: "relative",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          borderRadius: "10px",
          padding: "2rem",
        }}
      >
        <div className="row">
          <div className="col-md-8">
            <h1 className="display-4">{movie.title}</h1>
            <p className="lead">{movie.overview}</p>

            <div className="mb-3">
              <a href="#" className="btn btn-light btn-sm me-2">
                ▶ Assistir
              </a>
              <a href="#" className="btn btn-outline-light btn-sm">
                + Minha Lista
              </a>
            </div>

            <div>
              <span className="me-4">
                <strong>Nota:</strong> {movie.vote_average}
              </span>
              <span>
                <strong>Lançamento:</strong> {movie.release_date?.slice(0, 4)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovie;
