import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { checkType } from "../utils/checkTypes";
type pokemonInfo = {
  id: string
  name: string
  sprite: string
  types: [
    {
      type:{
        name: string
      }
    }
  ]
}
export function Pokemon(){
  const [searchedPokemon, setSearchedPokemon] = useState<pokemonInfo>()
  const {pokemon} = useParams()

  useEffect(()=>{
    async function fetchApi(){
      const {data}= await axios.get('http://localhost:3030/pokemon/' + pokemon)
      // console.log(data.id, data.name,data.sprites.other['official-artwork'].front_default,data.types);
      const pokemonSearched = {
        id: String(data.id).padStart(3, '0'),
        name: data.name,
        sprite: data.sprites.other['official-artwork'].front_default,
        types: data.types
      }
      setSearchedPokemon(pokemonSearched)
      
    }

    fetchApi()
  }, [])
  return (
    <div className="w-44 flex flex-col justify-start m-auto mt-10 h-screen">
            <figure>
              <img
                src={searchedPokemon?.sprite}
                alt={searchedPokemon?.name}
                loading={'lazy'}
                className="w-full  flex items-center justify-center bg-[#F2F2F2] pb-5 rounded-sm"
              />
            </figure>
            <div className="mt-3 leading-relaxed" >
              <span className="text-regular font-pokemon font-semibold text-gray-400">
                N° {searchedPokemon?.id}
              </span>
              <h5 className="capitalize font-pokemon font-bold text-2xl text-[#313131]">
                {searchedPokemon?.name}
              </h5>
              <div className="flex items-center flex-wrap gap-4 mt-2">
              {searchedPokemon?.types.map((type, idx:number) => (
                <p key={idx} className={`${checkType(type.type.name)} capitalize `}>
                  {type.type.name}
                </p>
              ))}
              </div>
              
            </div>
          </div>
  )
}