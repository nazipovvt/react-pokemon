import './styles/App.css';
import './styles/reset.css';
import './styles/fonts.css';

import Hero from "./components/hero/Hero";
import Game from "./components/game/Game";
import {pokemonData} from "./pokemonData";
import {useState} from "react";
import {Context} from "./Context";
import Facts from './components/facts/Facts';
import Info from './components/info/Info';

function DataProvider({ children }) {
  const [context, setContext] = useState(pokemonData);

  return (
    <Context.Provider value={[context, setContext]}>
      {children}
    </Context.Provider>
  );
}

function App() {
  return (
    <div className="wrapper">
      <DataProvider>
        <Hero />
        <Game />
      </DataProvider>
      <Facts />
      <Info />
    </div>
  );
}

export default App;
