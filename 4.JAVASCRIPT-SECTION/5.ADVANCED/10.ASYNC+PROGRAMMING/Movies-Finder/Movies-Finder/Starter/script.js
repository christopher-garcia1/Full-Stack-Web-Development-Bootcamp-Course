document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=2be61671&s=";
  const movieForm = document.getElementById("movieForm");
  const movieResult = document.getElementById("movieResults");

  movieForm.addEventListener("submit", (e) => {
    const movieName = document.getElementById("movieInput").value;
    e.preventDefault();
    fetchMovies(movieName);
  });

  // Search movies

  const fetchMovies = async (movieName) => {
    try {
      movieResult.innerHTML = '<div class="loading">Searching movies....</div>';
      const movieRes = await fetch(apiUrl + movieName);
      const movie = await movieRes.json();

      if (movie.Response === "False") throw new Error("No Movies Found");
      displayMovies(movie.Search);
    } catch (error) {
      movieResult.innerHTML = `
        <div class= 'error-message'>
            'Error searching movies. Please try again'
        </div>
      `;
    }
  };

  //   display movie
  const displayMovies = (movies) => {
    movieResult.innerHTML = `
      <div class= 'movies-grid'>
        ${movies
          .map((movie) => {
            return `<div class='movie-card'>
                <img
                    src='${movie.Poster}'
                    alt='${movie.Title}'
                    class='movie-poster'
                 onerror="this.src='https://dummyimage.com/150x225/cccccc/000000&text=No+Image';"
                />
                <div class='movie-info'>
                    <h3 class='movie-title'>${movie.Title}</h3>
                    <div class='movie-year'>${movie.Year}</div>
                </div>
            </div>`;
          })
          .join("")}
      </div>

      `;
  };
});
