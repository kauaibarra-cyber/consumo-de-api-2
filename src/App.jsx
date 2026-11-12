import MovieEe from './components/listMovie'
import Pokemon from './components/pokemon'
import Poster from './components/posterMovie'
import Name from './components/name'
import Dbz from './components/dbz'
import './App.css'
import { useState } from "react"; 
import Header from "./components/header"; 
import Navbar from "./components/navbar"; 
import MovieList from "./components/movieList"; 
import Footer from "./components/footer"; 
import MovieCard from './components/movieCard'

function App() { 
const [dark, setDark] = useState(false); 
const filmes = [ 
{ id: 1, nome: "Interestelar", ano: 2014 }, 
{ id: 2, nome: "Batman", ano: 2022 }, 
{ id: 3, nome: "Avatar", ano: 2009 } ]; 
return ( 
<div className={dark ? "dark" : "light"}> 
<Header dark={dark} onToggle={() => setDark(!dark)} />
<Navbar /> 
<MovieList filmes={filmes} /> 
<Footer />
<MovieEe />
<Name />
<Dbz />
<Pokemon />
<Poster />
</div> 
); 
} 

export default App