import axios, { AxiosResponse } from "axios";
import { Request, Response } from "express";
import { api } from "../services/api";
type PokeApiData = {
  url: string;
  results: [];
};

const getPokemonByName = async (req: Request, res: Response) => {
  const { data } = await api.get("/pokemon/" + req.params.name);

  res.json(data);
};

const getPokemons = async (req: Request, res: Response) => {
  const {limit} = req.query
  
  const { data }: AxiosResponse<PokeApiData> = await api.get(
    `pokemon/?limit=${limit}&offset=0`
  );
  const lowPokemonsInfo = data.results;

  const fullPokemonsInfo = await Promise.all(
    lowPokemonsInfo.map(async (pokemon: PokeApiData) => {
      const response = await axios.get(pokemon.url);
      const { id, name, sprites, types } = await response.data;

      return {
        id: String(id).padStart(3, '0'),
        name,
        sprite: sprites.other['official-artwork'].front_default,
        types
        
      };
    })
  );

  res.json(fullPokemonsInfo);
};
export { getPokemonByName, getPokemons };
