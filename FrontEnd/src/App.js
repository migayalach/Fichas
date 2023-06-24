import "./HojasDeEstilo/App.css";
import Testimonio from "./Componentes/Testimonio";
import { v4 as uuidv4 } from "uuid";
import emma from "./Imagenes/testimonio-emma.png";
import shawn from "./Imagenes/testimonio-shawn.png";
import sarah from "./Imagenes/testimonio-sarah.png";

const datos = [
  {
    id: uuidv4(),
    nombre: "Shawn Wang",
    pais: "Singapore",
    cargo: "Software Engineer",
    empresa: "Amazon",
    testimonio:
      "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.",
    foto: shawn,
  },
  {
    id: uuidv4(),
    nombre: "Sarah Chima",
    pais: "Nigeria",
    cargo: "Software Engineer",
    empresa: "ChatDesk",
    testimonio:
      "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.",
    foto: sarah,
  },
  {
    id: uuidv4(),
    nombre: "Emma Bostian",
    pais: "Sweden",
    cargo: "Software Engineer",
    empresa: "Spotify",
    testimonio:
      "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.",
    foto: emma,
  },
];

function App() {
  return (
    <div className="App">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        {datos.map(({ id, nombre, pais, cargo, empresa, testimonio, foto }) => (
          <Testimonio
            key={id}
            nombre={nombre}
            pais={pais}
            cargo={cargo}
            empresa={empresa}
            testimonio={testimonio}
            foto={foto}
          />
        ))}
    </div>
  );
}

export default App;