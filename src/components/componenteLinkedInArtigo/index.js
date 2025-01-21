import React, { useState } from "react";
import * as S from "./styles";
import { dataArtigosLink } from "./../../data/dataArtigosLink";

function LinkedInArtigo() {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Semana selecionada
  const [currentDayIndex, setCurrentDayIndex] = useState(0); // Dia selecionado
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0); // Artigo selecionado

  // Dados da semana, dia e artigo atuais
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
          {/* Seletor de Semana */}
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
          {/* Seletor de Dia */}
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

      {/* Conteúdo do Artigo */}
      <S.Content>
        <S.ArticleCard>
          <h2>{currentArticle.title || "Nenhum artigo disponível"}</h2>
          {currentArticle.introduction && (
            <S.Introduction>
              <p>{currentArticle.introduction}</p>
            </S.Introduction>
          )}
          {/* Renderizar seções dinamicamente */}
          {currentArticle.sections &&
            currentArticle.sections.map((section, index) => {
              if (section.type === "subtitle") {
                return <S.Subtitle key={index}>{section.content}</S.Subtitle>;
              }
              if (section.type === "paragraph") {
                return <S.Paragraph key={index}>{section.content}</S.Paragraph>;
              }
              if (section.type === "list") {
                return (
                  <S.List key={index}>
                    {section.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </S.List>
                );
              }
              if (section.type === "quote") {
                return <S.Quote key={index}>{section.content}</S.Quote>;
              }
              if (section.type === "image") {
                return (
                  <S.Image
                    key={index}
                    src={section.src}
                    alt={section.alt || "Imagem do artigo"}
                  />
                );
              }
              if (section.type === "cta") {
                return (
                  <S.CTA key={index}>
                    <p>{section.content}</p>
                    <a
                      href={section.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Saiba mais
                    </a>
                  </S.CTA>
                );
              }
              return null;
            })}
          {/* Conclusão do Artigo */}
          {currentArticle.conclusion && (
            <S.Conclusion>
              <p>{currentArticle.conclusion}</p>
            </S.Conclusion>
          )}
          {/* Tags do Artigo */}
          {currentArticle.tags && (
            <S.Hashtags>
              {currentArticle.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </S.Hashtags>
          )}
        </S.ArticleCard>
      </S.Content>

      {/* Navegação */}
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
