import express from "express";
import { getPokemonByName, getPokemons } from "./controllers/getPokemons";

const routes = express.Router()

routes.get('/pokemon/:name',getPokemonByName)
routes.get('/pokemons', getPokemons)
export {routes}