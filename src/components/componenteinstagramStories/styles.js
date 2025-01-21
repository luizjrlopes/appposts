import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f3f4f6;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 1.5rem;
    color: #0073b1;
  }
`;

export const Selectors = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    label {
      font-size: 0.9rem;
      color: #555;
    }

    select {
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 0.9rem;
      background-color: #fff;

      &:disabled {
        background-color: #f0f0f0;
        cursor: not-allowed;
      }
    }
  }
`;

export const StoriesContainer = styled.div`
  margin: 20px 0;
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  height: 5px;
  background-color: #e0e0e0;
  border-radius: 3px;
  margin-bottom: 15px;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: #0073b1;
  border-radius: 3px;
  transition: width 0.3s ease;
`;

export const Content = styled.div`
  text-align: center;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
    color: #555;
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  a.cta {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #0073b1;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 0.9rem;

    &:hover {
      background-color: #005582;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    background-color: #0073b1;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;

    &:hover {
      background-color: #005582;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;

export const Message = styled.div`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  margin-top: 50px;
`;
