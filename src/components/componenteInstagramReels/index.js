import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { dataReelsInsta } from "./../../data/listaInstagramReels";

function ComponenteInstagramReels() {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Semana selecionada
  const [currentDayIndex, setCurrentDayIndex] = useState(0); // Dia selecionado
  const [currentReel, setCurrentReel] = useState(0); // Reel selecionado
  const [currentScene, setCurrentScene] = useState(0); // Cena selecionada
  const [showNavigation, setShowNavigation] = useState(false); // Controle de navegação

  // Dados da semana, dia e reels atuais
  const currentWeek = dataReelsInsta[currentWeekIndex];
  const currentDay = currentWeek?.days[currentDayIndex] || { rells: [] };
  const currentReelData = currentDay?.rells[currentReel];
  const currentSceneData = currentReelData?.scenes[currentScene];

  // Navegação automática de cenas
  useEffect(() => {
    if (showNavigation) return;

    const intervalTime = currentSceneData?.interval || 3000; // Intervalo padrão de 3 segundos
    const interval = setInterval(() => {
      handleNextScene();
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentScene, currentReelData, showNavigation, currentSceneData]);

  // Alterar semana
  const handleWeekChange = (event) => {
    const newWeekIndex = parseInt(event.target.value, 10);
    setCurrentWeekIndex(newWeekIndex);
    setCurrentDayIndex(0); // Reseta para o primeiro dia
    setCurrentReel(0); // Reseta para o primeiro reel
    setCurrentScene(0); // Reseta para a primeira cena
    setShowNavigation(false);
  };

  // Alterar dia
  const handleDayChange = (event) => {
    const newDayIndex = parseInt(event.target.value, 10);
    setCurrentDayIndex(newDayIndex);
    setCurrentReel(0); // Reseta para o primeiro reel
    setCurrentScene(0); // Reseta para a primeira cena
    setShowNavigation(false);
  };

  // Próxima cena
  const handleNextScene = () => {
    if (!currentReelData?.scenes) return;

    const isLastScene = currentScene === currentReelData.scenes.length - 1;

    if (isLastScene) {
      setShowNavigation(true);
      return;
    }

    setCurrentScene((prev) => prev + 1);
  };

  // Próximo reel
  const handleNextReel = () => {
    const reels = currentDay?.rells || [];
    setCurrentReel((prev) => (prev + 1) % reels.length);
    setCurrentScene(0);
    setShowNavigation(false);
  };

  // Reel anterior
  const handlePreviousReel = () => {
    const reels = currentDay?.rells || [];
    setCurrentReel((prev) => (prev - 1 + reels.length) % reels.length);
    setCurrentScene(0);
    setShowNavigation(false);
  };

  if (!currentSceneData) return <S.Message>Carregando...</S.Message>;

  return (
    <S.Container>
      <S.Header>
        <h1>Reels Instagram</h1>
        <S.Selectors>
          <div>
            <label htmlFor="week-select">Semana:</label>
            <select
              id="week-select"
              value={currentWeekIndex}
              onChange={handleWeekChange}
            >
              {dataReelsInsta.map((week, index) => (
                <option key={index} value={index}>
                  Semana {week.week}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="day-select">Dia:</label>
            <select
              id="day-select"
              value={currentDayIndex}
              onChange={handleDayChange}
              disabled={!currentWeek}
            >
              {currentWeek?.days.map((day, index) => (
                <option key={index} value={index}>
                  Dia {day.day}
                </option>
              ))}
            </select>
          </div>
        </S.Selectors>
      </S.Header>

      <S.Content>
        <S.Scene style={{ backgroundImage: `url(${currentSceneData.imgSrc})` }}>
          <div className="text">
            <h1>{currentSceneData.title}</h1>
            <p>{currentSceneData.description}</p>
            {currentSceneData.link && (
              <a
                href={currentSceneData.link}
                className="cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba Mais
              </a>
            )}
          </div>
        </S.Scene>
      </S.Content>

      <S.Navigation>
        <button onClick={handlePreviousReel}>⬅️ Anterior</button>
        <button onClick={handleNextReel}>Próximo ➡️</button>
      </S.Navigation>
    </S.Container>
  );
}

export default ComponenteInstagramReels;
