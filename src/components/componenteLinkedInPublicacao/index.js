// linkedInPublicacao.js
import React, { useState } from "react";
import * as S from "./styles";
import { dataPublicacaoLink } from "./../../data/dataPublicacaoLink";

function LinkedInPublicacao() {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Semana selecionada
  const [currentDayIndex, setCurrentDayIndex] = useState(0); // Dia selecionado
  const [currentPostIndex, setCurrentPostIndex] = useState(0); // Publicação selecionada

  // Dados da semana, dia e publicações atuais
  const currentWeek = dataPublicacaoLink[currentWeekIndex];
  const currentDay = currentWeek?.days[currentDayIndex] || { publicacoes: [] };
  const currentPost = currentDay?.publicacoes[currentPostIndex] || {};

  const handleWeekChange = (event) => {
    const newWeekIndex = parseInt(event.target.value, 10);
    setCurrentWeekIndex(newWeekIndex);
    setCurrentDayIndex(0); // Reseta para o primeiro dia
    setCurrentPostIndex(0); // Reseta para a primeira publicação
  };

  const handleDayChange = (event) => {
    const newDayIndex = parseInt(event.target.value, 10);
    setCurrentDayIndex(newDayIndex);
    setCurrentPostIndex(0); // Reseta para a primeira publicação do novo dia
  };

  const handleNextPost = () => {
    setCurrentPostIndex(
      (prevIndex) => (prevIndex + 1) % currentDay.publicacoes.length
    );
  };

  const handlePreviousPost = () => {
    setCurrentPostIndex((prevIndex) =>
      prevIndex === 0 ? currentDay.publicacoes.length - 1 : prevIndex - 1
    );
  };

  return (
    <S.Container>
      <S.Header>
        <h1>Publicações LinkedIn</h1>
        <S.Selectors>
          <div>
            <label htmlFor="week-select">Semana:</label>
            <select
              id="week-select"
              value={currentWeekIndex}
              onChange={handleWeekChange}
            >
              {dataPublicacaoLink.map((week, index) => (
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
        <S.PostCard>
          <h2>{currentPost.title || "Nenhuma publicação disponível"}</h2>
          <p>{currentPost.content || ""}</p>
          {currentPost.imgSrc && (
            <img
              src={currentPost.imgSrc}
              alt={currentPost.imgAlt || "Imagem da publicação"}
            />
          )}
          {currentPost.hashtags && (
            <S.Hashtags>
              {currentPost.hashtags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </S.Hashtags>
          )}
          {currentPost.linkUrl && (
            <S.Button
              as="a"
              href={currentPost.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentPost.linkText || "Saiba mais"}
            </S.Button>
          )}
        </S.PostCard>
      </S.Content>

      <S.Navigation>
        <button
          onClick={handlePreviousPost}
          disabled={currentDay.publicacoes.length === 0}
        >
          ⬅️ Anterior
        </button>
        <button
          onClick={handleNextPost}
          disabled={currentDay.publicacoes.length === 0}
        >
          Próximo ➡️
        </button>
      </S.Navigation>
    </S.Container>
  );
}

export default LinkedInPublicacao;
