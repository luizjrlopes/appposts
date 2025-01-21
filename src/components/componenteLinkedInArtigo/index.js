// linkedInArtigo.js
import React, { useState } from "react";
import * as S from "./styles";
import { dataArtigosLink } from "./../../data/dataArtigosLink";

function LinkedInArtigo() {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Semana selecionada
  const [currentDayIndex, setCurrentDayIndex] = useState(0); // Dia selecionado
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0); // Artigo selecionado

  // Dados da semana, dia e artigos atuais
  const currentWeek = dataArtigosLink[currentWeekIndex];
  const currentDay = currentWeek?.days[currentDayIndex] || { artigos: [] };
  const currentArticle = currentDay?.artigos[currentArticleIndex] || {};

  const handleWeekChange = (event) => {
    const newWeekIndex = parseInt(event.target.value, 10);
    setCurrentWeekIndex(newWeekIndex);
    setCurrentDayIndex(0); // Reseta para o primeiro dia
    setCurrentArticleIndex(0); // Reseta para o primeiro artigo
  };

  const handleDayChange = (event) => {
    const newDayIndex = parseInt(event.target.value, 10);
    setCurrentDayIndex(newDayIndex);
    setCurrentArticleIndex(0); // Reseta para o primeiro artigo do novo dia
  };

  const handleNextArticle = () => {
    setCurrentArticleIndex(
      (prevIndex) => (prevIndex + 1) % currentDay.artigos.length
    );
  };

  const handlePreviousArticle = () => {
    setCurrentArticleIndex((prevIndex) =>
      prevIndex === 0 ? currentDay.artigos.length - 1 : prevIndex - 1
    );
  };

  return (
    <S.Container>
      <S.Header>
        <h1>Artigos LinkedIn</h1>
        <S.Selectors>
          <div>
            <label htmlFor="week-select">Semana:</label>
            <select
              id="week-select"
              value={currentWeekIndex}
              onChange={handleWeekChange}
            >
              {dataArtigosLink.map((week, index) => (
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
        <S.ArticleCard>
          <h2>{currentArticle.title || "Nenhum artigo disponível"}</h2>
          <p>{currentArticle.content || ""}</p>
          {currentArticle.imgSrc && (
            <img
              src={currentArticle.imgSrc}
              alt={currentArticle.imgAlt || "Imagem do artigo"}
            />
          )}
          {currentArticle.hashtags && (
            <S.Hashtags>
              {currentArticle.hashtags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </S.Hashtags>
          )}
          {currentArticle.linkUrl && (
            <S.Button
              as="a"
              href={currentArticle.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentArticle.linkText || "Leia mais"}
            </S.Button>
          )}
        </S.ArticleCard>
      </S.Content>

      <S.Navigation>
        <button
          onClick={handlePreviousArticle}
          disabled={currentDay.artigos.length === 0}
        >
          ⬅️ Anterior
        </button>
        <button
          onClick={handleNextArticle}
          disabled={currentDay.artigos.length === 0}
        >
          Próximo ➡️
        </button>
      </S.Navigation>
    </S.Container>
  );
}

export default LinkedInArtigo;
