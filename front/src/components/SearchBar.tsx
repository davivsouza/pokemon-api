import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../utils/checkTypes";

export function SearchBar() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
 
  function redirectToThePokemonPage(){
    window.location.reload()
    navigate(search)
    
  }
  return (
    <div className=" m-auto  flex flex-col items-center gap-2 justify-center">
      <Link to="/" className="w-[30%]">
      <img src={logo} alt="pokédex"   />
      </Link>
      <div className="flex items-center">
      <input
        type="search"
        name="searchPokemon"
        id="searchPokemon"
        onChange={(e) => setSearch(e.target.value)}
        className="w-[500px] border border-gray-400  px-4 py-1 placeholder:capitalize placeholder:text-gray-400 text-sm outline-none rounded"
        placeholder="Search a Pokémon"
      />
      <button  className="ml-2 border border-red-500 bg-red-500 rounded p-2" onClick={redirectToThePokemonPage}>
        <img 
          src="https://cdn-icons-png.flaticon.com/512/54/54481.png" 
          alt="Search Button" 
          className=" w-[12px] "
        />
      </button>
      </div>
    </div>
  );
}
