import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;
  color: white;
  background-color: #141414;
  min-height: 60vh;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }

  a {
    color: white; /* link branco */
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.2s ease;

    &:hover {
      color: #d1d1d1;
      transform: scale(1.05);
      text-decoration: underline;
    }
  }
`;
