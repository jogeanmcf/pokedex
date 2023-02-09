import { FaTrash } from "react-icons/fa";
import { TeamPreview } from "./TeamPreview"
import { useDeleteTeamMutation } from '../api/pokemonAPI'
import { useEffect } from "react";

interface Team  {
  id: number,
  name: String,
  pokemons: number[]
}
export function TeamCard(team: Team){
  const [deleteTeam, {isSuccess,isLoading}] = useDeleteTeamMutation();

  useEffect(()=> {
    if(isSuccess){
      location.reload()
    }
  },[isSuccess])

  return(
    <div className='card p-4 mt-4'>
      <h2>{team.name}</h2>
      <h4>Número de pokemons: {team.pokemons.length}</h4> 
      <div>
        <TeamPreview/>
        <div className="d-flex gap-2 justify-content-end">
          <button type="button" className="btn btn-outline-primary"
            onClick={()=> {}}
          >Gerenciar Time</button>
          <button 
            disabled={isLoading}
            type="button" className="btn btn-outline-danger" onClick={() => deleteTeam(team.id)}
          >Excluir Time {<FaTrash/>}</button>
        </div>
      </div>
    </div>
  );
}
