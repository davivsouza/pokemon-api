import { Routes, Route } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { Pokemon } from "./pages/Pokemon";
function App() {
  return (
    <div className="bg-white w-[80%] mx-auto pt-12">
      <header>
        <SearchBar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:pokemon" element={<Pokemon />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
