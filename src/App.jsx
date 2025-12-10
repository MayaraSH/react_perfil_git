import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
import Formulario from "./components/Formulario";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [buscaVisivel, setBuscaVisivel] = useState(true);

  const handleBuscar = (termo) => {
    setNomeUsuario(termo);
    setBuscaVisivel(false);
  };

  return (
    <>
      <Formulario
        aoBuscar={handleBuscar}
        buscaVisivel={buscaVisivel}
      />

      <div className={`main-content ${buscaVisivel ? 'search-visible-padding' : ''}`}>
        {nomeUsuario.length > 4 && (
          <>
            <button
              onClick={() => setBuscaVisivel(!buscaVisivel)}
              className="toggle-search-button"
              aria-label={buscaVisivel ? 'Ocultar busca' : 'Mostrar busca'}
            />
            <Perfil nomeUsuario={nomeUsuario} />
            <ReposList nomeUsuario={nomeUsuario} />
          </>
        )}
      </div>

    </>
  )
}

export default App