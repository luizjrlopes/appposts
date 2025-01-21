import React, { useState } from "react";
import "./styles.css";

import Reels from "./instagramReels1";
import Stories from "./instagramStories";
import Publicacao from "./linkedInPublicacao";
import Artigo from "./linkedInArtigo";

function Home() {
  const [selectedComponent, setSelectedComponent] = useState("Reels");
  const [selectedPlatform, setSelectedPlatform] = useState("Instagram");

  const handleSelectedPlatformChange = (event) => {
    const newPlatform = event.target.value;
    setSelectedPlatform(newPlatform);

    // Define o componente padrão para a nova plataforma
    if (newPlatform === "Instagram") {
      setSelectedComponent("Reels");
    } else if (newPlatform === "LinkedIn") {
      setSelectedComponent("Publicacao");
    }
  };

  const handleSelectChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  // Função para renderizar o componente com base na plataforma e seleção
  const renderComponent = () => {
    if (selectedPlatform === "Instagram") {
      if (selectedComponent === "Reels") return <Reels />;
      if (selectedComponent === "Stories") return <Stories />;
    } else if (selectedPlatform === "LinkedIn") {
      if (selectedComponent === "Publicacao") return <Publicacao />;
      if (selectedComponent === "Artigo") return <Artigo />;
    }
    return null;
  };

  return (
    <div>
      {/* Seletor para alternar entre plataformas e componentes */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label htmlFor="component-select2" style={{ marginRight: "10px" }}>
          Escolha a Plataforma:
        </label>
        <select
          id="component-select2"
          value={selectedPlatform}
          onChange={handleSelectedPlatformChange}
        >
          <option value="Instagram">Instagram</option>
          <option value="LinkedIn">LinkedIn</option>
        </select>

        <label
          htmlFor="component-select"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          Escolha o Componente:
        </label>
        <select
          id="component-select"
          value={selectedComponent}
          onChange={handleSelectChange}
        >
          {selectedPlatform === "Instagram" && (
            <>
              <option value="Reels">Reels</option>
              <option value="Stories">Stories</option>
            </>
          )}
          {selectedPlatform === "LinkedIn" && (
            <>
              <option value="Publicacao">Publicação</option>
              <option value="Artigo">Artigo</option>
            </>
          )}
        </select>
      </div>

      {/* Renderiza o componente selecionado */}
      <div>{renderComponent()}</div>
    </div>
  );
}

export default Home;
