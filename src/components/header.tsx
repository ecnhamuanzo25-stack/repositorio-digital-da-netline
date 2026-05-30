import React from "react";
import logoNetline from "../assets/netline.jpg"
import Button from "./button";
import { Link } from "react-router-dom";

// Definimos o que o Header precisa de receber (TypeScript)
interface HeaderProps {
  onPlanosClick?: () => void; // Uma função opcional para quando clicarem no botão de ação
}

const Header: React.FC<HeaderProps> = ({ onPlanosClick }) => {
  return (
    <header className="shadow-2xs flex flex-row justify-between items-center px-4 py-4 bg-white ">
      <div style={styles.logoContainer}>
        <div>
        <img
          src={logoNetline}
          alt="Logotipo Netline"
          style={styles.logoImage}
         />
        </div>
        <span style={styles.logoText}>
          Net<span style={styles.logoHighlight}>line Serv</span>
        </span>
      </div>

      <nav style={styles.nav}>
        <a href="#inicio" style={styles.navLink}>
          Início
        </a>
        <a href="#sobrenós" style={styles.navLink}>
          Sobre a plataforma
        </a>
        <a href="#suporte" style={styles.navLink}>
          Suporte
        </a>
      </nav>

      
      <Link to="/cadastro" className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
         >Cadastre-se</Link>
    </header>


  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 4rem",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "sticky" as const,
    top: 0,
    zIndex: 1000,
  },
  logoImage: {
    height: "40px",
    width: "auto",
    display: "block",
  },
logoContainer: {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "1.5rem",
  fontWeight: "bold",
},
  logoText: {
    color: "#333",
  },
  logoHighlight: {
    color: "#0066cc",
  },
  nav: {
    display: "flex",
    gap: "2rem",
  },
  navLink: {
    textDecoration: "none",
    color: "#555",
    fontWeight: "500",
    fontSize: "1rem",
  },
  actionContainer: {},
  ctaButton: {
    backgroundColor: "#0066cc",
    color: "#fff",
    border: "none",
    padding: "0.6rem 1.2rem",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Header;
