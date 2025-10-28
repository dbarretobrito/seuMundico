import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
  font-size: 0.86rem;
  font-family: "Poppins", sans-serif;
  margin-bottom: 8px;
  color: #fff;
  align-self: flex-start;

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    color: #fff;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  background-color: #0b0b0b; /* fundo igual ao restante do site */
  min-height: 100vh;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 12px 16px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #333;
  background-color: #111;
  color: #fff;
  outline: none;
  margin-bottom: 20px;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #888;
  }
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  p {
    text-align: center;
    color: #aaa;
    width: 100%;
  }

  a {
    color: inherit; /* impede o azul padrão */
    text-decoration: none;
  }

  a:hover p {
    text-decoration: underline;
  }
`;
