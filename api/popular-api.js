const url = "https://api.themoviedb.org/3/movie/popular?language=ko-KR";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGI0MTIwZGU5NTUwOWEzYTJhMTY4MmQzYzdhYmUxMyIsIm5iZiI6MTczNjI5NTgzOS4wNSwic3ViIjoiNjc3ZGM1OWY4OWZjNWQ5NDQyNGU1NmUxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.KNDcuNLSXmO_bZERMNVDo-_I5r9KBaKkc-1kZCvdFU8",
  },
};

/**
 * @returns 인기 영화 데이터 배열
 */
const fetchPopularMovies = async function () {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`${response.status} 에러가 발생했습니다`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    alert(error.message);
  }
};

const popularMovieList = await fetchPopularMovies();
export { popularMovieList };
