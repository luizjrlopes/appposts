import React, { useState } from "react";
import * as S from "./styles";
import { dataStoriesInsta } from "../../data/listaInstagramStories";

function ComponenteInstagramStories() {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Semana selecionada
  const [currentDayIndex, setCurrentDayIndex] = useState(0); // Dia selecionado
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0); // História atual

  // Dados da semana, dia e história atuais
  const currentWeek = dataStoriesInsta[currentWeekIndex];
  const currentDay = currentWeek?.days[currentDayIndex] || { stories: [] };
  const currentStory = currentDay?.stories[currentStoryIndex] || {};

  // Navegar para a próxima história
  const handleNextStory = () => {
    if (currentStoryIndex < currentDay.stories.length - 1) {
      setCurrentStoryIndex((prev) => prev + 1);
    }
  };

  // Navegar para a história anterior
  const handlePreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prev) => prev - 1);
    }
  };

  // Alterar semana
  const handleWeekChange = (event) => {
    const newWeekIndex = parseInt(event.target.value, 10);
    setCurrentWeekIndex(newWeekIndex);
    setCurrentDayIndex(0); // Reseta para o primeiro dia
    setCurrentStoryIndex(0); // Reseta para a primeira história
  };

  // Alterar dia
  const handleDayChange = (event) => {
    const newDayIndex = parseInt(event.target.value, 10);
    setCurrentDayIndex(newDayIndex);
    setCurrentStoryIndex(0); // Reseta para a primeira história do novo dia
  };

  return (
    <S.Container>
      <S.Header>
        <h1>Instagram Stories</h1>
        <S.Selectors>
          <div>
            <label htmlFor="week-select">Semana:</label>
            <select
              id="week-select"
              value={currentWeekIndex}
              onChange={handleWeekChange}
            >
              {dataStoriesInsta.map((week, index) => (
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

      <S.StoriesContainer>
        <S.ProgressBarContainer>
          <S.ProgressBar
            style={{
              width: `${
                ((currentStoryIndex + 1) / currentDay.stories.length) * 100
              }%`,
            }}
          />
        </S.ProgressBarContainer>
        <S.Content>
          <h2>{currentStory.title || "Nenhuma história disponível"}</h2>
          <p>{currentStory.description || ""}</p>
          {currentStory.imgSrc && (
            <img
              src={currentStory.imgSrc}
              alt={currentStory.imgAlt || "Imagem do story"}
              style={{ width: "100%", height: "auto", margin: "20px 0" }}
            />
          )}
          {currentStory.linkUrl && (
            <a
              href={currentStory.linkUrl}
              className="cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentStory.linkText || "Saiba mais"}
            </a>
          )}
        </S.Content>
      </S.StoriesContainer>

      <S.Navigation>
        <button
          onClick={handlePreviousStory}
          disabled={currentStoryIndex === 0}
        >
          ⬅️ Anterior
        </button>
        <button
          onClick={handleNextStory}
          disabled={currentStoryIndex === currentDay.stories.length - 1}
        >
          Próxima ➡️
        </button>
      </S.Navigation>
    </S.Container>
  );
}

export default ComponenteInstagramStories;
