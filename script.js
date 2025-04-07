const apiKey = 'heheheheh';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

const movieContainer = document.querySelector('.movies');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    movieContainer.innerHTML = ''; // clear default content

    movies.forEach(movie => {
      const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');

      movieCard.innerHTML = `
        <img src="${posterUrl}" alt="${movie.title}">
        <h3>${movie.title}</h3>
      `;

      movieContainer.appendChild(movieCard);
    });
  })
  .catch(error => {
    console.error('Error fetching movies:', error);
    movieContainer.innerHTML = '<p>Failed to load movies.</p>';
  });
