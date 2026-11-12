import useFetchApi from '../hooks/useFetchApi';

export default function Pokemon(){
    const{loading, error, ret} = useFetchApi("https://pokeapi.co/api/v2/pokemon/", "pikachu")
    if(loading){
        return(<div>Loading</div>)
    }
    if(error){
        return(<div>Ocorreu um erro</div>)
    }
    return(
        <div>
          <h2>Meu Pokemon</h2>
          <p>{ret.nome}</p>
          <img src={ret.sprites.front_default} alt="" />
          <p>{ret.types[0].type.name}</p>
        </div>
    )
}





    


          
