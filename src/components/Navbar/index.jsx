import { useState, useRef, useEffect } from "react";
import {
  HeaderContainer,
  LogoLink,
  NavLink,
  HamburgerIcon,
  Menu,
} from "./styles";
import { FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import seuMundicoLogoNaked from "../../assets/seuMundicoLogoNaked.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <HeaderContainer>
      <div className="header-inner">
        {/* Ícones e Logo à esquerda */}
        <div className="lefticons">
          <HamburgerIcon ref={hamburgerRef} onClick={toggleMenu}>
            <FaBars className="hamburger-icon" />
          </HamburgerIcon>

          <LogoLink to="/">
            <div className="logo">
              <img src={seuMundicoLogoNaked} alt="Seu Mundico Records" />
              <div className="logo-text">
                <p>SEU</p>
                <p>MUNDICO</p>
                <p>RECORDS</p>
              </div>
            </div>
          </LogoLink>
        </div>

        {/* Navegação à direita */}
        <nav>
          <div className="nav-links">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/search">
              <FaSearch size={20} />
            </NavLink>
            <NavLink to="/cart">
              <FaShoppingCart size={21} />
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Menu dropdown (mobile) */}
      <Menu ref={menuRef} $isMenuOpen={isMenuOpen}>
        <p>✷</p>
        <NavLink
          className="menu-link"
          to="/national-shirts"
          onClick={closeMenu}
        >
          CAMISAS NACIONAIS
        </NavLink>
        <NavLink
          className="menu-link"
          to="/international-shirts"
          onClick={closeMenu}
        >
          CAMISAS INTERNACIONAIS
        </NavLink>
        <NavLink className="menu-link" to="/contact" onClick={closeMenu}>
          CONTATO
        </NavLink>
      </Menu>
    </HeaderContainer>
  );
}
