// TMDB에서 인기 영화 API 가져오기
const url = "https://api.themoviedb.org/3/movie/popular?language=ko-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGI0MTIwZGU5NTUwOWEzYTJhMTY4MmQzYzdhYmUxMyIsIm5iZiI6MTczNjI5NTgzOS4wNSwic3ViIjoiNjc3ZGM1OWY4OWZjNWQ5NDQyNGU1NmUxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.KNDcuNLSXmO_bZERMNVDo-_I5r9KBaKkc-1kZCvdFU8",
  },
};

// 인기 영화 데이터가 담긴 배열 만들기
async function fetchMovies() {
  const response = await fetch(url, options);
  const data = await response.json();
  return data.results;
}

export { fetchMovies };
