import MovieCard from "./movieCard"; 
function MovieList({ filmes }) { 
return ( 
<main> 
<h2>Filmes disponíveis</h2> 
{filmes.map((filme) => ( 
<MovieCard key={filme.id} filme={filme} /> 
)
)
} 
</main> 
); 
} 
export default MovieList;