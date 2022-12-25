  export const logo = "https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
   

const pokemonTypeTags = {
  grass: "px-3 font-pokemon py-1 bg-gradient-to-r  from-[#9bcc50] to-green-500 rounded text-white text-center  text-sm",
  poison: "px-3 font-pokemon py-1 bg-gradient-to-r  from-[#b97fc9] to-purple-500 rounded text-white text-center  text-sm",
  fire: "px-3 font-pokemon py-1 bg-gradient-to-r  from-[#fd7d24] to-orange-600 rounded text-white text-center  text-sm",
  water: "px-3 font-pokemon py-1 bg-gradient-to-r  from-[#4592c4] to-blue-500 rounded text-white text-center  text-sm",
  bug: "px-3 font-pokemon py-1 bg-gradient-to-r  from-[#729f3f] to-green-700 rounded text-white text-center  text-sm",
  normal: "px-3 font-pokemon py-1 bg-gradient-to-r  from-[#a4acaf] to-gray-500 rounded text-white text-center  text-sm",
  electric: "px-3 font-pokemon py-1 bg-gradient-to-r  from-[#eed535] to-yellow-500 rounded text-black text-center  text-sm",
  ground: "px-3 font-pokemon py-1 bg-gradient-to-b  from-[#eed535] to-yellow-900 rounded text-white text-center  text-sm",
  flying: "px-3 font-pokemon py-1 bg-gradient-to-b  from-blue-500 to-gray-500 rounded text-white text-center  text-sm",
  fairy: "px-3 font-pokemon py-1 bg-gradient-to-r  from-pink-500 to-pink-600 rounded text-black text-center  text-sm",
  fighting: "px-3 font-pokemon py-1 bg-gradient-to-r  from-orange-600 to-orange-800 rounded text-white text-center  text-sm",
  psychic: "px-3 font-pokemon py-1 bg-gradient-to-r  from-pink-500 to-pink-600 rounded text-white text-center  text-sm",
  rock: "px-3 font-pokemon py-1 bg-gradient-to-r  from-yellow-700 to-yellow-900 rounded text-white text-center  text-sm",
  ice: "px-3 font-pokemon py-1 bg-gradient-to-r  from-blue-200 to-blue-300 rounded text-white text-center  text-sm",
  ghost: "px-3 font-pokemon py-1 bg-gradient-to-r  from-purple-700 to-purple-900 rounded text-white text-center  text-sm",
  steel: "px-3 font-pokemon py-1 bg-gradient-to-br  from-gray-200 to-gray-400 rounded text-white text-center  text-sm",
  dragon: "px-3 font-pokemon py-1 bg-gradient-to-br  from-blue-500 to-pink-500 rounded text-white text-center  text-sm",
  dark: "px-3 font-pokemon py-1 bg-gradient-to-br  from-gray-800 to-black rounded text-white text-center  text-sm",
  
};

export function checkType(type: string) {
  if (type == "grass") return pokemonTypeTags.grass;
  else if (type == "poison") return pokemonTypeTags.poison;
  else if (type == "fire") return pokemonTypeTags.fire;
  else if (type == "water") return pokemonTypeTags.water;
  else if (type == "bug") return pokemonTypeTags.bug;
  else if (type == "normal") return pokemonTypeTags.normal;
  else if (type == "electric") return pokemonTypeTags.electric;
  else if (type == "ground") return pokemonTypeTags.ground;
  else if (type == "ground") return pokemonTypeTags.ground;
  else if (type == "fighting") return pokemonTypeTags.fighting;
  else if (type == "fairy") return pokemonTypeTags.fairy;
  else if (type == "psychic") return pokemonTypeTags.psychic;
  else if (type == "rock") return pokemonTypeTags.rock;
  else if (type == "ice") return pokemonTypeTags.ice;
  else if (type == "flying") return pokemonTypeTags.flying;
  else if (type == "ghost") return pokemonTypeTags.ghost;
  else if (type == "steel") return pokemonTypeTags.steel;
  else if (type == "dragon") return pokemonTypeTags.dragon;
  else if (type == "dark") return pokemonTypeTags.dark;
  
}
