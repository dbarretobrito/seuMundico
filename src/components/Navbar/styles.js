import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: white;
  color: #282c34;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  /* o contêiner interno centraliza o conteúdo */
  .header-inner {
    max-width: 79.25rem; /* mesmo limite de antes (~1268px) */
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4.5rem;
    padding: 0 2rem; /* espaço lateral dinâmico */
    box-sizing: border-box;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  
    img {
      width: 40px;
      height: 40px;
    }

    p {
      font-size: 1.18rem;
      font-weight: 600;
      line-height: 1;
    }
  }

  .nav-links {
    display: flex;
    gap: 0.6rem;
    align-items: center;
    padding-right: 10px;
  }

  .lefticons {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  /* breakpoints */
  @media (max-width: 1200px) {
    .header-inner {
      padding: 0 1.5rem;
    }
  }

  @media (max-width: 900px) {
    .header-inner {
      padding: 0 1rem;
    }

    .logo p {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    .header-inner {
      padding: 0 0.8rem;
    }

    .logo p {
      font-size: 0.95rem;
    }

    .nav-links a {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    .header-inner {
      padding: 0 0.6rem;
    }

    .logo p {
      font-size: 0.8rem;
    }

    .nav-links a {
      font-size: 0.8rem;
    }

    .nav-links {
      gap: 0.2rem;
    }
  }
`;

export const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding-right: 3px;
  padding-left: 3px;

  .hamburger-icon {
    width: 24px;
    height: 24px;
    color: #282c34;
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    .hamburger-icon {
      width: 1rem;
      height: 1.5rem;
    }
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 4.5rem;
  left: 60px; /* fica mais perto do ícone de menu */
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 18px 18px;
  z-index: 1000;
  font-weight: 450;
  border-radius: 8px;

  opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? 1 : 0)};
  visibility: ${({ $isMenuOpen }) => ($isMenuOpen ? "visible" : "hidden")};
  transform: ${({ $isMenuOpen }) =>
    $isMenuOpen ? "translateY(0)" : "translateY(-10px)"};
  transition: opacity 0.4s ease, visibility 0.4s, transform 0.4s ease;

  .menu-link {
    display: block;
    margin: 5px 0;
    text-decoration: none;
    color: #282c34;
    font-size: 0.9rem;
    text-align: left; /* mais natural sob o botão */
    padding: 4px 0;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-weight: 600;
    text-align: left;
    margin-bottom: 6px;
  }

  @media (max-width: 768px) {
    left: 50px; /* mais perto ainda em telas menores */
    padding: 14px;
  }
`;


export const NavLink = styled(Link)`
  color: #282c34;
  margin: 0 10px;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  .logo {
    display: flex;
    align-items: center;

    img {
      width: 44px;
      height: 44px;
    }

    p {
      font-size: 0.98rem;
      font-weight: 600;
      line-height: 1;
    }
  }

  @media (max-width: 480px) {
    .logo {
      img {
        width: 38px;
        height: 38px;
      }

      p {
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 1.05;
      }
    }
  }
`;
