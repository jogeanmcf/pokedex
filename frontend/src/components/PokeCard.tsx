import { Spinner } from "react-bootstrap";
import { useGetPokeByIdQuery, useGetPokeByUrlQuery } from "../api/pokemonAPI";
import { FaTrash, FaPlus } from 'react-icons/fa'
import classNames from "classnames";

interface PokeCardProps {
  id?: number | null,
  url?: string | null,
  isForAdd: boolean,
  isOnTeam: boolean,
  onClick: (e: any) => void,
}

const iconProps =  {
  size: 16,
  color: 'red'
}

export function PokeCard({id,url,isOnTeam,isForAdd,onClick}: PokeCardProps){
  const {data: pokemon, isLoading } = id == null ? useGetPokeByUrlQuery(url) : useGetPokeByIdQuery(id)
  
  if(isLoading){
    return(
      <div className="card" style={{width: "12rem"}}>
        <div className="card-body">
          <div className="d-inline-flex justify-center align-center">
            <Spinner/>
          </div>
        </div>
      </div>
    )
  }
  return(
    <div className={classNames({
      "d-inline-flex align-items-end gap-2": true,
      "disabledCard": !isOnTeam
    })}
    
    >
      <div className="card" style={{width: "14rem"}}>
        <div className="card-body">
            <h5 className="card-title">{pokemon.name}</h5>
          <div className="d-flex gap-3">
            
              <img src={pokemon.sprites.other.dream_world.front_default} width={60} height={60}/>
              <div className="flex-column">
                <div className="d-flex gap-1"><p>altura:</p><p>{pokemon.height}</p></div>
                <div className="d-flex gap-1"><p>peso: </p><p>{pokemon.weight}</p></div>
              </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn"
            onClick={onClick}
          >
            { isForAdd
              ? <FaPlus {...iconProps} color="green"/>
              : <FaTrash {...iconProps}/>
            }
          </button>
        </div>
      </div>
      
    </div>
  );
}