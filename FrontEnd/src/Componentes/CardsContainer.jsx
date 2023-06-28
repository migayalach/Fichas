import Testimonio from "./Testimonio";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import emma from "../Imagenes/testimonio-emma.png";
import shawn from "../Imagenes/testimonio-shawn.png";
import sarah from "../Imagenes/testimonio-sarah.png";

const CardsContainer = () => {
  // const datos = [
  //   {
  //     id: uuidv4(),
  //     nombre: "Shawn Wang",
  //     pais: "Singapore",
  //     cargo: "Software Engineer",
  //     empresa: "Amazon",
  //     testimonio:
  //       "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.",
  //     foto: shawn,
  //   },
  //   {
  //     id: uuidv4(),
  //     nombre: "Sarah Chima",
  //     pais: "Nigeria",
  //     cargo: "Software Engineer",
  //     empresa: "ChatDesk",
  //     testimonio:
  //       "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.",
  //     foto: sarah,
  //   },
  //   {
  //     id: uuidv4(),
  //     nombre: "Emma Bostian",
  //     pais: "Sweden",
  //     cargo: "Software Engineer",
  //     empresa: "Spotify",
  //     testimonio:
  //       "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.",
  //     foto: emma,
  //   },
  // ];
  const datos = useSelector((state)=> state.users)
  // console.log(datos);
  return (
    <div>
      {datos.map(({ id, nombre, pais, cargo, empresa, testimonio, imagen, Posteos }) => (
        <Testimonio
          key={id}
          nombre={nombre}
          pais={pais}
          cargo={cargo}
          empresa={empresa}
          // testimonio={testimonio}
          foto={imagen}
          testimonio={Posteos}
        />
      ))}

    </div>
  );
};

export default CardsContainer;


// https://scontent.flpb2-1.fna.fbcdn.net/v/t39.30808-6/321789204_733619968177505_4763584558377753422_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LoMYlaQbARYAX_DDLSQ&_nc_ht=scontent.flpb2-1.fna&oh=00_AfDcGdyiUMTLKCdx_MHTyh5shZgEATsrML9pRl5jFpn89g&oe=64A04B57
// https://scontent.flpb2-1.fna.fbcdn.net/v/t39.30808-6/284710934_5487487724635838_5110473773026705774_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_ohc=JxpuTCdywd4AX-eqOUL&_nc_ht=scontent.flpb2-1.fna&oh=00_AfCXevhIgs13_ZCm7Rs-0s0ewluiUrLelMgAMSVh3zHcoQ&oe=649F7FAE
// https://scontent.flpb2-1.fna.fbcdn.net/v/t1.6435-9/121609329_3533145043414051_504594137356153556_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_ohc=pIYvoz51qd4AX_Na8aC&_nc_ht=scontent.flpb2-1.fna&oh=00_AfDHTEtIC9Qs6BWVNIfafA88cBrKBbMpRh8pQKxZbCDZSA&oe=64C2F62F

