function Header({ dark, onToggle }) { 
return ( 
<header> 
<h1>Catálogo de Filmes</h1> 
<button onClick={onToggle}> 
Alterar Tema 
</button> 
</header> 
); 
} 
export default Header;