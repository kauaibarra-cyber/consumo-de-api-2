function MovieCard({ filme }) { 
return ( 
<div> 
<h3>{filme.nome}</h3> 
<p>Ano: {filme.ano}</p> 
<button>Ver detalhes</button> 
</div> 
); 
} 
export default MovieCard;