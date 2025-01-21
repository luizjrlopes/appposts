import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 20px auto;
  max-width: 800px;
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

  label {
    font-size: 0.9rem;
    color: #555;
    margin-right: 5px;
  }

  select {
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 0.9rem;
  }
`;

export const Content = styled.div`
  margin: 20px 0;
`;

export const ArticleCard = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 15px;
    color: #555;
  }

  img {
    max-width: 100%;
    border-radius: 10px;
    margin-bottom: 15px;
  }
`;

export const Introduction = styled.div`
  margin-bottom: 20px;

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    font-weight: 500;
    color: #444;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.25rem;
  margin: 20px 0 10px;
  color: #0073b1;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 15px;
  color: #333;
`;

export const List = styled.ul`
  list-style: disc;
  margin: 20px;
  padding-left: 40px;

  li {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 10px;
    color: #555;
  }
`;

export const Quote = styled.blockquote`
  font-style: italic;
  color: #555;
  border-left: 4px solid #0073b1;
  padding-left: 15px;
  margin: 20px 0;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const CTA = styled.div`
  text-align: center;
  margin: 30px 0;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }

  a {
    display: inline-block;
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

export const Conclusion = styled.div`
  margin: 30px 0;

  p {
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 1.6;
    color: #444;
  }
`;

export const Hashtags = styled.div`
  margin-top: 10px;

  span {
    display: inline-block;
    background-color: #e8f4f9;
    color: #0073b1;
    padding: 5px 10px;
    margin-right: 5px;
    border-radius: 15px;
    font-size: 0.85rem;
  }
`;

export const Button = styled.a`
  display: inline-block;
  background-color: #0073b1;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005582;
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
