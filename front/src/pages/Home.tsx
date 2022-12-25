import axios from "axios";
import { useEffect, useState } from "react";
import { checkType } from "../utils/checkTypes";
type PokemonApiResults = {
  id: string;
  name: string;
  sprite: string;
  types: {
    type: {
      name: string;
    };
  }[];
};
export function Home() {
  const [pokemons, setPokemons] = useState<any>();
  const [pokemonLimitPerPage, setPokemonLimitPerPage] = useState(20)
  useEffect(() => {
    async function fetchApi() {
      const { data } = await axios.get("http://localhost:3030/pokemons?limit=" + pokemonLimitPerPage);
      setPokemons(data);
    }
    fetchApi();
  }, [pokemonLimitPerPage]);

  function loadMorePokemons(){
    setPokemonLimitPerPage(previous => previous + 20)

  }

  if (!pokemons)
    return (
      <h1 className="font-bold text-2xl text-center mt-4 h-full">Loading...</h1>
    );


  return (
    <main>
      <ul className="xl:max-w-[900px] md:max-w-[600px] sm:max-w-[300px] grid grid-cols-4 justify-items-center items-center mt-12 mx-auto gap-8 pb-8">
        {pokemons.map((pokemon: PokemonApiResults, idx: number) => (
          <li key={pokemon.name}>
            <div className="w-44 flex flex-col justify-center">
              <figure>
                <img
                  src={pokemon.sprite}
                  alt={pokemon.name}
                  loading={"lazy"}
                  className="w-full  flex items-center justify-center bg-[#F2F2F2] pb-5 rounded-sm"
                />
              </figure>
              <div className="mt-3 leading-relaxed">
                <span className="text-regular font-pokemon font-semibold text-gray-400">
                  N° {pokemon.id}
                </span>
                <h5 className="capitalize font-pokemon font-bold text-2xl text-[#313131]">
                  {pokemon.name}
                </h5>
                <div className="flex items-center flex-wrap gap-4 mt-2">
                  {pokemon.types.map((type, idx: number) => (
                    <p
                      key={idx}
                      className={`${checkType(type.type.name)} capitalize `}
                    >
                      {type.type.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={loadMorePokemons}>Carregar</button>
    </main>
  );
}
