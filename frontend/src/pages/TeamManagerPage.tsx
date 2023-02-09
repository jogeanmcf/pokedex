import { useEffect, useState } from "react";
import { PokeCard } from "../components/PokeCard";
import { Pagination } from "../components/Pagination";
import { useGetListOfPokemonsQuery, usePostTeamMutation } from "../api/pokemonAPI";
import { Spinner } from "react-bootstrap";
import { getIdFromUrl } from "../utils/utilsFunctions";
import { useNavigate } from "react-router-dom";
import { PostFeedback } from "../components/PostFeedbak";

interface TeamManagerPageProps{
  name?: string,
  team?: number[],
}

export function TeamManagerPage(){
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState<String>('')
  const [searchIndex,setSearchIndex] = useState<number>(1)
  const [team, setTeam] = useState<number[]>([])
  const {data, isLoading} = useGetListOfPokemonsQuery(searchIndex)
  const [postTeam,{isLoading: isPosted, isSuccess,isError}] = usePostTeamMutation()

  function addToTeam(pokemon: any): void {
    if(team.length<=5){
      let id = getIdFromUrl(pokemon.url);
      setTeam(team => [...team,id])
    }
  }

  function removeFromTeam(id: number){
    let newTeam = team.filter((item) => item != id);
    setTeam(newTeam);
  }

  useEffect(()=> {
    if(isSuccess){
      setTimeout(()=> {
        navigate('/')
      },2000)
    }
  },[isPosted])

  function handleSubmit(){
    postTeam({name: teamName,pokemons:team})
  }

  function isOnTeam(id: number){
    return team.includes(id)
  }

  return(
    <div className="row gap-5">
      <div className="col col-md-5 bg-light p-4 my-3 rounded-3">
        <h3>Escolha os Pokémons do seu time</h3>
        <div className="">
        {isLoading
          ? <Spinner/>
          : <>{data.results.map((pokemon: any,index: number) =><PokeCard 
                key={index} url={pokemon.url} isOnTeam={!isOnTeam(getIdFromUrl(pokemon.url))} isForAdd={true} onClick={() => addToTeam(pokemon)}/>)}
            </>
        }
        </div>
        <Pagination searchIndex={searchIndex} setSearchIndex={setSearchIndex}></Pagination>
      </div>
      <div className="col col-md-5 bg-light p-4 my-3 rounded-3">
        <form>
          <div className="mb-3">
            <label className="form-label">Digite o nome do time</label>
            <input type="text" className="form-control" id="team-name" placeholder="Nome do time"
              onChange={(e) => {
                e.preventDefault(),
                setTeamName(e.target.value)
              }}
            />
          </div>
        </form>
        <h5>Integrantes do time {teamName}</h5>
        <span>
          <h6>Total de pokemons: {team.length}</h6> 
          {team.length > 5 && <h6 className="text-danger">número máximo de integrantes atingido</h6>}
        </span>
        <div className="my-2">
          {team?.map((pokemonId,index) => {
            return <PokeCard 
              key={index} id={pokemonId} isOnTeam={isOnTeam(pokemonId)} isForAdd={false} onClick={()=>{removeFromTeam(pokemonId)}}/>
          })}
        </div>
        <div>
          <button 
            type="button" className="btn btn-primary"
            disabled={teamName===''}
            onClick={() => handleSubmit()}
          >
            {!isPosted
              ? 'Criar Time'
              : <Spinner/>
            }
          </button>
          {teamName==='' && <p>você ainda não escoheu o nome do seu time</p>}
        </div>
        <PostFeedback isSuccess={isSuccess} isError={isError}/>
      </div>
    </div>
  );
}


