import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1268px;
  margin: 0 auto;
  padding: 0;
  color: white;
  font-family: "Poppins", sans-serif;

  h2 {
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const BreadcrumbContainer = styled.div`
  font-size: 0.86rem;
  font-family: "Poppins", sans-serif;
  margin-bottom: 8px;
  color: white;
  align-self: flex-start;

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    color: white;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  gap: 15px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
