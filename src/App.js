import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portafolio from "./components/Portafolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      {/* Importando la Barra de navegacion */}
      <NavBar />

      {/* Importando el Home */}
      <Home />

      {/* Importando menu de redes sociales */}
      <SocialLinks />

      {/* Importando seccion de About */}
      <About />

      {/* Importando seccion de Portafolio */}
      <Portafolio />

      {/* Importando seccion de Skills */}
      <Experience />

      {/* Importando seccion de Contacto */}
      <Contact />
    </div>
  );
}

export default App;
