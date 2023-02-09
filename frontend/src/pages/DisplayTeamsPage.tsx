import { Spinner } from 'react-bootstrap';
import { useGetAllTeamsQuery } from '../api/pokemonAPI'
import { Link } from 'react-router-dom';
import { TeamCard } from '../components/TeamCard';

interface Team  {
  id: number,
  name: String,
  pokemons: number[]
}

export function DisplayTeams(){
  const {data: teams, isLoading} = useGetAllTeamsQuery("");
  
  if(isLoading){
    return <Spinner/>
  }

  return(
    <div className='bg-light p-5 mt-4 rounded-3'>
      <div className="d-flex justify-content-between">
        <h1>Times</h1>
        <Link
          to='/teamConfig'
        >
          <button type="button" className="btn btn-outline-primary"> + Time </button>
        </Link>
      </div>
      <div>
        {teams.map((team: any, index: number)=>{
          return(
            <TeamCard {...team} key={index}/>
          );
        })}
      </div>
    </div>
  );
}


